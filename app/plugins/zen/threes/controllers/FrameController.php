<?php namespace Zen\Threes\Controllers;

use BackendMenu;
use Backend\Classes\Controller;
use Zen\Threes\Models\Frame;

class FrameController extends Controller
{
    public $implement = [
        \Backend\Behaviors\FormController::class,
        \Backend\Behaviors\ListController::class
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    public $requiredPermissions = [
        'zen.threes.main',
        'zen.threes.frames'
    ];

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Zen.Threes', 'main', 'frames');
        $this->addCss(mix('css/threes.css', 'plugins/zen/threes/assets'));
        $this->addJs(mix('js/threes.js', 'plugins/zen/threes/assets'), ['defer' => true]);
    }

    public function formFindModelObject(string $nid)
    {
        // Переопределяем поиск модели по nid
        return Frame::findByNid($nid);
    }
}
