<?php

namespace Zen\Threes\Api\Nodes;

use Zen\Threes\Traits\QueryLogTrait;

class Node
{
    use QueryLogTrait;

    # http://threes.dc/threes.api/nodes.Node:create?fid=grok&line_index=0
    protected function create(): array
    {
        ths()->nodes()->addNode(
            request('fid'),
            request('line_index')
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.Node:update
    protected function update(): array
    {
        return [
            'node' => ths()->nodes()->updateNode(
                request('fid'),
                request('node')
            )
        ];
    }

    # http://threes.dc/threes.api/nodes.Node:getNodeDsl?fid=test&nid=mf6ddtu7
    protected function getNodeDsl(): array
    {
        return [
            'node' => ths()->nodes()->getNodeDsl(
                request('fid'),
                request('nid')
            )
        ];
    }
}
