<?php namespace Zen\Threes\Models;

use Model;
use Zen\Threes\Traits\SimpleTree;
use October\Rain\Database\Traits\Validation;


class Sprite extends Model
{
    use Validation;
    use SimpleTree;

    public $table = 'zen_threes_sprites';
    protected $primaryKey = 'sid';
    protected $keyType = 'string';
    public $incrementing = false;
    public $rules = [
        'sid' => 'unique:zen_threes_sprites,sid',
    ];

//    public function getUnitsOptions()
//    {
//        return Unit::active()->lists('name', 'tid');
//    }

    public function getParentSidOptions()
    {
        return [null => '--'] + self::all()->lists('name', 'sid');
    }

    public function getDataAttribute(?string $record): array
    {
        if ($record) {
            return ths()->fromJson($record) ?? [];
        }
        return [];
    }

    public function setDataAttribute(?array $record): void
    {
        $this->attributes['data'] = $record ? ths()->toJson($record, true) : null;
    }

    public function getUnitsAttribute()
    {
        $data = $this->data ?? [];
        return $data['units'] ?? [];
    }

    public function setUnitsAttribute(?array $fields = null): void
    {
        $data = $this->data ?? [];
        $data['units'] = $fields ?? [];
        $this->attributes['data'] = ths()->toJson($data, true);
    }
}
