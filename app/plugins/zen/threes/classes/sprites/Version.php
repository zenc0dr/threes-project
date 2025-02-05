<?php

namespace Zen\Threes\Classes\Sprites;

use Illuminate\Support\Facades\DB;

trait Version
{
    public function getVersion(string $sid, ?int $version = null): array | null
    {
        $last_version = DB::table('zen_threes_versions')
            ->where('sid', $sid)
            ->where(function ($query) use ($version) {
                if ($version) {
                    $query->where('version', $version);
                }
            })
            ->orderBy('version', 'desc')
            ->first();

        if (!$last_version) {
            return [
                'version' => 0,
                'versions' => [
                    [
                        'id' => 0,
                        'name' => "Сборок не обнаружено"
                    ]
                ]
            ];
        }

        return [
            'versions' => $this->spriteVersionsOptions($sid),
            'version' => $last_version->version,
        ];
    }

    public function spriteVersionsOptions(string $sid): array
    {
        $records = DB::table('zen_threes_versions')
            ->where('sid', $sid)
            ->get();
        $output = [];
        foreach ($records as $record) {
            $time = ths()->carbon($record->time)->format('d.m.Y H:i');
            $output[] = [
                'id' => $record->version,
                'name' => "Сборка: {$record->version} - $time"
            ];
        }

        return $output;
    }

    public function setVersion(string $sid, array $data): void
    {
        $last_version = DB::table('zen_threes_versions')
            ->where('sid', $sid)
            ->orderBy('version', 'desc')
            ->first();

        if (!$last_version) {
            DB::table('zen_threes_versions')
                ->insert([
                    'sid' => $sid,
                    'version' => 1,
                    'data' => ths()->toJson($data),
                    'time' => now()
                ]);
        } else {
            DB::table('zen_threes_versions')
                ->insert([
                    'sid' => $sid,
                    'version' => $last_version->version + 1,
                    'data' => ths()->toJson($data),
                    'time' => now()
                ]);
        }
    }
}
