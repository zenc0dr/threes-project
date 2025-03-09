<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use Illuminate\Support\Facades\DB;

class Node extends Model
{
    use Validation;

    public $timestamps = false;
    public $table = 'zen_threes_nodes';
    public $rules = [];

    protected $primaryKey = null;
    public $incrementing = false;

    protected $fillable = [
        'fid',
        'nid',
        'name',
        'description',
    ];

    public static function set(array $data): void
    {
        $fid = $data['fid'];
        $nid = $data['nid'];
        $name = $data['name'] ?? 'Без названия';
        $description = $data['description'] ?? null;

        $data_to_save = [
            'fid' => $fid,
            'nid' => $nid,
            'name' => $name,
            'description' => $description,
        ];

        $exists = DB::table('zen_threes_nodes')
            ->where('fid', $fid)
            ->where('nid', $nid)
            ->exists();

        if ($exists) {
            DB::table('zen_threes_nodes')
                ->where('fid', $fid)
                ->where('nid', $nid)
                ->update($data_to_save);
        } else {
            DB::table('zen_threes_nodes')
                ->insert($data_to_save);
        }
    }

    public static function fabric(string $fid, int $line_index = 0)
    {
        # Тут нужно создать новый нод для фрейма с токеном $fid который добавиться в конец линии $line_index
    }
}
