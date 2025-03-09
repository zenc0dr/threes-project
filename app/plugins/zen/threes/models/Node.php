<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use Illuminate\Support\Facades\DB;

class Node extends Model
{
    use Validation;

    public $timestamps = false;
    public $table = 'zen_threes_nodes';
    protected $primaryKey = 'nid';
    protected $keyType = 'string';
    public $incrementing = false;


    public $rules = [];

    protected $fillable = [
        'nid',
        'name',
        'description',
    ];

    public static function set(array $data): void
    {
        $nid = $data['nid'];
        $name = $data['name'] ?? 'Без названия';
        $description = $data['description'] ?? null;

        $data_to_save = [
            'nid' => $nid,
            'name' => $name,
            'description' => $description,
        ];

        $exists = DB::table('zen_threes_nodes')
            ->where('nid', $nid)
            ->exists();

        if ($exists) {
            DB::table('zen_threes_nodes')
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
