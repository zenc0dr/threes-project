<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Classes\Helpers\Files;
use Zen\Threes\Classes\Helpers\Json;
use Zen\Threes\Classes\Helpers\Yaml;

class Helpers
{
    use Files;
    use Json;
    use Yaml;

    public function units(): Units
    {
        return Units::getInstance();
    }

    public function sprites()
    {
        return Sprites::getInstance();
    }
}
