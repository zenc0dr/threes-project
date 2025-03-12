<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

use Zen\Threes\Models\Frame;
use Zen\Threes\Models\Node;
use Zen\Threes\Models\Layer;

class Nodes
{
    use SingletonTrait;

    /**
     * Добавить новый нод в программу
     * @param string $fid
     * @param int $line_index
     * @return array
     */
    public function addNode(string $fid, int $line_index)
    {
        $frame = Frame::findByFid($fid);

        $node = Node::set();
        $layer = Layer::set();
        $program = $frame->program;

        $node = [
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

        $program[$line_index][] = $node;
        $frame->program = $program;
        $frame->save();
        return [];
    }

    public function get(string $nid)
    {
        return Node::find($nid);
    }

    /**
     * Обновить нод
     * @param string $nid
     * @return array
     */
    public function updateNode(string $fid, array $node): array
    {
        Node::set($node);
        # Сюда пришёл DSL-развёрнутый нод со слоями
        $this->attachLayers($fid, $node);
        return $this->getNodeDsl($fid, $node['nid']);
    }


    private function attachLayers(string $fid, array $node): void
    {
        $layers = $node['layers'] ?? null;

        if (!$layers) {
            return;
        }

        $updated_layers_lids = [];
        foreach ($layers as $layer) {
            $updated_layers_lids[] = ths()->layers()->handle($fid, $node['nid'], $layer);
        }

        $frame = Frame::findByFid($fid);
        $program = $frame->program;
        foreach ($program as &$line) {
            foreach ($line as &$line_node) {
                foreach ($line_node as $nid => &$layers) {
                    if ($nid === $node['nid']) {
                        $layers = $updated_layers_lids;
                        break 3;
                    }
                }
            }
        }
        $frame->program = $program;
        $frame->save();
    }

    /**
     * Вернуть Полный DSL-узел
     * @param string $fid
     * @param string $nid
     * @return array
     */
    public function getNodeDsl(string $fid, string $nid): array
    {
        $frame = Frame::findByFid($fid);
        $node = Node::find($nid);
        $node_dsl = $node->dsl;
        $node_dsl['layers'] = [];
        foreach ($frame->program as $line) {
            foreach ($line as $line_node) {
                foreach ($line_node as $nid => $layers) {
                    if ($nid === $node['nid']) {
                        foreach ($layers as $lid) {
                            $node_dsl['layers'][] = Layer::find($lid)->dsl;
                        }
                    }
                }
            }
        }
        return $node_dsl;
    }
}
