<?php

namespace Zen\Threes\Api\Nodes;

use Zen\Threes\Traits\QueryLogTrait;

class Node
{
    use QueryLogTrait;

    public function setNodeIcon(): array
    {
        ths()->nodes()->setNodeIcon(
            request('nid'),
            request('svg')
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:set-node-settings?debug
    protected function setNodeSettings(): array
    {
        ths()->nodes()->setNodeSettings(
            request('nid'),
            request('settings')
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:set-node-name?debug
    protected function setNodeName(): array
    {
        ths()->nodes()->setNodeName(
            request('nid'),
            request('name')
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:set-node-description?debug
    protected function setNodeDescription(): array
    {
        ths()->nodes()->setNodeDescription(
            request('nid'),
            request('description')
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:update-data?debug
    protected function updateData(): array
    {
        ths()->nodes()->updateNodeData(
            request('nid'),
            request('data'),
            request('scope')
        );
        return [];
    }
}
