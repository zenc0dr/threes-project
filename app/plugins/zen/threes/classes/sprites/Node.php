<?php

namespace Zen\Threes\Classes\Sprites;

use View;

trait Node
{
    public function saveNodeSettings(string $sid, string $nid)
    {

    }

    public function getNodeTitle(string $sid, string $nid)
    {
        return View::make("zen.threes::node.info", [
            'sid' => $sid,
            'nid' => $nid,
        ])->render();
    }
}
