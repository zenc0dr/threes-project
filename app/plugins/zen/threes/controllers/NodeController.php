<?php namespace Zen\Threes\Controllers;

use BackendMenu;
use Backend\Classes\Controller;
use Zen\Threes\Models\Node;
use Illuminate\Support\Facades\DB;

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
        $this->addCss('/plugins/zen/threes/controllers/nodecontroller/assets/css/nodecontroller.css');
    }

    public function formFindModelObject(string $nid)
    {
        return Node::find($nid);
    }

    public function formExtendFields($form): void
    {
        if (!isset($this->params[0])) {
            return;
        }

        $node = Node::find($this->params[0]);
        if ($node && $node->additional_fields) {
            $this->clearMissingFields($node);
            $form->addFields($node->additional_fields, 'primary');
        }
    }

    private function clearMissingFields(Node $unit): void
    {
        $missing_fields = array_keys(array_diff_key($unit->settings, $unit->additional_fields));
        $keys_to_remove  = array_flip($missing_fields);
        if (!$keys_to_remove) {
            return;
        }
        $data = $unit->data;
        $data['settings'] = array_diff_key($data['settings'], $keys_to_remove);

        DB::table('zen_threes_nodes')
            ->where('nid', $unit->nid)
            ->update([
                'data' => ths()->toJson($data),
            ]);
    }
}
