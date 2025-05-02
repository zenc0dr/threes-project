<?php namespace Zen\Threes\Console;

use Illuminate\Console\Command;

class Gen extends Command
{
    protected $signature = 'threes:gen {feature_id}';
    protected $description = 'Генерирует запрос';

    public function handle()
    {
        $feature_id = $this->argument('feature_id');
        $this->output->writeln("Hello {$feature_id}!");
    }
}
