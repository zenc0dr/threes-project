<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Classes\Units\UnitRecords;
use Zen\Threes\Classes\Units\UnitRecord;
use Zen\Threes\Traits\SingletonTrait;

class Units
{
    use SingletonTrait;
    use UnitRecords;
    use UnitRecord;
}
