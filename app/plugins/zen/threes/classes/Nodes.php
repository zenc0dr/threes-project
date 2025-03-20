<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

class Nodes
{
    use SingletonTrait;

    /**
     * Генерирует NID (токен нода)
     * @return string
     */
    public function createNidToken(): string
    {
        $author = ths()->settings('author_token') ?? 'project';
        $scope = 'default';
        $token = ths()->createToken();
        return "$author.$scope.$token";
    }
}
