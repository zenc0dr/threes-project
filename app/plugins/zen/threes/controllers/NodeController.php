<?php namespace Zen\Threes\Controllers;

use BackendMenu;
use Backend\Classes\Controller;
use Zen\Threes\Models\Node;

class NodeController extends Controller
{
    public $implement = [
        \Backend\Behaviors\FormController::class,
        \Backend\Behaviors\ListController::class,
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';
    public $relationConfig = 'config_relation.yaml';

    public $requiredPermissions = [
        'zen.threes.main',
        'zen.threes.nodes'
    ];

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Zen.Threes', 'main', 'nodes');
    }

    public function formFindModelObject(string $nid)
    {
        return Node::find($nid);
    }
}
