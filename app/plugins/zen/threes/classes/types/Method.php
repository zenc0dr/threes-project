<?php

namespace Zen\Threes\Classes\Types;

class Method
{
    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/api.svg'),
            'name' => "Блок метод",
            'type' => 'Threes.Method',
            'data' => '',
            'props' => [
                'self_content' => true,
                'show_children' => true,
                'tree' => true,
                'tree_children' => true,
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
        return 'Threes.Method';
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
