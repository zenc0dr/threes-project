<?php

namespace Zen\Threes\Api\Sprites;

class Records
{
    /**
     * http://threes.dc/zen/threes/api/Sprites.Records:get
     * @return void
     */
    public function get(): array
    {
        return [
            'nodes' => ths()->sprites()->getRecords()
        ];
    }
}
