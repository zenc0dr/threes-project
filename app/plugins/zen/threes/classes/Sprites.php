<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Classes\Sprites\Program;
use Zen\Threes\Classes\Sprites\Node;

class Sprites
{
    private ?string $sid = null;

    public function __construct(string | null $sid = null)
    {
        $this->sid = $sid;
    }


    use SingletonTrait;
    use Program;
    use Node;
}
