<?php

namespace Zen\Threes\Traits;

trait SingletonTrait
{
    private static ?self $instance = null;

    public static function getInstance(mixed $var = null): self {
        if (!self::$instance) {
            self::$instance = new self($var);
        }

        return self::$instance;
    }

    /* zenc0dr: Раскомментировать при явной необходимости
    private function __construct() {}
    private function __clone() {}
    public function __wakeup() {}
    */
}
