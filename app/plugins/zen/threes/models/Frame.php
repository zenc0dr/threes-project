<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use October\Rain\Database\Traits\Sortable;
use October\Rain\Database\Traits\NestedTree;

/**
 * @property  string $id - Идентификатор фрейма
 * @property string $nid - Токен нода
 * @property string $name - Название нода
 * @property string $description - Описание нода
 * @method static active() - Фильтр активности в запросе
 * @method static find($nid) - Найти фрейм по токену нода
 * @method static where(string $nid, int|string $value) - Условие where для фрейма
 */
class Frame extends Model
{
    use Validation;
    use Sortable;
    use NestedTree;

    public $table = 'zen_threes_frames';

    protected $primaryKey = 'id';

    public $rules = [
        'nid' => 'required|unique:zen_threes_frames,nid',
        'name' => 'required',
    ];

    protected $fillable = [
        'nid',
    ];

    public static function findByNid(string $nid): ?Frame
    {
        return self::where('nid', $nid)->firstOrFail();
    }

    public function getNidAttribute($value): string
    {
        if ($value) {
            return $value;
        }

        return ths()->nodes()->createNidToken();
    }

    private function createNode()
    {
        $node = new Node();
        $node->nid = $this->nid;
        $node->name = $this->name;
        $node->save();
    }

    public function beforeSave() {

    }
}
