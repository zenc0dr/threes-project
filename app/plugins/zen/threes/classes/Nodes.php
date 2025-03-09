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
}
