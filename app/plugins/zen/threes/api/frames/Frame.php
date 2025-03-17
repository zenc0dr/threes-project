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
        $line_index = ths()->frames()->addLine(request('fid'));
        ths()->messages()->addMessage("Линия добавлена #$line_index");
        return [];
    }

    # http://threes.dc/threes.api/frames.Frame:removeNodes
    public function removeNodes(): array
    {
        ths()->requestDebug(); # todo:debug
        ths()->frames()->removeNodes(
            request('fid'),
            request('nids')
        );
        ths()->messages()->addMessage('Ноды отвязаны');
        return [];
    }
}
