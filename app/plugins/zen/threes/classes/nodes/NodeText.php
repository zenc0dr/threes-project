<?php

namespace Zen\Threes\Classes\Nodes;

use Zen\Threes\Models\Node;

class NodeText
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
            'icon' => base_path('plugins/zen/threes/src/images/icons/document.svg'),
            'name' => "Новый документ",
            'class' => 'Zen.Threes.Classes.Nodes.NodeText',
            'data' => 'Привет мир!',
            'props' => [
                'tree' => true,
                'schema' => true,
                'store' => true,
                'store_data' => [
                    'group' => 'Документы',
                    'author' => 'Threes',
                    'tags' => ["text", "document"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    public function getSelfContent()
    {
        return [
            'component' => 'NodeText',
            'data' => $this->data,
        ];
    }

    public function setSelfContent()
    {
        return $this->data;
    }

    public function getSchema()
    {
        return [
            'component' => 'NodeText',
            'data' => $this->data,
        ];
    }

    public function setSchema()
    {
        return $this->data;
    }
}
