<?php

namespace Zen\Threes\Api\debug;

use Zen\Threes\Models\Unit;
use Zen\Threes\Console\Vector;
class Tests
{
    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {
        dd(
            ths()->createToken()
        );
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}
