<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Node;
use Illuminate\Support\Facades\File;

class Store
{
    use SingletonTrait;

    /**
     * @return array
     * @throws \ReflectionException
     */
    public function getStoreNodes(): array
    {
        $store = [];
        $nodes_templates_path = ths()->env('TYPES_STORAGE');
        $template_files = ths()->filesList($nodes_templates_path, true);
        foreach ($template_files as $template_file) {
            $type = str_replace('.json', '', $template_file['name']);
            $node = ths()->nodes()->node();
            $node->type = $type;
            $template = $node->exe('template');
            $store[] = [
                'nid' => null,
                'name' => $template['name'] ?? 'Без названия',
                'icon' => ths()->checkIcon($template['icon']),
                'description' => $template['description'] ?? '',
                'type' => $type,
                'template' => true,
                'group' => $template['props']['store_data']['group'] ?? 'Шаблоны'
            ];

        }

        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $node_dirs = ths()->dirList($nodes_storage_path);
        foreach ($node_dirs as $nid) {
            $node = Node::find($nid, ['name', 'icon', 'description', 'props', 'type']);
            if (!$node || !($node->props['store'] ?? false)) {
                continue;
            }

            $store[] = [
                'nid' => $node->nid,
                'name' => $node->name,
                'icon' => $node->icon,
                'description' => $node->description,
                'type' => $node->type,
                'template' => false,
                'group' => $node->props['store_data']['group'] ?? 'Сохранённые'
            ];
        }

        return $store;
    }

    /**
     * Копирует ноды по умолчанию в папку с типами
     * @return void
     */
    public function createDefaultNodeTypes(): void
    {
        $default_types = base_path('plugins/zen/threes/resources/default_types');
        $types_storage_path = ths()->checkDir(
            ths()->env('TYPES_STORAGE') . '/'
        );
        File::copyDirectory($default_types, $types_storage_path);
    }
}
