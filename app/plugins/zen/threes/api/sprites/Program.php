<?php

namespace Zen\Threes\Api\Sprites;

use Zen\Threes\Models\Sprite;

class Program
{
    # http://threes.dc/threes.api/Sprites.Program:save
    public function save(): array
    {
        $sid = request('sid');
        $program = request('program');

        ths()->sprites($sid)->programSave($sid, $program);

        return [
            'success' => true
        ];
    }

    # http://threes.dc/threes.api/Sprites.Program:load?sid=acme
    public function load(): array
    {
        $sid = request('sid');
        return [
            'success' => true,
            'program' => Sprite::find($sid)?->program
        ];
    }
}
