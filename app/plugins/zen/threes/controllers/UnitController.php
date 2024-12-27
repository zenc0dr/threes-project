<?php namespace Zen\Threes\Controllers;

use Backend;
use BackendMenu;
use Backend\Classes\Controller;
use Zen\Threes\Models\Unit;

class UnitController extends Controller
{
    public $implement = [
        \Backend\Behaviors\FormController::class,
        \Backend\Behaviors\ListController::class
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    public $requiredPermissions = [
        'zen.threes.main',
        'zen.threes.units'
    ];

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Zen.Threes', 'main', 'units');
    }

    public function formExtendFields($form)
    {
        if (!isset($this->params[0])) {
            return;
        }

        $unit = Unit::find($this->params[0]);
        if ($unit && $unit->additional_fields) {
            $form->addFields($unit->additional_fields, 'primary');
        }
    }
}
