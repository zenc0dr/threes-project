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
        $layer = Layer::find('cme6abew')->dsl;
        dd($layer);
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }

    # http://threes.dc/threes.api/debug.Tests:abstractorTest
    public function abstractorTest()
    {
        ths()->frames()->abstractor('test');
    }
}
