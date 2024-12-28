<?php namespace Zen\Threes\Console;

use Illuminate\Console\Command;
use Exception;

/**
 * Vector Command
 *
 * @link https://docs.octobercms.com/3.x/extend/console-commands.html
 */
class Vector extends Command
{
    protected $signature = 'threes:vector';
    protected $description = 'Generate vector.md for ai';

    public function handle()
    {
        $exclude = [
            'plugins/zen/threes/api/debug'
        ];

        $allow_extensions = [
            'php', 'yaml', 'json', 'js', 'css', 'html', 'htm', 'txt'
        ];

        $this->output->writeln("Scanning directory...");
        $files = ths()->filesList(
            base_path('plugins/zen/threes'),
            true
        );

        $output = [];
        foreach ($files as $file) {
            $path = $file['path'];
            $ext = $file['extension'];

            if (!in_array($ext, $allow_extensions)) {
                continue;
            }

            $this->output->writeln("Render file: $path");
            $code = file_get_contents($path);
            $path = preg_replace('/^\/app\//', '', $path);

            foreach ($exclude as $item) {
                if (str_starts_with($path, $item)) {
                    continue 2;
                }
            }

            $output[] = "`$path`" . PHP_EOL . '```' . $code . PHP_EOL . '```';
        }

        $markdown = join(PHP_EOL, $output);
        $output_path = storage_path('threes_vector.md');
        file_put_contents(
            $output_path,
            $markdown
        );
        $this->output->writeln("Joutput: $output_path");
    }
}
