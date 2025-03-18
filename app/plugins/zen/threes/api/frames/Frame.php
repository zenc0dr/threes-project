<?php

namespace Zen\Threes\Api\Frames;

use Zen\Threes\Traits\QueryLogTrait;
use function MongoDB\BSON\toJSON;

class Frame
{
    use QueryLogTrait;

    # http://threes.dc/threes.api/frames.Frame:saveProgram
    protected function saveProgram(): array
    {
        ths()->frames()->saveProgram(
            request('fid'),
            request('program')
        );
        return [];
    }

    # http://threes.dc/threes.api/frames.Frame:loadProgram?debug
    protected function loadProgram(): array
    {
        return [
            'program' => ths()->frames()->loadProgram(request('fid'))
        ];
    }

    # http://threes.dc/threes.api/frames.Frame:addLine?debug
    protected function addLine(): array
    {
        $line_index = ths()->frames()->addLine(request('fid'));
        ths()->messages()->addMessage("Линия добавлена #$line_index");
        return [];
    }

    # http://threes.dc/threes.api/frames.Frame:removeNodes
    protected function removeNodes(): array
    {
        ths()->frames()->removeNodes(
            request('fid'),
            request('nids')
        );
        ths()->messages()->addMessage('Ноды отвязаны');
        return [];
    }

    # http://threes.dc/threes.api/frames.Frame:copyNodes
    protected function copyNodes(): array
    {
        ths()->frames()->copyNodes(
            request('fid'),
            request('nids')
        );
        ths()->messages()->addMessage('Ноды скопированы');
        return [];
    }

    # http://threes.dc/threes.api/frames.Frame:buildFrame?debug
    protected function buildFrame(): array
    {
        ths()->frames()->abstractor(request('fid'));
        ths()->messages()->addMessage('Программа собрана');
        return [];
    }
}
