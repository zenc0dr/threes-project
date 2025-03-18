<?php

namespace Zen\Threes\Api\Frames;

use Zen\Threes\Traits\QueryLogTrait;
use Zen\Threes\Models\Version;

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
    public function loadProgram(): array
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

    # http://threes.dc/threes.api/frames.Frame:buildFrame?debug
    protected function buildFrame(): array
    {
        ths()->frames()->abstractor(request('fid'));
        ths()->messages()->addMessage('Программа собрана');
        return [];
    }

    # http://threes.dc/threes.api/frames.Frame:getVersions?fid=test
    public function getVersions(): array
    {
        $fid = request('fid');
        return [
            'version' => Version::where('fid', $fid)->orderBy('id', 'desc')->first()?->id ?? 0,
            'versions' => ths()->versions()->getFrameVersions(
                $fid
            )
        ];
    }
}
