<?php namespace Zen\Threes\Controllers;

use BackendMenu;
use Backend\Classes\Controller;
use View;

class FrameController extends Controller
{
    public $requiredPermissions = [
        'zen.threes.main',
        'zen.threes.frames'
    ];

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Zen.Threes', 'main', 'frames');
    }

    public function index()
    {
        $this->addCss(mix('css/threes.css', 'plugins/zen/threes/assets'));
        $this->addJs(mix('js/threes.js', 'plugins/zen/threes/assets'), ['defer' => true]);
        return '<div id="threes"></div>';
    }
}
