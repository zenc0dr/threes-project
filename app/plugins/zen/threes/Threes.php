<?php

namespace Zen\Threes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Settings;
use Zen\Threes\classes\Helpers;

class Threes extends Helpers
{
    use SingletonTrait;

    /**
     * Базовый механизм внутреннего api
     * @param string $path
     * @param string $method
     * @param ...$data
     * @return mixed
     */
    public function api(string $path, string $method, ...$data): mixed
    {
        $path = str_replace('.', '\\', $path);
        return app("Zen\Threes\Api\\$path")->{$method}(...$data);
    }

    /**
     * Рефлексивный метод вызова
     * @param string $path
     * @param mixed|null $constructor
     * @param ...$arguments
     * @return mixed
     * @throws \ReflectionException
     */
    public function exe(string $path, mixed $constructor = null, ...$arguments): mixed
    {
        $path = explode('.', $path);
        $method = array_pop($path);
        $path = join('\\', $path);
        $class = "\\$path";

        try {
            $is_static = (new \ReflectionMethod($class, $method))->isStatic();
        } catch (\Exception $e) {
            return null;
        }

        if ($is_static) {
            return $class::$method(...$arguments);
        } else {
            $instance = new $class($constructor);
            return $instance->$method(...$arguments);
        }
    }

    /**
     * Интерфейс для настроек
     * @param string $key
     * @return mixed
     */
    public function settings(string $key)
    {
        return Settings::get($key);
    }
}
