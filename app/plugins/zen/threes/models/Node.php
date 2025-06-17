<?php

namespace Zen\Threes\Models;

use Zen\Threes\Classes\Types;
use Exception;

/**
 * @property string $nid - Уникальный идентификатор нода
 * @property string $icon - Иконка
 * @property string $name - Имя нода
 * @property string $description - Описание нода
 * @property string $type - Тип нода
 * @property array $data - Данные нода
 * @property array $props - Настройки нода
 * @property string $scope - Область действия нода (виртуальное поле)
 */
class Node
{
    protected array $attributes = [];

    # Базовые поля
    protected static array $fields = [
        'icon'=> 'string', // Иконка
        'name' => 'string', // Название нода
        'description' => 'string', // Описание нода
        'type' => 'string', // Тип нода
        'data' => 'array', // Данные нода
        'props' => 'array' // Свойства нода
    ];

    protected static array $extensions = [
        'string' => 'txt',
        'array' => 'json',
        'object' => 'object',
    ];

    public ?string $scope = 'self_content'; // Дополнительная метка окружения нода

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
     * @return mixed
     * @throws \ReflectionException
     */
    public function exe(string $method, string $scope = 'self_content', mixed $data = null): mixed
    {
        $type = Types::getType($this->type)['class'];
        return ths()->exe("$type.$method", null, $data, $scope, $this);
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

//    public function getPropsAttribute(?array $props = null): ?array
//    {
//        if (!$props) {
//            $props = [
//                'self_content' => true
//            ];
//        }
//
//        return $props;
//    }

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
     * @param string $method
     * @param string $postfix
     * @return string
     */
    private function studlyCaser(
        string $direction,
        string $method,
        string $postfix = 'Attribute'
    ): string {
        return $direction
            . str_replace(' ', '', ucwords(str_replace(['-', '_'], ' ', $method)))
            . $postfix;
    }

    /**
     * Сохранить данные экземпляра
     * @return void
     * @throws Exception
     */
    public function save(): void
    {
        if (empty($this->attributes['nid'])) {
            $this->attributes['nid'] = ths()->createShortId();
        }
        foreach ($this->attributes as $key => $value) {
            if ($key === 'nid') {
                continue;
            }
            $this->saveField($key, $value);
        }
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
        $paths = [
            ths()->env('NODES_STORAGE'), # Хранилище нод
            ths()->env('SCHEMES_STORAGE'), # Хранилище схем
            ths()->env('TYPES_STORAGE') # Хранилище типов
        ];
        foreach ($paths as $path) {
            ths()->shellRemoveDir($path);
        }
        ths()->store()->createDefaultNodeTypes();
    }

    /**
     * Устанавливает значение атрибута 'data'.
     * @param array|string|null $data .
     * @return void
     * @throws \ReflectionException
     */
    public function setDataAttribute(array|string|null $data = null): void
    {
        $this->attributes['data'] = [
            $this->exe('setData', $this->scope, $data)
        ];
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
     * @param array $data
     * @return $this
     * @throws Exception
     */
    public function fill(array $data): self
    {

        //dd($data);
        $this->icon = $data['icon'] ?? null;
        $this->name = $data['name'] ?? '';
        $this->type = $data['type'] ?? 'Threes.NodeText';
        $this->description = $data['description'] ?? '';
        $this->data = $data['data'] ?? null;

        if (!$this->props && !isset($data['props'])) {
            $this->props = [
                [
                    'self_content' => true,
                    'show_children' => true,
                    'tree' => true,
                    'tree_children' => true,
                    'schema' => true,
                    'store' => false,
                    'store_data' => [
                        'group' => 'Created',
                        'author' => 'Threes',
                        'tags' => ["node"],
                        'created_at' => now()->toDateTimeString(),
                    ]
                ]
            ];
        } else {
            $this->props = $data['props'];
        }

        $this->save();
        return $this;
    }

    /**
     * Создание нода по шаблону типа
     * @param string $type
     * @return $this
     * @throws Exception
     */
    public function create(string $type = 'Threes.NodeText'): self
    {
        return $this->fill(
            ths()->exe(Types::getType($type)['class'] . '.template')
        );
    }

    /**
     * Геттер для описания нода
     * @param string|null $description
     * @return string
     */
    public function getDescriptionAttribute(?string $description = null): string
    {
        if (!$description) {
            return '';
        }
        return $description;
    }

    /**
     * Клонирует текущий нод
     * @param string|null $target_nid - Если задан, клон будет вставлен после этого нода в схеме
     * @return Node
     * @throws Exception
     */
    public function copy(?string $target_nid = null): Node
    {
        $clone = new self();
        $clone->attributes['icon'] = $this->attributes['icon'];
        $clone->name = $this->name . ' (копия)';
        $clone->description = $this->description;
        $clone->type = $this->type;
        $clone->data = $this->getDataAttribute();
        $clone->props = $this->props;
        $clone->save();

        // Вставка в схему
        $schema = ths()->getSchema();
        $nodes = &$schema['schema_nodes'];

        $new_branch = ['nid' => $clone->nid];

        if ($target_nid) {
            $insert_after = function (&$nodes) use (&$insert_after, $target_nid, $new_branch) {
                foreach ($nodes as $i => &$node) {
                    if ($node['nid'] === $target_nid) {
                        array_splice($nodes, $i + 1, 0, [$new_branch]);
                        return true;
                    }
                    if (!empty($node['nodes'])) {
                        if ($insert_after($node['nodes'])) return true;
                    }
                }
                return false;
            };

            if (!$insert_after($nodes)) {
                $nodes[] = $new_branch;
            }
        } else {
            $nodes[] = $new_branch;
        }
        ths()->setSchema($nodes);
        ths()->messages()->addMessage("Создан клон нода {$this->nid} → {$clone->nid}");
        return $clone;
    }
}
