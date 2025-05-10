<?php

namespace Zen\Threes\Classes\Helpers;

use Zen\Threes\Traits\SingletonTrait;
use Str;

trait Icon
{
    use SingletonTrait;

    /**
     * Создать иконку из пути до файла или строки svg
     * @param string $svg
     * @return string
     */
    public function setIcon(string $svg): string
    {
        if (Str::startsWith($svg, ['<svg', '<?xml'])) {
            $contents = $svg;
        } else {
            $contents = file_get_contents($svg);
        }

        $hash = md5($contents);
        $path = ths()->checkDir(storage_path("app/uploads/public/threes/icons/$hash.svg"));

        file_put_contents($path, $contents);
        return $hash;
    }

    public function getIcon(string $hash): string
    {
        return env('APP_URL') . "/storage/app/uploads/public/threes/icons/$hash.svg";
    }

    public function checkIcon(string $path): string
    {
        $contents = file_get_contents($path);
        $hash = md5($contents);
        $path = storage_path("app/uploads/public/threes/icons/$hash.svg");
        if (!file_exists($path)) {
            $path = ths()->checkDir($path);
            file_put_contents($path, $contents);
        }
        return $this->getIcon($hash);
    }

}
