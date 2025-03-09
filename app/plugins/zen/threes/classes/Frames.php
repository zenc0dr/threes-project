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
                Node::set([
                    'nid' => $node['nid'],
                    'name' => $node['name'],
                    'description' => $node['description'],
                ]);

                $layers = [];
                if (isset($node['layers'])) {
                    foreach ($node['layers'] as $layer) {
                        Layer::set([
                            'lid' => $layer['lid'],
                            'name' => $layer['name'],
                            'description' => $layer['description'],
                            'aspects' => $layer['aspects'],
                            'exe' => $layer['exe'],
                        ]);
                        $layers[] = $layer['lid'];
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
        $program = Frame::findByFid($fid)->program;
        $dsl = [];
        foreach ($program as $line) {
            $dsl_line = [];
            foreach ($line as $nodes) {
                foreach ($nodes as $nid => $lids) {
                    $node = Node::find($nid)->dsl;
                    $layers = [];
                    foreach ($lids as $lid) {
                        $layer = Layer::find($lid)->dsl;
                        $layers[] = $layer;
                    }
                    $node['layers'] = $layers;
                }
                $dsl_line[] = $node;
            }
            $dsl[] = $dsl_line;
        }
        return $program;
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
