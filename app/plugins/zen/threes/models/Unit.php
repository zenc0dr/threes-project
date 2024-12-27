<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;

class Unit extends Model
{
    use Validation;

    public $table = 'zen_threes_units';

    public $rules = [
        'tid' => 'unique:zen_threes_units,tid',
    ];

    protected $primaryKey = 'tid';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'tid',
        'name',
        'description',
        'active',
    ];

    protected array $dynamic_attributes = [];
    protected array $additional_fields = [];

    public function __set($name, $value)
    {
        if (!$this->hasAttribute($name)) {
            $this->dynamic_attributes[$name] = $value;
        } else {
            parent::__set($name, $value);
        }
    }

    public $belongsToMany = [
        'sprites' => [
            Sprite::class,
            'table' => 'zen_threes_schema',
            'key' => 'unit_tid',
            'otherKey' => 'sprite_sid',
            'order' => 'sort_order',
            'pivot' => ['sort_order', 'settings'],
        ],
    ];

    private function hasAttribute(string $key): bool
    {
        return in_array($key, $this->fillable);
        //return array_key_exists($key, $this->fillable);
    }

//    public function beforeCreate()
//    {
//
//    }

    public function afterFetch()
    {
        $settings = $this->data['settings'] ?? null;
//        $this->additional_fields = collect($this->fields)
//            ->pluck('field')
//            ->toArray();

        if ($settings) {
            foreach ($settings as $field => $value) {
                $this->attributes[$field] = $value;
            }
        }
    }

    public function beforeSave()
    {
        $tid = $this->tid ?? $this->attributes['tid'] ?? null;

        if (!$tid) {
            $this->attributes['tid'] = \Str::uuid();
        }

        $this->saveSettings();
    }

    public function saveSettings()
    {
        $attributes = $this->dynamic_attributes;
        $data = $this->data ?? [];
        $data['settings'] = $attributes ?? [];
        $this->attributes['data'] = ths()->toJson($data, true);
    }

    public function getTidAttribute($value)
    {
        if ($value) {
            return $value;
        }

        $author_token = ths()->settings('author_token') ?? 'project';
        return $author_token . '.';
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

    public function getFieldsAttribute()
    {
        $data = $this->data ?? [];
        return $data['fields'] ?? [];
    }

    public function setFieldsAttribute(?array $fields = null): void
    {
        $data = $this->data ?? [];
        $data['fields'] = $fields ?? [];
        $this->attributes['data'] = ths()->toJson($data, true);
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
}
