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
            'nodes' => ths()->nodes()->getNodes(request('nid'))
        ];
    }

    # http://threes.dc/threes.api/nodes.node:set-nodes?debug
    protected function setNodes()
    {
        ths()->nodes()->setNodes(
            request('nid'),
            request('nodes'),
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:add-line?nid=threes.default.node1
    public function addLine(): array
    {
        ths()->nodes()->addLine(request('nid'));
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:add-node?debug
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
