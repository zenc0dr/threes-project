<?php

namespace Zen\Threes\Exceptions;

use Exception;

class AuthException extends Exception
{
    public function __construct(string $message = 'Необходима авторизация')
    {
        parent::__construct($message, 401);
    }
}
