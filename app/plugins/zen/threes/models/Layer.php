<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use Illuminate\Support\Facades\DB;

/**
 * Модель фрейма
 * @property string $icon
 * @property string $exe
 * @property array $layers
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

    protected static function boot(): void
    {
        parent::boot();

        # Предотвращение сохранения модели
        # Устанавливается в plugins/zen/threes/controllers/UnitController@formBeforeSave
        static::saving(function ($model) {
            #TODO: Старая механика сохранения данных нода
            if ($save_data = ths()->getState('layer.prevent_save')) {
                self::updateLayerData($model->lid, $save_data);
                return false;
            }
        });
    }

    public function afterFetch(): void
    {
        $this->fillSettings($this->data);
    }

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

    /**
     * Сохраняет данные слоя в json-массив
     * @param string|null $value
     * @return array
     */
    public function getDataAttribute(?string $value = null): array
    {
        return $value ? ths()->fromJson($value) : [];
    }

    /**
     * Извлекает данные слоя из json-массива
     * @param array|null $value
     * @return void
     */
    public function setDataAttribute(?array $value = null): void
    {
        if (!$value) {
            $value = [];
        }

        $this->attributes['data'] = ths()->toJson($value);
    }

    private static function updateLayerData(string $lid, array $data): void
    {
        ths()->toJsonFile(
            storage_path('test_layer_data2.json'),
            $data
        );


        $name = $data['name'];
        $description = $data['description'] ?? null;
        unset($data['name']);
        unset($data['description']);


        DB::table('zen_threes_layers')
            ->where('lid', $lid)
            ->update([
                'name' => $name,
                'description' => $description,
                'data' => ths()->toJson($data)
            ]);
    }

    /**
     * Подгружает поля слоя
     * @param $settings
     * @return void
     */
    private function fillSettings($settings): void
    {
        # На всякий случай
        unset($settings['lid']);
        unset($settings['name']);
        unset($settings['description']);

        if ($settings) {
            foreach ($settings as $field => $value) {
                $this->attributes[$field] = $value;
            }
        }
    }
}
