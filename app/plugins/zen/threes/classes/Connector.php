<?php

namespace Zen\Threes\Classes;

use Illuminate\Database\Connection;
use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Classes\Connectors\MySqlConnector;

class Connector
{
    use SingletonTrait;

    public function mySql(array $config = []): Connection
    {
        return MySqlConnector::connect($config);
    }
}
