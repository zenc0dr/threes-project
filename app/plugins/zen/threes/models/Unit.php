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
}
