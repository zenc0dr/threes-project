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

    # http://threes.dc/threes.api/Sprites.Program:move
    public function move(): array
    {
        //ths()->requestDebug('move');
        $sid = request('sid');
        $nid = request('nid');
        $after_nid = request('after_nid');
        ths()->sprites()->moveNode($sid, $nid, $after_nid);

        return [
            'success' => true,
        ];
    }

    # http://threes.dc/threes.api/Sprites.Program:copy
    public function copy(): array
    {
        $sid = request('sid');
        $nid = request('nid');

        ths()->sprites()->copyNode($sid, $nid);

        return [
            'success' => true,
        ];
    }

    # http://threes.dc/threes.api/Sprites.Program:delete
    public function delete(): array
    {
        $sid = request('sid');
        $nid = request('nid');

        ths()->sprites()->deleteNode($sid, $nid);

        return [
            'success' => true,
        ];
    }
}
