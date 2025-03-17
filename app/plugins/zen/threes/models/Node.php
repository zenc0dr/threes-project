<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;


/**
 * @property string $nid - Токен нода
 * @property array $dsl
 * @method static find($nid)
 */
class Node extends Model
{
    use Validation;

    public $timestamps = false;
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

    public static function set(array $data = []): self
    {
        $nid = $data['nid'] ?? null;

        if ($nid) {
            $node = self::find($nid);

            if ($node) {
                $node->update([
                    'name' => $data['name'] ?? 'Без названия',
                    'description' => $data['description'] ?? null,
                ]);
            }
        } else {
            $node = self::create([
                'nid' => ths()->createToken(),
                'name' => '#',
                'description' => '',
            ]);
        }

        return $node;
    }

    public function getDslAttribute(): array
    {
        return [
            'nid' => $this->nid,
            'name' => $this->name,
            'description' => $this->description
        ];
    }
}
