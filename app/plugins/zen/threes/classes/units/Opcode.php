<?php

namespace Zen\Threes\Classes\Units;

class Opcode
{
    public function write(string $exe, string $fid, ?string $program_stage = null)
    {
        $frame = ths()->frames()->get($fid);
        $this->writeCode($frame->id, $exe, $program_stage);
    }

    private function getFramePath(int $frame_id): string
    {
        return base_path('plugins/zen/threes/classes/frames/Frame_' . $frame_id . '.php');
    }

    private function writeCode(int $frame_id, string $exe, ?string $program_stage = null): void
    {
        $path = $this->getFramePath($frame_id);
        if ($program_stage === 'start') {
            $code = view('zen.threes::blueprints.frames.frame', [
                'frame_id' => $frame_id,
            ])->render();
            file_put_contents($path, $code);
        }

        $code = file_get_contents($path);
        $code = str_replace('#%code_writer%#', $exe . '#%code_writer%#', $code);
        file_put_contents($path, $code);
    }
}
