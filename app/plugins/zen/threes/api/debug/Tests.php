<?php

namespace Zen\Threes\Api\debug;

use Http;
use Zen\Threes\Classes\Services\OpenAiService;
use Symfony\Component\Yaml\Yaml;
use Symfony\Component\Yaml\Dumper;
//use Zen\Threes\Classes\Gen;
use Zen\Threes\Models\Node;
use Zen\Threes\Models\Feature;
use Zen\Threes\Classes\Nodes;
use Zen\Threes\Console\Vector;
use Zen\Threes\Traits\DebugLogTrait;
use Zen\Threes\Classes\Tokens;

/**
 * Данный класс существует для отладки и экспериментов
 * в нем всегда должны быть два метода: debug (по возможности оставлять пустым) и test (для теста api)
 */
class Tests
{
    use DebugLogTrait;

    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {
        $token = Tokens::create();
        dd($token);
    }

    # http://threes.dc/threes.api/debug.Tests:testConnector
    public function testConnector()
    {
        $items = ths()->connector()->mySql([
            'host' => 'db',
            'database' => 'azimut',
            'username' => 'azimut',
            'password' => 'azimut',
            'port' => '3306',
        ])->table('mcmraak_rivercrs_checkins')
            ->get();
        dd($items);
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}
