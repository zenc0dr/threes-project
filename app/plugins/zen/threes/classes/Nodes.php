<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

use Zen\Threes\Models\Frame;

class Nodes
{
    use SingletonTrait;

    /**
     * Добавить новый нод в программу
     * @param string $fid
     * @param int $line_index
     * @return array
     */
    public function addNode(string $fid, int $line_index): array
    {
        $frame = Frame::findByFid($fid);
        $program = $frame->program ?? [];
        $program[$line_index][] = [
            'nid' => ths()->createToken(),
            'name' => '#',
            'description' => null,
            'layers' => [
                'threes.units.oc@write' => '#'
            ]
        ];
        $frame->program = $program;
        $frame->save();
        return [];
    }
}
