<?php namespace Zen\Threes\Console;

use Illuminate\Console\Command;

/**
 * Restore Command
 *
 * Копирует файл пользователя в хранилище токенов
 * @link https://docs.octobercms.com/3.x/extend/console-commands.html
 */
class Restore extends Command
{
    protected $signature = 'threes:restore';
    protected $description = 'Восстановить токен пользователя из резервной копии';

    public function handle()
    {
        $source = base_path('plugins/zen/threes/resources/default_data/user.7e9aedd97b5ec4590edb8281ff12b168.json');
        $destination = storage_path('threes/tokens/user.7e9aedd97b5ec4590edb8281ff12b168.json');
        
        copy($source, $destination);
        
        $this->output->writeln("Файл скопирован: {$destination}");
    }
} 