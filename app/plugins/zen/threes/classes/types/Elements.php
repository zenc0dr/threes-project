<?php

namespace Zen\Threes\Classes\Types;

class Elements
{
    public function template(?array $data = []): array
    {

        if ($data) {
            $type = $data['type'];
            $data = [
                'content' => "Заголовок $type",
                'settings' => [
                    'type' => $type
                ]
            ];
        }

        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/elements.svg'),
            'name' => "Элементы",
            'description' => '',
            'type' => 'Threes.Elements',
            'data' => $data,
            'props' => [
                'self_content' => true,
                'show_children' => false,
                'tree' => true,
                'tree_children' => false,
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
        return 'Threes.Elements';
    }

    public function getData($data)
    {
        if (!$data) {
            $data = [
                'content' => 'Заголовок h1',
                'settings' => [
                    'type' => 'h1'
                ]
            ];
        }
        return $data;
    }

    public function setData($data)
    {
        return $data;
    }
}
