<?php

namespace Zen\Threes\Traits;

use MongoDB\Client;
use MongoDB\Collection as MongoCollection;

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
}
