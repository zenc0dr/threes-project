<?php

namespace Zen\Threes\Traits;

use Throwable;

trait DebugLogTrait
{
    /**
     * Красиво выводит Throwable как страницу с кнопкой копирования
     */
    protected function logError(Throwable $e): void
    {
        // Составляем trace строкой
        $traceLines = [];
        foreach ($e->getTrace() as $i => $frame) {
            if (isset($frame['file'])) {
                $traceLines[] = sprintf(
                    "#%d %s:%d %s%s()",
                    $i,
                    $frame['file'],
                    $frame['line'],
                    $frame['class'] ?? '',
                    $frame['function']
                );
            }
        }

        $traceString = implode("\n", $traceLines);

        // Отправляем данные в Blade
        echo view('zen.threes::threes_ai_error', [
            'errorClass'   => get_class($e),
            'errorMessage' => $e->getMessage(),
            'errorFile'    => $e->getFile(),
            'errorLine'    => $e->getLine(),
            'errorTrace'   => $traceString,
        ])->render();

        exit; // чтобы Laravel не добавлял лишние ошибки поверх
    }
}
