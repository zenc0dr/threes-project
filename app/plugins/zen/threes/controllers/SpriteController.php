<?php namespace Zen\Threes\Controllers;

use Backend;
use BackendMenu;
use Backend\Classes\Controller;
use Zen\Threes\Models\Unit;

class SpriteController extends Controller
{
    public $implement = [
        \Backend\Behaviors\FormController::class,
        \Backend\Behaviors\ListController::class,
        \Backend\Behaviors\RelationController::class,
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';
    public $relationConfig = 'config_relation.yaml';


    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Zen.Threes', 'main', 'sprites');
    }

    public function openUnitForm($tid)
    {
        \Log::debug('openUnitForm', $tid);

        $unit = Unit::find($tid);
        if (!$unit) {
            \Flash::error('Unit not found');
            return redirect()->back();
        }

        return $this->makePartial('unit_form', [
            'unit' => $unit,
            'form' => $this->asExtension('FormController')->formCreate([
                'model' => $unit,
                'fields' => $unit->additional_fields,
            ]),
        ]);
    }
}
