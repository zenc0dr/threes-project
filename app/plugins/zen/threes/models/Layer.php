<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use Illuminate\Support\Facades\DB;

class Layer extends Model
{
    use Validation;

    public $timestamps = false;
    public $table = 'zen_threes_layers';
    public $rules = [];

    protected $primaryKey = null; // Оставляем null, так как нет единого PK
    public $incrementing = false;

    protected $fillable = [
        'nid',
        'lid',
        'name',
        'description',
        'exe',
        'updated_at',
    ];

    public static function set(array $layer): void
    {
        $nid = $layer['nid'];
        $lid = $layer['lid'];
        $data = [
            'nid' => $nid,
            'lid' => $lid,
            'name' => $layer['name'] ?? 'Без названия',
            'description' => $layer['description'] ?? null,
            'exe' => $layer['exe'],
            'updated_at' => now(),
        ];

        // Проверяем существование записи
        $exists = DB::table('zen_threes_layers')
            ->where('nid', $nid)
            ->where('lid', $lid)
            ->exists();

        if ($exists) {
            // Обновляем запись напрямую через DB facade
            DB::table('zen_threes_layers')
                ->where('nid', $nid)
                ->where('lid', $lid)
                ->update($data);
        } else {
            // Создаем новую запись
            DB::table('zen_threes_layers')->insert($data);
        }
    }
}
