<?php

namespace Zen\Threes\Models;

use Zen\Threes\Classes\Types;
use Exception;

/**
 * @property string $nid
 * @property string $icon
 * @property string $name
 * @property string $description
 * @property string $type
 * @property array|string|null $data
 * @property array $props
 * @property string $schema
 * @property string $scope
 * @property Node|null $parent
 * @property Node[] $children
 * @property Node[] $siblings
 */
class Node
{
    protected array $attributes = [];

    protected static array $fields = [
        'icon' => 'string',
        'name' => 'string',
        'description' => 'string',
        'type' => 'string',
        'data' => 'array',
        'props' => 'array',
    ];

    protected static array $extensions = [
        'string' => 'txt',
        'array' => 'json',
        'object' => 'object',
    ];

    public string $schema = 'default';
    public ?string $scope = 'self_content';

    protected ?Node $_parentCache = null;
    protected ?array $_childrenCache = null;
    protected ?array $_siblingsCache = null;

    public function __construct(string $nid = null, string $schema = 'default')
    {
        if ($nid) {
            $this->attributes['nid'] = $nid;
        }
        $this->schema = $schema;
    }

    public function __get($key)
    {
        $method = $this->studlyCaser('get', $key);
        $data = $this->attributes[$key] ?? null;
        if (method_exists($this, $method)) {
            return $this->$method($data);
        }
        return $data;
    }

    public function __set($key, $value): void
    {
        $method = $this->studlyCaser('set', $key);
        if (method_exists($this, $method)) {
            $this->$method($value);
        } else {
            $this->attributes[$key] = $value;
        }
    }

    public function setIconAttribute(string $svg): void
    {
        $this->attributes['icon'] = ths()->setIcon($svg);
    }

    public function getIconAttribute(string $hash): ?string
    {
        return $hash ? ths()->getIcon($hash) : null;
    }

    public function exe(string $method, string $scope = 'self_content', mixed $data = null): mixed
    {
        $type = Types::getType($this->type)['class'];
        return ths()->exe("$type.$method", null, $data, $scope, $this);
    }

    public function getAttr(string $path, mixed $default = null): mixed
    {
        $segments = explode('.', $path);
        $value = $this->attributes;
        foreach ($segments as $segment) {
            if (is_array($value) && array_key_exists($segment, $value)) {
                $value = $value[$segment];
            } else {
                return $default;
            }
        }
        return $value;
    }

    public function setAttr(string $path, mixed $value): void
    {
        $segments = explode('.', $path);
        $ref = &$this->attributes;
        foreach ($segments as $segment) {
            if (!is_array($ref)) $ref = [];
            if (!array_key_exists($segment, $ref)) $ref[$segment] = [];
            $ref = &$ref[$segment];
        }
        $ref = $value;
    }

    public static function find(string $nid, ?array $fields = null, string $schema = 'default'): ?Node
    {
        $node = new self($nid, $schema);
        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $node_path = "$nodes_storage_path/$nid";
        if (file_exists($node_path)) {
            $fields_to_load = $fields ?? array_keys(self::$fields);
            foreach ($fields_to_load as $field_name) {
                if (isset(self::$fields[$field_name])) {
                    $node->loadField($field_name);
                }
            }
        } else {
            return null;
        }
        return $node;
    }

    private function studlyCaser(string $direction, string $method, string $postfix = 'Attribute'): string
    {
        return $direction . str_replace(' ', '', ucwords(str_replace(['-', '_'], ' ', $method))) . $postfix;
    }

    public function getParentAttribute(): ?Node
    {
        if ($this->_parentCache !== null) return $this->_parentCache;

        $schema = ths()->getSchema($this->schema);
        $parentNid = $this->findParentInSchema($schema['schema_nodes'] ?? []);
        return $this->_parentCache = $parentNid ? new Node($parentNid, $this->schema) : null;
    }

    protected function findParentInSchema(array $nodes, ?string $parentNid = null): ?string
    {
        foreach ($nodes as $node) {
            if (($node['nid'] ?? null) === $this->nid) return $parentNid;
            if (!empty($node['nodes'])) {
                $found = $this->findParentInSchema($node['nodes'], $node['nid'] ?? null);
                if ($found) return $found;
            }
        }
        return null;
    }

    public function getChildrenAttribute(): array
    {
        if ($this->_childrenCache !== null) return $this->_childrenCache;

        $schema = ths()->getSchema($this->schema);
        $branch = $this->findBranch($schema['schema_nodes'] ?? [], $this->nid);
        return $this->_childrenCache = $branch && !empty($branch['nodes'])
            ? array_map(fn($child) => self::find($child['nid'], null, $this->schema), $branch['nodes'])
            : [];
    }

    public function getSiblingsAttribute(): array
    {
        if ($this->_siblingsCache !== null) return $this->_siblingsCache;

        $parent = $this->parent;
        $siblings = $parent
            ? array_filter($parent->children, fn($sibling) => $sibling->nid !== $this->nid)
            : [];

        return $this->_siblingsCache = array_values($siblings);
    }

    private function findBranch(array $nodes, string $nid): ?array
    {
        foreach ($nodes as $node) {
            if ($node['nid'] === $nid) return $node;
            if (!empty($node['nodes'])) {
                $found = $this->findBranch($node['nodes'], $nid);
                if ($found) return $found;
            }
        }
        return null;
    }

    public function save(): void
    {
        if (empty($this->attributes['nid'])) {
            $this->attributes['nid'] = ths()->createShortId();
        }

        // Обнуляем кеши при изменении
        $this->_parentCache = null;
        $this->_childrenCache = null;
        $this->_siblingsCache = null;

        foreach ($this->attributes as $key => $value) {
            if ($key === 'nid') continue;
            $this->saveField($key, $value);
        }
    }

    private function saveField(string $field_name, mixed $value): void
    {
        $field_format = self::$fields[$field_name];
        $field_extension = self::$extensions[$field_format];
        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $field_path = ths()->checkDir("$nodes_storage_path/{$this->nid}/$field_name.$field_extension");

        if ($value === null) {
            if (file_exists($field_path)) unlink($field_path);
            return;
        }

        if ($field_format === 'object') $value = serialize($value);
        if ($field_format === 'array') $value = ths()->toJson($value);

        file_put_contents($field_path, trim((string)$value), LOCK_EX);
    }

    private function loadField(string $field_name): void
    {
        $field_format = self::$fields[$field_name];
        $field_extension = self::$extensions[$field_format];
        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $field_path = "$nodes_storage_path/{$this->nid}/$field_name.$field_extension";
        if (!file_exists($field_path)) return;
        $field_data = file_get_contents($field_path);

        $this->attributes[$field_name] = match ($field_format) {
            'object' => unserialize($field_data),
            'array' => ths()->fromJson($field_data),
            'bool' => (bool)$field_data,
            'int' => (int)$field_data,
            'string' => $field_data,
            default => null
        };
    }

    public function delete(): void
    {
        if (empty($this->attributes['nid'])) return;
        $path = ths()->env('NODES_STORAGE') . '/' . $this->attributes['nid'];
        if (is_dir($path)) shell_exec("rm -rf " . escapeshellarg($path));
    }

    public static function truncate(): void
    {
        $paths = [
            ths()->env('NODES_STORAGE'),
            ths()->env('SCHEMES_STORAGE'),
            ths()->env('TYPES_STORAGE')
        ];
        foreach ($paths as $path) {
            ths()->shellRemoveDir($path);
        }
        ths()->store()->createDefaultNodeTypes();
    }

    public function setDataAttribute(array|string|null $data = null): void
    {
        $this->attributes['data'] = [
            $this->exe('setData', $this->scope, $data)
        ];
    }

    public function getDataAttribute(): array|string|null
    {
        return $this->attributes['data'][0] ?? null;
    }

    public function getDescriptionAttribute(?string $description = null): string
    {
        return $description ?: '';
    }

    public function fill(array $data): self
    {
        $this->icon = $data['icon'] ?? null;
        $this->name = $data['name'] ?? '';
        $this->type = $data['type'] ?? 'Threes.NodeText';
        $this->description = $data['description'] ?? '';
        $this->data = $data['data'] ?? null;
        $this->props = $data['props'] ?? [
            [
                'self_content' => true,
                'show_children' => true,
                'tree' => true,
                'tree_children' => true,
                'schema' => true,
                'store' => false,
                'store_data' => [
                    'group' => 'Created',
                    'author' => 'Threes',
                    'tags' => ["node"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
        $this->save();
        return $this;
    }

    public function create(string $type = 'Threes.NodeText', ?array $data = null): self
    {
        return $this->fill(
            ths()->exe(Types::getType($type)['class'] . '.template', null, $data)
        );
    }

    public function copy(?string $target_nid = null): Node
    {
        $clone = new self();
        $clone->icon = $this->icon;
        $clone->name = $this->name . ' (копия)';
        $clone->description = $this->description;
        $clone->type = $this->type;
        $clone->setDataAttribute($this->getDataAttribute());
        $clone->props = $this->props;
        $clone->save();

        $schema = ths()->getSchema($this->schema);
        $nodes = &$schema['schema_nodes'];
        $new_branch = ['nid' => $clone->nid];

        $insert_after = function (&$nodes) use (&$insert_after, $target_nid, $new_branch) {
            foreach ($nodes as $i => &$node) {
                if ($node['nid'] === $target_nid) {
                    array_splice($nodes, $i + 1, 0, [$new_branch]);
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($insert_after($node['nodes'])) return true;
                }
            }
            return false;
        };

        if ($target_nid) {
            if (!$insert_after($nodes)) {
                $nodes[] = $new_branch;
            }
        } else {
            $nodes[] = $new_branch;
        }

        ths()->setSchema($schema, $this->schema);
        ths()->messages()->addMessage("Создан клон {$this->nid} → {$clone->nid}");
        return $clone;
    }
}
