<?php

namespace Zen\Threes\Api\Sprites;

class SelectNode
{
    /**
     * http://threes.dc/zen/threes/api/Sprites.SelectNode:records
     * @return array[]
     */
    public function records(): array
    {
        $node_types = [
            [
                'type' => 'input',
                'name' => 'Вход',
                'icon' => 'input.svg',
                'desc' => 'Входной пин для входных данных',
            ],
            [
                'type' => 'unit',
                'name' => 'Юнит',
                'icon' => 'unit.svg',
                'desc' => 'Нод подключающий юнит',
            ],
            [
                'type' => 'if',
                'name' => 'Условие',
                'icon' => 'if.svg',
                'desc' => 'Условие Если',
            ],
        ];


        return [
            'node_types' => $node_types,
        ];
    }
}
