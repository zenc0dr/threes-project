<?php

namespace Zen\Threes\Api\Nodes;

use Zen\Threes\Traits\QueryLogTrait;

class Node
{
    use QueryLogTrait;

    # http://threes.dc/threes.api/nodes.node:setNodeIcon?debug
    protected function setNodeIcon(): array
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
            request('scope', 'self_content')
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:add-node?debug
    protected function addNode(): array
    {
        ths()->nodes()->addNode(
            nid: request('nid'),
            class: request('class'),
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:move-node?debug
    protected function moveNode(): array
    {
        ths()->nodes()->moveNode(
            request('nid'),
            request('target_nid'),
            request('direction')
        );
        return [];
    }

    protected function deleteNode(): array
    {
        ths()->nodes()->deleteNode(
            nid: request('nid')
        );
        return [];
    }
}
