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

        # Добавляем событие для удаления плейсхолдера из Frame
        ths()->events()->addEvent(
            'terminating',
            'Zen.Threes.Classes.Units.Opcode.removePlaceHolder',
            $frame->id
        );
    }

    # Тут надо удалить из файла
    public function removePlaceHolder($data)
    {
        $frame_id = intval($data[0]);
        $path = $this->getFramePath($frame_id);
        $code = file_get_contents($path);
        $code = preg_replace('/.*#%code_writer%#.*\n?/i', '', $code);
        file_put_contents($path, $code);
    }

    private function getFramePath(int $frame_id): string
    {
        return ths()->frames()->getFramePath($frame_id);
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
