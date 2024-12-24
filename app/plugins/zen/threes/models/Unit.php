<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;

class Unit extends Model
{
    use Validation;

    public $table = 'zen_threes_units';
    public $rules = [];
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

        //  dd($this->tid, $this->attributes);

        if (!$this->tid && !isset($this->attributes['tid'])) {
            $this->attributes['tid'] = \Str::uuid();
        }
    }
}
