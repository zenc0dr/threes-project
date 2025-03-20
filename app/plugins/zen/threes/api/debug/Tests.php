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
        dd('Start debug');
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}
