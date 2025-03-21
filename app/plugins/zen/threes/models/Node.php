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
        'svg',
        'svg_name',
        'name',
        'data',
        'scheme',
        'description',
    ];

    private ?string $nid_token_dump = null;

    protected array $dynamic_attributes = [];
    protected array $data_dump = [];

    /** Разделение статических и динамических полей
     * @param $name
     * @param $value
     * @return void
     */
    public function __set($name, $value)
    {
        if (!$this->hasAttribute($name)) {
            $this->dynamic_attributes[$name] = $value;
            unset($this->attributes[$name]);
        } else {
            parent::__set($name, $value);
        }
    }

    /**
     * Проверка на динамический атрибут
     * @param string $key
     * @return bool
     */
    private function hasAttribute(string $key): bool
    {
        return in_array($key, $this->fillable);
    }

    /**
     * Получить токен нода
     * @return string
     */
    private function makeNidToken(): string
    {
        if ($this->nid_token_dump) {
            return $this->nid_token_dump;
        }
        return $this->nid_token_dump = ths()->nodes()->createNidToken();
    }

    /**
     * @param string|null $value
     * @return string|null
     */
    public function getNidAttribute(?string $value): ?string
    {
        if ($value) {
            return $value;
        }

        return $this->makeNidToken();
    }

    public function getNameAttribute(?string $value): string
    {
        if ($value) {
            return $value;
        }

        $token = $this->makeNidToken();
        $token = explode('.', $token);
        return end($token);
    }

    public function getSvgPathAttribute(): string
    {
        if (!$this->svg) {
            return '/plugins/zen/threes/assets/images/icons/default-icon.svg';
        }

        return '/storage/app/uploads/public/threes/icons/' . $this->svg_name;
    }

    public function getSvgAttribute(?string $svg = null): string
    {
        if (!$svg) {
            return file_get_contents(
                base_path('plugins/zen/threes/assets/images/icons/default-icon.svg')
            );
        }
        return $svg;
    }

    public function getSettingsAttribute(): array
    {
        return $this->data_dump['settings'] ?? [];
    }

    public function getDataAttribute(?string $data): array
    {
        if ($data) {
            return ths()->fromJson($data) ?? [];
        }
        return [];
    }

    public function getFieldsAttribute(): array
    {
        return $this->data_dump['fields'] ?? [];
    }

    public function setFieldsAttribute(?array $fields = null): void
    {
        $this->data_dump['fields'] = $fields ?? [];
    }

    public function getAdditionalFieldsAttribute(): array
    {
        if ($this->fields) {
            $add_fields = [];
            foreach ($this->fields as $field) {
                $add_fields[$field['field']] = [
                    'label' => $field['label'],
                    'type' => $field['type'],
                    'tab' => $field['tab'],
                    'span' => $field['span'],
                ];

                if ($size = $field['size'] ?? null) {
                    $add_fields[$field['field']]['size'] = $size;
                }

                if ($additional = $field['additional'] ?? null) {
                    foreach ($additional as $batch) {
                        $batch = ths()->fromYaml($batch['rule']);
                        $add_fields[$field['field']] = array_merge($add_fields[$field['field']], $batch);
                    }
                }
            }
            return $add_fields;
        }
        return [];
    }

    public function afterFetch(): void
    {
        $this->data_dump = $this->data;
        $this->fillSettings();
    }

    public function beforeSave(): void
    {
        $this->saveData();
        $this->saveSvgIcon();
    }

    private function fillSettings(): void
    {
        $settings = $this->data_dump['settings'] ?? null;
        if ($settings) {
            foreach ($settings as $field => $value) {
                $this->attributes[$field] = $value;
            }
        }
    }

    private function saveSvgIcon(): void
    {
        if (!$this->svg) {
            return;
        }
        $svg_name = md5($this->svg) . '.svg';
        $path = ths()->checkDir(storage_path('app/uploads/public/threes/icons/' . $svg_name));
        file_put_contents(
            $path,
            $this->svg
        );
        $this->attributes['svg_name'] = $svg_name;
    }

    public function saveData(): void
    {
        if (empty($this->attributes['nid'])) {
            $this->attributes['nid'] = $this->nid ?? ths()->nodes()->createNidToken();
        }
        $settings = $this->dynamic_attributes;
        $this->data_dump['settings'] = $settings;
        $this->attributes['data'] = ths()->toJson($this->data_dump);
    }
}
