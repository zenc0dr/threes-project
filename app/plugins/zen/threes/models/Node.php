<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;

/**
 * @property string $nid - Токен нода
 * @method static find($nid)
 */
class Node extends Model
{
    use Validation;

    public $table = 'zen_threes_nodes';
    protected $primaryKey = 'nid';
    protected $keyType = 'string';
    public $incrementing = false;

    public $rules = [
        'nid' => 'required|unique:zen_threes_nodes,nid',
    ];

    protected $fillable = [
        'nid',
        'name',
        'description',
    ];

    public function getNidAttribute($value): string
    {
        if ($value) {
            return $value;
        }

        return ths()->nodes()->createNidToken();
    }

    public $hasMany = [
        'nodes' => [
            Node::class,
            'key' => 'nid',
            'otherKey' => 'nid',
            'scope' => 'applyEmptyScope'
        ]
    ];

    public function scopeApplyEmptyScope($query)
    {
        return $query->whereRaw('1 = 0');
    }

}
