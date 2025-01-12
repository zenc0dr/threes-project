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

    /**
     * Расширение интерфейса
     * @param $form
     * @return void
     */
    public function formExtendFields($form)
    {
        if (!isset($this->params[0])) {
            return;
        }

        $unit = Unit::find($this->params[0]);
        if ($unit && $unit->additional_fields) {
            $this->clearMissingFields($unit);
            $form->addFields($unit->additional_fields, 'primary');
        }
    }

    /**
     * При изменении состава дополнительных полей, необходимо подчистить settings
     * @param Unit $unit
     * @return void
     */
    private function clearMissingFields(Unit $unit)
    {
        $missing_fields = array_keys(array_diff_key($unit->settings, $unit->additional_fields));
        $keys_to_remove  = array_flip($missing_fields);
        if (!$keys_to_remove) {
            return;
        }
        $data = $unit->data;
        $data['settings'] = array_diff_key($data['settings'], $keys_to_remove);
        \DB::table('zen_threes_units')
            ->where('tid', $unit->tid)
            ->update([
                'data' => ths()->toJson($data, true),
            ]);
    }
}
