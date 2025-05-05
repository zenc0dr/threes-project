<?php

namespace Zen\Threes\Api\nodes;

use Zen\Threes\Traits\QueryLogTrait;

class Node
{
    use QueryLogTrait;
    # http://threes.dc/threes.api/nodes.node:get-nodes?nid=threes.default.node1
    public function getNodes(): array
    {
        return [

        ];
    }

    # http://threes.dc/threes.api/nodes.node:set-node-name?debug
    protected function setNodeName()
    {
        ths()->nodes()->setNodeName(
            request('nid'),
            request('name')
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:add-line?nid=threes.default.node1
    public function addLine(): array
    {
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:add-node?debug
    protected function addNode(): array
    {
        ths()->nodes()->createNode();
        return [];
    }
}
