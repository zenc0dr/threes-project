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
    public function createNodeByClass(string $class = 'Zen.Threes.Classes.Nodes.NodeText'): Node
    {
        $node = $this->model();
        $node->class = $class;
        $template = $node->exe('template');

        foreach ($template as $field => $value) {
            $node->$field = $value;
        }
        $node->save();
        return $node;
    }

    public function getNodesTree(string $schema_code = 'default'): array
    {
        $schema = ths()->getSchema($schema_code)['schema_nodes'];

        $buildTree = function (array $item) use (&$buildTree): ?array {
            $node = \Zen\Threes\Models\Node::find(
                $item['nid'],
                [
                    'icon',
                    'name',
                    'description',
                    'class',
                    'props'
                ]
            );

            if (!$node) {
                return null;
            }

            $result = [
                'nid' => $node->nid,
                'icon' => $node->icon,
                'name' => $node->name,
                'description' => $node->description,
                'class' => $node->class,
                'props' => $node->props,
            ];

            if (!empty($item['nodes'])) {
                $children = [];
                foreach ($item['nodes'] as $child) {
                    $childNode = $buildTree($child);
                    if ($childNode) {
                        $children[] = $childNode;
                    }
                }
                if (!empty($children)) {
                    $result['nodes'] = $children;
                }
            }

            return $result;
        };

        return array_values(array_filter(array_map($buildTree, $schema)));
    }



    public function getNodesSchema(string $nid): array
    {
        $node = Node::find($nid);
        if (!$node) {
            return [];
        }

        $data = $node->getSchemaNode();
        if (!$data) {
            return [];
        }

        $props = $node->props;

        // Если schema выключена — возвращаем только потомков (если явно show_children = true)
        if (!($props['schema'] ?? false)) {
            if (!isset($props['show_children']) || $props['show_children'] !== true) {
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

        // Если schema включена — добавляем детей только если явно show_children = true
        if (isset($props['show_children']) && $props['show_children'] === true) {
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

    public function setNodeIcon(string $nid, string $svg): void
    {
        $node = Node::find($nid);
        $node->icon = $svg;
        $node->save();
    }

    /**
     * Установить имя нода
     * @param string $nid
     * @param string|null $name
     * @return void
     */
    public function setNodeName(string $nid, string $name = null): void
    {
        $node = Node::find($nid);
        $node->name = $name;
        $node->save();
    }

    /**
     * Сохранить описание нода
     * @param string $nid
     * @param string|null $description
     * @return void
     */
    public function setNodeDescription(string $nid, string $description = null): void
    {
        if (!$description) {
            return;
        }
        $node = Node::find($nid);
        $node->description = $description;
        $node->save();
    }

    /**
     * Тут определяется массив настроек нода
     * @param string $nid
     * @return array
     */
    public function getNodeSettings(string $nid): array
    {
        $node = Node::find($nid);
        $props = $node->props;

        return [
            'tree' => $props['tree'] ?? false,
            'store' => $props['store'] ?? false,
            'schema' => $props['schema'] ?? false,
            'self_content' => $props['self_content'] ?? false,
            'show_children' => $props['show_children'] ?? false,
        ];
    }

    /**
     * Настройки устанавливаются
     * @param string $nid
     * @param array $settings
     * @return void
     */
    public function setNodeSettings(string $nid, array $settings): void
    {

        $node = Node::find($nid);
        $props = $node->props;

        if (isset($settings['self_content'])) {
            $props['self_content'] = $settings['self_content'];
        }
        if (isset($settings['show_children'])) {
            $props['show_children'] = $settings['show_children'];
        }
        if (isset($settings['store'])) {
            $props['store'] = $settings['store'];
        }
        if (isset($settings['tree'])) {
            $props['tree'] = $settings['tree'];
        }
        if (isset($settings['schema'])) {
            $props['schema'] = $settings['schema'];
        }
        $node->props = $props;
        $node->save();
    }

    public function updateNodeData(string $nid, array|string|null $data, $scope = 'set_self_content'): void
    {
        $node = Node::find($nid);
        $node->data = $data;
        $node->save();
    }
}
