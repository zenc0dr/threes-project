<?php

namespace Zen\Threes\Classes\Helpers;

use Symfony\Component\Yaml\Yaml as _Yaml;

trait Yaml
{
    /**
     * Преобразовать yaml-строку в массив
     * @param string $string
     * @return array|null
     */
    public function fromYaml(string $string): ?array
    {
        return _Yaml::parse($string);
    }

    /** Прочитать массив из yaml-файла
     * @param string $file_path
     * @return array|null
     */
    public function fromYamlFile(string $file_path): ?array
    {
        if (!file_exists($file_path)) {
            return null;
        }
        return $this->fromYaml(file_get_contents($file_path));
    }

    /**
     * Преобразовать массив в yaml-строку
     * @param array $array
     * @param int $inline
     * @param int $indent
     * @return string|null
     */
    public function toYaml(array $array, int $inline = 10, int $indent = 4): ?string
    {
        return _Yaml::dump($array, $inline, $indent);
    }

    /**
     * Сохранить массив в yaml-файл
     * @param string $file_path
     * @param array $array
     * @param int $inline
     * @param int $indent
     * @return void
     */
    public function toYamlFile(
        string $file_path,
        array $array,
        int $inline = 10,
        int $indent = 4
    ): void {
        file_put_contents(
            ths()->checkDir($file_path),
            $this->toYaml(
                $array,
                $inline,
                $indent
            )
        );
    }
}
