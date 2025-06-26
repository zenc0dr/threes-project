<?php

namespace Zen\Threes\Api\Tests;



class TokensTests
{
    # http://threes.dc/threes.api/tests.TokensTests:makeTokenTest
    public function makeTokenTest()
    {
        $token = ths()->tokens()->createToken();

        dd($token);
    }
}
