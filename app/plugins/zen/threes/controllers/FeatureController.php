<?php namespace Zen\Threes\Controllers;

use Backend;
use BackendMenu;
use Backend\Classes\Controller;

class FeatureController extends Controller
{
    public $implement = [
        \Backend\Behaviors\FormController::class,
        \Backend\Behaviors\ListController::class,
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    public $requiredPermissions = [
        'zen.threes.features'
    ];

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Zen.Threes', 'main', 'threes-features');
    }

    public function onRegenerate()
    {
        \Flash::success('Регенерация успешно выполнена!');

        ths()->backlog()->generateBacklog(
            ths()->getSetting('vector_yaml')
        );
        // или для ошибки:
        // \Flash::error('Произошла ошибка при регенерации.');

        // Вернём обновление списка
        return \Redirect::back();
    }
}
