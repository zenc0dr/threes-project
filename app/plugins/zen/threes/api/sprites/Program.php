<?php

namespace Zen\Threes\Api\Sprites;

use Zen\Threes\Models\Sprite;

class Program
{
    # http://threes.dc/threes.api/Sprites.Program:save
    public function save(): array
    {
        ths()->sprites()->programSave(
            request('sid'),
            request('program')
        );

        return [
            'success' => true
        ];
    }

    # http://threes.dc/threes.api/Sprites.Program:load?sid=acme
    public function load(): array
    {
        return [
            'success' => true,
            'program' => ths()->sprites()->programLoad(request('sid'))
        ];
    }

    # http://threes.dc/threes.api/Sprites.Program:move
    public function move(): array
    {
        ths()->sprites()->moveNode(
            request('sid'),
            request('nid'),
            request('after_nid')
        );

        return [
            'success' => true,
        ];
    }

    # http://threes.dc/threes.api/Sprites.Program:copy
    public function copy(): array
    {
        ths()->sprites()->copyNode(
            request('sid'),
            request('nid')
        );

        return [
            'success' => true,
        ];
    }

    # http://threes.dc/threes.api/Sprites.Program:delete
    public function delete(): array
    {
        ths()->sprites()->deleteNode(
            request('sid'),
            request('nid')
        );

        return [
            'success' => true,
        ];
    }

    # http://threes.dc/threes.api/Sprites.Program:lineActions
    public function lineActions(): array
    {
        ths()->sprites()->lineActions(
            request('sid'),
            request('action'),
            request('line_index')
        );
        return [
            'success' => true,
        ];
    }

    # http://threes.dc/threes.api/Sprites.Program:buildCode?sid=test
    public function buildCode()
    {
        ths()->sprites()->buildCode(request('sid'));
        return [
            'success' => true,
        ];
    }
}
