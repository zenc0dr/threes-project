<?php

namespace Zen\Threes\Classes\Units;

class Opcode
{
    public function write(string|array|null $exe, string $fid)
    {
        if (!$exe) {
            return;
        }
        if (is_array($exe)) {

            if (!isset($exe['code'])) {
                return;
            }

            $exe = $exe['code'];
        }

        $frame = ths()->frames()->get($fid);
        $this->writeCode($frame->id, $exe);

    }

    private function getFramePath(int $frame_id): string
    {
        return base_path('plugins/zen/threes/classes/frames/Frame_' . $frame_id . '.php');
    }

    private function writeCode(int $frame_id, string $exe): void
    {
        $path = $this->getFramePath($frame_id);

        if (!ths()->getState("frame:$frame_id:created")) {
            $code = view('zen.threes::blueprints.frames.frame', [
                'frame_id' => $frame_id,
            ])->render();
            file_put_contents($path, $code);
            ths()->setState("frame:$frame_id:created", true);
        }

        # Читаем сгенерированный шаблон с плейсхолдером
        $code = file_get_contents($path);
        $code = str_replace('#%code_writer%#', '        ' . $exe . PHP_EOL . '#%code_writer%#', $code);
        file_put_contents($path, $code);
    }
}
