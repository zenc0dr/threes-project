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
     * @return string
     */
    public function fabric(): string
    {
        $node = $this->model();
        $node->name = "Новый документ";
        $node->handler = 'Zen.Threes.Classes.Document.txt';
        $node->data = "Привет мир!";
        $node->props = [
            'tree' => true,
            'schema' => true
        ];
        $node->save();
        return $node->nid;
    }
}
