<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Layer;

class Layers
{
    use SingletonTrait;

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
}
