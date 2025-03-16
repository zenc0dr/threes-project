<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Classes\Helpers\Debug;
use Zen\Threes\Classes\Helpers\Files;
use Zen\Threes\Classes\Helpers\Json;
use Zen\Threes\Classes\Helpers\Strings;
use Zen\Threes\Classes\Helpers\Yaml;
use Zen\Threes\Classes\Helpers\State;
use Zen\Threes\Classes\Helpers\Carbon;

class Helpers
{
    use Debug;    # Методы отладки
    use Files;    # Работа с файлами
    use Json;     # Работа с JSON
    use Yaml;     # Работа с YAML
    use Strings;  # Слой настроек
    use State;    # Управлением состоянием (сессия Threes)
    use Carbon;   # Создание объекта Carbon

    /**
     * Глобальные вспомогательные методы
     * @return Helpers
     */
    public function helpers(): Helpers
    {
        return Helpers::getInstance();
    }

    /**
     * Слои хранят аспекты, которые хранят атрибуты
     * @return Layers
     */
    public function layers(): Layers
    {
        return Layers::getInstance();
    }

    /**
     * Фреймы хранят схемы, доступны по $fid
     * @return Frames
     */
    public function frames(): Frames
    {
        return Frames::getInstance();
    }

    /**
     * Ноды, хранят информацию для схемы, доступны по $nid
     * @return Nodes
     */
    public function nodes(): Nodes
    {
        return Nodes::getInstance();
    }

    /**
     * Юниты - Выполняют роль хранителей слоёв и аспектов в их пассивном состоянии
     * Ничего не делают, просто контейнера с аспектами
     * @return Units
     */
    public function units(): Units
    {
        return Units::getInstance();
    }

    /**
     * Система сообщений
     * @return Messages
     */
    public function messages(): Messages
    {
        return Messages::getInstance();
    }

    /**
     * Система событий
     * @return Events
     */
    public function events(): Events
    {
        return Events::getInstance();
    }
}
