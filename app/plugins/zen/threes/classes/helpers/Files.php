<?php

namespace Zen\Threes\Classes\Helpers;

use Illuminate\Support\Collection;
use File;

trait Files
{
    /**
     * Проверить адрес файла и рекурсивно создать недостающие папки
     * @param string $file_path
     * @param int $permissions
     * @return string
     */
    public function checkDir(string $file_path, int $permissions = 0777): string
    {
        $dirname = dirname($file_path);
        if (!is_dir($dirname)) {
            mkdir($dirname, $permissions, true);
        }
        return $file_path;
    }

    /**
     * Возвращает коллекцию со списком файлов в указанной папке
     * @param string $dir_path - Путь к папке
     * @param bool $recursive - Рекурсивное сканирование (отключено по умолчанию)
     * @return Collection
     */
    public function filesList(string $dir_path, bool $recursive = false): Collection
    {
        $files = $recursive ? File::allFiles($dir_path) : File::files($dir_path);
        $output = [];
        foreach ($files as $file) {
            $output[] = [
                'name' => $file->getFilename(),
                'extension' => $file->getExtension(),
                'path' => $file->getRealPath(),
                'size' => $file->getSize()
            ];
        }
        return collect($output);
    }

    /**
     * Возвращает список папок в папке
     * @param string $dir_path
     * @return array
     */
    public function dirList(string $dir_path): array
    {
        return array_filter(scandir($dir_path), function ($entry) use ($dir_path) {
            return $entry !== '.' && $entry !== '..' && is_dir($dir_path . '/' . $entry);
        });
    }
}
