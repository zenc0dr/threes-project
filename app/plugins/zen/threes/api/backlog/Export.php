<?php

namespace Zen\Threes\Api\Backlog;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Zen\Threes\Exports\FeatureExport;

class Export
{
    # http://threes.dc/threes.api/backlog.export:xlsx
    public function xlsx(): BinaryFileResponse
    {
        $fileName = 'features_export_' . date('Y-m-d_H-i-s') . '.xlsx';
        return Excel::download(new FeatureExport, $fileName);
    }
}
