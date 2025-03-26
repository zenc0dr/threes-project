<?php

if (!function_exists('ths')) {
    ### Threes entry point for Fluent API
    function ths(): \Zen\Threes\Threes
    {
        return \Zen\Threes\Threes::getInstance();
    }
}
