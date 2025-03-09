<?php

namespace Zen\Threes\Api\Frames;

class Frame
{
    # http://threes.dc/threes.api/frames.Frame:saveProgram
    public function saveProgram(): array
    {
        ths()->requestDebug('saveProgram');
        ths()->frames()->saveProgram(
            request('fid'),
            request('program')
        );
        return [];
    }

    # http://threes.dc/threes.api/frames.Frame:loadProgram?fid=test1
    public function loadProgram(): array
    {
        return [
            'program' => ths()->frames()->loadProgram(request('fid'))
        ];
    }

    # http://threes.dc/threes.api/frames.Frame:addLine?fid=grok
    public function addLine()
    {
        $fid = request('fid');
        ths()->frames()->addLine($fid);
        return [];
    }


}
