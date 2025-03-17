<?php

    namespace Zen\Threes\Classes;

use Zen\Threes\Models\Frame;
use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Node;
use Zen\Threes\Models\Layer;
use Illuminate\Database\Eloquent\Builder;

class Frames
{
    use SingletonTrait;

    /**
     * Получить экземпляр Frame по $fid - токену
     * @param string $fid
     * @return Frame|null
     */
    public function get(string $fid): ?Frame
    {
        return Frame::findByFid($fid);
    }

    /**
     * Вернуть модель Frame
     * @return Builder | Frame
     */
    public function model(): Builder | Frame
    {
        return Frame::query();
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
    }

    /**
     * Удалить связи нод с их фреймами
     * @param string $fid
     * @param array $nids
     * @return void
     */
    public function removeNodes(string $fid, array $nids): void
    {
        $frame = ths()->frames()->get($fid);
        $program = collect($frame->program);

        $updated_program = $program->map(function ($line) use ($nids) {
            return collect($line)->map(function ($nodes) use ($nids) {
                return collect($nodes)->filter(function ($node_content, $node_id) use ($nids) {
                    return !in_array($node_id, $nids);
                });
            })->filter(function ($level_nodes) {
                return !$level_nodes->isEmpty();
            });
        })->filter(function ($program_level) {
            return !$program_level->isEmpty();
        })->toArray();

        $frame->program = $updated_program;
        $frame->save();
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
        foreach ($program as $line) {
            $dsl_line = [];
            foreach ($line as $nodes) {
                $node = null;
                foreach ($nodes as $nid => $lids) {
                    $node = Node::find($nid)->dsl;
                    $layers = [];
                    foreach ($lids as $lid) {
                        $layer = Layer::find($lid)->dsl;
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

        return $dsl;
    }

    /**
     * Добавить линию
     * @param string $fid
     * @return int - Номер добавленой линии
     */
    public function addLine(string $fid): int
    {
        $frame = Frame::findByFid($fid);
        $program = $frame->program;
        $program[] = [];
        $frame->program = $program;
        $frame->save();
        return count($program) - 1;
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

        foreach ($layers as $layer) {
            $aspect = explode('@', $layer['aspect']);
            $uid = $aspect[0];
            $method = $aspect[1];
            $exe = $layer['exe'];
            ths()->layers()->callAspect($fid, $uid, $method, $exe);
        }
    }
}
