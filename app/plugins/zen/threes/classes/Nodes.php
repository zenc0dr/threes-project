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

    public function getNodes(string $nid): array
    {
        return Node::find($nid)?->nodes ?? [];
    }

    public function addLine(string $nid): void
    {
        $node = Node::find($nid);
        $nodes = $node->nodes ?? [];
        $nodes[] = [];
        $node->nodes = $nodes;
        $node->save();
    }
}
