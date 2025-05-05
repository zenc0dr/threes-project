<?php

namespace Zen\Threes\Models;

use MongoDB\Client;
use MongoDB\Collection as MongoCollection;

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
    public static string $database   = 'threes';
    public static string $collection = 'nodes';

    protected array $attributes = [];

    public function __construct(array $data = [])
    {
        $this->attributes = $data;
    }

    protected function getNidAttribute(): ?string
    {
        return $this->attributes['_id'] ?? null;
    }

    public static function client(): Client
    {
        return new Client(
            env('MONGO_URL', 'mongodb://root:secret@threes-mongo:27017/admin')
        );
    }

    public static function truncate(): void
    {
        self::collection()->drop();
    }

    public static function collection(): MongoCollection
    {
        return self::client()
            ->selectDatabase(self::$database)
            ->selectCollection(self::$collection);
    }

    /**
     * Вернуть объект для Ui.Tree
     * @return array|null
     */
    public function getTreeNode(): ?array
    {
        if (!$this->props['tree'] ?? false) {
            return null;
        }
        return [
            'nid' => $this->nid,
            'icon' => $this->icon,
            'name' => $this->name,
        ];
    }

    /**
     * Вернуть объект для Ui.Schema
     * @return array|null
     * @throws \ReflectionException
     */
    public function getSchemaNode(): ?array
    {
        if (!$this->props['schema'] ?? false) {
            return null;
        }
        $component_data = ths()->exe($this->handler, null, $this->data);
        return [
            'nid' => $this->nid,
            'icon' => $this->icon,
            'name' => $this->name,
            'handler' => $component_data['handler'],
            'data' => $component_data['data'],
            'props' => $this->props,
        ];
    }

    /**
     * Вернуть объект для Ui.Store
     * @return array|null
     */
    public function getStoreNode(): ?array
    {
        if (!isset($this->props['store'])) {
            return null;
        }
        return [
            'nid' => $this->nid,
            'icon' => $this->icon,
            'name' => $this->name,
        ];
    }

    # Геттеры и сеттеры
    public function setIconAttribute(string $svg): void
    {
        $this->attributes['icon'] = ths()->setIcon($svg);
    }

    public function getIconAttribute(): string
    {
        return ths()->getIcon($this->attributes['icon']);
    }

    public static function generateNidFromSettings(): string
    {
        return ths()->createShortId();
    }

    public static function find(string $nid): ?self
    {
        $doc = self::collection()->findOne(['_id' => $nid]);
        return $doc ? new self($doc->getArrayCopy()) : null;
    }

    public function save(): void
    {
        $this->beforeSave();
        if (empty($this->attributes['_id'])) {
            $this->attributes['_id'] = self::generateNidFromSettings();
        }

        if ($this->exists()) {
            self::collection()->replaceOne(
                ['_id' => $this->attributes['_id']],
                $this->attributes
            );
        } else {
            $result = self::collection()->insertOne($this->attributes);
            $this->attributes['_id'] = (string) $result->getInsertedId();
        }
        $this->afterSave();
    }

    public function delete(): void
    {
        if ($this->exists()) {
            self::collection()->deleteOne([
                '_id' => $this->attributes['_id']
            ]);
        }
    }

    public function exists(): bool
    {
        if (empty($this->attributes['_id'])) {
            return false;
        }

        return self::collection()
                ->countDocuments(
                    ['_id' => $this->attributes['_id']],
                    ['limit' => 1]
                ) > 0;
    }

    public function addChild($node_or_ref): void
    {
        $children = $this->attributes['children'] ?? [];
        $children[] = $node_or_ref;
        $this->attributes['children'] = $children;
        $this->save();
    }

    public function resolveChildren(): array
    {
        $resolved = [];

        foreach ($this->attributes['children'] ?? [] as $item) {
            if (isset($item['$ref'], $item['$id'])) {
                $resolved[] = self::find($item['$id']);
            } elseif (isset($item['_id'])) {
                $resolved[] = new self($item);
            }
        }

        return array_filter($resolved);
    }

    public function getNid(): ?string
    {
        return $this->attributes['_id'] ?? null;
    }

    public function toArray(): array
    {
        return $this->attributes;
    }

    protected function normalizeValue($value)
    {
        if ($value instanceof \MongoDB\Model\BSONDocument || $value instanceof \MongoDB\Model\BSONArray) {
            $value = $value->getArrayCopy();
        }

        if (is_array($value)) {
            foreach ($value as $k => $v) {
                $value[$k] = $this->normalizeValue($v);
            }
        }

        return $value;
    }

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
            return;
        }

        $this->attributes[$key] = $value;
    }

    private function setTimestamps(): void
    {
        $now = date('c');
        if (!$this->exists()) {
            $this->attributes['created_at'] = $now;
        }
        $this->attributes['updated_at'] = $now;
    }

    # События
    protected function beforeSave(): void
    {
        $this->setTimestamps();
    }
    protected function afterSave(): void {}
}
