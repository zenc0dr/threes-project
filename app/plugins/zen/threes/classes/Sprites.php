<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Classes\Sprites\Program;
use Zen\Threes\Classes\Sprites\Node;
use Zen\Threes\Models\Sprite;
use Illuminate\Database\Eloquent\Builder;

class Sprites
{
    use SingletonTrait;
    use Program;
    use Node;

    private ?string $sid = null;

    public function __construct(string | null $sid = null)
    {
        $this->sid = $sid;
    }

    /**
     * Вернуть экземпляр спрайта по sid
     * @param string|null $sid
     * @return Sprite|null
     */
    public function get(string | null $sid = null): Sprite | null
    {
        $sid = $sid ?? $this->sid;
        if (!$sid) {
            return null;
        }
        return Sprite::find($sid);
    }

    /**
     * Вернуть конструктор запросов
     * @return Builder
     */
    public function query(): Builder
    {
        return Sprite::query();
    }
}
