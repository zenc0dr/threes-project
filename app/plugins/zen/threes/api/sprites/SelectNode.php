<?php

namespace Zen\Threes\Api\Sprites;

class SelectNode
{
    /**
     * http://threes.dc/threes.api/Sprites.SelectNode:records
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
                'desc' => 'Условие ЕСЛИ',
            ],
            [
                'type' => 'else',
                'name' => 'Условие',
                'icon' => 'else.svg',
                'desc' => 'Условие ИЛИ',
            ],
            [
                'type' => 'do',
                'name' => 'Делать',
                'icon' => 'do.svg',
                'desc' => 'Делать',
            ],
            [
                'type' => 'for',
                'name' => 'Цикл',
                'icon' => 'for.svg',
                'desc' => 'Выполняет код в цикле FOREACH перебирая элементы массива',
            ],
            [
                'type' => 'end',
                'name' => 'END',
                'icon' => 'end.svg',
                'desc' => 'Конец строки',
            ],
            [
                'type' => 'set',
                'name' => 'SET',
                'icon' => 'set.svg',
                'desc' => 'Записать переменную',
            ],
            [
                'type' => 'var',
                'name' => 'VAR',
                'icon' => 'var.svg',
                'desc' => 'Извлечь переменную',
            ],
        ];


        return [
            'node_types' => $node_types,
        ];
    }
}
