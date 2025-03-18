<?php namespace Zen\Threes\Models;

use Model;

/**
 * Model
 */
class Version extends Model
{
    use \October\Rain\Database\Traits\Validation;


    /**
     * @var string table in the database used by the model.
     */
    public $table = 'zen_threes_frames';

    /**
     * @var array rules for validation.
     */
    public $rules = [
    ];

}
