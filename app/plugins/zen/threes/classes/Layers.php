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
     * @return Builder
     */
    public function model(): Builder
    {
        return Layer::query();
    }

    public function handle(
        string $fid, # токен фрейма
        string $nid, # Токен нода
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
        $aspect = explode('@', $aspect);
        $uid = $aspect[0];
        $method = $aspect[1];

        $unit = ths()->units()->get($uid);
        $layer = null;
        foreach ($unit->layers as $unit_layer) {
            $layer_method = $unit_layer['aspect_lid'];
            if ($method === $layer_method) {
                $layer = Layer::set([
                    'name' => $unit_layer['aspect_name'],
                    'description' => $unit_layer['aspect_desc'],
                    'aspect' => "$uid@$method",
                    'exe' => $unit_layer['aspect_exe'],
                ]);
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
        string|array $exe, # Атрибут
        ?string $program_stage = null # Стадия программы ('start' - Начало программы, 'end' - конец программы)
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

        ths()->exe($aspect, null, $exe, $fid, $program_stage);
    }

    public function getStore()
    {
        $frames = ths()->frames()->get();
    }
}
