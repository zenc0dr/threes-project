<?php

namespace Zen\Threes\Classes\Helpers;

trait Carbon
{
    function carbon(?string $date = null, ?string $format = null): \Carbon\Carbon
    {
        return $format
            ? \Carbon\Carbon::createFromFormat($format, $date)
            : \Carbon\Carbon::parse($date ?? now());
    }
}
