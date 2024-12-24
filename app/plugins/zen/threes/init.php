<?php

if (!function_exists('ths')) {
    function ths(): \Zen\Threes\Threes
    {
        return \Zen\Threes\Threes::getInstance();
    }
}
