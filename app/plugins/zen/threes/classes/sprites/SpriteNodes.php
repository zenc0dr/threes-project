<?php

namespace Zen\Threes\Classes\Sprites;

use Zen\Threes\Models\Sprite;

trait SpriteNodes
{
    public function addNode(): array
    {
        return [
            'nid' => ths()->createToken(),
            'name' => 'Новый node',
            'type' => 'unit',
            'scheme' => []
        ];
    }

    public function getNodes(string $sprite_id): array
    {
        $sprite = Sprite::find($sprite_id);

        if (!$sprite) {
            return [];
        }

        $nodes = $sprite->nodes ?? [];

        $nodes_ex = [
            [
                'nid' => 'node1',
                'name' => 'Тестовый нод, реализующий спрайт',
                'type' => 'unit',
                'scheme' => [
                    'uid' => 'zen.units.adder'
                ]
            ],
            [
                'nid' => 'node2',
                'name' => 'Тестовый нод, реализующий спрайт',
                'type' => 'unit',
                'scheme' => [
                    'uid' => 'zen.units.adder'
                ]
            ],
            [
                'nid' => 'node3',
                'name' => 'Node 3',
                'type' => 'unit',
                'scheme' => [
                    'uid' => 'zen.units.test',
                ]
            ],
            [
                'nid' => 'node4',
                'name' => 'Node 4',
                'type' => 'other',
                'scheme' => []
            ]
        ];

        # Тут каждый нод облагораживается данными из юнита
        foreach ($nodes as &$node) {
            if (empty($node['scheme'])) {
                continue;
            }

            if ($node['type'] === 'unit' && isset($node['scheme']['uid'])) {
                $node['scheme']['data'] = ths()->units()->getUnitData($node['scheme']['uid']);

                if (isset($node['scheme']['data']['io'])) {
                    foreach ($node['scheme']['data']['io'] as &$item_io) {
                        unset($item_io['io_description']);
                    }
                }
            }
        }
        return $nodes;
    }
}
