<?php

namespace Zen\Threes\Classes\Nodes;

class Document
{
    # Возвращает шаблон
    public function textTemplate(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/doc.svg'),
            'name' => "Новый документ",
            'handler' => 'Zen.Threes.Classes.Nodes.Document.text',
            'data' => 'Привет мир!',
            'props' => [
                'tree' => true,
                'schema' => true,
                'store' => [
                    'group' => 'Документы',
                    'author' => 'Threes',
                    'tags' => ["text", "document"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    public function builderTemplate()
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/cog.svg'),
            'name' => "Новая схема",
            'handler' => 'Zen.Threes.Classes.Nodes.Document.builder',
            'data' => [],
            'props' => [
                'tree' => true,
                'schema' => true,
                'store' => [
                    'group' => 'Схемы',
                    'author' => 'Threes',
                    'tags' => ["html", "frontend"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    # Обрабатывает данные из БД выводя их компонент NodeText в Ui.Schema
    public function text($data): array
    {
        return [
            'handler' => 'NodeText',
            'data' => $data,
        ];
    }

    public function builder($data): array
    {
        return [
            'handler' => 'NodeBuilder',
            'data' => $data,
        ];
    }

    # Обновляет данные в массиве data у нода
    public function updateData(array $data): array
    {
        return $data;
    }
}
