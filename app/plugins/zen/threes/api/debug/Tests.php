<?php

namespace Zen\Threes\Api\debug;

use Zen\Threes\Models\Node;
use Zen\Threes\Models\Layer;
use Zen\Threes\Models\Unit;
use Zen\Threes\Models\Frame;


class Tests
{
    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {
        ths()->frames()->abstractor('test');
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        Node::truncate();
        Layer::truncate();

        //dd('Threes api works!');
    }
}
