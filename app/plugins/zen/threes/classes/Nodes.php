<?php

namespace Zen\Threes\Classes;

use Illuminate\Database\Eloquent\Builder;
use Zen\Threes\Traits\SingletonTrait;

use Zen\Threes\Models\Frame;
use Zen\Threes\Models\Node;
use Zen\Threes\Models\Layer;

class Nodes
{
    use SingletonTrait;

    /**
     * Получить экземпляр Node по $nid - токену
     * @param string $nid
     * @return Node|null
     */
    public function get(string $nid): ?Node
    {
        return Node::find($nid);
    }

    /**
     * Вернуть модель Node
     * @return Builder | Node
     */
    public function model(): Builder | Node
    {
        return Node::query();
    }

    /**
     * Добавить новый нод в программу
     * @param string $fid
     * @param int $line_index
     * @return Node
     */
    public function addNode(string $fid, int $line_index): Node
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

    /**
     * Обновить нод
     * @param string $fid - Токен фрейма
     * @param array $node - DSL-нода (развёрнутый)
     * @return array
     */
    public function updateNode(string $fid, array $node): array
    {
        Node::set($node);
        $this->attachLayers($fid, $node);
        return $this->getNodeDsl($fid, $node['nid']);
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
     * Скопировать ноды
     * @param string $fid
     * @param array $nids
     * @return void
     */
    public function copyNodes(string $fid, array $nids): void
    {
        $frame = ths()->frames()->get($fid);
        $program = collect($frame->program);

        $updated_program = $program->map(function ($line) use ($nids) {
            $line_collection = collect($line);
            $nodes_to_copy = [];

            $line_collection->each(function ($nodes) use ($nids, &$nodes_to_copy) {
                foreach ($nodes as $node_id => $layers) {
                    if (in_array($node_id, $nids)) {
                        $original_node = Node::find($node_id);
                        $new_node = Node::set([
                            'name' => $original_node->name,
                            'description' => $original_node->description,
                        ]);

                        $nodes_to_copy[] = [$new_node->nid => $layers];
                    }
                }
            });

            if (!empty($nodes_to_copy)) {
                $line = array_merge($line, $nodes_to_copy);
            }

            return $line;
        })->toArray();

        $frame->program = $updated_program;
        $frame->save();
    }


    /**
     * Прикрепить слои
     * @param string $fid
     * @param array $node
     * @return void
     */
    private function attachLayers(string $fid, array $node): void
    {
        $layers = $node['layers'] ?? null;

        if (!$layers) {
            return;
        }

        $updated_layers_lids = [];
        foreach ($layers as $layer) {
            $updated_layers_lids[] = ths()->layers()->handle($layer);
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
