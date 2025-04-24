<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use October\Rain\Database\Traits\Sortable;
use October\Rain\Database\Traits\NestedTree;

/**
 * @property array $acceptance_criteria
 */
class Feature extends Model
{
    use Validation;
    use Sortable;
    use NestedTree;

    public $table = 'zen_threes_features';

    protected $fillable = [
        'parent_id',
        'name',
        'description',
        'category',
        'priority',
        'status',
        'module',
        'acceptance_criteria'
    ];

    public $rules = [];

    public function getModuleOptions(): array
    {
        return Feature::query()
            ->withoutGlobalScopes() // отключаем все глобальные scope'ы, включая сортировку
            ->selectRaw('DISTINCT module')
            ->orderBy('module') // сортируем только по тому, что явно есть в SELECT
            ->pluck('module', 'module')
            ->toArray();
    }

    public function getPriorityOptions(): array
    {
        return Feature::query()
            ->withoutGlobalScopes()
            ->selectRaw('DISTINCT priority')
            ->orderBy('priority')
            ->pluck('priority', 'priority')
            ->toArray();
    }

    public function getStatusOptions(): array
    {
        return Feature::query()
            ->withoutGlobalScopes()
            ->selectRaw('DISTINCT status')
            ->orderBy('status')
            ->pluck('status', 'status')
            ->toArray();
    }

    public function getCategoryOptions(): array
    {
        return Feature::query()
            ->withoutGlobalScopes()
            ->selectRaw('DISTINCT category')
            ->orderBy('category')
            ->pluck('category', 'category')
            ->toArray();
    }

    public function getCriteriaCountAttribute()
    {
        return count($this->acceptance_criteria);
    }

    public function setAcceptanceCriteriaAttribute(array $value = []): void
    {
        $this->attributes['acceptance_criteria'] = ths()->toJson($value);
    }

    public function getAcceptanceCriteriaAttribute(string $value = ''): array
    {
        if (!$value) {
            return [];
        }
        return ths()->fromJson($value);
    }

    public function getAcceptanceCriteriaRepeaterAttribute(): array
    {
        $raw = $this->acceptance_criteria;
        return array_map(fn($item) => ['item' => $item], $raw);
    }

    public function setAcceptanceCriteriaRepeaterAttribute($value): void
    {
        $transformed = collect($value)
            ->pluck('item')
            ->filter()
            ->values()
            ->all();
        $this->acceptance_criteria = $transformed;
    }
}
