<?php

namespace Zen\Threes\Api\debug;

/**
 * Данный класс существует для отладки и экспериментов
 * в нем всегда должны быть два метода: debug (по возможности оставлять пустым) и test (для теста api)
 */
class Tests
{
    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {

        $array = [
            ['node1', 'node2', 'node3'],
            [],
            [],
            ['node5'],
            []
        ];

        $string = 'node1,node2,node3;;;node5;';
        //$result = ths()->nodes()->nodesToString($array);
        //$result = ths()->nodes()->nodesFromString($string);
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}
