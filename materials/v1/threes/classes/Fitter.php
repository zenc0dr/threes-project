<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

#TODO:DEPRECATED

class Fitter
{
    use SingletonTrait;

    public function build(string $sid)
    {
        dd('ok', $sid);
    }
}
