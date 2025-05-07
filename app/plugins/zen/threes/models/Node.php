<?php

namespace Zen\Threes\Models;

use Zen\Threes\Traits\NodeMethodsTrait;

/**
 * @property string $nid
 * @property string $icon
 * @property string $name
 * @property string $description
 * @property string $handler
 * @property string | array $data
 * @property array $props
 */
class Node
{
    use NodeMethodsTrait;

    public static string $database;
    public static string $collection = 'nodes';

    protected array $attributes = [];

    public function __construct(array $data = [])
    {
        static::$database = config('database.connections.mongodb.database');
        $this->attributes = $this->normalizeValue($data);
    }

    // Геттеры и Сеттеры
    public function __get($key)
    {
        $method = 'get' . str_replace(' ', '', ucwords(str_replace(['-', '_'], ' ', $key))) . 'Attribute';
        if (method_exists($this, $method)) {
            return $this->$method();
        }

        return $this->normalizeValue($this->attributes[$key] ?? null);
    }

    public function __set($key, $value): void
    {
        $method = 'set' . str_replace(' ', '', ucwords(str_replace(['-', '_'], ' ', $key))) . 'Attribute';
        if (method_exists($this, $method)) {
            $this->$method($value);
        } else {
            $this->attributes[$key] = $value;
        }
    }

    public function setDataAttribute(array|string|null $data = null): void
    {
        if ($data === null) {
            $this->attributes['data'] = null;
        } elseif (is_array($data)) {
            $this->attributes['data'] = ths()->toJson($data, false);
        } elseif (is_string($data)) {
            $this->attributes['data'] = $data;
        }
    }

    public function getDataAttribute(): array|string|null
    {
        $data = $this->attributes['data'] ?? null;

        if (is_array($data)) {
            return $data;
        }

        if (is_string($data)) {
            $trimmed = trim($data);
            if (($trimmed[0] === '{' && str_ends_with($trimmed, '}')) ||
                ($trimmed[0] === '[' && str_ends_with($trimmed, ']'))) {
                $decoded = json_decode($data, true);
                if (json_last_error() === JSON_ERROR_NONE) {
                    return $decoded;
                }
            }

            return $data;
        }

        return null;
    }

    public function getNidAttribute(): ?string
    {
        return $this->attributes['_id'] ?? null;
    }

    public function getNid(): ?string
    {
        return $this->attributes['_id'] ?? null;
    }

    public function setIconAttribute(string $svg): void
    {
        $this->attributes['icon'] = ths()->setIcon($svg);
    }

    public function getIconAttribute(): string
    {
        return ths()->getIcon($this->attributes['icon']);
    }

    private function setTimestamps(): void
    {
        $now = date('c');
        if (!$this->exists()) {
            $this->attributes['created_at'] = $now;
        }
        $this->attributes['updated_at'] = $now;
    }

    protected function beforeSave(): void
    {
        $this->setTimestamps();
    }

    protected function afterSave(): void {}

    public function toArray(): array
    {
        return $this->attributes;
    }

    // ----- Форматы для UI -----

    public function getTreeNode(): ?array
    {
        if (!($this->props['tree'] ?? true)) {
            return null;
        }

        return [
            'nid' => $this->nid,
            'icon' => $this->icon,
            'name' => $this->name,
            'schema' => $this->props['schema'] ?? false,
        ];
    }

    public function getSchemaNode(): ?array
    {
        if (!($this->props['schema'] ?? false)) {
            return null;
        }

        $component_data = ths()->exe($this->handler, null, $this->data);

        return [
            'nid' => $this->nid,
            'icon' => $this->icon,
            'name' => $this->name,
            'description' => $this->description,
            'handler' => $component_data['handler'],
            'data' => $component_data['data'],
            'props' => $this->props,
        ];
    }

    public function getStoreNode(): ?array
    {
        if (!isset($this->props['store'])) {
            return null;
        }

        return [
            'nid' => $this->nid,
            'icon' => $this->icon,
            'name' => $this->name,
            'description' => $this->description,
        ];
    }
}
