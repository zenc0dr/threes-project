<?php

namespace Zen\Threes\Api\debug;

use Zen\Threes\Models\Node;
use Zen\Threes\Models\Layer;
use Zen\Threes\Models\Unit;
use Zen\Threes\Models\Frame;
use Zen\Threes\Classes\Units\Opcode;


class Tests
{
    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {
        (new Opcode())->removePlaceHolder(27);
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

    # http://threes.dc/threes.api/debug.Tests:testLayer?lid=smiynbta
    public function testLayer()
    {
        $lid = request('lid');
        $layer = Layer::find($lid);
        dd(
            $layer->dsl
        );
    }

    # http://threes.dc/threes.api/debug.Tests:executeFrameTest?fid=ink
    public function executeFrameTest()
    {
        return ths()->frames()->executeFrame(request('fid'));
    }
}
