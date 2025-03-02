<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use October\Rain\Database\Traits\Sortable;
use October\Rain\Database\Traits\NestedTree;

/**
 * @property string $fid - Токен фрейма
 * @property string $name - Название фрейма
 * @property string $description - Описание фрейма
 * @property bool $active - Активность фрейма
 * @property array $program - Программа фрейма
 * @method static active() - Фильтр активности в запросе
 */
class Frame extends Model
{
    use Validation;
    use Sortable;
    use NestedTree;

    public $table = 'zen_threes_frames';

    public $rules = [
        'fid' => 'required|unique:zen_threes_frames,fid',
        'name' => 'required',
    ];

    protected $fillable = [
        'id',
        'fid',
        'name',
        'description',
        'active',
        'program',
    ];

    protected array $data_dump = [];

    //region Фильтры
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }
    //endregion

    //region Геттеры
    public function getDataAttribute(?string $record): array
    {
        if ($record) {
            return ths()->fromJson($record) ?? [];
        }
        return [];
    }

    public function getProgramAttribute()
    {
        return $this->data_dump['program'] ?? [];
    }
    //endregion
    //region Сеттеры
    public function setDataAttribute(?array $record): void
    {
        $this->attributes['data'] = $record ? ths()->toJson($record, true) : null;
    }

    public function setProgramAttribute(?array $fields = null): void
    {
        $this->data_dump['program'] = $fields ?? [];
    }
    //endregion
    //region Методы
    public function saveData(): void
    {
        if (empty($this->attributes['fid'])) {
            $this->attributes['fid'] = $this->fid ?? ths()->createToken();
        }
        $this->attributes['data'] = ths()->toJson($this->data_dump);
    }
    //endregion
    //region События
    public function afterFetch(): void
    {
        $this->data_dump = $this->data;
    }

    public function beforeSave(): void
    {
        $this->saveData();
    }
    //endregion
}
