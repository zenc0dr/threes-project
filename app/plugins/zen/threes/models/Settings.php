<?php

namespace Zen\Threes\Models;

use October\Rain\Database\Model;
use October\Rain\Database\Traits\Validation as ValidationTrait;

/**
 * Модель настроек
 * Существует хелпер для получения параметров: ths()->settings('Ключ')
 * Посмотреть ключи можно тут: app/plugins/zen/threes/models/settings/fields.yaml
 */
class Settings extends Model
{
    use ValidationTrait;
    public $implement = ['System.Behaviors.SettingsModel'];
    public string $settingsCode = 'zen_threes_settings';
    public string $settingsFields = 'fields.yaml';
    public $rules = [];
}
