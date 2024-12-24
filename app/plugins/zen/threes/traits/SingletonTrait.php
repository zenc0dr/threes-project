<?php

namespace Zen\Threes\Traits;

trait SingletonTrait
{
    private static ?self $instance = null;

    public static function getInstance(): self {
        if (!self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    private function __construct() {}

    private function __clone() {}

    public function __wakeup() {}
}
