<?php

namespace App\Models\Mongo;

use Jenssegers\Mongodb\Eloquent\Model;

class Node extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'nodes';
    protected $primaryKey = '_id'; // MongoDB по умолчанию
    public $incrementing = false;

    protected $fillable = [
        'nid',            // уникальный идентификатор
        'name',           // имя нода
        'type',           // например: 'ai_agent', 'form_component', 'data_adapter'
        'props',          // произвольные свойства (endpoint, interval, binding и т.д.)
        'children',       // вложенные ноды или ссылки
        'meta',           // что-то вроде system-поля (например timestamps, версия)
    ];

    protected $casts = [
        'props' => 'array',
        'children' => 'array',
        'meta' => 'array',
    ];

    ### Примеры удобных методов для будущего:

    public function addChild($node_or_ref): void
    {
        $children = $this->children ?? [];
        $children[] = $node_or_ref;
        $this->children = $children;
        $this->save();
    }

    public function resolveChildren(): array
    {
        $resolved = [];

        foreach ($this->children ?? [] as $item) {
            if (isset($item['$ref']) && isset($item['$id'])) {
                $resolved[] = self::find($item['$id']);
            } elseif (isset($item['nid'])) {
                $resolved[] = new self($item); // вложенный без сохранения
            }
        }

        return $resolved;
    }
}
