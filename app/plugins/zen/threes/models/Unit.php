<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;

/**
 * @property bool $active - Активность юнита
 * @property string $uid - ThreesID (Уникальный код юнита)
 * @property string $name - Имя юнита
 * @property string $description - Описание юнита
 * @property string $icon - SVG-иконка из базы данных
 * @property string $icon_path - Путь до SVG иконки
 * @property array $layers - Слои юнита
 * @property array $fields - Поля интерфейса ???
 * @method static active - Активные юниты
 * @method static find(string $uid)
 */
class Unit extends Model
{
    use Validation;

    public $table = 'zen_threes_units';
    protected $primaryKey = 'uid';
    protected $keyType = 'string';
    public $incrementing = false;
    public $rules = [
        'uid' => 'required|unique:zen_threes_units,uid',
    ];

    protected $fillable = [
        'uid',
        'icon',
        'icon_path',
        'name',
        'description',
        'active',
        'fields', // Виртуальное поле (data.fields)
        'layers' // Виртуальное поле (data.layers)
    ];

    protected array $dynamic_attributes = [];
    protected array $data_dump = [];

    public function __set($name, $value)
    {
        if (!$this->hasAttribute($name)) {
            $this->dynamic_attributes[$name] = $value;
            unset($this->attributes[$name]);
        } else {
            parent::__set($name, $value);
        }
    }

    /**
     * Фильтр активных юнитов
     * @param $query
     * @return mixed
     */
    public function scopeActive($query): mixed
    {
        return $query->where('active', 1);
    }

    /**
     * Определение нативного атрибута
     * @param string $key
     * @return bool
     */
    private function hasAttribute(string $key): bool
    {
        return in_array($key, $this->fillable);
    }

    //region События модели
    /**
     * Событие после загрузки данных в экземпляр
     * @return void
     */
    public function afterFetch(): void
    {
        $this->data_dump = $this->data;
        $this->fillSettings();
    }

    /**
     * Событие перед сохранением экземпляра
     * @return void
     */
    public function beforeSave(): void
    {
        $this->saveData();
        $this->saveSvgIcon();
    }
    //endregion

    /**
     * Сохраняет иконку в специальное место и возвращает её имя
     * @return void
     */
    private function saveSvgIcon(): void
    {
        if (!$this->icon) {
            return;
        }
        $icon_name = md5($this->icon) . '.svg';
        $path = ths()->checkDir(storage_path('app/uploads/public/threes/icons/' . $icon_name));
        file_put_contents(
            $path,
            $this->icon
        );
        $this->attributes['icon_name'] = $icon_name;
    }

    ### Getters and setters

    /**
     *  Геттер - Получить токен юнита
     * @param $value
     * @return string
     */
    public function getUidAttribute($value): string
    {
        if ($value) {
            return $value;
        }

        $author_token = ths()->settings('author_token') ?? 'project';
        return $author_token . '.units.' . ths()->createToken();
    }

    /**
     * Геттер для настроек
     * @return array
     */
    public function getSettingsAttribute(): array
    {
        return $this->data_dump['settings'] ?? [];
    }

    /**
     * Геттер для иконки
     * @param string|null $svg
     * @return string
     */
    public function getIconAttribute(?string $svg = null): string
    {
        if (!$svg) {
            return file_get_contents(
                base_path('plugins/zen/threes/assets/images/icons/default-icon.svg')
            );
        }
        return $svg;
    }

    /**
     * Путь до SVG - иконки в стандартном каталоге
     * @return string
     */
    public function getIconPathAttribute(): string
    {
        if (!$this->icon) {
            return '/plugins/zen/threes/assets/images/icons/default-icon.svg';
        }

        return '/storage/app/uploads/public/threes/icons/' . $this->icon_name;
    }

    /**
     * @param string|null $data
     * @return array
     */
    public function getDataAttribute(?string $data): array
    {
        if ($data) {
            return ths()->fromJson($data) ?? [];
        }
        return [];
    }

    /**
     * @return array
     */
    public function getFieldsAttribute(): array
    {
        return $this->data_dump['fields'] ?? [];
    }

    /**
     * @param array|null $fields
     * @return void
     */
    public function setFieldsAttribute(?array $fields = null): void
    {
        $this->data_dump['fields'] = $fields ?? [];
    }

    public function getLayersAttribute()
    {
        return $this->data_dump['layers'] ?? [];
    }

    public function setLayersAttribute(?array $layers = null): void
    {
        $this->data_dump['layers'] = $layers ?? [];
    }

    /**
     * @return array
     */
    public function getAdditionalFieldsAttribute(): array
    {
        if ($this->fields) {
            $add_fields = [];
            foreach ($this->fields as $field) {
                $add_fields[$field['field']] = [
                    'label' => $field['label'],
                    'type' => $field['type'],
                    'tab' => $field['tab'],
                    'span' => $field['span'],
                ];

                if ($size = $field['size'] ?? null) {
                    $add_fields[$field['field']]['size'] = $size;
                }

                if ($additional = $field['additional'] ?? null) {
                    foreach ($additional as $batch) {
                        $batch = ths()->fromYaml($batch['rule']);
                        $add_fields[$field['field']] = array_merge($add_fields[$field['field']], $batch);
                    }
                }
            }
            return $add_fields;
        }
        return [];
    }

    ### Options methods

    /**
     * @return string[]
     */
    public function getSpanOptions(): array
    {
        return [
            'auto' => 'Авто',
            'full' => '100%',
            'left' => 'Влево',
            'right' => 'Вправо',
        ];
    }

    /**
     * @return string[]
     */
    public function getTypeOptions(): array
    {
        return [
            'text' => 'String',
            'textarea' => 'Textarea',
            'number' => 'Number',
            'password' => 'Password',
            'dropdown' => 'Dropdown',
            'checkbox' => 'Checkbox',
            'switch' => 'Switch',
            'email' => 'Email',
            'radio' => 'Radio',
            'balloon-selector' => 'Balloon selector',
            'checkboxlist' => 'Checkboxlist',
            'codeeditor' => 'Code editor',
            'colorpicker' => 'Colorpicker',
            'datatable' => 'Datatable',
            'datepicker' => 'Datepicker',
            'fileupload' => 'File upload',
            'markdown' => 'Markdown editor',
            'mediafinder' => 'Media finder',
            'repeater' => 'Repeater',
            'richeditor' => 'Richeditor',
            'taglist' => 'Taglist',
        ];
    }

    /**
     * @return string[]
     */
    public function getSizeOptions(): array
    {
        return [
            null => ' -- ',
            'tiny' => 'Tiny',
            'small' => 'Small',
            'large' => 'Large',
            'huge' => 'Huge',
            'giant' => 'Giant',
        ];
    }

    /**
     * Заполняет поля из настроек при загрузке fillSettings()
     * @return void
     */
    private function fillSettings(): void
    {
        $settings = $this->data_dump['settings'] ?? null;
        if ($settings) {
            foreach ($settings as $field => $value) {
                $this->attributes[$field] = $value;
            }
        }
    }

    public function saveData(): void
    {
        if (empty($this->attributes['uid'])) {
            $this->attributes['uid'] = $this->uid ?? ths()->settings('author_token') ?? 'project';
        }
        $settings = $this->dynamic_attributes;
        $this->data_dump['settings'] = $settings;
        $this->attributes['data'] = ths()->toJson($this->data_dump);
    }
}
