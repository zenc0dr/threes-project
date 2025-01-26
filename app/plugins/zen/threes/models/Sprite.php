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

    protected $fillable = [
        'sid',
        'parent_sid',
        'name',
        'description',
        'data',
        'active',
        'program',
    ];

    protected array $data_dump = [];

    ### begin:Events
    public function afterFetch(): void
    {
        $this->data_dump = $this->data;
    }

    public function beforeSave(): void
    {
        $this->saveData();
    }

    ### end:Events

    public function saveData(): void
    {
        if (empty($this->attributes['sid'])) {
            $this->attributes['sid'] = $this->sid ?? 's_'. ths()->createToken();
        }
        $this->attributes['data'] = ths()->toJson($this->data_dump, true);
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

    public function getProgramAttribute()
    {
        return $this->data_dump['program'] ?? [];
    }

    public function setProgramAttribute(?array $fields = null): void
    {
        $this->data_dump['program'] = $fields ?? [];
    }
}
