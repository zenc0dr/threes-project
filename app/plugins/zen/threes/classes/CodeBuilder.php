<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Models\Sprite;

class CodeBuilder
{
    private Sprite $sprite;

    public function __construct(string $sid)
    {
        $this->sprite = Sprite::find($sid);
    }

    public function generate() {
        $program = $this->sprite->program;
        dd($program);
    }

    private function loadSprite() {

    }
}
