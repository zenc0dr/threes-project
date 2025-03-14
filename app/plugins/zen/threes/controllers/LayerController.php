<?php namespace Zen\Threes\Controllers;

use Backend;
use BackendMenu;
use Backend\Classes\Controller;
use Zen\Threes\Models\Layer;

class LayerController extends Controller
{
    public $implement = [
        \Backend\Behaviors\FormController::class
    ];

    public $formConfig = 'config_form.yaml';

    public function __construct()
    {
        parent::__construct();
        // Теперь подключаем правильные скрипты формы и репитера
        $this->addJs('/modules/backend/widgets/form/assets/js/october.form.js', 'core');
        $this->addJs('/modules/backend/formwidgets/repeater/assets/js/repeater-min.js', 'core');
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

        $fields = ths()->fromYamlFile(storage_path('test_fields.yaml'));

        $form->addFields($fields, 'primary');
    }
}
