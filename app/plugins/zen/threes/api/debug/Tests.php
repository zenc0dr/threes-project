<?php

namespace Zen\Threes\Api\debug;
class Tests
{
    # http://threes.dc/zen/threes/api/debug.Tests:debug
    public function debug()
    {
        dd(
            ths()->settings('author_token')
        );
    }

    # http://threes.dc/zen/threes/api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}
