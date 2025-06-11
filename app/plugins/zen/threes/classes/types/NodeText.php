<?php

namespace Zen\Threes\Classes\Types;

class NodeText
{
    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/document.svg'),
            'name' => "Новый документ",
            'type' => 'Threes.NodeText',
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

    public function ui(): string
    {
        return 'Threes.NodeText';
    }

    public function getData($data, $scope, $node)
    {
        return $data;
    }

    public function setData($data, $scope, $node)
    {
        return $data;
    }
}
