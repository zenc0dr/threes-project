<?php

namespace Zen\Threes\Api\Tests;

use Zen\Threes\Models\Node;

class NodesTests
{
    # http://threes.dc/threes.api/tests.NodesTests:truncateNodes
    public function truncateNodes()
    {
        Node::truncate();
    }

    # http://threes.dc/threes.api/tests.NodesTests:nodeTest?nid=xxxxxxxxxxxx
    public function nodeTest()
    {
        $nid = request('nid');

        if ($nid) {
            $node = Node::find($nid);
        } else {
            $node = ths()->nodes()->createNode();
        }

        dd($node->icon);
    }
}
