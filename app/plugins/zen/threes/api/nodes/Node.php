<?php

namespace Zen\Threes\Api\nodes;

class Node
{
    # http://threes.dc/threes.api/nodes.node:nodes?nid=threes.default.node1
    public function nodes(): array
    {
        return [
            'nodes' => ths()->nodes()->getNodes(request('nid'))
        ];
    }

    # http://threes.dc/threes.api/nodes.node:add-line?nid=threes.default.node1
    public function addLine(): array
    {
        ths()->nodes()->addLine(request('nid'));
        return [];
    }
}
