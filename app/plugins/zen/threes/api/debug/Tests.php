<?php

namespace Zen\Threes\Api\debug;

use Zen\Threes\Models\Node;
use Zen\Threes\Models\Layer;
use Zen\Threes\Models\Unit;
use Zen\Threes\Models\Frame;
use Zen\Threes\Classes\Frames\Frame_23;


class Tests
{
    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {
        // Zen.Threes.Classes.Units.Opcode.write
        //ths()->exe('Zen.Threes.Classes.Units.Opcode.write', null, 'hallo');
        //$value = 123412341234;
        //ths()->toJsonFile(storage_path('increment_test'), ['value' => $value]);
        ths()->frames()->abstractor('code');
        //ths()->exe('Zen.Threes.Frames.Frame_23.flow');

        //(new Frame_23)->flow();
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        Node::truncate();
        Layer::truncate();

        //dd('Threes api works!');
    }
}
