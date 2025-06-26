<?php

namespace Zen\Threes\Handlers;

interface TokensHandlerInterface
{
    public function onCreate(array $data): array;
    public function onGet(array $data): array;
    public function onUpdate(array $data, array $updates): array;
    public function onRemove(array $data): void;
}
