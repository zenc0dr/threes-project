<?php namespace Zen\Threes\Exports;

use Zen\Threes\Models\Feature;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class FeatureExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        $rows = [];

        $features = Feature::get();
        foreach ($features as $feature) {
            $rows[] = [
                $feature->id,
                $feature->name,
                $feature->description,
                $feature->module,
                $feature->category,
                $feature->status,
                $feature->priority,
                $feature->created_at->format('d.m.Y H:i'),
            ];
        }

        return collect($rows);
    }

    public function headings(): array
    {
        return ['ID', 'Название', 'Описание', 'Область', 'Категория', 'Статус', 'Приоритет', 'Создано'];
    }
}
