<?php

namespace Zen\Threes\Classes\Types;

class Document
{
    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/color_document.svg'),
            'name' => "Документ",
            'description' => '',
            'type' => 'Threes.Document',
            'data' => null,
            'props' => [
                'self_content' => true,
                'show_children' => true,
                'tree' => true,
                'tree_children' => false,
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
        return 'Threes.Document';
    }

    public function getData($data)
    {
        if (!is_array($data)) {
            $data = [];
        }
        return $data;
    }

    public function setData($data)
    {
        return $data;
    }
}
