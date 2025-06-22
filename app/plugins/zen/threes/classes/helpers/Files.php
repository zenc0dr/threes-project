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
     * @param array $settings - Настройки исключений exclude_names, exclude_paths, allowed_extensions
     * @return Collection
     */
    public function filesList(string $dir_path, bool $recursive = false, array $settings = []): Collection
    {
        $files = $recursive ? File::allFiles($dir_path) : File::files($dir_path);
        $output = [];
        $excluded_patterns = $settings['excluded'] ?? [];
        $allowed_extensions = $settings['allowed_extensions'] ?? [];

        foreach ($files as $file) {
            try {
                if ($file->isLink() || !file_exists($file->getRealPath())) {
                    $size = 0;
                } else {
                    $size = $file->getSize();
                }
            } catch (\Exception $e) {
                $size = 0;
            }

            $path = $file->getRealPath();
            if (empty($path)) continue;

            // Проверка по маскам
            if ($this->matchesPatterns($path, $excluded_patterns)) {
                continue;
            }

            // Проверка расширений, если указаны
            if (!empty($allowed_extensions) && !in_array($file->getExtension(), $allowed_extensions)) {
                continue;
            }

            $output[] = [
                'name' => $file->getFilename(),
                'extension' => $file->getExtension(),
                'path' => $path,
                'size' => intval($size)
            ];
        }

        return collect($output);
    }

    /**
     * Вспомогательный метод для this.filesList
     * Проверяет путь на совпадение с любым паттерном из списка $patterns
     * @param string $path
     * @param array $patterns
     * @return bool
     */
    private function matchesPatterns(string $path, array $patterns): bool
    {
        foreach ($patterns as $pattern) {
            // Убираем * для упрощённой логики "начинается с"
            $prefix = rtrim($pattern, '*');

            if (str_starts_with($path, $prefix)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Метод обработки правил фильтрации файлов для filesList
     * @param $file
     * @param $rules
     * @return bool
     */
    private function isSkipped($file, $rules): bool
    {
        if ($this->skip('exclude_names', $file->getFilename(), $rules)) {
            return true;
        }
        if ($this->skip('exclude_paths', $file->getRealPath(), $rules)) {
            return true;
        }
        if ($this->skip('allowed_extensions', $file->getExtension(), $rules, true)) {
            return true;
        }
        return false;
    }

    /**
     * Метод обработки одного правила фильтрации файлов для filesList
     * @param string $rule - Ключ правила
     * @param string $target - Цель фильтрации
     * @param array $settings - Настройки
     * @param bool $inversive - Инверсия фильтрации
     * @return bool - true = Правило нарушено
     */
    private function skip(
        string $rule,
        string $target,
        array $settings = [],
        bool $inversive = false
    ): bool {
        if (isset($settings[$rule]) && $settings[$rule]) {
            $found = in_array($target, $settings[$rule], true);
            return $inversive ? !$found : $found;
        }
        return false;
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
