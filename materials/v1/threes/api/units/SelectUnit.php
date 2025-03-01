<?php

namespace Zen\Threes\Api\Units;

use Zen\Threes\Models\Unit;

class SelectUnit
{
    /**
     * http://threes.dc/threes.api/Units.SelectUnit:records
     */
    public function records()
    {
        $units = Unit::active()->get();

        $output = [];
        foreach ($units as $unit) {
            $output[] = [
                'tid' => $unit->tid,
                'name' => $unit->name,
                'icon' => $unit->icon_path,
                'description' => $unit->description,
            ];
        }

        return [
            'units' => $output
        ];
    }

    /**
     * http://threes.dc/threes.api/Units.SelectUnit:makeNode
     * @return array
     */
    public function makeNode(): array
    {
        $tid = request('tid');
        $unit = Unit::find($tid);
        if (!$unit) {
            return [
                'success' => false
            ];
        }

        # Скрыть заголовок нода, если в его настройках есть позиция node:show_title
        if (isset($unit->settings['node:show_title'])) {
            $show_title = boolval($unit->settings['node:show_title']);
            if (!$show_title) {
                $unit->name = null;
            }
        }


        return [
            'success' => true,
            'node' => [
                'tid' => $tid,
                'name' => $unit->name,
                'icon' => env('APP_URL') . $unit->icon_path,
                'io' => $unit->io,
            ]
        ];
    }
}
