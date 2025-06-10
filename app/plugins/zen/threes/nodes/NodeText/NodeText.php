<?php

namespace Zen\Threes\Nodes\NodeText;

use Zen\Threes\Models\Node;

class NodeText
{
    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/document.svg'),
            'name' => "Новый документ",
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

    public function ui($node, $scope)
    {
        return 'plugins/zen/threes/nodes/NodeText/NodeText';
    }

    public function getData($node, $scope)
    {
        return $node->data;
    }

    public function setData()
    {

    }



    /*
    public function getSelfContent($node): array
    {
        return $this->getSchema($node);
    }

    public function setSelfContent($node)
    {
        return $node->data;
    }

    public function getSchema($node): array
    {
        return [
            'component' => 'NodeText',
            'data' => $node->data,
        ];
    }

    public function setSchema($node)
    {
        return $node->data;
    }
    */
}
