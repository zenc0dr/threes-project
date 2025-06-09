<?php

namespace Zen\Threes\Nodes\NodeText;

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
            'type' => 'NodeText',
            'data' => 'Привет мир!',
            'props' => [
                'self_content' => true,
                'show_children' => true,
                'tree' => true,
                'schema' => true,
                'store' => false,
                'store_data' => [
                    'group' => 'Документы',
                    'author' => 'Threes',
                    'tags' => ["text", "document"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    public function getSelfContent(): array
    {
        return $this->getSchema();
    }

    public function setSelfContent()
    {
        return $this->data;
    }

    public function getSchema(): array
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
