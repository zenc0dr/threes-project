<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\NestedTree;
use October\Rain\Database\Traits\Sortable;
use October\Rain\Database\Traits\Validation;

/**
 * Model
 */
class Sprite extends Model
{
    use Validation;
    use NestedTree;
    use Sortable;

    public $table = 'zen_threes_sprites';

    public $rules = [
    ];

    protected $fillable = [
        'sid',
        'name',
        'description',
        'active',
    ];

    public $belongsToMany = [
        'units' => [
            Unit::class,
            'table' => 'zen_threes_schema',
            'key' => 'sprite_sid',
            'otherKey' => 'unit_tid',
            'order' => 'sort_order',
            'pivot' => ['sort_order', 'settings'],
        ],
    ];

}
