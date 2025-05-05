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

    public function getNodesTree(): array
    {
        $roots = Node::getRootNodes();
        $tree = [];
        foreach ($roots as $root) {
            $subtree = $this->getNodeTree($root->nid);
            if ($subtree !== null) {
                $tree[] = $subtree;
            }
        }
        return $tree;
    }

    public function getNodeTree(string $nid): ?array
    {
        $node = Node::find($nid);
        if (!$node) {
            return null;
        }

        $children = $node->resolveChildren();

        $child_trees = [];
        foreach ($children as $child) {
            $subtree = $this->getNodeTree($child->nid);
            if ($subtree !== null) {
                $child_trees[] = $subtree;
            }
        }

        // Если node не предназначен для дерева — пропускаем, возвращая только детей
        if (!($node->props['tree'] ?? true)) {
            return count($child_trees) > 0 ? ['children' => $child_trees] : null;
        }

        // Используем getTreeNode() как основу
        $data = $node->getTreeNode();
        if (!$data) {
            return null;
        }

        if ($child_trees) {
            $data['children'] = $child_trees;
        }

        return $data;
    }
}
