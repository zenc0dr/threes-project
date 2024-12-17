<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use October\Rain\Database\Traits\Sortable;

class Unit extends Model
{
    use Validation;
    use Sortable;

    public $table = 'zen_threes_units';
    public $rules = [];

    protected $fillable = [
        'name',
        'description',
        'active',
    ];

    public array $sortable = ['sort_order'];

    public function beforeCreate()
    {
        $this->attributes['uuid'] = \Str::uuid();
    }
}
