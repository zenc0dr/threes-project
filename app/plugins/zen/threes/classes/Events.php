<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

/**
 * Система внутренних событий Threes
 * Возможно не понадобиться
 */
class Events
{
    use SingletonTrait;

    private array $events = [];

    /**
     * Добавляет событие в систему событий
     *
     * @param string $hook_name Имя хука
     * @param string $call Имя вызываемого метода
     * @param mixed ...$arguments Аргументы для вызываемого метода
     * @return void
     */
    public function addEvent(string $hook_name, string $call, ...$arguments): void
    {
        $this->events[] = [
            'hook_name' => $hook_name,
            'call' => $call,
            'arguments' => $arguments
        ];
    }

    /**
     * Выполняется при завершении работы приложения
     *
     * @return void
     */
    public function terminating(): void
    {
        collect($this->events)
            ->where('hook_name', 'terminating')
            ->each(function($event) {
                $this->runEvent($event);
            });
    }

    /**
     * Выполняет событие
     *
     * @param array $event Массив данных события
     * @return void
     */
    public function runEvent(array $event): void
    {
        $call = $event['call'];
        $arguments = $event['arguments'];
        ths()->exe($call, null, $arguments);
    }
}
