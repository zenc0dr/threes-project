<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;

/**
 * Модель фрейма
 * @property string $icon
 * @property string $exe
 * @method static find($lid)
 */
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

    /**
     * Создать или обновить слой
     * @param array $data
     * @return Layer
     */
    public static function set(array $data = []): Layer
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

    /**
     * Получить DSL-узел нода
     * @return array
     */
    public function getDslAttribute(): array
    {
        return [
            'lid' => $this->lid,
            'name' => $this->name,
            'description' => $this->description,
            'aspect' => $this->aspect,
            'exe' => $this->exe,
            'icon' => $this->icon
        ];
    }

    /**
     * Возвращает иконку юнита к которому принадлежит слой
     * @return string
     */
    public function getIconAttribute(): string
    {
        $uid = explode('@', $this->aspect)[0];
        $state_key = "node:icon_path:$uid";
        if ($icon_path = ths()->getState($state_key)) {
            return $icon_path;
        }
        $unit = Unit::find($uid);
        return ths()->setState($state_key, $unit->icon_path);
    }
}
