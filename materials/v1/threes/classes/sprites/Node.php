<?php

namespace Zen\Threes\Classes\Sprites;

use View;

trait Node
{
    public function saveNodeSettings(string $node_uuid, array $settings): void
    {
        ths()->sets()->set($node_uuid, $settings, 'nodes');
    }

    public function loadNodeSettings(string $node_uuid): ?array
    {
        return ths()->sets()->get($node_uuid);
    }

    public function getNodeTitle(string $tid, string $sid, string $node_uuid): string
    {
        $unit = ths()->units()->get($tid);

        return View::make("zen.threes::node.info", [
            'tid' => $tid,
            'unit_name' => $unit->name,
            'sid' => $sid,
            'nid' => $node_uuid,
        ])->render();
    }
}
