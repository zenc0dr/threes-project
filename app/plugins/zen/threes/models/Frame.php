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
        'name' => 'required', // Оставляем валидацию
    ];

    protected $fillable = [
        'nid',
        'name', // Убеждаемся, что name в fillable
    ];

    protected $node;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (!$this->exists) {
            $this->node = new Node();
            $this->nid = $this->node->nid;
        }
    }

    public function afterFetch()
    {
        $this->node = Node::find($this->nid) ?? new Node(['nid' => $this->nid]);
    }

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

    public function getNameAttribute($value)
    {
        return $this->node->name ?? $value ?? '';
    }

    public function setNameAttribute($value): void
    {
        $this->attributes['name'] = $value;
        if ($this->node) {
            $this->node->name = $value;
        }
    }

    public function beforeSave()
    {
        if (!$this->nid) {
            $this->nid = $this->node->nid;
        }

        unset($this->attributes['name']);
    }

    public function afterSave()
    {
        if ($this->node) {
            $this->node->nid = $this->nid; // Убеждаемся, что nid совпадает
            $this->node->save(); // Сохраняем связанный Node
        }
    }
}
