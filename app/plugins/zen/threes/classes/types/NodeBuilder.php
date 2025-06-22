<?php

namespace Zen\Threes\Classes\Types;

class NodeBuilder
{
    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/code.svg'),
            'name' => "Новый интерфейс",
            'type' => 'Threes.NodeBuilder',
            'data' => '',
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

    public function ui(): string
    {
        return 'Threes.NodeBuilder';
    }

    public function getData($data)
    {
        return $data;
    }

    public function setData($data)
    {
        return $data;
    }
}
