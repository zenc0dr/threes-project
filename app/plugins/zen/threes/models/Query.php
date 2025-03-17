<?php namespace Zen\Threes\Models;

use Model;
use Cache;

class Query extends Model
{
    public $table = 'zen_threes_queries';

    public $rules = [];
    protected $fillable = [
        'call',
        'data',
        'time'
    ];

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $max_records = 10000;
            $record_count = static::count();
            $cache_key = 'last_query_cleanup';
            $cleanup_interval = 86400; // 24 часа в секундах

            // Получаем временную метку последнего удаления из кеша
            $last_cleanup = Cache::get($cache_key, 0);
            $current_time = time();

            // Проверяем, прошло ли достаточно времени с последнего удаления
            if ($current_time - $last_cleanup >= $cleanup_interval) {
                if ($record_count >= $max_records) {
                    $records_to_delete = $record_count - $max_records + 1;
                    static::orderBy('id', 'asc')->take($records_to_delete)->delete();
                }

                // Обновляем временную метку последнего удаления в кеше
                Cache::put($cache_key, $current_time, $cleanup_interval);
            }
        });
    }

    public function setDataAttribute(?array $data = null)
    {
        if (!is_null($data)) {
            $this->attributes['data'] = ths()->toJson($data);
        }
    }
}
