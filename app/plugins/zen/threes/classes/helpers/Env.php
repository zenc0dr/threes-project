<?php

namespace Zen\Threes\Classes\Helpers;

trait Env
{
    private static array $env = [
        'NODES_STORAGE' => [
            'default' => 'storage/threes/nodes',
        ],
        'TYPES_STORAGE' => [
            'default' => 'storage/threes/types',
        ],
        'SCHEMES_STORAGE' => [
            'default' => 'storage/threes/schemes',
        ]
    ];

    public function env(string $key): ?string
    {
        if (isset(self::$env[$key]['value'])) {
            return self::$env[$key]['value'];
        }

        return self::$env[$key]['value'] = base_path(env($key, self::$env[$key]['default']));
    }
}
