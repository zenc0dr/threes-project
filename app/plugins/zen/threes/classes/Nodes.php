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
     * Создаёт новый нод по методу шаблона
     * @param string $template_method
     * @return Node
     * @throws \ReflectionException
     */
    public function createNode(string $template_method = 'Zen.Threes.Classes.Nodes.Document.textTemplate'): Node
    {
        $template = ths()->exe($template_method);
        $node = $this->model();
        $node->icon = $template['icon'];
        $node->name = $template['name'];
        $node->handler = $template['handler'];
        $node->data = $template['data'];
        $node->props = $template['props'];
        $node->save();
        return $node;
    }
}
