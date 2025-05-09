<?php

namespace Zen\Threes\Models;


/**
 * @property string $nid - Уникальный идентификатор нода
 * @property string $icon - Иконка
 * @property string $name - Имя нода
 * @property string $description - Описание нода
 * @property string $handler - Обработчик нода
 * @property string | array $data - Данные нода
 * @property array $props - Настройки нода
 */
class Node
{
    private static string $node_storage_path;

    protected array $attributes = [];

    protected static array $fields = [
        'icon'=> 'string',
        'name' => 'string',
        'description' => 'string',
        'handler' => 'string',
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
        self::$node_storage_path = ths()->checkDir(storage_path('threes/nodes'));
    }

    public function __get($key)
    {
        $method = $this->studlyCaser('get', $key);
        if (method_exists($this, $method)) {
            return $this->$method();
        }

        return $this->attributes[$key] ?? null;
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

    public static function find(string $nid)
    {
        $node = new self($nid);
        $node_path = self::$node_storage_path . "/" . $nid;
        if (file_exists($node_path)) {
            foreach (self::$fields as $field_name => $field_format) {
                $node->loadField($field_name);
            }
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

    private function saveField(string $field_name, string | object | array | int | bool | null $value): void
    {
        $field_format = self::$fields[$field_name];
        $field_extension = self::$extensions[$field_format];
        $field_path = ths()->checkDir(
            self::$node_storage_path . "/$this->nid/$field_name.$field_extension"
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
            $value
        );
    }

    private function loadField(string $field_name): void
    {
        $field_format = self::$fields[$field_name];
        $field_extension = self::$extensions[$field_format];
        $field_path = self::$node_storage_path . "/$this->nid/$field_name.$field_extension";
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



    public function beforeSave()
    {

    }

    public function afterSave()
    {

    }
}
