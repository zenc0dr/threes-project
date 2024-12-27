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

}
