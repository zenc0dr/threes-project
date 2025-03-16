<?php namespace Zen\Threes;

use System\Classes\PluginBase;
use Zen\Threes\Console\Vector;
use Zen\Threes\Threes;

class Plugin extends PluginBase
{
    public function register(): void
    {
        //Threes::getInstance()->
        # Регистрация консольных команд
        $this->registerConsoleCommand('threes:vector', Vector::class);
    }

    public function boot()
    {
        app()->terminating(function () {
            ths()->events()->terminating();
        });
    }

    public function registerComponents()
    {
    }

    public function registerSettings(): array
    {
        return [
            'options' => [
                'label'       => 'Threes',
                'description' => 'Threes Options',
                'icon'        => 'icon-cubes',
                'permissions' => ['zen.threes.options'],
                'class' => 'Zen\Threes\Models\Settings',
                'order' => 100,
            ]
        ];
    }
}
