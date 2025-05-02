<?php

namespace Zen\Threes\Models;

use MongoDB\Client;
use MongoDB\BSON\ObjectId;

class Node
{
    public static string $database = 'threes';
    public static string $collection = 'nodes';

    protected array $attributes = [];

    public function __construct(array $data = [])
    {
        $this->attributes = $data;
    }

    public static function client(): Client
    {
        return new Client(env('MONGO_URL', 'mongodb://root:secret@threes-mongo:27017/admin'));
    }

    public static function collection()
    {
        return self::client()->selectDatabase(self::$database)->selectCollection(self::$collection);
    }

    public function getOid(): ?string
    {
        return isset($this->attributes['_id'])
            ? (string) $this->attributes['_id']
            : null;
    }

    public static function find(string $oid): ?self
    {
        $doc = self::collection()->findOne(['_id' => new ObjectId($oid)]);
        return $doc ? new self($doc->getArrayCopy()) : null;
    }

    public static function findByNid(string $nid): ?self
    {
        $doc = self::collection()->findOne(['nid' => $nid]);
        return $doc ? new self($doc->getArrayCopy()) : null;
    }

    public function save(): void
    {
        $this->beforeSave();
        if (isset($this->attributes['_id'])) {
            self::collection()->replaceOne(
                ['_id' => new ObjectId($this->attributes['_id'])],
                $this->attributes
            );
        } else {
            $result = self::collection()->insertOne($this->attributes);
            $this->attributes['_id'] = $result->getInsertedId();
        }
        $this->afterSave();
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
            if (isset($item['$ref']) && isset($item['$id'])) {
                $resolved[] = self::find($item['$id']);
            } elseif (isset($item['nid'])) {
                $resolved[] = new self($item); // вложенный без сохранения
            }
        }

        return $resolved;
    }

    public function __get($key)
    {
        return $this->attributes[$key] ?? null;
    }

    public function __set($key, $value): void
    {
        $this->attributes[$key] = $value;
    }

    public function toArray(): array
    {
        return $this->attributes;
    }

    public function beforeSave()
    {

    }

    public function afterSave()
    {

    }
}
