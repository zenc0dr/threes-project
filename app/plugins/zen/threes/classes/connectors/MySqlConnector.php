<?php

namespace Zen\Threes\Classes\Connectors;

use Illuminate\Database\Connection;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class MySqlConnector
{
    /**
     * Устанавливает соединение с базой данных MySQL с возможностью переопределения параметров
     *
     * @param array $config Параметры подключения (хост, пользователь, пароль и т.д.)
     * @return Connection
     */
    public static function connect(array $config = []): Connection
    {
        // Если конфигурация не передана, используем стандартное подключение
        if (empty($config)) {
            return DB::connection('mysql');
        }

        // Имя для динамического соединения
        $connectionName = 'mysql_dynamic';

        // Устанавливаем конфигурацию для нового соединения,
        // используя за основу стандартные настройки MySQL
        Config::set("database.connections.{$connectionName}", array_merge(
            config('database.connections.mysql'),
            $config
        ));

        // Очищаем кеш соединения, если оно уже было создано
        DB::purge($connectionName);

        // Возвращаем новое соединение с переопределёнными параметрами
        return DB::connection($connectionName);
    }
}
