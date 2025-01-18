<?php

namespace Zen\Threes\Classes\Sprites;

trait Records
{
    public function getRecords()
    {
        return [
            [
                'nid' => 'node1',
                'name' => 'Тестовый нод, реализующий спрайт',
                'scheme' => [
                    [
                        'type' => 'unit',
                        'uid' => 'Zen.Stack.'
                    ]
                ]
            ],
            [
                'nid' => 'node2',
                'name' => 'Node 2',
                'scheme' => []
            ],
            [
                'nid' => 'node3',
                'name' => 'Node 3',
                'scheme' => []
            ],
            [
                'nid' => 'node4',
                'name' => 'Node 4',
                'scheme' => []
            ],
            [
                'nid' => 'node5',
                'name' => 'Node 5',
                'scheme' => []
            ],
        ];
    }
}
