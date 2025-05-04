<?php

namespace Zen\Threes\Models;

use MongoDB\Client;
use MongoDB\Collection as MongoCollection;

/**
 * @property string $nid
 * @property string $name
 * @property string $description
 * @property string $handler
 * @property string | array $data
 * @property array $props
 */

class Node
{
    // 📦 Настройки подключения к базе
    public static string $database   = 'threes';
    public static string $collection = 'nodes';

    // 🧬 Внутреннее хранилище данных
    protected array $attributes = [];

    // 🛠 Конструктор инициализирует ноду из массива
    public function __construct(array $data = [])
    {
        $this->attributes = $data;
    }

    protected function getNidAttribute(): ?string
    {
        // читаем внутренний _id
        return $this->attributes['_id'] ?? null;
    }

    // 🔌 Подключение к MongoDB
    public static function client(): Client
    {
        return new Client(
            env('MONGO_URL', 'mongodb://root:secret@threes-mongo:27017/admin')
        );
    }

    // Сбросить данные таблицы
    public static function truncate(): void
    {
        self::collection()->drop();
    }

    // 🔗 Получение коллекции
    public static function collection(): MongoCollection
    {
        return self::client()
            ->selectDatabase(self::$database)
            ->selectCollection(self::$collection);
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

    // 🪄 Генерация читаемого nid вида zen.threes.ab3d8d2k
    public static function generateNidFromSettings(): string
    {
        return ths()->createShortId();
    }

    // 🔎 Поиск по nid (который = _id)
    public static function find(string $nid): ?self
    {
        $doc = self::collection()->findOne(['_id' => $nid]);
        return $doc ? new self($doc->getArrayCopy()) : null;
    }

    // 💾 Сохранение (вставка или обновление)
    public function save(): void
    {
        $this->beforeSave();

        // Если ещё нет _id — создаём его
        if (empty($this->attributes['_id'])) {
            $this->attributes['_id'] = self::generateNidFromSettings();
        }

        // Удалим поле 'nid', если случайно попало — теперь используем только _id
        unset($this->attributes['nid']);

        // Проверяем реально ли есть документ в базе
        if ($this->exists()) {
            // обновление
            self::collection()->replaceOne(
                ['_id' => $this->attributes['_id']],
                $this->attributes
            );
        } else {
            // вставка
            $result = self::collection()->insertOne($this->attributes);
            // на случай, если драйвер вернул ObjectId
            $this->attributes['_id'] = (string) $result->getInsertedId();
        }

        $this->afterSave();
    }

    // 🗑 Удаление
    public function delete(): void
    {
        if ($this->exists()) {
            self::collection()->deleteOne([
                '_id' => $this->attributes['_id']
            ]);
        }
    }

    // ✅ Проверка существования документа в БД
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

    // 🔗 Добавление дочернего узла (в виде embedded или ref)
    public function addChild($node_or_ref): void
    {
        $children = $this->attributes['children'] ?? [];
        $children[] = $node_or_ref;
        $this->attributes['children'] = $children;
        $this->save();
    }

    // 🔍 Загрузка всех потомков по ссылкам ($ref / nid)
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

    // 🪪 Получить текущий идентификатор как строку
    public function getNid(): ?string
    {
        return $this->attributes['_id'] ?? null;
    }

    // Преобразование в массив (например, для API/экспорта)
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


    // Умные геттеры и сеттеры
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

    // ✨ События (можно переопределить при наследовании)
    protected function beforeSave(): void
    {
        $this->setTimestamps();
    }
    protected function afterSave(): void {}
}
