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
        'name',
        'description',
        'active',
    ];

    protected $guarded = [
        'tid',
    ];

    public function beforeCreate()
    {
        $tid = $this->tid ?? $this->attributes['tid'] ?? null;

        if (!$tid) {
            $this->attributes['tid'] = \Str::uuid();
        }
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
