<?php

namespace Zen\Threes\Classes\Nodes;

class Document
{
    public function text(string $data): array
    {
        return [
            'handler' => 'NodeText',
            'data' => $data,
        ];
    }
}
