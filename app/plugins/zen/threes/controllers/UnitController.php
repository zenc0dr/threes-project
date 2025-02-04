<?php namespace Zen\Threes\Controllers;

use Backend;
use BackendMenu;
use Backend\Classes\Controller;
use Zen\Threes\Models\Unit;
use Flash;

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
        $this->addCss('/plugins/zen/threes/controllers/unitcontroller/assets/css/unitcontroller.css');
    }

    /**
     * Расширение интерфейса
     * @param $form
     * @return void
     */
    public function formExtendFields($form): void
    {
        if (!isset($this->params[0])) {
            return;
        }

        $sid = request('sid');

        if ($sid) {
            // Скрываем поля при наличии параметра sid
            if ($form->getField('fields')) {
                $form->removeField('fields');
            }

            if ($form->getField('io')) {
                $form->removeField('io');
            }

            if ($form->getField('icon')) {
                $form->removeField('icon');
            }
        }

        $unit = Unit::find($this->params[0]);
        if ($unit && $unit->additional_fields) {
            $this->clearMissingFields($unit);
            $form->addFields($unit->additional_fields, 'primary');
        }
    }

    /**
     * Переопределение метода сохранения формы
     * @param $model
     * @return void
     * @throws \Exception
     */
    public function formBeforeSave($model)
    {
        $sid = request('sid');
        $nid = request('nid');

        if ($sid) {
            Flash::info('Настройки нода сохранены');
            # Останавливаем дальнейшее выполнение сохранения
            # Проверяется в plugins/zen/threes/models/Unit@boot
            ths()->setState('unit.prevent_save', true);
            ///////////
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
