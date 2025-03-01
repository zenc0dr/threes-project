<?php namespace Zen\Threes\Controllers;

use Backend;
use BackendMenu;
use Backend\Classes\Controller;

class SpriteController extends Controller
{
    public $implement = [
        \Backend\Behaviors\FormController::class,
        \Backend\Behaviors\ListController::class
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Zen.Threes', 'main', 'sprites');
        $this->addCss(mix('css/threes.css', 'plugins/zen/threes/assets'));
        $this->addJs(mix('js/threes.js', 'plugins/zen/threes/assets'), ['defer' => true]);
    }
}
