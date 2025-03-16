<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

/**
 * CbСистема внутренних событий Threes
 * Возможно не понадобиться
 */
class Events
{
    use SingletonTrait;

    private array $events = [];

    public function addEvent()
    {

    }

    /**
     * Выполняется при завершении работы приложения
     * @return void
     */
    public function terminating(): void
    {

    }
}
