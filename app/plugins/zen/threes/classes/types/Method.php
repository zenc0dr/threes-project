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
            'data' => [
                'enabled' => true,
                'name' => 'Программный блок',
                'show_name' => true,
                'desc' => '',
                'show_desc' => false,
                'code' => '',
                'show_code' => false,
            ],
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

    public function getData(?array $data = null)
    {
        return $data;
    }

    public function setData($data)
    {
        return $data;
    }
}
