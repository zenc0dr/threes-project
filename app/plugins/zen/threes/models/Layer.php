<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use Illuminate\Support\Facades\DB;

/**
 * Модель фрейма
 * @property string $lid - Токен слоя
 * @property string $aspect - Аспект слоя
 * @property string $icon
 * @property string $exe - Атрибут слоя
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

    private ?Unit $unit = null;

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

    /**
     * Событие после извлечения данных из БД
     * @return void
     */
    public function afterFetch(): void
    {
        if (ths()->getState('layer.extend_fields')) {
            $this->fillSettings($this->data);
        }
    }

    /**
     * Получить юнит этого слоя
     * @return Unit|null
     */
    public function getUnit(): ?Unit
    {
        if ($this->unit) {
            return $this->unit;
        }
        $uid = explode('@', $this->aspect)[0];
        return Unit::find($uid);
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
            $layer = Layer::find($lid);
            $layer->lid = $data['lid'];
            $layer->name = $data['name'] ?? 'Без названия';
            $layer->description = $data['description'] ?? null;
            $layer->aspect = $data['aspect'];
            $layer->exe = is_array($data['exe']) ? ths()->toJson($data['exe']) : $data['exe'];
            $layer->save();
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
            'exe' => $this->exeSelector(),
            'icon' => $this->icon
        ];
    }

    /**
     * Преобразует json-строку в массив
     * @return array|null
     */
    public function exeSelector(): ?array
    {

        $exe = $this->data ?: $this->exe;


        if (isset($exe['exe'])) {
            $exe = $exe['exe'];
        }

        if (is_string($exe) && ths()->isJson($exe)) {
            $exe = ths()->fromJson($exe);
        }

        if (!$exe) {
            return null;
        }

        return $exe;
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
        $unit = $this->getUnit();
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

    /**
     * Геттер для схемы ui слоя
     * @param string|null $scheme_yaml
     * @return array
     */
    public function getSchemeAttribute(?string $scheme_yaml = null): array
    {
        if (!$scheme_yaml) {
            return [];
        }
        return ths()->fromYaml($scheme_yaml);
    }

    /**
     * Обновление данных слоя
     * @param string $lid
     * @param array $data
     * @return void
     */
    private static function updateLayerData(string $lid, array $data): void
    {
        $name = $data['name'];
        $description = $data['description'] ?? null;
        unset($data['name']);
        unset($data['description']);

        if (isset($data['exe'])) {
            if (ths()->isJson($data['exe'])) {
                $data['exe'] = ths()->fromJson($data['exe']);
            }
        }

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

        # Тут нужно проверить, если нет атрибута $settings['exe'] то
        # нужно его достать из юнита
        if ($settings === []) {
            $unit = $this->getUnit();

            $method = explode('@', $this->aspect)[1];
            foreach ($unit->layers as $layer) {
                if ($layer['aspect_lid'] === $method) {
                    $exe = $layer['aspect_exe'];
                    break;
                }
            }

            if (ths()->isJson($exe)) {
                $exe = ths()->fromJson($exe);
                $exe = ths()->toJson($exe);
            }

            $settings['exe'] = $exe;
        }

        if ($settings) {
            foreach ($settings as $field => $value) {
                if ($field === 'exe' && is_array($value)) {
                    $value = ths()->toJson($value);
                }
                $this->attributes[$field] = $value;
            }
        }
    }
}
