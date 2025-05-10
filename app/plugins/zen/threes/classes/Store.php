<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

use Zen\Threes\Models\Node;

class Store
{
    use SingletonTrait;

    public function getStoreNodes(): array
    {
        $store = [];

        $nodes_path = base_path('plugins/zen/threes/classes/nodes');
        $node_files = ths()->filesList($nodes_path);

        foreach ($node_files as $file) {
            if ($file['extension'] !== 'php') {
                continue;
            }
            $class = 'Zen.Threes.Classes.Nodes.' . pathinfo($file['name'], PATHINFO_FILENAME);
            try {
                $node = ths()->nodes()->model();
                $node->class = $class;
                $template = $node->exe('template');
                $store[] = [
                    'nid' => null,
                    'name' => $template['name'] ?? 'Без названия',
                    'icon' => ths()->checkIcon($template['icon']),
                    'description' => $template['description'] ?? '',
                    'class' => $class,
                    'template' => true,
                    'group' => $template['props']['store_data']['group'] ?? 'Шаблоны'
                ];
            } catch (\Throwable) {
                continue;
            }
        }

        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $node_dirs = ths()->dirList($nodes_storage_path);

        foreach ($node_dirs as $nid) {
            $node = Node::find($nid, ['name', 'icon', 'description', 'props', 'class']);

            if (!$node || !($node->props['store'] ?? false)) {
                continue;
            }

            $store[] = [
                'nid' => $node->nid,
                'name' => $node->name,
                'icon' => $node->icon,
                'description' => $node->description,
                'class' => $node->class,
                'template' => false,
                'group' => $node->props['store_data']['group'] ?? 'Сохранённые'
            ];
        }

        return $store;
    }
}
