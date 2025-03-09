<?php

namespace Zen\Threes\Api\Nodes;

class Node
{
    # http://threes.dc/threes.api/nodes.Node:Create?fid=grok&line_index=0
    public function Create(): array
    {
        $fid = request('fid');
        $line_index = request('line_index');
        ths()->nodes()->addNode($fid, $line_index);
        return [];
    }
}
