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
        return [
            'nodes' => ths()->sprites()->getNodes()
        ];
    }
}
