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

    public function saveNodes(string $sprite_id, array $nodes): bool
    {
        $sprite = Sprite::find($sprite_id);

        if (!$sprite) {
            return false;
        }

        $sprite->nodes = $nodes;
        $sprite->save();

        return true;
    }

    /**
     * Сохранить настройки нода
     * @param string $sprite_id
     * @param array $data
     * @return bool
     */
    public function saveNode(string $sprite_id, array $data): bool
    {
        $sprite = Sprite::find($sprite_id);

        if (!$sprite) {
            return false;
        }

        $nodes = $sprite->nodes;

        if (!count($nodes)) {
            return false;
        }

        $old_nid = $data['old_nid'];
        $new_nid = $data['new_nid'];
        #$old_type = $data['old_type'];
        $new_type = $data['new_type'];
        $name = $data['name'];
        $scheme = $data['scheme'];

        foreach ($nodes as &$node) {
            if ($node['nid'] === $old_nid) {
                $node['nid'] = $new_nid;
                $node['type'] = $new_type;
                $node['name'] = $name;
                $node['scheme'] = $scheme;
                break;
            }
        }

        $sprite->nodes = $nodes;
        $sprite->save();

        return true;
    }
}
