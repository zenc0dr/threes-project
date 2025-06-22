<?php

if (!function_exists('ths')) {
    function ths(): \Zen\Threes\Threes # Threes entry point for Fluent API
    {
        return \Zen\Threes\Threes::getInstance();
    }
}
