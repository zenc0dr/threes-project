<?php

namespace Zen\Threes\Api\Units;

class Records
{
    /**
     * http://threes.dc/zen/threes/api/Units.Records:get
     * plugins/zen/threes/classes/units/Records.php
     * @return void
     */
    public function get()
    {
        dd(
            ths()->units()->getRecords()
        );
    }
}
