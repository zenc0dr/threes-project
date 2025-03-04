<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Models\Frame;
use Zen\Threes\Traits\SingletonTrait;

class Frames
{
    use SingletonTrait;

    public function saveProgram(string $fid, array $program): void
    {
        Frame::findByFid($fid)->update(['program' => $program]);
    }

    public function loadProgram(string $fid): array
    {
        return Frame::findByFid($fid)->program;
    }

    public function addLine(string $fid): void
    {
        $frame = Frame::findByFid($fid);
        $program = $frame->program;
        $program[] = [];
        $frame->program = $program;
        $frame->save();
    }
}
