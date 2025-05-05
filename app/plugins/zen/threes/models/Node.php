<?php

namespace Zen\Threes\Models;

use MongoDB\Client;
use MongoDB\Collection as MongoCollection;
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
     * Массив корневых нод
     * @return array
     */
    public static function getRootNodes(): array
    {
        $all_nodes_cursor = Node::collection()->find();
        $all_nodes = iterator_to_array($all_nodes_cursor);

        $all_nids = [];
        $child_nids = [];

        foreach ($all_nodes as $doc) {
            $nid = (string) $doc['_id'];
            $all_nids[] = $nid;

            if (isset($doc['children']) && is_array($doc['children'])) {
                foreach ($doc['children'] as $child) {
                    if (isset($child['$id'])) {
                        $child_nids[] = (string) $child['$id'];
                    }
                }
            }
        }

        $root_nids = array_diff($all_nids, $child_nids);
        return array_values(array_filter(array_map(fn($nid) => Node::find($nid), $root_nids)));
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
            'description' => $this->description,
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
            'description' => $this->description,
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

    public function getNid(): ?string
    {
        return $this->attributes['_id'] ?? null;
    }

    public function toArray(): array
    {
        return $this->attributes;
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
