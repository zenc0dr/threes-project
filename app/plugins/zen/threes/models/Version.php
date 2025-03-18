<?php namespace Zen\Threes\Models;

use Model;
use Illuminate\Support\Facades\DB;

/**
 * Система версионирования Threes
 * @method static where($field, $value)
 */
class Version extends Model
{
    public $table = 'zen_threes_versions';
    public $rules = [];

    protected $fillable = [
        'version',
        'fid',
        'nid',
        'lid',
        'data',
    ];

    /**
     * Сохраняет данные слоя в json-массив
     * @param string|null $value
     * @return array
     */
    public function getDataAttribute(?string $value = null): array
    {
        return $value ? ths()->fromJson($value) : [];
    }

    /**
     * Извлекает данные слоя из json-массива
     * @param array|null $value
     * @return void
     */
    public function setDataAttribute(?array $value = null): void
    {
        if (!$value) {
            $value = [];
        }

        $this->attributes['data'] = ths()->toJson($value);
    }

    public function beforeSave()
    {
        $this->addVersionNumber();
    }

    /**
     * Добавить номер версии
     * @return void
     */
    private function addVersionNumber(): void
    {
        $version_type = null;
        $version_token = null;

        if ($this->fid) {
            $version_type = 'fid';
            $version_token = $this->fid;
        }

        if ($this->nid) {
            $version_type = 'nid';
            $version_token = $this->nid;
        }

        if ($this->lid) {
            $version_type = 'lid';
            $version_token = $this->lid;
        }

        $version_before = DB::table('zen_threes_versions')
            ->where($version_type, $version_token)
            ->orderBy('id', 'desc')
            ->first();

        if (!$version_before) {
            $version_number = 1;
        } else {
            $version_number = intval($version_before->version) + 1;
        }

        if (!$version_type || !$version_token) {
            return;
        }

        $this->attributes['version'] = $version_number;
    }
}
