<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

class Fitter
{
    use SingletonTrait;

    public function build(string $sid)
    {
        dd('ok', $sid);
    }
}
