<?php

namespace Zen\Threes\Api\debug;

use Zen\Threes\Models\Unit;
use Zen\Threes\Console\Vector;
class Tests
{
    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {
        //ths()->sets()->set('ключ', 'значение', 'пространство', ['tag1', 'tag2', 'tag3']);
        dd(
            ths()->sets()->getBatch(scope: 'пространство')
        );

            //require_once base_path('storage/temp/threes/pipelines/Pipelines7.php');
            //dd(\Threes\Pipelines\Pipelines7::logic());
    }

    # http://threes.dc/threes.api/debug.Tests:pipelineTest?num=1
    public function pipelineTest()
    {
        $num = intval(request('num'));
        require_once base_path("storage/temp/threes/pipelines/Pipelines1.php");
        dd(
            \Threes\Pipelines\Pipelines1::exec($num)
        );
    }

    # http://threes.dc/threes.api/debug.Tests:loadUnit?tid=
    public function loadUnit()
    {
        $unit = Unit::find(request('tid'));
        dd($unit->toArray());
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}
