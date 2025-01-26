<?php

namespace Zen\Threes\Api\Sprites;

class Nodes
{
    /**
     * http://threes.dc/threes.api/Sprites.Nodes:getNodes
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
     * http://threes.dc/threes.api/Sprites.Nodes:addNode
     * @return array
     */
    public function addNode(): array
    {
        return [
            'node' => ths()->sprites()->addNode()
        ];
    }

    /**
     * http://threes.dc/threes.api/Sprites.Nodes:saveNodes
     * @return true[]
     */
    public function saveNodes(): array
    {
        $sid = request('sid');
        $nodes = request('nodes');

        ths()->sprites()->saveNodes($sid, $nodes);
        return [
            'success' => true
        ];
    }

    /**
     * http://threes.dc/threes.api/Sprites.Nodes:saveNode
     * @return true[]
     */
    public function saveNode(): array
    {
        $sid = request('sid');
        $data = request('data');
        ths()->sprites()->saveNode($sid, $data);

        return [
            'success' => true
        ];
    }
}
