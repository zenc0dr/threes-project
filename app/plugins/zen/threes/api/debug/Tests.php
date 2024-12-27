<?php

namespace Zen\Threes\Api\debug;

use Zen\Threes\Models\Unit;
class Tests
{
    # http://threes.dc/zen/threes/api/debug.Tests:createUnitTest
    public function createUnitTest()
    {
        $token = uniqid();
        $unit = new Unit();
        $unit->tid = "zen.test.$token";
        $unit->name = "Test unit $token";
        //$unit->zen_name = 'Имя тестового юнита';
        $unit->save();

        dd($unit->toArray());
    }

    # http://threes.dc/zen/threes/api/debug.Tests:readUnitTest?tid=zen.test.676ec5b92d3b5
    public function readUnitTest()
    {
        $tid = request("tid");
        $unit = Unit::find($tid);

        dd($unit->toArray());
    }



    # http://threes.dc/zen/threes/api/debug.Tests:run
    public function run()
    {
        dd('Threes api works!');
    }
}
