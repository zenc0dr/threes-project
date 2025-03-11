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
        ths()->requestDebug('node_update_data');
        return [
            'json' => ths()->nodes()->updateNode(
                request('fid'),
                request('node')
            )
        ];
    }
}
