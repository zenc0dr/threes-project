<?php

namespace Zen\Threes\Api\Nodes;

class Node
{
    # http://threes.dc/threes.api/nodes.Node:create?fid=grok&line_index=0
    public function create(): array
    {
        ths()->nodes()->addNode(
            request('fid'),
            request('line_index')
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.Node:update
    public function update(): array
    {
        ths()->requestDebug(); //todo:debug
        return [
            'node' => ths()->nodes()->updateNode(
                request('fid'),
                request('node')
            )
        ];
    }

    # http://threes.dc/threes.api/nodes.Node:getNodeDsl?fid=test&nid=mf6ddtu7
    public function getNodeDsl(): array
    {
        return [
            'node' => ths()->nodes()->getNodeDsl(
                request('fid'),
                request('nid')
            )
        ];
    }
}
