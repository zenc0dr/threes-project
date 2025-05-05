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
        $path = $this->capitalizeLastSegmentFast($path);

        if (str_contains($method, '-')) {
            $method = ths()->kebabToCamel($method);
        }

        return app("Zen\Threes\Api\\$path")->{$method}(...$data);
    }

    /**
     * Данный метод преобразует nodes.program в nodes.Program
     * позволяя делать красивые URL
     * @param string $path
     * @return string
     */
    function capitalizeLastSegmentFast(string $path): string {
        $lastSlashPos = strrpos($path, '\\');
        if ($lastSlashPos === false) {
            return ucfirst($path);
        }
        return substr($path, 0, $lastSlashPos + 1) . ucfirst(substr($path, $lastSlashPos + 1));
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
        if (!$path) {
            return null;
        }
        $is_static = (new \ReflectionMethod($class, $method))->isStatic();
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
    public function getSetting(string $key): mixed
    {
        return Settings::get($key);
    }

    public function setSetting(string $key, mixed $value): void
    {
        $settings = Settings::instance();
        $settings->setAttribute($key, $value);
        $settings->save();
    }
}
