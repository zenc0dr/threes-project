<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Models\Frame;
use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Node;
use Zen\Threes\Models\Layer;
use Zen\Threes\Models\Unit;

class Frames
{
    use SingletonTrait;

    public function get(string $fid)
    {
        return Frame::findByFid($fid);
    }

    /**
     * Сохранить DSL-программу, преобразовав её в сжатый вариант
     * @param string $fid
     * @param array $program
     * @return void
     */
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

    /**
     * Загрузка полной DSL-схемы фрейма
     * @param string $fid
     * @return array
     */
    public function loadProgram(string $fid): array
    {
        $program = Frame::findByFid($fid)->program;

        $dsl = [];
        //$aspects = [];
        foreach ($program as $line) {
            $dsl_line = [];
            foreach ($line as $nodes) {
                $node = null;
                foreach ($nodes as $nid => $lids) {
                    $node = Node::find($nid)->dsl;
                    $layers = [];
                    foreach ($lids as $lid) {
                        $layer = Layer::find($lid)->dsl;
                        //$aspects[] = $layer['aspect'];
                        $layers[] = $layer;
                    }
                    $node['layers'] = $layers;
                }
                if ($node !== null) {
                    $dsl_line[] = $node;
                }
            }
            $dsl[] = $dsl_line;
        }

        //$this->addIconsToLayers($aspects, $dsl);

        return $dsl;
    }

    /**
     * Мягко добавляем иконки к слоям
     * @param array $aspects
     * @param array $dsl
     * @return void
     */
    public function addIconsToLayers(array $aspects, array &$dsl): void
    {
        $uids = collect($aspects)->map(function ($aspect) {
            return explode('@', $aspect)[0];
        })->toArray();

        $units = Unit::whereIn('uid', $uids)
            ->get()->mapWithKeys(function ($unit) {
                return [$unit->uid => $unit->icon_path];
            })->toArray();

        foreach ($dsl as &$line) {
            foreach ($line as &$node) {
                foreach ($node['layers'] as &$layer) {
                    $aspect = explode('@', $layer['aspect'])[0];
                    $layer['icon'] = $units[$aspect];
                }
            }
        }
    }

    /**
     * Добавить линию
     * @param string $fid
     * @return void
     */
    public function addLine(string $fid): void
    {
        $frame = Frame::findByFid($fid);
        $program = $frame->program;
        $program[] = [];
        $frame->program = $program;
        $frame->save();
    }

    /**
     * Абстрактор фрейма
     * @param string $fid
     * @return void
     */
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
