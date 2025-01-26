<?php

namespace Zen\Threes\Classes\Sprites;

use Zen\Threes\Models\Sprite;

trait Program
{
    public function programSave(string $sid, array $program)
    {
        dd(
            'OKAY',
            $sid,
            $program,
        );
    }
}
