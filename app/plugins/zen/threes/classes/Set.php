<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Illuminate\Support\Facades\DB;

class Set
{
    use SingletonTrait;

    /**
     * Сохранить сет
     * @param string $uuid
     * @param mixed $value
     * @return void
     */
    public function set(string $uuid, mixed $value, ?string $scope = null, ?array $tags = null): void
    {
        if ($tags) {
            $tags = collect($tags)->map(function ($tag) {
                return ":$tag:";
            })->join('');
        }

        DB::table('zen_threes_sets')->updateOrInsert(
            ['uuid' => $uuid],
            [
                'data' => ths()->toJson([$value]),
                'scope' => $scope,
                'tags' => $tags,
            ]
        );
    }

    /**
     * Загрузить сет
     * @param string $uuid
     * @return mixed
     */
    public function get(string $uuid): mixed
    {
        $record = DB::table('zen_threes_sets')->where('uuid', $uuid)->first();
        if (!$record) {
            return null;
        }
        return ths()->fromJson($record->data)[0];
    }

    public function remove(string $uuid): void
    {
        DB::table('zen_threes_sets')->where('uuid', $uuid)->delete();
    }

    /**
     * Загрузить пачку сетов
     * @param array $uuids
     * @return mixed[]
     */
    public function getBatch(?array $uuids = null, ?string $scope = null, ?array $tags = null): array
    {
        return DB::table('zen_threes_sets')
            ->where(function ($query) use ($uuids, $scope, $tags) {
                if ($uuids) {
                    $query->whereIn('uuid', $uuids);
                }
                if ($scope) {
                    $query->where('scope', $scope);
                }
                if ($tags) {
                    foreach ($tags as $tag) {
                        $query->orWhere('tags', 'like', "%:$tag:%");
                    }
                }
            })
            ->pluck('data', 'uuid')
            ->toArray();
    }
}
