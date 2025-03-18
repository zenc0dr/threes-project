<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

use Zen\Threes\Models\Version;

class Versions
{
    use SingletonTrait;

    /**
     * Сохранить данные фрейма
     * @param string $fid
     * @param array $data
     * @return void
     */
    public function saveFrameVersion(string $fid, array $data): void
    {
        Version::create([
            'fid' => $fid,
            'data' => $data,
        ]);
    }

    /**
     * Вернуть список версий фрейма
     * @param string $fid
     * @return array
     */
    public function getFrameVersions(string $fid): array
    {
        return Version::where('fid', $fid)
            ->select([
                'id',
                'version',
                'created_at'
            ])
            ->take(30)
            ->get()
            ->map(function ($record) {
                return [
                    'id' => $record->id,
                    'name' => "v$record->version (" . $record->created_at->format('d.m.Y H:i:s') . ')',
                ];
            })
            ->toArray();
    }
}
