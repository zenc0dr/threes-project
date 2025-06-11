<?php

namespace Zen\Threes\Classes\Types;

class NodeCode
{
    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/codebase.svg'),
            'name' => "Генератор кода",
            'description' => 'Генерирует код на основе инструкций',
            'type' => 'Threes.NodeCode',
            'data' => '#',
            'props' => [
                'self_content' => true,
                'show_children' => true,
                'tree' => true,
                'schema' => true,
                'store' => false,
                'store_data' => [
                    'group' => 'Документы',
                    'author' => 'Threes',
                    'tags' => ["code"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    public function ui(): string
    {
        return 'Threes.NodeCode';
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
