<?php

namespace Zen\Threes\Api\debug;

use Zen\Threes\Models\Unit;
class Tests
{
    # http://threes.dc/zen/threes/api/debug.Tests:debug
    public function debug()
    {
        $unit = new Unit();
        $unit->tid = 'zen.test.unit';
        $unit->name = 'Test unit';
        //$unit->zen_name = 'Имя тестового юнита';
        $unit->save();

        dd($unit->toArray());
    }

    # http://threes.dc/zen/threes/api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}
