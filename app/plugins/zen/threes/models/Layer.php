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
            self::find($lid)
                ->update([
                    'lid' => $data['lid'],
                    'name' => $data['name'] ?? 'Без названия',
                    'description' => $data['description'] ?? null,
                    'aspect' => $data['aspect'],
                    'exe' => $data['exe'],
                    'updated_at' => now(),
                ]);
            $layer = Layer::find($lid);
        } else {
            $layer = self::create([
                'lid' => ths()->createToken(),
                'name' => $data['name'] ?? '#',
                'description' => $data['description'] ?? '',
                'aspect' => $data['aspect'] ?? 'threes.units.oc@write',
                'exe' => $data['exe'] ?? '#',
                'updated_at' => now(),
            ]);
        }

        return $layer;
    }

    public function getDslAttribute(): array
    {
        return [
            'lid' => $this->lid,
            'name' => $this->name,
            'description' => $this->description,
            'aspect' => $this->aspect,
            'exe' => $this->exe
        ];
    }
}
