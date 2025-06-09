<?php

namespace Zen\Threes\Classes\Helpers;

use Illuminate\Support\Collection;
use File;

trait Files
{
    /**
     * Проверить адрес файла и рекурсивно создать недостающие папки
     * @param string $path
     * @param int $permissions
     * @return string
     */
    public function checkDir(string $path, int $permissions = 0777): string
    {
        # Проверяем, считается ли путь директорией (по завершающему слэшу)
        $is_directory = str_ends_with($path, DIRECTORY_SEPARATOR);

        # Определяем, какую директорию нужно создать
        $target_dir = $is_directory ? rtrim($path, DIRECTORY_SEPARATOR) : dirname($path);

        # Создаём директорию, если её нет
        if (!is_dir($target_dir)) {
            mkdir($target_dir, $permissions, true);
        }

        # Возвращаем путь без завершающего слэша
        return rtrim($path, DIRECTORY_SEPARATOR);
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

    /**
     * Рекурсивное удаление содержимого директории
     * @param string $dir_path
     * @return void
     */
    public function shellRemoveDir(string $dir_path): void
    {
        if (!file_exists($dir_path) || !is_dir($dir_path) || empty($dir_path)) {
            return;
        }
        $escaped_path = escapeshellarg($dir_path);
        shell_exec("rm -rf $escaped_path/*");
    }
}
