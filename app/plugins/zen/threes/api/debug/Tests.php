<?php

namespace Zen\Threes\Api\debug;

use Zen\Threes\Models\Unit;
class Tests
{
    # http://threes.dc/zen/threes/api/debug.Tests:debug
    public function debug()
    {
        ths()->toYamlFile(
            storage_path('test.yaml'),
            [
                'foo' => [
                    'bar' => 1,
                    'baz' => 2,
                    'faz' => 3
                ]
            ]
        );

//        dd(
//            ths()->settings('author_token')
//        );
    }

    # http://threes.dc/zen/threes/api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}
