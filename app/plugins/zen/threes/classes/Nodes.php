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
     * Создаёт новый нод по классу шаблона
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

    /**
     * Получить дерево нод для меню Tree
     * @param string $schema_code
     * @param string|null $search
     * @return array
     */
    public function getNodesTree(string $schema_code = 'default', string $search = null): array
    {
        $schema = ths()->getSchema($schema_code)['schema_nodes'];
        $search = trim(mb_strtolower($search ?? ''));

        $build_tree = function (array $item) use (&$build_tree, $search): ?array {
            $node = \Zen\Threes\Models\Node::find(
                $item['nid'],
                ['icon', 'name', 'description', 'class', 'props']
            );

            if (!$node) return null;

            $children = [];
            if (!empty($item['nodes'])) {
                foreach ($item['nodes'] as $child) {
                    $child_node = $build_tree($child);
                    if ($child_node) {
                        $children[] = $child_node;
                    }
                }
            }

            // Фильтрация по name или nid
            $matches = !$search
                || str_contains(mb_strtolower($node->name), $search)
                || str_contains(mb_strtolower($node->nid), $search)
                || count($children) > 0;

            if (!$matches) {
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

            if ($children) {
                $result['nodes'] = $children;
            }

            return $result;
        };

        return array_values(array_filter(array_map($build_tree, $schema)));
    }

    /**
     * Построение дерева нод
     * @param string $nid
     * @param string $schema_code
     * @return array
     */
    public function getNodesSchema(string $nid, string $schema_code = 'default'): array
    {
        $schema_nodes = ths()->getSchema($schema_code)['schema_nodes'] ?? [];
        $target_branch = $this->findSchemaBranchByNid($schema_nodes, $nid);
        if (!$target_branch) {
            return [];
        }
        return $this->buildSchemaFromBranch($target_branch, true);
    }

    /**
     * Рекурсивно ищет нужную ветку в schema_nodes по nid
     * @param array $nodes
     * @param string $target_nid
     * @return array|null
     */
    protected function findSchemaBranchByNid(array $nodes, string $target_nid): ?array
    {
        foreach ($nodes as $node_item) {
            if ($node_item['nid'] === $target_nid) {
                return $node_item;
            }

            if (!empty($node_item['nodes'])) {
                $found = $this->findSchemaBranchByNid($node_item['nodes'], $target_nid);
                if ($found) {
                    return $found;
                }
            }
        }

        return null;
    }

    /**
     * Рекурсивно строит дерево схемы, начиная с одной ветки
     * @param array $branch
     * @param bool $is_root
     * @return array|null
     * @throws \ReflectionException
     */
    protected function buildSchemaFromBranch(array $branch, bool $is_root = false): ?array
    {
        $nid = $branch['nid'];
        $node = Node::find($nid, ['name', 'icon', 'description', 'props', 'class', 'data']);

        if (!$node) {
            return null;
        }

        $props = $node->props ?? [];

        // Контент схемы: либо selfContent, либо getSchema
        $schema_node = [
            'nid' => $node->nid,
            'icon' => $node->icon,
            'name' => $node->name,
            'description' => $node->description,
            'props' => $props,
        ];

        if ($is_root && !empty($props['self_content'])) {
            $handler_data = $node->exe('getSelfContent', $node->data);
            $schema_node['component'] = $handler_data['component'];
            $schema_node['data'] = $handler_data['data'];
        } elseif (!$is_root) {
            $handler_data = $node->exe('getSchema', $node->data);
            $schema_node['component'] = $handler_data['component'];
            $schema_node['data'] = $handler_data['data'];
        }

        // Рекурсивно достроим дочерние элементы, если разрешено
        if (!empty($props['show_children']) && !empty($branch['nodes'])) {
            $children = [];

            foreach ($branch['nodes'] as $child_branch) {
                $child_schema = $this->buildSchemaFromBranch($child_branch, false);
                if ($child_schema !== null) {
                    $children[] = $child_schema;
                }
            }

            if (!empty($children)) {
                $schema_node['nodes'] = $children;
            }
        }

        return $schema_node;
    }

    /**
     * Установить иконку для нода
     * @param string $nid
     * @param string $svg
     * @return void
     */
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

    /**
     * Обновить данные нода
     * @param string $nid
     * @param array|string|null $data
     * @param $scope
     * @return void
     */
    public function updateNodeData(
        string $nid,
        array|string|null $data,
        ?string $scope = 'self_content'
    ): void {
        $node = Node::find($nid);
        $node->scope = $scope;
        $node->data = $data;
        $node->save();
        ths()->messages()->addMessage('Данные нод обновлены');
    }

    /**
     * Добавить нод
     * @param string|null $nid
     * @param string|null $class
     * @return void
     * @throws \ReflectionException
     */
    public function addNode(string $nid = null, string $class = null): void
    {
        $schema = ths()->getSchema();
        if ($nid && !$class) {
            $node = Node::find($nid);
            if ($node) {
                $schema['schema_nodes'][] = ['nid' => $nid];
                ths()->setSchema($schema['schema_nodes']);
            }
        } elseif ($class) {
            $node = $this->createNodeByClass($class);
            if ($node) {
                $schema['schema_nodes'][] = ['nid' => $node->nid];
                ths()->setSchema($schema['schema_nodes']);
            }
        }
    }

    /**
     * Переместить нод
     * @param string $nid
     * @param string $target_nid
     * @param string $direction - before || after || outward || inside
     * @return void
     */
    public function moveNode(string $nid, string $target_nid, string $direction): void
    {
        switch ($direction) {
            case 'before':
                $this->moveNodeBefore($nid, $target_nid);
                break;
            case 'after':
                $this->moveNodeAfter($nid, $target_nid);
                break;
            case 'inside':
                $this->moveNodeInside($nid, $target_nid);
                break;
            case 'outward':
                $this->moveNodeOutward($nid, $target_nid);
                break;
        }
    }

    public function moveNodeBefore(string $nid, string $target_nid): void
    {
        $schema = ths()->getSchema();
        $schema_nodes = &$schema['schema_nodes'];
        $moving_node = null;

        $remove_node = function (&$nodes) use (&$remove_node, $nid, &$moving_node) {
            foreach ($nodes as $key => &$node) {
                if ($node['nid'] === $nid) {
                    $moving_node = $node;
                    unset($nodes[$key]);
                    $nodes = array_values($nodes);
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($remove_node($node['nodes'])) return true;
                }
            }
            return false;
        };

        $insert_before = function (&$nodes) use (&$insert_before, $target_nid, &$moving_node) {
            foreach ($nodes as $key => &$node) {
                if ($node['nid'] === $target_nid) {
                    array_splice($nodes, $key, 0, [$moving_node]);
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($insert_before($node['nodes'])) return true;
                }
            }
            return false;
        };

        $remove_node($schema_nodes);
        if ($moving_node) $insert_before($schema_nodes);
        ths()->setSchema($schema_nodes);
    }

    public function moveNodeAfter(string $nid, string $target_nid): void
    {
        $schema = ths()->getSchema();
        $schema_nodes = &$schema['schema_nodes'];
        $moving_node = null;

        $remove_node = function (&$nodes) use (&$remove_node, $nid, &$moving_node) {
            foreach ($nodes as $key => &$node) {
                if ($node['nid'] === $nid) {
                    $moving_node = $node;
                    unset($nodes[$key]);
                    $nodes = array_values($nodes);
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($remove_node($node['nodes'])) return true;
                }
            }
            return false;
        };

        $insert_after = function (&$nodes) use (&$insert_after, $target_nid, &$moving_node) {
            foreach ($nodes as $key => &$node) {
                if ($node['nid'] === $target_nid) {
                    array_splice($nodes, $key + 1, 0, [$moving_node]);
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($insert_after($node['nodes'])) return true;
                }
            }
            return false;
        };

        $remove_node($schema_nodes);
        if ($moving_node) $insert_after($schema_nodes);
        ths()->setSchema($schema_nodes);
    }

    public function moveNodeInside(string $nid, string $target_nid): void
    {
        $schema = ths()->getSchema();
        $schema_nodes = &$schema['schema_nodes'];
        $moving_node = null;

        // Защита: нельзя вложить в самого себя или потомка
        if ($nid === $target_nid || $this->isDescendant($schema_nodes, $nid, $target_nid)) {
            ths()->messages()->addMessage("Нельзя вложить узел внутрь самого себя или его потомка", "error");
            return;
        }

        // Удаление
        $remove_node = function (&$nodes) use (&$remove_node, $nid, &$moving_node): bool {
            foreach ($nodes as $key => &$node) {
                if ($node['nid'] === $nid) {
                    $moving_node = $node;
                    unset($nodes[$key]);
                    $nodes = array_values($nodes);
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($remove_node($node['nodes'])) return true;
                }
            }
            return false;
        };

        // Вставка
        $insert_inside = function (&$nodes) use (&$insert_inside, $target_nid, &$moving_node): bool {
            foreach ($nodes as &$node) {
                if ($node['nid'] === $target_nid) {
                    if (!isset($node['nodes']) || !is_array($node['nodes'])) {
                        $node['nodes'] = [];
                    }
                    $node['nodes'][] = $moving_node;
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($insert_inside($node['nodes'])) return true;
                }
            }
            return false;
        };

        $remove_node($schema_nodes);
        if ($moving_node) {
            $insert_inside($schema_nodes);
        }

        ths()->setSchema($schema_nodes);
    }


    public function moveNodeOutward(string $nid, string $target_nid): void
    {
        $schema = ths()->getSchema();
        $schema_nodes = &$schema['schema_nodes'];
        $moving_node = null;

        // Защита от циклов: нельзя переместить, если target — потомок
        if ($nid === $target_nid || $this->isDescendant($schema_nodes, $nid, $target_nid)) {
            ths()->messages()->addMessage("Нельзя поднять узел выше, если он содержит целевой узел", "error");
            return;
        }

        // Удаление
        $remove_node = function (&$nodes, &$parent = null) use (&$remove_node, $nid, &$moving_node): bool {
            foreach ($nodes as $key => &$node) {
                if ($node['nid'] === $nid) {
                    $moving_node = $node;
                    unset($nodes[$key]);
                    $nodes = array_values($nodes);
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($remove_node($node['nodes'], $node)) return true;
                }
            }
            return false;
        };

        // Поиск родителя target_nid
        $find_parent = function (&$nodes, string $child_nid, &$parent = null, &$level = null) use (&$find_parent): bool {
            foreach ($nodes as &$node) {
                if (!empty($node['nodes']) && is_array($node['nodes'])) {
                    foreach ($node['nodes'] as &$child) {
                        if ($child['nid'] === $child_nid) {
                            $parent = &$node;
                            $level = &$nodes;
                            return true;
                        }
                    }
                    if ($find_parent($node['nodes'], $child_nid, $parent, $level)) {
                        return true;
                    }
                }
            }
            return false;
        };

        $remove_node($schema_nodes);

        $parent = null;
        $level = null;
        $found = $find_parent($schema_nodes, $target_nid, $parent, $level);

        if ($moving_node && $found && $parent && $level) {
            foreach ($level as $key => $node) {
                if ($node['nid'] === $parent['nid']) {
                    array_splice($level, $key + 1, 0, [$moving_node]);
                    ths()->setSchema($schema_nodes);
                    return;
                }
            }
        }

        // Если родитель не найден — перемещаем в корень
        $schema_nodes[] = $moving_node;
        ths()->setSchema($schema_nodes);
    }

    # Удаляем нод
    public function deleteNode(string $nid): void
    {
        //dd($nid);
    }

    /**
     * Проверяет, является ли узел потомком определенного родительского узла в иерархической древовидной структуре.
     *
     * @param array $tree Массив древовидной структуры, содержащий узлы.
     * @param string $parent_nid ID родительского узла для проверки.
     * @param string $child_nid ID дочернего узла для проверки.
     * @return bool Возвращает true, если дочерний узел является потомком родительского узла, иначе false.
     */
    private function isDescendant(array $tree, string $parent_nid, string $child_nid): bool
    {
        foreach ($tree as $node) {
            if ($node['nid'] === $parent_nid) {
                return $this->containsNode($node, $child_nid);
            }
            if (!empty($node['nodes']) && $this->isDescendant($node['nodes'], $parent_nid, $child_nid)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Проверяет, содержится ли узел с заданным идентификатором в дереве узлов.
     *
     * @param array $node Массив, представляющий текущий узел и его потомки.
     * @param string $target_nid Идентификатор узла, который необходимо найти.
     * @return bool Возвращает true, если узел с указанным идентификатором найден, иначе false.
     */
    private function containsNode(array $node, string $target_nid): bool
    {
        if ($node['nid'] === $target_nid) {
            return true;
        }
        if (!empty($node['nodes'])) {
            foreach ($node['nodes'] as $child) {
                if ($this->containsNode($child, $target_nid)) {
                    return true;
                }
            }
        }
        return false;
    }
}
