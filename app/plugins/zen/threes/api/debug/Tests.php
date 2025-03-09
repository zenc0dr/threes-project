<?php

namespace Zen\Threes\Api\debug;

use Zen\Threes\Models\Layer;
use Zen\Threes\Models\Unit;
use Zen\Threes\Console\Vector;
use Zen\Threes\Classes\units\OpcodeGenerator;


class Tests
{
    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {
        $layer_data = ths()->fromJsonFile(
            storage_path('layer_data.json')
        );

        Layer::set($layer_data);
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}
