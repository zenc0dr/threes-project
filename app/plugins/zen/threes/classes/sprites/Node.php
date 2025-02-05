<?php

namespace Zen\Threes\Classes\Sprites;

use View;

trait Node
{
    public function saveNodeSettings(string $node_uuid, array $settings)
    {
        ths()->toJsonFile(
            storage_path("threes/node_settings/{$node_uuid}.json"),
            $settings,
            true
        );
    }

    public function loadNodeSettings(string $node_uuid)
    {
        return ths()->fromJsonFile(
            storage_path("threes/node_settings/{$node_uuid}.json"),
        );
    }

    public function getNodeTitle(string $sid, string $node_uuid)
    {
        return View::make("zen.threes::node.info", [
            'sid' => $sid,
            'nid' => $node_uuid,
        ])->render();
    }
}
