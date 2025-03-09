<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;

class Layer extends Model
{
    use Validation;

    public $timestamps = false;
    public $table = 'zen_threes_layers';
    protected $primaryKey = 'lid';
    protected $keyType = 'string';
    public $incrementing = false;

    public $rules = [
        'lid' => 'required|unique:zen_threes_layers,lid',
    ];

    protected $fillable = [
        'lid',
        'name',
        'description',
        'aspect', # Аспект слоя
        'exe', # Атрибут аспекта слоя
        'updated_at',
    ];

    public static function set(array $data = [])
    {
        $lid = $data['lid'] ?? null;

        if ($lid) {
            $layer = self::find($lid)
                ->update([
                    'lid' => $data['lid'],
                    'name' => $data['name'] ?? 'Без названия',
                    'description' => $data['description'] ?? null,
                    'updated_at' => now(),
                ]);
        } else {
            $layer = self::create([
                'lid' => ths()->createToken(),
                'name' => '#',
                'description' => '',
                'aspect' => 'threes.units.oc@write',
                'exe' => '#',
                'updated_at' => now(),
            ]);
        }

        return $layer;
    }

    public function getDslAttribute(): array
    {
        return [
            'nid' => $this->lid,
            'name' => $this->name,
            'description' => $this->description,
            'aspect' => $this->aspect,
            'exe' => $this->exe
        ];
    }
}
