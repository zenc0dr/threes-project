<?php

namespace Zen\Threes\Classes\Helpers;

trait Files
{
    /**
     * Проверить адрес файла и рекурсивно создать недостающие папки
     * @param string $dir_path
     * @param int $permissions
     * @return string
     */
    public function checkDir(string $dir_path, int $permissions = 0777): string
    {
        $dirname = dirname($dir_path);
        if (!is_dir($dirname)) {
            mkdir($dirname, $permissions, true);
        }
        return $dir_path;
    }
}
