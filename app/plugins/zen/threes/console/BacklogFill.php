<?php namespace Zen\Threes\Console;

use Illuminate\Console\Command;

/**
 * BacklogFill Command
 *
 * @link https://docs.octobercms.com/3.x/extend/console-commands.html
 */
class BacklogFill extends Command
{

    protected $signature = 'threes:backlog_fill';
    protected $description = 'Заполнить бэклог';

    public function handle()
    {
        $this->output->writeln("Обрабатываю данные...");
        ths()->backlog()->handleVector();
        $this->output->writeln("Обработка завершена.");
    }
}
