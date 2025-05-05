<?php

namespace Zen\Threes\Api\nodes;

use Zen\Threes\Traits\QueryLogTrait;

class Node
{
    use QueryLogTrait;

    # http://threes.dc/threes.api/nodes.node:set-node-settings?debug
    protected function setNodeSettings(): array
    {
        $nid = request('nid');
        $settings = request('settings');

        ths()->nodes()->setNodeSettings($nid, $settings);
        return [];
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
