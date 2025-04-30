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
        'release',
        'acceptance_criteria'
    ];

    public $rules = [];


    public function getDataAttribute(?string $data = null): array
    {
        if (!$data) {
            return [];
        }
        return ths()->fromJson($data);
    }

    public function setDataAttribute(?array $data = []): void
    {
        if ($data === null) {
            $this->attributes['data'] = null;
        } else {
            $this->attributes['data'] = ths()->toJson($data);
        }
    }

    public function getModuleOptions(): array
    {
        return $this->getUniqueOptions('module');
    }

    public function getPriorityOptions(): array
    {
        return $this->getUniqueOptions('priority');
    }

    public function getStatusOptions(): array
    {
        return [
            'accepted' => 'accepted',
            'planned' => 'planned',
        ];
        //return $this->getUniqueOptions('status');
    }
    public function getCategoryOptions(): array
    {
        return $this->getUniqueOptions('category');
    }


    public function getCriteriaCountAttribute()
    {
        return count($this->acceptance_criteria);
    }

    public function setAcceptanceCriteriaAttribute(array $value = []): void
    {
        $this->attributes['acceptance_criteria'] = ths()->toJson($value);
    }

    public function getAcceptanceCriteriaAttribute(?string $value = ''): ?array
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

    private function getUniqueOptions(string $field)
    {
        return Feature::query()
            ->withoutGlobalScopes()
            ->whereNotNull($field)
            ->selectRaw("DISTINCT $field")
            ->orderBy($field)
            ->pluck($field, $field)
            ->mapWithKeys(fn($v, $k) => [(string)$k => (string)$v])
            ->toArray();
    }
}
