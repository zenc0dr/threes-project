<?php

namespace Zen\Threes\Classes\Sprites;

trait SpriteNodes
{
    public function getNodes(): array
    {
        $scheme = [
            [
                'nid' => 'node1',
                'name' => 'Тестовый нод, реализующий спрайт',
                'scheme' => [
                    'type' => 'unit',
                    'uid' => 'zen.units.adder'
                ]
            ],
            [
                'nid' => 'node2',
                'name' => 'Node 2',
                'scheme' => [
                    'type' => 'unit',
                    'uid' => 'zen.units.test',
                ]
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

        # Тут каждый нод облагораживается данными из юнита
        foreach ($scheme as &$item) {

            if (!empty($item['scheme']) && $item['scheme']['type'] === 'unit' && isset($item['scheme']['uid'])) {
                $item['scheme']['data'] = ths()->units()->getUnitData($item['scheme']['uid']);

                if (isset($item['scheme']['data']['io'])) {
                    foreach ($item['scheme']['data']['io'] as &$item_io) {
                        unset($item_io['io_description']);
                    }
                }
            }
        }
        return $scheme;
    }
}
