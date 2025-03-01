<?php namespace Zen\Threes\Controllers;

use Backend\Classes\Controller;
use BackendMenu;
use Flash;
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
        $nid = request('nid');

        if ($sid) {
            foreach (['name', 'uid', 'description', 'fields', 'icon'] as $field) {
                if ($form->getField($field)) {
                    $form->removeField($field);
                }
            }
        }

        $unit = Unit::find($this->params[0]);
        if ($unit && $unit->additional_fields) {
            $this->clearMissingFields($unit);
            $form->addFields($unit->additional_fields, 'primary');
        }

        # Загружаем настройки нода после добавления полей
        if ($sid && $nid) {
            $node_settings = ths()->sprites()->loadNodeSettings($nid);

            if ($node_settings) {
                foreach ($node_settings as $key => $value) {
                    if ($form->getField($key)) {
                        $form->getField($key)->value = $value;
                    }
                }
            }
        }
    }


    /**
     * Переопределение метода сохранения формы
     * @param $model
     * @return void
     * @throws \Exception
     */
    public function formBeforeSave($model): void
    {
        $sid = request('sid');
        $node_uuid = request('node');

        if ($sid && $node_uuid) {
            Flash::info('Настройки нода сохранены');

            $node_settings = request('Unit');
            unset($node_settings['tid']);
            unset($node_settings['name']);
            unset($node_settings['description']);

            # Останавливаем дальнейшее выполнение сохранения
            # Проверяется в plugins/zen/threes/models/Unit@boot
            ths()->setState('unit.prevent_save', [
                'node_uuid' => $node_uuid,
                'settings' => $node_settings
            ]);
        }
    }

    /**
     * При изменении состава дополнительных полей, необходимо подчистить settings
     * @param Unit $unit
     * @return void
     */
    private function clearMissingFields(Unit $unit): void
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
                'data' => ths()->toJson($data),
            ]);
    }
}
