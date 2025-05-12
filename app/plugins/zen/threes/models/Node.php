<?php

namespace Zen\Threes\Models;


use Exception;

/**
 * @property string $nid - Уникальный идентификатор нода
 * @property string $icon - Иконка
 * @property string $name - Имя нода
 * @property string $description - Описание нода
 * @property string $class - Класс нода
 * @property array $data - Данные нода
 * @property array $props - Настройки нода
 */
class Node
{
    protected array $attributes = [];

    protected static array $fields = [
        'icon'=> 'string',
        'name' => 'string',
        'description' => 'string',
        'class' => 'string',
        'data' => 'array',
        'props' => 'array'
    ];

    protected static array $extensions = [
        'string' => 'txt',
        'array' => 'json',
        'object' => 'object',
    ];

    public function __construct(string $nid = null)
    {
        if ($nid) {
            $this->attributes['nid'] = $nid;
        }
    }

    public function __get($key)
    {
        $method = $this->studlyCaser('get', $key);
        $data = $this->attributes[$key] ?? null;
        if (method_exists($this, $method)) {
            return $this->$method($data);
        }

        return $data;
    }

    public function __set($key, $value): void
    {
        $method = $this->studlyCaser('set', $key);
        if (method_exists($this, $method)) {
            $this->$method($value);
        } else {
            $this->attributes[$key] = $value;
        }
    }

    /**
     * Сеттер иконки
     * @param string $svg
     * @return void
     */
    public function setIconAttribute(string $svg): void
    {
        $this->attributes['icon'] = ths()->setIcon($svg);
    }

    /**
     * Геттер иконки
     * @param string $hash
     * @return string|null
     */
    public function getIconAttribute(string $hash): ?string
    {
        if (!$hash) {
            return null;
        }
        return ths()->getIcon($hash);
    }

    /**
     * Вызов метода класса нода
     * @param string $method
     * @param mixed|null $data
     * @return mixed
     * @throws \ReflectionException
     */
    public function exe(string $method, mixed $data = null): mixed
    {
        return ths()->exe("$this->class.$method", [
            'node' => $this,
            'data' => $data,
        ]);
    }

    /**
     * Получить атрибут используя dotted path
     * @param string $path
     * @param mixed|null $default
     * @return mixed
     */
    public function getAttr(string $path, mixed $default = null): mixed
    {
        $segments = explode('.', $path);
        $value = $this->attributes;

        foreach ($segments as $segment) {
            if (is_array($value) && array_key_exists($segment, $value)) {
                $value = $value[$segment];
            } else {
                return $default;
            }
        }
        return $value;
    }

    /**
     * Установить атрибут используя dotted path
     * @param string $path
     * @param mixed $value
     * @return void
     */
    public function setAttr(string $path, mixed $value): void
    {
        $segments = explode('.', $path);
        $ref = &$this->attributes;

        foreach ($segments as $segment) {
            if (!is_array($ref)) {
                $ref = [];
            }
            if (!array_key_exists($segment, $ref)) {
                $ref[$segment] = [];
            }
            $ref = &$ref[$segment];
        }

        $ref = $value;
    }

    /**
     * Получить экземпляр нода
     * @param string $nid
     * @param array|null $fields - Если указано, будут загружаться только эти поля
     * @return Node
     */
    public static function find(string $nid, ?array $fields = null): ?Node
    {
        $node = new self($nid);
        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $node_path = "$nodes_storage_path/$nid";
        if (file_exists($node_path)) {
            $fields_to_load = $fields ?? array_keys(self::$fields);
            foreach ($fields_to_load as $field_name) {
                if (isset(self::$fields[$field_name])) {
                    $node->loadField($field_name);
                }
            }
        } else {
            return null;
        }
        return $node;
    }

    /**
     * Метод преобразования строк вида string_name в StringName
     * @param string $direction
     * @param string $prefix
     * @param string $postfix
     * @return string
     */
    private function studlyCaser(
        string $direction,
        string $prefix,
        string $postfix = 'Attribute'
    ): string {
        return $direction
            . str_replace(' ', '', ucwords(str_replace(['-', '_'], ' ', $prefix)))
            . $postfix;
    }

    /**
     * Сохранить данные экземпляра
     * @return void
     */
    public function save(): void
    {
        $this->beforeSave();

        if (empty($this->attributes['nid'])) {
            $this->attributes['nid'] = ths()->createShortId();
        }

        foreach ($this->attributes as $key => $value) {
            if ($key === 'nid') {
                continue;
            }
            $this->saveField($key, $value);
        }

        $this->afterSave();
    }

    /**
     * Сохранение значения указанного поля
     * @param string $field_name Название поля, значение которого необходимо сохранить
     * @param string|object|array|int|bool|null $value Значение для сохранения. В зависимости от формата поля может быть преобразовано
     * @return void
     */
    private function saveField(string $field_name, string | object | array | int | bool | null $value): void
    {
        $field_format = self::$fields[$field_name];
        $field_extension = self::$extensions[$field_format];
        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $field_path = ths()->checkDir(
            "$nodes_storage_path/$this->nid/$field_name.$field_extension"
        );

        if ($value === null) {
            unlink($field_path);
            return;
        }

        if ($field_format === 'object') {
            $value = serialize($value);
        }

        if ($field_format === 'array') {
            $value = ths()->toJson($value);
        }

        $value = (string) $value;
        $value = trim($value);

        file_put_contents(
            $field_path,
            $value,
            LOCK_EX
        );
    }

    /**
     * Загружает поле нода из хранилища и декодирует его в соответствующем формате.
     * @param string $field_name - Имя поля, которое необходимо загрузить.
     * @return void
     */
    private function loadField(string $field_name): void
    {
        $field_format = self::$fields[$field_name];
        $field_extension = self::$extensions[$field_format];
        $nodes_storage_path = ths()->env('NODES_STORAGE');

        $field_path = "$nodes_storage_path/$this->nid/$field_name.$field_extension";
        if (!file_exists($field_path)) {
            return;
        }

        $field_data = file_get_contents($field_path);
        if ($field_format === 'object') {
            $this->attributes[$field_name] = unserialize($field_data);
        }

        if ($field_format === 'array') {
            $this->attributes[$field_name] = ths()->fromJson($field_data);
        }

        if ($field_format === 'bool') {
            $this->attributes[$field_name] = (bool) $field_data;
        }

        if ($field_format === 'int') {
            $this->attributes[$field_name] = (int) $field_data;
        }

        if ($field_format === 'string') {
            $this->attributes[$field_name] = $field_data;
        }
    }

    /**
     * Удаляет нод, если он существует
     * @return void
     */
    public function delete(): void
    {
        if (empty($this->attributes['nid'])) {
            return;
        }

        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $path = "$nodes_storage_path/{$this->attributes['nid']}";

        if (!is_dir($path)) {
            return;
        }

        $escaped_path = escapeshellarg($path);
        shell_exec("rm -rf $escaped_path");
    }

    /**
     * Удаляет все данные из хранилища нодов.
     * Позволяет безопасно очистить директорию, содержащую данные нодов.
     * Если директория хранилища отсутствует или не является директорией, метод завершает выполнение.
     */
    public static function truncate(): void
    {
        # Удалить все ноды
        $nodes_storage_path = ths()->env('NODES_STORAGE');
        if (!file_exists($nodes_storage_path) || !is_dir($nodes_storage_path)) {
            return;
        }
        $escaped_path = escapeshellarg($nodes_storage_path);
        shell_exec("rm -rf $escaped_path/*");

        # Удалить все схемы
        $schemes_storage_path = ths()->env('SCHEMES_STORAGE');
        if (!file_exists($schemes_storage_path) || !is_dir($schemes_storage_path)) {
            return;
        }
        $escaped_path = escapeshellarg($schemes_storage_path);
        shell_exec("rm -rf $escaped_path/*");
    }

    /**
     * Устанавливает значение атрибута 'data'.
     * @param array|string|null $data.
     * @return void
     */
    public function setDataAttribute(array|string|null $data = null): void
    {
        $this->attributes['data'] = [$data];
    }

    /**
     * Получить значение атрибута data.
     * @return array|string|null
     */
    public function getDataAttribute(): array|string|null
    {
        return $this->attributes['data'][0] ?? null;
    }

    /**
     * Создает иконку из шаблона, если она не указана в атрибутах.
     * Если класс отсутствует или шаблон не найден, метод завершает выполнение.
     * @return void
     * @throws Exception
     */
    public function createIconFromTemplate(): void
    {
        if (!$this->class) {
            return;
        }

        if (isset($this->attributes['icon']) && !empty($this->attributes['icon'])) {
            return;
        }

        $template = $this->exe('template');
        if (!$template) {
            return;
        }
        $this->icon = $template['icon'];
    }

    public function getDescriptionAttribute(?string $description = null): string
    {
        if (!$description) {
            return '';
        }
        return $description;
    }


    /**
     * Выполняет действия перед сохранением.
     * Создаёт иконку на основе шаблона.
     *
     * @return void
     * @throws Exception
     */
    public function beforeSave(): void
    {
        $this->createIconFromTemplate();
    }

    public function afterSave(){}
}
