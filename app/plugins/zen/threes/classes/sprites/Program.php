<?php

namespace Zen\Threes\Classes\Sprites;

use Zen\Threes\Models\Sprite;

trait Program
{
    /**
     * Сохранить программу спрайта
     * @param string $sid
     * @param array $program
     * @return string[]
     */
    public function programSave(string $sid, array $program): array
    {
        $sprite = Sprite::find($sid);
        $sprite->program = $program;
        $sprite->save();

        return [
            'success' => 'true',
        ];
    }

    public function programLoad(string $sid): array
    {
        $sprite = Sprite::find($sid);
        return [
            'success' => true,
            'program' => $sprite,
        ];
    }
}
