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

    public function addNode(string $nid, string $parent_nid, int $line_index): void
    {
        dd(
            $nid,
            $parent_nid,
            $line_index
        );
        //ths()->messages()->addMessage("Нод $nid добавлен в нод $parent_nid на линию $line_index");
    }


    /*
    public function addNodeOld(string $fid, int $line_index): Node
    {
        $frame = Frame::findByFid($fid);

        $node = Node::set();
        $layer = Layer::set();
        $program = $frame->program;

        $node_short_dsl = [
            $node->nid => [
                $layer->lid
            ]
        ];

        # Заполнить программу отсутствующими пустыми линиями
        for ($i = 0; $i <= $line_index; $i++) {
            if (!isset($program[$i])) {
                $program[$i] = [];
            }
        }

        $program[$line_index][] = $node_short_dsl;
        $frame->program = $program;
        $frame->save();
        return $node;
    }
    */
}
