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

        # Создать версию
        ths()->versions()->saveFrameVersion($fid, $program);

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

    /**
     * Получить путь до фрейма
     * @param int $frame_id
     * @return string
     */
    public function getFramePath(int $frame_id): string
    {
        return base_path('plugins/zen/threes/classes/frames/Frame_' . $frame_id . '.php');
    }

    public function executeFrame(string $fid)
    {
        $frame = ths()->frames()->get($fid);
        $frame_id = $frame->id;
        $call = "Zen.Threes.Classes.Frames.Frame_$frame_id.flow";

        return ths()->exe($call);
    }

    /**
     * Прокси метод - Восстановление версии фрейма
     * @param int $version_id
     * @return void
     */
    public function restoreVersion(int $version_id): void
    {
        ths()->versions()->restoreFrameVersion($version_id);
    }
}
