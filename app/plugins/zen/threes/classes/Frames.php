<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Models\Frame;
use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Node;
use Zen\Threes\Models\Layer;

class Frames
{
    use SingletonTrait;

    public function get(string $fid)
    {
        return Frame::findByFid($fid);
    }

    public function saveProgram(string $fid, array $program): void
    {
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
                            'aspect' => $layer['aspect'],
                            'exe' => $layer['exe'],
                        ]);
                        $layers[] = $layer['lid'];
                    }
                }

                $dsl_node = [
                    $node['nid'] => $layers
                ];


                $dsl[$line_index][] = $dsl_node;
            }
            if (!isset($dsl[$line_index])) {
                $dsl[$line_index] = [];
            }
        }

        Frame::findByFid($fid)->update([
            'program' => $dsl,
        ]);

        //$this->abstractor($fid);
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
        return $dsl;
    }

    public function addLine(string $fid): void
    {
        $frame = Frame::findByFid($fid);
        $program = $frame->program;
        $program[] = [];
        $frame->program = $program;
        $frame->save();
    }

    public function abstractor(string $fid): void
    {
        $program = $this->loadProgram($fid);

        $layers = [];
        foreach ($program as $line) {
            foreach ($line as $node) {
                foreach ($node['layers'] as $layer) {
                    $layers[] = [
                        'aspect' => $layer['aspect'],
                        'exe' => $layer['exe'],
                    ];
                }
            }
        }

        $layers_count = count($layers);
        $layer_index = 0;
        foreach ($layers as $layer) {
            $program_stage = null;
            if ($layer_index === 0) {
                $program_stage = 'start';
            }
            $aspect = explode('@', $layer['aspect']);
            $uid = $aspect[0];
            $method = $aspect[1];
            $exe = $layer['exe'];
            if ($layer_index === $layers_count) {
                $program_stage = 'end';
            }
            ths()->layers()->callAspect($fid, $uid, $method, $exe, $program_stage);
            $layer_index++;
        }
    }
}
