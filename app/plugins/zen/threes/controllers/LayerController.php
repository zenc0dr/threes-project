<?php namespace Zen\Threes\Controllers;

use Backend;
use BackendMenu;
use Backend\Classes\Controller;
use Zen\Threes\Models\Layer;
use Zen\Threes\Models\Unit;
use Flash;

class LayerController extends Controller
{
    public $implement = [
        \Backend\Behaviors\FormController::class
    ];

    public string $formConfig = 'config_form.yaml';

    public function __construct()
    {
        parent::__construct();
        // Теперь подключаем правильные скрипты формы и репитера
        $this->addJs('/modules/backend/widgets/form/assets/js/october.form.js', 'core');
        $this->addJs('/modules/backend/formwidgets/repeater/assets/js/repeater-min.js', 'core');
        ths()->setState('layer.extend_fields', true);
    }

    public function index()
    {
        $model = $this->formCreateModelObject()->first();

        if (!$model) {
            $model = $this->formCreateModelObject();
            $model->forceSave();
        }

        return Backend::redirect("zen/threes/layercontroller/update/{$model->id}");
    }

    public function update($recordId = null)
    {
        // Отключаем использование главного шаблона
        #$this->layout = null;

        // Вызываем стандартный рендер формы
        return $this->asExtension(\Backend\Behaviors\FormController::class)->update($recordId);
    }

    public function formExtendFields($form): void
    {
        $aspect = explode('@', $form->model->aspect);

        $unit = Unit::find($aspect[0]);
        $scheme = $form->model->scheme;

        if (!$scheme) {
            foreach ($unit->layers as $layer) {
                if ($layer['aspect_lid'] === $aspect[1]) {
                    $scheme = ths()->fromYaml($layer['aspect_ui']);
                    break;
                }
            }
        }
        $form->addFields($scheme, 'primary');
    }

    public function formBeforeSave($model): void
    {
        # Останавливаем дальнейшее выполнение сохранения
        # Проверяется в plugins/zen/threes/models/Layer@boot
        ths()->setState('layer.prevent_save', request('Layer'));
        Flash::info('Настройки нода сохранены');
    }
}
