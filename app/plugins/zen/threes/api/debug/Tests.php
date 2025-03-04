<?php

namespace Zen\Threes\Api\debug;

use Zen\Threes\Models\Unit;
use Zen\Threes\Console\Vector;
use Zen\Threes\Classes\units\OpcodeGenerator;


class Tests
{
    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {
        ths()->nodes()->addNode('test1', 0);
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}
