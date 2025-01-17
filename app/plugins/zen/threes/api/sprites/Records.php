<?php

namespace Zen\Threes\Api\Sprites;

class Records
{
    /**
     * http://threes.dc/zen/threes/api/Sprites.Records:get
     * @return void
     */
    public function get()
    {
        dd(
            ths()->sprites()->getRecords()
        );
    }
}
