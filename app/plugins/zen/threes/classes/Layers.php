<?php

namespace Zen\Threes\Classes;

use Illuminate\Database\Eloquent\Builder;
use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Layer;

class Layers
{
    use SingletonTrait;

    /**
     * Получить экземпляр Layer по $lid - токену
     * @param string $lid
     * @return Layer|null
     */
    public function get(string $lid): ?Layer
    {
        return Layer::find($lid);
    }

    /**
     * Вернуть модель Layer
     * @return Builder | Layer
     */
    public function model(): Builder | Layer
    {
        return Layer::query();
    }

    public function handle(
        array | string $layer # DSL-слой
    ): string {
        $lid = $layer['lid'] ?? null;

        if ($lid) {
            Layer::set($layer); // Обновить слой
        } else {
            $lid = $this->handleAspect($layer); // Создать слой
        }

        return $lid;
    }

    /**
     * Создаёт из аспекта DSL-узел слоя
     * @param string $aspect
     * @return string
     */
    public function handleAspect(string $aspect): string
    {
        $aspect = explode('::', $aspect);
        $lid = $aspect[1] ?? null;
        $aspect = $aspect[0] ?? null;
        $aspect = explode('@', $aspect);
        $uid = $aspect[0];
        $method = $aspect[1];

        $unit = ths()->units()->get($uid);
        $layer = null;
        foreach ($unit->layers as $unit_layer) {
            $layer_method = $unit_layer['aspect_lid'];
            if ($method === $layer_method) {
                if ($lid) {
                    $layer = Layer::find($lid);
                } else {
                    $layer = Layer::set([
                        'name' => $unit_layer['aspect_name'],
                        'description' => $unit_layer['aspect_desc'],
                        'aspect' => "$uid@$method",
                        'exe' => $unit_layer['aspect_exe'],
                    ]);
                }
                break;
            }
        }
        return $layer->lid;
    }

    /**
     * Вызвать аспект
     * @param string $fid
     * @param string $uid
     * @param string $method
     * @param string $exe
     * @param string|null $program_stage
     * @return void
     * @throws \ReflectionException
     */
    public function callAspect(
        string $fid, # Токен фрейма
        string $uid, # Токен юнита
        string $method, # Метод
        string|array|null $exe # Атрибут
    ): void {
        $unit = ths()->units()->get($uid);
        $aspect = null;
        foreach ($unit->layers as $unit_layer) {
            if ($unit_layer['aspect_lid'] === $method) {
                $aspect = $unit_layer['aspect_exe'];
            }
        }

        if (!$aspect) {
            return;
        }

        ths()->exe($aspect, null, $exe, $fid);
    }

    /**
     * Получить хранилище слоёв и нодов
     * @param string|null $filter_text
     * @return array[]
     */
    public function getStore(?string $filter_text = null): array
    {
        $frames = ths()->frames()->model()->active()->get();
        $project_layers = [];
        $project_nodes = [];
        foreach ($frames as $frame) {
            $dsl_program = ths()->frames()->loadProgram($frame->fid);
            foreach ($dsl_program as $line) {
                foreach ($line as $node) {
                    if (!isset($project_nodes[$node['nid']])) {
                        $node['fid'] = $frame->fid;
                        $project_nodes[$node['nid']] = $node;
                    }
                    foreach ($node['layers'] as $layer) {
                        if (!$this->isFilterAllow([
                            $layer['lid'],
                            $layer['name'],
                            $layer['description'],
                            $layer['aspect'],
                        ], $filter_text)) {
                            continue;
                        }

                        $layer['nid'] = $node['nid'];
                        if (!isset($project_layers[$layer['lid']])) {
                            $project_layers[$layer['lid']] = $layer;
                        }
                    }
                    unset($project_nodes[$node['nid']]['layers']);
                }
            }
        }

        return [
            'layers' => $project_layers,
            'nodes' => $project_nodes,
        ];
    }

    /**
     * Проверяет массив строк на вхождение
     * @param array $fields - Массив строк
     * @param string|null $filter - Поисковое вхождение
     * @return bool - Фильтр позволяет
     */
    private function isFilterAllow(array $fields, ?string $filter = null): bool
    {
        if (!$filter) {
            return true;
        }
        $is_allowed = false;
        foreach ($fields as $field) {
            if (str_contains($field, $filter)) {
                $is_allowed = true;
                break;
            }
        }
        return $is_allowed;
    }
}
