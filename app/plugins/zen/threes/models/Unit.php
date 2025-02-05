<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;

/**
 * @property bool $active - Активность юнита
 * @property string $tid - ThreesID (Уникальный код юнита)
 * @property string $name - Имя юнита
 * @property string $description - Описание юнита
 * @property string $icon - SVG-иконка из базы данных
 * @property string $icon_path - Путь до SVG иконки
 * @property array $io - Массив соединений (пинов)
 * @property array $fields - Поля настроек юнита
 * @method static active - Активные юниты
 * @method static find(string $tid)
 */
class Unit extends Model
{
    use Validation;

    public $table = 'zen_threes_units';
    protected $primaryKey = 'tid';
    protected $keyType = 'string';
    public $incrementing = false;
    public $rules = [
        'tid' => 'required|unique:zen_threes_units,tid',
    ];

    protected $fillable = [
        'icon',
        'icon_path',
        'tid',
        'io',
        'name',
        'description',
        'active',
        'fields',
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

    protected static function boot()
    {
        parent::boot();

        # Предотвращение сохранения модели
        # Устанавливается в plugins/zen/threes/controllers/UnitController@formBeforeSave
        static::saving(function ($model) {
            if ($save_data = ths()->getState('unit.prevent_save')) {
                ths()->sprites()->saveNodeSettings(
                    $save_data['node_uuid'],
                    $save_data['settings']
                );
                return false;
            }
        });
    }

    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

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
    public function beforeSave()
    {
        $this->saveData();
        $this->saveSvgIcon();
    }

    /**
     * Событие после сохранения экземпляра
     * @return void
     */
    /*
    public function afterSave()
    {
    }
    */
    //endregion

    /**
     * Сохраняет иконку в специальное место и возвращает её имя
     * @return string|null
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

    public function getTidAttribute($value)
    {
        if ($value) {
            return $value;
        }

        $author_token = ths()->settings('author_token') ?? 'project';
        return $author_token . '.';
    }

    public function getSettingsAttribute()
    {
        return $this->data_dump['settings'] ?? [];
    }

    public function getIconAttribute($svg)
    {
        if (!$svg) {
            return file_get_contents(
                base_path('plugins/zen/threes/assets/images/icons/default-icon.svg')
            );
        }
        return $svg;
    }

    public function getIconPathAttribute()
    {
        if (!$this->icon) {
            return '/plugins/zen/threes/assets/images/icons/default-icon.svg';
        }

        return '/storage/app/uploads/public/threes/icons/' . $this->icon_name;
    }

    public function setIoAttribute($io)
    {
        $this->data_dump['io'] = $io ?? [];
    }

    public function getIoAttribute()
    {
        return $this->data_dump['io'] ?? [];
    }

    public function getDataAttribute(?string $data): array
    {
        if ($data) {
            return ths()->fromJson($data) ?? [];
        }
        return [];
    }

    public function getFieldsAttribute()
    {
        return $this->data_dump['fields'] ?? [];
    }

    public function setFieldsAttribute(?array $fields = null): void
    {
        $this->data_dump['fields'] = $fields ?? [];
    }

    public function getAdditionalFieldsAttribute()
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

    public function getSpanOptions()
    {
        return [
            'auto' => 'Авто',
            'full' => '100%',
            'left' => 'Влево',
            'right' => 'Вправо',
        ];
    }

    public function getTypeOptions()
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

    public function getSizeOptions()
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

    public function getIoTypeOptions()
    {
        return [
            'string' => 'Строка',
            'bool' => 'Булево',
            'int' => 'Целое число',
            'float' => 'Дробное число',
            'array' => 'Массив',
            'object' => 'Объект'
        ];
    }

    public function getIoDirectionOptions()
    {
        return [
            'input' => 'Вход',
            'output' => 'Выход',
            'event' => 'Событие'
        ];
    }

    ### Inner methods


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

    public function saveData()
    {
        if (empty($this->attributes['tid'])) {
            $this->attributes['tid'] = $this->tid ?? ths()->settings('author_token') ?? 'project';
        }
        $settings = $this->dynamic_attributes;
        $this->data_dump['settings'] = $settings;
        $this->attributes['data'] = ths()->toJson($this->data_dump, true);
    }
}
