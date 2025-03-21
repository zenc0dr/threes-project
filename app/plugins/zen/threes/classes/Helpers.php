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

    public function units(): Units
    {
        return Units::getInstance();
    }

    public function nodes(): Nodes
    {
        return Nodes::getInstance();
    }

    public function frames(): Frames
    {
        return Frames::getInstance();
    }

    public function layers(): Layers
    {
        return Layers::getInstance();
    }
}
