<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Node;
use Illuminate\Database\Eloquent\Builder;


class Nodes
{
    use SingletonTrait;

    public function model(): Builder | Node
    {
        return Node::query();
    }

    /**
     * Генерирует NID (токен нода)
     * @return string
     */
    public function createNidToken(): string
    {
        $author = ths()->settings('author_token') ?? 'project';
        $scope = 'default';
        $token = 'node' . $this->getMaxNodeNumber($author, $scope);
        return "$author.$scope.$token";
    }

    /**
     * Возвращает последний номер стандартного токена нода (с привязкой к автору)
     * @param string $author
     * @param string $scope
     * @return string
     */
    public function getMaxNodeNumber(string $author, string $scope = 'default'): string
    {
        $prefix = "$author.$scope.node";
        $max_number = Node::where('nid', 'like', "$prefix%")
            ->get()
            ->map(function ($node) use ($prefix) {
                $number = str_replace($prefix, '', $node->nid);
                return is_numeric($number) ? (int) $number : 0;
            })
            ->max();
        return $max_number ? $max_number + 1 : 1;
    }

    /**
     * Сохранить DSL-схему фрейма
     * @param string $nid
     * @param array $scheme
     * @return void
     */
    public function setDslScheme(string $nid, array $scheme, bool $decorated = true): void
    {
        if ($decorated) {
            $db_array = [];
            foreach ($scheme as $line_nodes) {
                if (!$line_nodes) {
                    $db_array[] = [];
                } else {
                    $line = [];
                    foreach ($line_nodes as $line_node) {
                        $line[] = $line_node['nid'];
                        $node = Node::find($line_node['nid']);
                        $node->name = $line_node['name'];
                        $node->save();
                    }
                    $db_array[] = $line;
                }
            }

            $dump = [];
            foreach ($db_array as $line_nodes) {
                $dump[] = join(',', $line_nodes);
            }
            $dsl_string = join(';', $dump);
        }

        $node = Node::find($nid);
        $node->nodes = $dsl_string;
        $node->save();
    }

    /**
     * Получить DSL-схему для фрейма
     * @param string $nid
     * @param bool $decorated - Декорировано, значит ноды обогащены dsl-узлами
     * @return array
     */
    public function getDslScheme(string $nid, bool $decorated = true): array
    {
        $dsl_string = Node::find($nid)->nodes;
        $dsl_scheme = [];
        $nids = [];
        $lines = explode(';', $dsl_string);
        foreach ($lines as $line_nodes) {
            if (!$line_nodes) {
                $dsl_scheme[] = [];
            } else {
                $nodes_nids = explode(',', $line_nodes);
                $nids = array_merge($nids, $nodes_nids);
                $dsl_scheme[] = $nodes_nids;
            }
        }

        if ($decorated) {
            $nids = array_unique($nids);
            $nodes = Node::whereIn('nid', $nids)
                ->get()
                ->keyBy('nid');

            foreach ($dsl_scheme as &$line_nodes) {
                foreach ($line_nodes as &$line_node) {
                    $line_node = $nodes[$line_node]->dsl_object;
                }
            }
        }

        return $dsl_scheme;
    }

    /**
     * @param string $nid
     * @return void
     */
    public function addLine(string $nid): void
    {
        $node = Node::find($nid);
        $nodes = $node->nodes ?? [];
        $nodes[] = [];
        $node->nodes = $nodes;
        $node->save();
    }

    public function addNode(string $nid, string $parent_nid, int $line_index): void
    {
//        $node = Node::find($parent_nid);
//        $node->name = 'Новое имя';
//        $nodes = $node->getDslScheme($nid);
        $scheme = $this->getDslScheme($parent_nid);

        # Расширяем массив при необходимости
        if ($line_index >= count($scheme)) {
            $nodes = array_pad($nodes, $line_index + 1, []);
        }

        $nodes[$line_index][] = $nid;
        $node->nodes = $nodes;
        $node->save();
    }
}
