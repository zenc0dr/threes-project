<?php

namespace Zen\Threes\Classes\Helpers;

use Zen\Threes\Traits\SingletonTrait;

trait State
{
    use SingletonTrait;

    private array $state = [];

    /**
     * Сохранить состояние
     * @param string $key
     * @param mixed $value
     * @return void
     */
    public function setState(string $key, mixed $value): mixed
    {
        return $this->state[$key] = $value;
    }

    /**
     * Загрузить состояние
     * @param string $key
     * @return mixed
     */
    public function getState(string $key): mixed
    {
        return $this->state[$key] ?? null;
    }
}
