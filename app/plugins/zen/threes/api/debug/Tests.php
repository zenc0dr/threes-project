<?php

namespace Zen\Threes\Api\debug;

use Zen\Threes\Models\Unit;
use Zen\Threes\Console\Vector;
class Tests
{
    # http://threes.dc/zen/threes/api/debug.Tests:debug
    public function debug()
    {
        $data = ths()->fromJsonFile(storage_path('test.json'));

        $sid = $data['sprite_id'];
        $data = $data['data'];

        ths()->sprites()->saveNode($sid, $data);
    }

    # http://threes.dc/zen/threes/api/debug.Tests:apiTest
    public function apiTest()
    {
        return 'Отлично, ajax работает!';
    }

    # http://threes.dc/zen/threes/api/debug.Tests:loadUnit?tid=
    public function loadUnit()
    {
        $unit = Unit::find(request('tid'));
        dd($unit->toArray());
    }

    # http://threes.dc/zen/threes/api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}
