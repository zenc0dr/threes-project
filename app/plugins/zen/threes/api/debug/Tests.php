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

        $node = ths()->nodes()->model()->find('threes.default.node6');
        $node->name = 'Новое имя';
        $node->save();
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}
