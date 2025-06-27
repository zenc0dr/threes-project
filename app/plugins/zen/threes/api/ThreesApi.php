<?php

namespace Zen\Threes\Api;

use Zen\Threes\Exceptions\AuthException;

abstract class ThreesApi
{
    protected array $auth = [];

    protected function requireAuth(callable $callback): array
    {
        try {
            $this->auth = ths()->auth()::check();
            return $callback();
        } catch (AuthException $e) {
            ths()->messages()->addMessage($e->getMessage(), 'error');
            return ['success' => false];
        } catch (\Throwable $e) {
            ths()->messages()->addMessage("Ошибка: " . $e->getMessage(), 'error');
            return ['success' => false];
        }
    }
}
