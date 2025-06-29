<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Closure;
use Illuminate\Support\Collection;

/**
 * Система внутренних событий Threes
 */
class Events
{
    use SingletonTrait;

    /**
     * @var array[] Список событий
     */
    private array $events = [];

    /**
     * Добавляет событие в систему событий
     *
     * @param string $hook_name Имя хука
     * @param string|Closure $call Метод или замыкание
     * @param mixed ...$arguments Аргументы метода
     * @return void
     */
    public function addEvent(string $hook_name, string|Closure $call, ...$arguments): void
    {
        $this->events[] = compact('hook_name', 'call', 'arguments');
    }

    /**
     * Добавляет одно неповторяемое событие
     *
     * @param string $hook_name Имя хука
     * @param string|Closure $call Метод или замыкание
     * @param mixed ...$arguments Аргументы метода
     * @return void
     */
    public function addEventOnce(string $hook_name, string|Closure $call, ...$arguments): void
    {
        foreach ($this->events as $event) {
            if ($event['hook_name'] === $hook_name) {
                return;
            }
        }

        $this->events[] = compact('hook_name', 'call', 'arguments');
    }

    /**
     * Выполняется при завершении работы приложения
     *
     * @return void
     */
    public function terminating(): void
    {
        Collection::make($this->events)
            ->where('hook_name', 'terminating')
            ->each(fn($event) => $this->runEvent($event));
    }

    /**
     * Выполняет событие
     *
     * @param array $event
     * @return void
     * @throws \ReflectionException
     */
    public function runEvent(array $event): void
    {
        $call = $event['call'];
        $arguments = $event['arguments'];

        if (is_string($call)) {
            ths()->exe($call, null, $arguments);
        } elseif ($call instanceof Closure) {
            $call(...$arguments);
        }
    }
}
