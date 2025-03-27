<?php

namespace Zen\Threes\Api\nodes;

use Zen\Threes\Traits\QueryLogTrait;

class Node
{
    use QueryLogTrait;
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

    # http://threes.dc/threes.api/nodes.node:add-node
    protected function addNode(): array
    {
        ths()->nodes()->addNode(
            request('nid'),
            request('parent_nid'),
            request('line_index')
        );
        return [];
    }
}
