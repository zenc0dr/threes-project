<?php

namespace Zen\Threes\Traits;

trait PipelinesTrait
{
    private static function exe(string $class, string $method, $input) {
        $refMethod = new \ReflectionMethod($class, $method);
        if ($refMethod->isStatic()) {
            return $class::$method($input);
        }
        $instance = new $class();
        return $instance->$method($input);
    }
}
