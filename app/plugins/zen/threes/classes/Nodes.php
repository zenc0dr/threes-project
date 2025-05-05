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

    public function getNodesSchema(string $nid): array
    {
        $node = Node::find($nid);
        if (!$node) {
            return [];
        }

        # Получаем основную структуру узла
        $data = $node->getSchemaNode();
        if (!$data) {
            return [];
        }

        # Если schema выключена — возвращаем только потомков (если show_children разрешено)
        if (!($node->props['schema'] ?? false)) {
            if (($node->props['show_children'] ?? true) === false) {
                return [];
            }

            $child_schemas = [];
            foreach ($node->resolveChildren() as $child) {
                $subschema = $this->getNodesSchema($child->nid);
                if (!empty($subschema)) {
                    $child_schemas[] = $subschema;
                }
            }

            return count($child_schemas) > 0 ? ['children' => $child_schemas] : [];
        }

        # Если schema включена — добавляем детей только если разрешено
        if (($node->props['show_children'] ?? true) !== false) {
            $child_schemas = [];
            foreach ($node->resolveChildren() as $child) {
                $subschema = $this->getNodesSchema($child->nid);
                if (!empty($subschema)) {
                    $child_schemas[] = $subschema;
                }
            }

            if ($child_schemas) {
                $data['children'] = $child_schemas;
            }
        }

        return $data;
    }

    public function setNodeName(string $nid, string $name = null): void
    {
        if (!$name) {
            return;
        }
        $node = Node::find($nid);
        $node->name = $name;
        $node->save();
    }

    public function getNodeSettings(string $nid): array
    {
        $node = Node::find($nid);
        $props = $node->props;

        return [
            'self_content' => $props['self_content'] ?? false,
            'show_children' => $props['show_children'] ?? false,
        ];
    }

    public function setNodeSettings(string $nid, array $settings): void
    {

        $node = Node::find($nid);
        $props = $node->props;

        //dd($props, $settings);

        if (isset($settings['self_content'])) {
            $props['self_content'] = $settings['self_content'];
        }
        if (isset($settings['show_children'])) {
            $props['show_children'] = $settings['show_children'];
        }
        $node->props = $props;
        $node->save();
    }
}
