<?php

namespace Zen\Threes\Api\Sprites;

use Zen\Threes\Models\Sprite;

class Program
{
    # http://threes.dc/threes.api/Sprites.Program:save
    public function save(): array
    {
        ths()->requestDebug();

        $sid = request('sid');
        $program = request('program');


        dd(
            $sid,
            $program
        );

        ths()->sprites($sid)->programSave($program);

        return [
            'success' => true
        ];
    }
}
