<?php namespace Zen\Threes;

use System\Classes\PluginBase;
use Zen\Threes\Console\Vector;
use Zen\Threes\Console\BacklogFill;
use Zen\Threes\Console\Gen;
use Zen\Threes\Console\Restore;
use Log;

class Plugin extends PluginBase
{
    public function register(): void
    {
        # Регистрация консольных команд
        $this->registerConsoleCommand('threes:vector', Vector::class);
        $this->registerConsoleCommand('threes:backlog_fill', BacklogFill::class);
        $this->registerConsoleCommand('threes:gen', Gen::class);
        $this->registerConsoleCommand('threes:restore', Restore::class);
    }

    public function boot()
    {
        app()->terminating(function () {
            try {
                if (function_exists('ths')) {
                    ths()->events()->terminating();
                }
            } catch (\Exception $e) {
                Log::error('Zen.Threes: terminating event error: ' . $e->getMessage());
            }
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
