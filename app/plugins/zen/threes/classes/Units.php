<?php

namespace Zen\Threes\Classes;

use Illuminate\Database\Eloquent\Builder;
use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Unit;

class Units
{
    use SingletonTrait;

    /**
     * Получить экземпляр Unit по $uid - токену
     * @param string $uid
     * @return Unit|null
     */
    public function get(string $uid): ?Unit
    {
        return Unit::find($uid);
    }

    /**
     * Вернуть модель Unit
     * @return Builder | Unit
     */
    public function model(): Builder | Unit
    {
        return Unit::query();
    }
}
