<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

class Messages
{
    use SingletonTrait;

    private array $messages = [];

    /**
     * Добавить сообщение (Этот метод будет расширяться)
     * @param string $message
     * @param string $type
     * @return void
     */
    public function addMessage(string $message, string $type = "success"): void
    {
        $this->messages[] = [
            "text" => $message,
            "type" => $type
        ];
    }

    public function pushMessages(array $messages = []): array
    {
        return array_merge($this->messages, $messages);
    }
}
