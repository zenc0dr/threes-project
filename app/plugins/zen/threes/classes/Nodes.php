<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Node;

class Nodes
{
    use SingletonTrait;

    /**
     * Доступ к модели
     * @param string|null $nid
     * @return Node|null
     */
    public function model(string $nid = null): ?Node
    {
        if ($nid) {
            return Node::find($nid);
        }
        return new Node();
    }

    /**
     * Создание простого текстового нода
     * @return Node
     */
    public function fabric(): Node
    {
        $node = $this->model();
        $node->icon = base_path('plugins/zen/threes/src/images/icons/cog.svg');
        $node->name = "Новый документ";
        $node->handler = 'Zen.Threes.Classes.Nodes.Document.Text';
        $node->data = "Привет мир!";
        $node->props = [
            'tree' => true,
            'schema' => true,
            'store' => [
                'group' => 'Документы',
                'author' => ths()->getSetting('author_token') ?? 'Nobody',
                'tags' => ["text", "documents"],
                'created_at' => now()->toDateTimeString(),
            ],
        ];
        $node->save();
        return $node;
    }
}
