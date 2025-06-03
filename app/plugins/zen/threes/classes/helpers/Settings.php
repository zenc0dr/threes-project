<?php

namespace Zen\Threes\Classes\Helpers;

use Zen\Threes\Models\Settings as SettingsModel;

trait Settings
{
    /**
     * Интерфейс для настроек
     * @param string $key
     * @return mixed
     */
    public function getSetting(string $key): mixed
    {
        return SettingsModel::get($key);
    }

    /**
     * Вписать настройку
     * @param string $key
     * @param mixed $value
     * @return void
     */
    public function setSetting(string $key, mixed $value): void
    {
        $settings = SettingsModel::instance();
        $settings->setAttribute($key, $value);
        $settings->save();
    }
}
