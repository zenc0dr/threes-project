<?php

namespace Zen\Threes\Classes;

class Types
{
    public static function getType(string $type = 'Threes.NodeText'): array
    {
        $types_path = ths()->env('TYPES_STORAGE');
        return ths()->fromJsonFile("$types_path/$type.json");
    }
}
