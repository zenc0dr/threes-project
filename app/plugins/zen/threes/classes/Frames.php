<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Models\Frame;
use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Node;
use Zen\Threes\Models\Layer;

class Frames
{
    use SingletonTrait;

    public function saveProgram(string $fid, array $program): void
    {
        //Frame::findByFid($fid)->update(['program' => $program]);

        $dsl = [];

        foreach ($program as $line_index => $line) {
            foreach ($line as $node) {
                $nid = $node['nid'];
                $description = $node['description'];

                Node::set([
                    'fid' => $fid,
                    'nid' => $nid,
                    'name' => $node['name'],
                    'description' => $description,
                ]);

                if (isset($node['layers'])) {
                    foreach ($node['layers'] as $lid => $attribute) {
                        Layer::set([
                            'nid' => $nid,
                            'lid' => $lid,
                            'exe' => $attribute,
                        ]);
                    }
                }

                $dsl[$line_index][] = $node['nid'];
            }
            if (!isset($dsl[$line_index])) {
                $dsl[$line_index] = [];
            }
        }

        dd($dsl);
    }

    public function loadProgram(string $fid): array
    {
        return Frame::findByFid($fid)->program;
    }

    public function addLine(string $fid): void
    {
        $frame = Frame::findByFid($fid);
        $program = $frame->program;
        $program[] = [];
        $frame->program = $program;
        $frame->save();
    }
}
