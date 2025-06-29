<?php namespace Zen\Threes\Console;

use Illuminate\Console\Command;
use Closure;

class Vector extends Command
{
    protected $signature = 'threes:vector';
    protected $description = 'Generate vector.md for ai';
    private ?Closure $outputCallback = null;

    public function handle(): void
    {
        $excluded = [
            '/app/plugins/zen/threes/assets/*',
            '/app/plugins/zen/threes/node_modules/*',
            '/app/plugins/zen/threes/controllers/*',
            '/app/plugins/zen/threes/src/vue/trash/*',
            '/app/plugins/zen/threes/package-lock.json',
        ];

        # Разрешённые расширения
        $allowed_extensions = [
            'php', 'yaml', 'json', 'js', 'css', 'html', 'htm', 'txt'
        ];

        $this->log("Scanning directory...");
        $files = ths()->filesList(
            base_path('plugins/zen/threes'),
            true,
            [
                'excluded' => $excluded,
                'allowed_extensions' => $allowed_extensions
            ]
        );

        $output = [];
        foreach ($files as $file) {
            $this->processFile($file, $output);
        }
        $markdown = join(PHP_EOL, $output);
        $output_path = storage_path('threes_vector.md');
        file_put_contents($output_path, $markdown);
        
        // Получаем размер созданного файла
        $file_size = filesize($output_path);
        $formatted_size = ths()->formatSizeUnits($file_size);
        
        $this->log("Output: $output_path");
        $this->log("File size: $formatted_size");
    }

    /**
     * Добавить запись в общий .md
     * @param array $file
     * @param array $output
     * @param int $file_size
     * @return void
     */
    protected function processFile(array $file, array &$output): void
    {
        $path = $file['path'];
        $size = $file['size'];
        $size = ths()->formatSizeUnits($size);
        $code = file_get_contents($path);
        $cleanPath = preg_replace('/^\/app\//', '', $path);
        $output[] = "`$cleanPath`" . PHP_EOL . '```' . $code . PHP_EOL . '```';
        $this->log("Render file: $path [$size]");
    }

    public function setOutputCallback(?Closure $callback): void
    {
        $this->outputCallback = $callback;
    }

    protected function log(string $message): void
    {
        if ($this->outputCallback instanceof Closure) {
            call_user_func($this->outputCallback, $message);
        } else {
            $this->output->writeln($message);
        }
    }
}
