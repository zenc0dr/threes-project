<?php

namespace Zen\Threes\Classes\Nodes;

class Document
{
    public function textTemplate(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/cog.svg'),
            'name' => "Новый документ",
            'handler' => 'Zen.Threes.Classes.Nodes.Document.text',
            'data' => 'Привет мир!',
            'props' => [
                'tree' => true,
                'schema' => true,
                'store' => [
                    'group' => 'Документы',
                    'author' => 'Threes',
                    'tags' => ["text", "documents"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    public function text($data): array
    {
        return [
            'handler' => 'NodeText',
            'data' => $data,
        ];
    }
}
