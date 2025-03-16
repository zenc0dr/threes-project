<?php

namespace Zen\Threes\Api\Frames;

class Frame
{
    # http://threes.dc/threes.api/frames.Frame:saveProgram
    public function saveProgram(): array
    {
        //ths()->requestDebug(); # todo:debug
        ths()->frames()->saveProgram(
            request('fid'),
            request('program')
        );
        return [];
    }

    # http://threes.dc/threes.api/frames.Frame:loadProgram?fid=grok
    public function loadProgram(): array
    {
        return [
            'program' => ths()->frames()->loadProgram(request('fid'))
        ];
    }

    # http://threes.dc/threes.api/frames.Frame:addLine?fid=grok
    public function addLine(): array
    {
        ths()->frames()->addLine(request('fid'));
        return [];
    }

    # http://threes.dc/threes.api/frames.Frame:addLine?fid=grok
    public function removeNodes(): array
    {
        ths()->frames()->removeNodes(
            request('fid'),
            request('nids')
        );
        return [];
    }
}
