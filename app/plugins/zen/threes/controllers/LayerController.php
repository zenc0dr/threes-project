<?php namespace Zen\Threes\Controllers;

use Backend;
use BackendMenu;
use Backend\Classes\Controller;
use Backend\Behaviors\FormController;
use Zen\Threes\Models\Layer;

class LayerController extends Controller
{
    public $implement = [
        FormController::class
    ];

    public $formConfig = 'config_form.yaml';

    public function __construct()
    {
        parent::__construct();
        $this->removeBehavior('Backend.Behaviors.FormController');
    }

    /**
     * Формирование конфигурации формы
     * В этом примере конфигурация формы передается как массив.
     */
    public function formGetConfig()
    {
        $config = $this->asExtension('FormController')->formGetConfig();

        // Динамическое создание конфигурации формы с массивом
        $formConfigArray = [
            'tabs' => [
                'general' => [
                    'label' => 'Основные настройки',
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
                        ]
                    ]
                ],
                'advanced' => [
                    'label' => 'Дополнительные настройки',
                    'fields' => [
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
                ]
            ]
        ];

        // Преобразуем массив в конфигурацию
        $config->form = $this->makeConfig($config->form);

        // Передаем поля в конфигурацию формы
        $config->form->tabs = $formConfigArray['tabs'];

        return $config;
    }

    /**
     * AJAX-метод для загрузки HTML формы.
     */
    public function onLoadForm()
    {
        $lid = input('lid');
        $model = $lid ? Layer::find($lid) : new Layer();

        // Инициализируем форму (с использованием 'update' для редактирования)
        $this->initForm($model, 'update');

        // Рендерим форму в HTML
        $formHtml = '<form id="layerForm">' . $this->formRender() . '</form>';

        // Возвращаем HTML как результат AJAX-запроса
        return [
            'formHtml' => $formHtml
        ];
    }

    /**
     * Хук после сохранения формы.
     * Вызывается автоматически после успешного создания или обновления модели.
     */
    public function formAfterSave($model)
    {
        // Стандартное сохранение уже выполнено, можно добавить доп. логику
        \Flash::success('Запись слоя успешно сохранена.');
        // Например, можно выполнить другие действия с $model или журналировать событие
    }
}
