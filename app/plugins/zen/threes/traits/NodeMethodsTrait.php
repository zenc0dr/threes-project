<?php

namespace Zen\Threes\Traits;

use MongoDB\Client;
use MongoDB\Collection as MongoCollection;
use Zen\Threes\Models\Node;

trait NodeMethodsTrait
{
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

    public static function generateNidFromSettings(): string
    {
        return ths()->createShortId();
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

    public function addChild(Node|string $child): void
    {
        if (is_string($child)) {
            $child = self::find($child);
            if (!$child) {
                throw new \InvalidArgumentException("Node with nid '{$child}' not found.");
            }
        }

        $ref = [
            '$ref' => self::$collection,
            '$id' => $child->nid,
        ];

        $children = $this->attributes['children'] ?? [];

        // Предотвращаем дублирование
        foreach ($children as $existing) {
            if (($existing['$id'] ?? null) === $child->nid) {
                return;
            }
        }

        $children[] = $ref;
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

    public function toArray(): array
    {
        return $this->attributes;
    }
}
