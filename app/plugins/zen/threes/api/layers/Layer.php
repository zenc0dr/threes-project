<?php

namespace Zen\Threes\Api\Layers;

use Backend\Widgets\Form;
use Backend\Classes\Controller;
use Zen\Threes\Models\Layer as LayerModel;
use Backend\Facades\BackendAuth;
use Backend\Models\User;

class Layer
{
    public function loadForm(): array
    {
        $layer = LayerModel::find(request('lid'));

        if (!$layer) {
            return [
                'formHtml' => 'Ошибка: слой не найден'
            ];
        }

        //  ---  МОКИРОВАНИЕ АУТЕНТИФИКАЦИИ  ---
        //  Загружаем СУЩЕСТВУЮЩЕГО пользователя (например, с ID = 1).
        $user = User::find(1); //  !!! ЗАМЕНИТЕ 1 на ID РЕАЛЬНОГО ПОЛЬЗОВАТЕЛЯ !!!

        //  Убедитесь, что пользователь найден.
        if (!$user) {
            return [
                'formHtml' => 'Ошибка: пользователь для аутентификации не найден'
            ];
        }

        //  Притворяемся, что пользователь залогинен.
        BackendAuth::login($user, true);
        //  ---  КОНЕЦ МОКИРОВАНИЯ  ---

        $formConfigArray = [
            'model' => $layer,
            'fields' => [
                'name' => [
                    'label' => 'Название',
                    'type' => 'text',
                    'span' => 'auto'
                ],
                'description' => [
                    'label' => 'Описание',
                    'type' => 'richeditor',
                    'span' => 'full'
                ],
                'is_active' => [
                    'label' => 'Активен',
                    'type' => 'checkbox',
                    'span' => 'auto'
                ],
                'priority' => [
                    'label' => 'Приоритет',
                    'type' => 'number',
                    'span' => 'auto'
                ]
            ]
        ];

        $controller = new Controller();
        $formWidget = new Form($controller, $formConfigArray);
        $formWidget->bindToController();

        $formHtml = '<form id="layerForm">' . $formWidget->render(['preview' => false]) . '</form>';

        //  ---  ВАЖНО:  Разлогиниваемся  ---
        BackendAuth::logout();
        //  ---  КОНЕЦ  ---

        return ['formHtml' => $formHtml];
    }
}
