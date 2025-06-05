<?php

namespace Zen\Threes\Classes\Helpers;

trait Confirm
{
    public function submit(
        string $massage = 'Вы уверены?',
        string $yes_label = 'Да',
        string $no_label = 'Нет'
    ): bool | array {
        $request = request()->all();

        if (isset($request['confirm']) && $request['confirm'] === 'yes') {
            return false;
        }

        if (isset($request['confirm']) && $request['confirm'] === 'no') {
            return [
                'success' => false,
                'message' => 'Отказ от операции'
            ];
        }

        return [
            'confirm' => [
                'message' => $massage,
                'yes_label' => $yes_label,
                'no_label' => $no_label,
            ]
        ];
    }
}
