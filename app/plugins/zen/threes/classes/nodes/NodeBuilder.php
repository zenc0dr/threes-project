<?php

namespace Zen\Threes\Classes\Nodes;

use Zen\Threes\Models\Node;

class NodeBuilder
{
    private Node $node;
    private mixed $data;

    public function __construct($data)
    {
        $this->node = $data['node'];
        $this->data = $data['data'];
    }

    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/code.svg'),
            'name' => "Новый интерфейс",
            'class' => 'Zen.Threes.Classes.Nodes.NodeBuilder',
            'data' => null,
            'props' => [
                'self_content' => true,
                'show_children' => false,
                'tree' => true,
                'schema' => true,
                'store' => false,
                'store_data' => [
                    'group' => 'Фронтенд',
                    'author' => 'Threes',
                    'tags' => ["html", "frontend"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    public function getSelfContent(): array
    {
        return $this->getSchema();
    }

    public function setSelfContent(): mixed
    {
        return $this->data;
    }

    public function getSchema(): array
    {
        return [
            'component' => 'NodeBuilder',
            'data' => $this->data,
        ];
    }
}
