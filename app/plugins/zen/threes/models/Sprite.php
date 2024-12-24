<?php namespace Zen\Threes\Models;

use Model;

/**
 * Model
 */
class Sprite extends Model
{
    use \October\Rain\Database\Traits\Validation;


    /**
     * @var string table in the database used by the model.
     */
    public $table = 'zen_threes_sprites';

    /**
     * @var array rules for validation.
     */
    public $rules = [
    ];

}
