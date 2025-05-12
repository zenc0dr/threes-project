<?php namespace Zen\Threes\Console;

use Illuminate\Console\Command;

class Vector extends Command
{
    protected $signature = 'threes:vector';
    protected $description = 'Generate vector.md for ai';

    public function handle()
    {
        $exclude = [
            '/app/plugins/zen/threes/node_modules',
            '/app/plugins/zen/threes/package-lock.json',
            '/app/plugins/zen/threes/assets',
            '/app/plugins/zen/threes/controllers',
            '/app/plugins/zen/threes/src/vue/trash',
        ];

        // Файлы, которые нужно включить в любом случае
        $force_include = [
            '/app/plugins/zen/threes/README.md',
            '/app/plugins/zen/threes/plugin.yaml',
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

            // Принудительное включение файлов из белого списка
            if (in_array($path, $force_include)) {
                $this->processFile($path, $output);
                continue;
            }

            // Проверка расширения файла
            if (!in_array($ext, $allow_extensions)) {
                continue;
            }

            // Проверка на исключенные пути
            $excluded = false;
            foreach ($exclude as $item) {
                if (str_starts_with($path, $item)) {
                    $excluded = true;
                    break;
                }
            }
            if ($excluded) {
                continue;
            }

            $this->processFile($path, $output);
        }

        $markdown = join(PHP_EOL, $output);
        $output_path = storage_path('threes_vector.md');
        file_put_contents($output_path, $markdown);
        $this->output->writeln("Output: $output_path");
    }

    protected function processFile(string $path, array &$output)
    {
        $this->output->writeln("Render file: $path");
        $code = file_get_contents($path);
        $cleanPath = preg_replace('/^\/app\//', '', $path);
        $output[] = "`$cleanPath`" . PHP_EOL . '```' . $code . PHP_EOL . '```';
    }
}
