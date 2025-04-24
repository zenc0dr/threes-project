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
        $author = ths()->getSetting('author_token') ?? 'project';
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

    public function getNodes(string $nid): array
    {
        return Node::find($nid)?->nodes ?? [];
    }

    public function setNodes(string $nid, array $nodes): void
    {
        $node = Node::find($nid);
        $node->nodes = $nodes;
        $node->save();
    }

    public function nodesToString(array $nodes): string
    {

        foreach ($nodes as &$line) {
            foreach ($line as &$node) {
                # Вот тут надо сохранить информацию о нодах
                $node = $node['nid'];
            }
        }

        $parts = array_map(function ($sub_array) {
            return implode(',', $sub_array);
        }, $nodes);

        return implode(';', $parts);
    }

    public function nodesFromString(string $nodes, bool $decorate = true): array
    {

        //$decorate = true;

        if ($decorate) {
            $nids = str_replace(';', ',', $nodes);
            $nids = str_replace(',', ' ', $nids);
            $nids = trim($nids);
            $nids = explode(' ', $nids);

            $nodes_records = Node::whereIn('nid', $nids)->get();
            $nodes_data = [];
            foreach ($nodes_records as $node_record) {
                $nodes_data[$node_record->nid] = [
                    'nid' => $node_record->nid,
                    'name' => $node_record->name,
                ];
            }
        } else {
            $nodes_data = null;
        }


        $lines = explode(';', $nodes);
        $nodes = array_map(function ($part) use ($nodes_data) {
            if ($part === '') {
                return [];
            }

            $nodes_nids = explode(',', $part);

            if ($nodes_data !== null) {
                return array_map(function ($nid) use ($nodes_data) {
                    return $nodes_data[$nid];
                }, $nodes_nids);
            } else {
                return array_map(function ($part) {
                    return $part === '' ? [] : explode(',', $part);
                }, $nodes_nids);
            }

        }, $lines);

        return $nodes;
    }

    public function nodesFromStringOLD(string $nodes): array
    {
        $lines = explode(';', $nodes);
        return array_map(function ($part) {
            return $part === '' ? [] : explode(',', $part);
        }, $lines);
    }

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

        $node = Node::find($parent_nid);
        $node->name = 'Новое имя';
        $nodes = $node->nodes_nids;

        dd($nodes);

        # Расширяем массив при необходимости
        if ($line_index >= count($nodes)) {
            $nodes = array_pad($nodes, $line_index + 1, []);
        }

        $nodes[$line_index][] = $nid;
        $node->nodes = $nodes;
        $node->save();
    }
}
