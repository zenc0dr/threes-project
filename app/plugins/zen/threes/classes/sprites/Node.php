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

    public function getNodeTitle(string $sid, string $node_uuid): string
    {
        return View::make("zen.threes::node.info", [
            'sid' => $sid,
            'nid' => $node_uuid,
        ])->render();
    }
}
