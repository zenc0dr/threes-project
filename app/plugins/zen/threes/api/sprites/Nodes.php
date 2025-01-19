<?php

namespace Zen\Threes\Api\Sprites;

class Nodes
{
    /**
     * http://threes.dc/zen/threes/api/Sprites.Nodes:getNodes
     * @return void
     */
    public function getNodes(): array
    {
        $sid = request('sid');

        return [
            'nodes' => ths()->sprites()->getNodes($sid)
        ];
    }

    /**
     * http://threes.dc/zen/threes/api/Sprites.Nodes:addNode
     * @return array
     */
    public function addNode(): array
    {
        return [
            'node' => ths()->sprites()->addNode()
        ];
    }
}
