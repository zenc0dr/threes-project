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

    public function getNid(): ?string
    {
        return $this->attributes['_id'] ?? null;
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
