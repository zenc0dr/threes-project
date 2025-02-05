<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Classes\Helpers\Debug;
use Zen\Threes\Classes\Helpers\Files;
use Zen\Threes\Classes\Helpers\Json;
use Zen\Threes\Classes\Helpers\Strings;
use Zen\Threes\Classes\Helpers\Yaml;
use Zen\Threes\Classes\Helpers\State;

class Helpers
{
    use Debug;    # Методы отладки
    use Files;    # Работа с файлами
    use Json;     # Работа с JSON
    use Yaml;     # Работа с YAML
    use Strings;  # Слой настроек
    use State;    # Управлением состоянием (сессия Threes)

    public function units(): Units
    {
        return Units::getInstance();
    }

    public function sprites(string | null $sid = null): Sprites
    {
        return Sprites::getInstance($sid);
    }

    public function sets(): Set
    {
        return Set::getInstance();
    }

}
