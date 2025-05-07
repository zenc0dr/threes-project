<?php

namespace Zen\Threes\Traits;

use MongoDB\Client;
use MongoDB\Collection as MongoCollection;
use MongoDB\Model\BSONDocument;
use MongoDB\Model\BSONArray;
use MongoDB\BSON\ObjectId;
use Zen\Threes\Models\Node;

trait NodeMethodsTrait
{
    // --- Mongo connection ---
    public static function client(): Client
    {
        $config = config('database.connections.mongodb');

        $host = $config['host'] ?? '127.0.0.1';
        $port = $config['port'] ?? 27017;
        $username = $config['username'] ?? null;
        $password = $config['password'] ?? null;
        $auth_source = $config['options']['authSource'] ?? 'admin';

        $auth = $username && $password
            ? "$username:$password@"
            : '';

        $uri = "mongodb://$auth$host:$port/$auth_source";

        return new Client($uri);
    }

    public static function collection(): MongoCollection
    {
        $database = static::$database ?? config('database.connections.mongodb.database', 'threes');

        return self::client()
            ->selectDatabase($database)
            ->selectCollection(static::$collection);
    }

    public static function truncate(): void
    {
        self::collection()->drop();
    }

    public static function generateNidFromSettings(): string
    {
        return ths()->createShortId();
    }

    // --- Основные операции ---

    public static function find(string $nid): ?self
    {
        $doc = self::collection()->findOne(['_id' => $nid]);

        if (!$doc && preg_match('/^[a-f\d]{24}$/i', $nid)) {
            $doc = self::collection()->findOne(['_id' => new ObjectId($nid)]);
        }

        return $doc ? new self($doc->getArrayCopy()) : null;
    }

    public function save(): void
    {
        $this->beforeSave();

        if (empty($this->attributes['_id'])) {
            $this->attributes['_id'] = self::generateNidFromSettings();
        }

        if ($this->exists()) {
            self::collection()->replaceOne(['_id' => $this->attributes['_id']], $this->attributes);
        } else {
            $result = self::collection()->insertOne($this->attributes);
            $this->attributes['_id'] = (string) $result->getInsertedId();
        }

        $this->afterSave();
    }

    public function delete(): void
    {
        if ($this->exists()) {
            self::collection()->deleteOne(['_id' => $this->attributes['_id']]);
        }
    }

    public function exists(): bool
    {
        if (empty($this->attributes['_id'])) {
            return false;
        }

        return self::collection()
                ->countDocuments(['_id' => $this->attributes['_id']], ['limit' => 1]) > 0;
    }

    // --- Работа с деревьями ---

    public static function getRootNodes(): array
    {
        $all_nodes_cursor = self::collection()->find();

        $all_nodes = array_map(function ($doc) {
            return $doc instanceof BSONDocument || $doc instanceof BSONArray
                ? $doc->getArrayCopy()
                : $doc;
        }, iterator_to_array($all_nodes_cursor));

        $all_nids = [];
        $child_nids = [];

        foreach ($all_nodes as $doc) {
            $nid = (string) ($doc['_id'] ?? null);
            if ($nid) {
                $all_nids[] = $nid;
            }

            $children = $doc['children'] ?? [];
            if ($children instanceof BSONArray || $children instanceof BSONDocument) {
                $children = $children->getArrayCopy();
            }

            foreach ($children as $child) {
                if (isset($child['$id'])) {
                    $child_nids[] = (string) $child['$id'];
                } elseif (isset($child['_id'])) {
                    $child_nids[] = (string) $child['_id'];
                }
            }
        }

        $root_nids = array_diff($all_nids, $child_nids);

        return array_values(array_filter(array_map(fn($nid) => self::find($nid), $root_nids)));
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
            '$ref' => static::$collection,
            '$id' => $child->nid,
        ];

        $children = $this->attributes['children'] ?? [];

        foreach ($children as $existing) {
            if (($existing['$id'] ?? null) === $child->nid) {
                return;
            }
        }

        $children[] = $ref;
        $this->attributes['children'] = $children;
        $this->save();
    }

    /**
     * Получить потомков (Нужно явно указывать получаемые поля)
     * @param array $fields
     * @return array
     */
    public function resolveChildren(array $fields = []): array
    {
        $default_fields = ['_id', 'icon', 'name', 'description', 'props'];
        $fields = array_merge($default_fields, $fields);
        $children = $this->attributes['children'] ?? [];

        if ($children instanceof BSONArray || $children instanceof BSONDocument) {
            $children = $children->getArrayCopy();
        }

        $resolved = [];

        foreach ($children as $item) {
            if (isset($item['$ref'], $item['$id'])) {
                $doc = self::collection()->findOne(
                    ['_id' => $item['$id']],
                    ['projection' => array_fill_keys($fields, 1)]
                );

                if ($doc) {
                    $resolved[] = new self($doc->getArrayCopy());
                }
            } elseif (isset($item['_id'])) {
                $resolved[] = new self($item);
            }
        }

        return array_filter($resolved);
    }

    // --- BSON нормализация ---
    protected function normalizeValue($value)
    {
        if ($value instanceof BSONDocument || $value instanceof BSONArray) {
            $value = $value->getArrayCopy();
        }
        if (is_array($value)) {
            foreach ($value as $k => $v) {
                $value[$k] = $this->normalizeValue($v);
            }
        }
        return $value;
    }
}
