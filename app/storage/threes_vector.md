`plugins/zen/threes/Plugin.php`
```<?php namespace Zen\Threes;

use System\Classes\PluginBase;
use Zen\Threes\Console\Vector;
use Zen\Threes\Console\BacklogFill;
use Zen\Threes\Console\Gen;
use Log;

class Plugin extends PluginBase
{
    public function register(): void
    {
        # Регистрация консольных команд
        $this->registerConsoleCommand('threes:vector', Vector::class);
        $this->registerConsoleCommand('threes:backlog_fill', BacklogFill::class);
        $this->registerConsoleCommand('threes:gen', Gen::class);
    }

    public function boot()
    {
        app()->terminating(function () {
            try {
                if (function_exists('ths')) {
                    ths()->events()->terminating();
                }
            } catch (\Exception $e) {
                Log::error('Zen.Threes: terminating event error: ' . $e->getMessage());
            }
        });
    }

    public function registerComponents()
    {
    }

    public function registerSettings(): array
    {
        return [
            'options' => [
                'label'       => 'Threes',
                'description' => 'Threes Options',
                'icon'        => 'icon-cubes',
                'permissions' => ['zen.threes.options'],
                'class' => 'Zen\Threes\Models\Settings',
                'order' => 100,
            ]
        ];
    }
}

```
`plugins/zen/threes/Threes.php`
```<?php

namespace Zen\Threes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Classes\Helpers;

class Threes extends Helpers
{
    use SingletonTrait;

    /**
     * Базовый механизм внутреннего api
     * @param string $path
     * @param string $method
     * @param ...$data
     * @return mixed
     */
    public function api(string $path, string $method, ...$data): mixed
    {
        $path = str_replace('.', '\\', $path);
        $path = $this->capitalizeLastSegmentFast($path);

        if (str_contains($method, '-')) {
            $method = ths()->kebabToCamel($method);
        }

        return app("Zen\Threes\Api\\$path")->{$method}(...$data);
    }

    /**
     * Данный метод преобразует nodes.program в nodes.Program
     * позволяя делать красивые URL
     * @param string $path
     * @return string
     */
    function capitalizeLastSegmentFast(string $path): string {
        $lastSlashPos = strrpos($path, '\\');
        if ($lastSlashPos === false) {
            return ucfirst($path);
        }
        return substr($path, 0, $lastSlashPos + 1) . ucfirst(substr($path, $lastSlashPos + 1));
    }

    /**
     * Рефлексивный метод вызова
     * @param string $path
     * @param mixed|null $constructor
     * @param ...$arguments
     * @return mixed
     * @throws \ReflectionException
     */
    public function exe(string $path, mixed $constructor = null, ...$arguments): mixed
    {
        $path = explode('.', $path);
        $method = array_pop($path);
        $path = join('\\', $path);
        $class = "\\$path";
        if (!$path) {
            return null;
        }
        $is_static = (new \ReflectionMethod($class, $method))->isStatic();
        if ($is_static) {
            return $class::$method(...$arguments);
        } else {
            $instance = new $class($constructor);
            return $instance->$method(...$arguments);
        }
    }
}

```
`plugins/zen/threes/api/Store.php`
```<?php

namespace Zen\Threes\Api;

class Store
{
    # http://threes.dc/threes.api/store:get
    public function get(): array
    {
        return [
            'nodes' => ths()->store()->getStoreNodes()
        ];
    }
}

```
`plugins/zen/threes/api/Ui.php`
```<?php

namespace Zen\Threes\Api;

class Ui
{
    # http://threes.dc/threes.api/ui:get-tree-nodes
    public function getTreeNodes(): array
    {
        return [
            'tree' => ths()->nodes()->getNodesTree(
                search: request('search'),
            )
        ];
    }

    # http://threes.dc/threes.api/ui:get-schema-nodes?nid=node1
    public function getSchemaNodes(): array
    {
        return [
            'schema' => ths()->nodes()->getNodesSchema(request('nid'))
        ];
    }
}

```
`plugins/zen/threes/api/backlog/Export.php`
```<?php

namespace Zen\Threes\Api\Backlog;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Zen\Threes\Exports\FeatureExport;

class Export
{
    # http://threes.dc/threes.api/backlog.export:xlsx
    public function xlsx(): BinaryFileResponse
    {
        $fileName = 'features_export_' . date('Y-m-d_H-i-s') . '.xlsx';
        return Excel::download(new FeatureExport, $fileName);
    }
}

```
`plugins/zen/threes/api/debug/Tests.php`
```<?php

namespace Zen\Threes\Api\debug;

use Http;
use Zen\Threes\Classes\Services\OpenAiService;
use Symfony\Component\Yaml\Yaml;
use Symfony\Component\Yaml\Dumper;
//use Zen\Threes\Classes\Gen;
use Zen\Threes\Models\Node;
use Zen\Threes\Models\Feature;
use Zen\Threes\Classes\Nodes;
use Zen\Threes\Console\Vector;
use Zen\Threes\Traits\DebugLogTrait;

/**
 * Данный класс существует для отладки и экспериментов
 * в нем всегда должны быть два метода: debug (по возможности оставлять пустым) и test (для теста api)
 */
class Tests
{
    use DebugLogTrait;

    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {
        echo 'Тут я обрезал -----> ' . mb_substr(ths()->nodes()->node('9rec8sdhuerr')->data, 0, 500);
//        $command = new Vector();
//        $command->setOutputCallback(function ($message) {
//            echo $message . '<br>';
//        });
//        $command->handle();
    }

    # http://threes.dc/threes.api/debug.Tests:testConnector
    public function testConnector()
    {
        $items = ths()->connector()->mySql([
            'host' => 'db',
            'database' => 'azimut',
            'username' => 'azimut',
            'password' => 'azimut',
            'port' => '3306',
        ])->table('mcmraak_rivercrs_checkins')
            ->get();
        dd($items);
    }

    # http://threes.dc/threes.api/debug.Tests:nodeTest?nid=xxxxxxxxxxxx
    public function nodeTest()
    {
        $nid = request('nid');

        if ($nid) {
            $node = Node::find($nid);
        } else {
            $node = ths()->nodes()->createNode();
        }

        dd($node->icon);
    }

    # http://threes.dc/threes.api/debug.Tests:truncateNodes
    public function truncateNodes()
    {
        Node::truncate();
    }

    # http://threes.dc/threes.api/debug.Tests:backlogToNodes
    public function backlogToNodes(): string
    {
        $features = Feature::all();

        // Очистим все ноды
        Node::truncate();

        $structure = [];
        $featureToNode = [];

        foreach ($features as $feature) {
            $node = new Node('node' . $feature->id);
            $node->name = $feature->name ?? 'Без названия';
            $node->class = 'Zen.Threes.Classes.Nodes.NodeText';
            $node->description = $feature->description ?? '';
            $node->data = $feature->description ?? '';
            $node->props = [
                'tree' => true,
                'schema' => true,
                'store' => false,
                'self_content' => true,
                'show_children' => true,
                'store_data' => [
                    'group' => 'Features',
                    'author' => 'Migration',
                    'tags' => ["feature", "imported"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ];
            $node->save();
            $featureToNode[$feature->id] = $node;
            $structure[$feature->id] = [];
        }

        // Заполняем карту детей
        foreach ($features as $feature) {
            if ($feature->parent_id && isset($structure[$feature->parent_id])) {
                $structure[$feature->parent_id][] = $feature->id;
            }
        }

        // Рекурсивно строим дерево
        $buildTree = function ($id) use (&$buildTree, $structure, $featureToNode) {
            $node = $featureToNode[$id];
            $item = ['nid' => $node->nid];
            if (!empty($structure[$id])) {
                $item['nodes'] = array_map($buildTree, $structure[$id]);
            }
            return $item;
        };

        // Найдём корневые элементы (без parent_id)
        $rootNodes = $features->filter(fn($f) => !$f->parent_id);
        ths()->setSchema(
            $rootNodes->map(fn($feature) => $buildTree($feature->id))->values()->all()
        );

        return 'Features успешно перенесены в файловые ноды';
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }

    # http://threes.dc/threes.api/debug.Tests:testNodeRelations
    public function testNodeRelations(): void
    {
        try {
            // Чистим схему test
            $test_scheme_path = ths()->env('SCHEMES_STORAGE') . '/test.yaml';
            if (file_exists($test_scheme_path)) {
                unlink($test_scheme_path);
            }

            // Создаём ноды с test-схемой
            $root = new \Zen\Threes\Models\Node(null, 'test');
            $root->name = 'Root';
            $root->type = 'Threes.NodeText';
            $root->save();

            $child1 = new \Zen\Threes\Models\Node(null, 'test');
            $child1->name = 'Child1';
            $child1->type = 'Threes.NodeText';
            $child1->save();

            $child2 = new \Zen\Threes\Models\Node(null, 'test');
            $child2->name = 'Child2';
            $child2->type = 'Threes.NodeText';
            $child2->save();

            // Формируем дерево и сохраняем схему 'test'
            $schema = [
                'schema_nodes' => [
                    [
                        'nid' => $root->nid,
                        'nodes' => [
                            ['nid' => $child1->nid],
                            ['nid' => $child2->nid],
                        ],
                    ],
                ],
            ];

            ths()->setSchema($schema['schema_nodes'], 'test');

            // Теперь проверки — ноды сами читают актуальную схему без пересоздания!
            assert($child1->parent !== null, 'Parent of Child1 must not be null');
            assert($child1->parent->nid === $root->nid, 'Parent of Child1 must be Root');
            assert($child2->parent->nid === $root->nid, 'Parent of Child2 must be Root');

            assert(count($root->children) === 2, 'Root must have 2 children');

            assert(count($child1->siblings) === 1, 'Child1 must have 1 sibling');
            assert($child1->siblings[0]->nid === $child2->nid, 'Sibling of Child1 must be Child2');

            assert(count($child2->siblings) === 1, 'Child2 must have 1 sibling');
            assert($child2->siblings[0]->nid === $child1->nid, 'Sibling of Child2 must be Child1');

            echo "✅ testNodeRelations OK\n";
        } catch (\Throwable $e) {
            $this->logError($e);
        }
    }

}

```
`plugins/zen/threes/api/nodes/Node.php`
```<?php

namespace Zen\Threes\Api\Nodes;

use Zen\Threes\Traits\QueryLogTrait;
use Zen\Threes\Traits\DebugLogTrait;

class Node
{
    use QueryLogTrait;

    # http://threes.dc/threes.api/nodes.node:setNodeIcon?debug
    protected function setNodeIcon(): array
    {
        ths()->nodes()->setNodeIcon(
            request('nid'),
            request('svg')
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:set-node-settings?debug
    protected function setNodeSettings(): array
    {
        ths()->nodes()->setNodeSettings(
            request('nid'),
            request('settings')
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:set-node-name?debug
    protected function setNodeName(): array
    {
        ths()->nodes()->setNodeName(
            request('nid'),
            request('name')
        );
        //ths()->messages()->addMessage('Имя нода обновлено');
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:set-node-description?debug
    protected function setNodeDescription(): array
    {
        ths()->nodes()->setNodeDescription(
            request('nid'),
            request('description')
        );
        //ths()->messages()->addMessage('Описание нода обновлено');
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:update-data?debug
    protected function updateData(): array
    {
        ths()->nodes()->updateNodeData(
            request('nid'),
            request('data'),
            request('scope', 'self_content')
        );
        //ths()->messages()->addMessage('Данные нод обновлены');
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:add-node?debug
    protected function addNode(): array
    {
        ths()->nodes()->addNode(
            source_nid: request('nid'),
            type: request('type'),
            target_nid: request('target_nid'),
            data: request('data'),
            direction: request('direction'),
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:move-node?debug
    protected function moveNode(): array
    {
        ths()->nodes()->moveNode(
            request('nid'),
            request('target_nid'),
            request('direction')
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:delete-node?debug
    protected function deleteNode(): array
    {
        if (!request()->has('without_submit')) {
            if ($submit = ths()->submit()) {
                return $submit;
            }
        }
        $removed_nids = ths()->nodes()->deleteNode(
            nid: request('nid')
        );

        if (!request()->has('without_submit')) {
            ths()->messages()->addMessage('Удалены ноды: ' . join(', ', $removed_nids));
        }

        return [];
    }
}

```
`plugins/zen/threes/classes/Backlog.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Feature;

class Backlog
{
    use SingletonTrait;

    public function handleVector(): void
    {
        $vector = ths()->getSetting('vector');
        $system_prompt = collect(ths()->getSetting('vector_prompt'))
            ->where('active', 1)
            ->map(function ($prompt) {
                return $prompt['text'];
            })
            ->join(PHP_EOL);

        $yaml = ths()->ai(
            $vector,
            $system_prompt
        );

        ths()->setSetting('vector_yaml', $yaml);
        $this->generateBacklog($yaml);
    }

    public function generateBacklog(string $yaml = null): void
    {
        Feature::truncate();

        if (!$yaml) {
            $yaml = ths()->fromYamlFile(
                storage_path('vector/backlog_vector.yaml')
            );
        } else {
            $yaml = ths()->fromYaml($yaml);
        }

        $id_cnt = 0;

        $ids = [];
        foreach ($yaml as $feature) {
            $id = $feature['id'];
            if (!isset($ids[$id])) {
                $id_cnt++;
                $ids[$id] = $id_cnt;
            }
            $id = $ids[$id];
            $name = $feature['title'];
            $description = $feature['description'];
            $category = $feature['group'];
            $tags = $feature['tags'];
            //$dependencies = $feature['dependencies'];
            $acceptance_criteria = $feature['acceptance_criteria'];
            $parent_id = $feature['parent_id'] ? $ids[$feature['parent_id']] : null;
            $module = $feature['module'];

            foreach ($acceptance_criteria as &$acceptance_criterion) {
                foreach ($ids as $uid => $id) {
                    $acceptance_criterion = str_replace($uid, 'id:' . $id, $acceptance_criterion);
                }
            }

            #dd($tags, $acceptance_criteria, $dependencies);

            Feature::create([
                'id' => $id,
                'parent_id' => $parent_id,
                'name' => $name,
                'description' => $description,
                'category' => $category,
                'priority' => null,
                'status' => null,
                'module' => null,
                'release' => 1,
                'acceptance_criteria' => $acceptance_criteria,
            ]);
        }
    }
}

```
`plugins/zen/threes/classes/Connector.php`
```<?php

namespace Zen\Threes\Classes;

use Illuminate\Database\Connection;
use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Classes\Connectors\MySqlConnector;

class Connector
{
    use SingletonTrait;

    public function mySql(array $config = []): Connection
    {
        return MySqlConnector::connect($config);
    }
}

```
`plugins/zen/threes/classes/Events.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

/**
 * Система внутренних событий Threes
 * Возможно не понадобиться
 */
class Events
{
    use SingletonTrait;

    private array $events = [];

    /**
     * Добавляет событие в систему событий
     *
     * @param string $hook_name Имя хука
     * @param string $call Имя вызываемого метода
     * @param mixed ...$arguments Аргументы для вызываемого метода
     * @return void
     */
    public function addEvent(string $hook_name, string $call, ...$arguments): void
    {
        $this->events[] = [
            'hook_name' => $hook_name,
            'call' => $call,
            'arguments' => $arguments
        ];
    }

    /**
     * Добавляет одно неповторяемое событие
     * @param string $hook_name
     * @param string $call
     * @param ...$arguments
     * @return void
     */
    public function addEventOnce(string $hook_name, string $call, ...$arguments): void
    {
        if (isset($this->events[$hook_name])) {
            return;
        }
        $this->events[$hook_name] = [
            'hook_name' => $hook_name,
            'call' => $call,
            'arguments' => $arguments
        ];
    }

    /**
     * Выполняется при завершении работы приложения
     *
     * @return void
     */
    public function terminating(): void
    {
        collect($this->events)
            ->where('hook_name', 'terminating')
            ->each(function($event) {
                $this->runEvent($event);
            });
    }

    /**
     * Выполняет событие
     * @param array $event
     * @return void
     * @throws \ReflectionException
     */
    public function runEvent(array $event): void
    {
        $call = $event['call'];
        $arguments = $event['arguments'];
        ths()->exe($call, null, $arguments);
    }
}

```
`plugins/zen/threes/classes/Helpers.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Classes\Helpers\Carbon;
use Zen\Threes\Classes\Helpers\Debug;
use Zen\Threes\Classes\Helpers\Files;
use Zen\Threes\Classes\Helpers\Json;
use Zen\Threes\Classes\Helpers\State;
use Zen\Threes\Classes\Helpers\Strings;
use Zen\Threes\Classes\Helpers\Yaml;
use Zen\Threes\Classes\Helpers\Icon;
use Zen\Threes\Classes\Helpers\Env;
use Zen\Threes\Classes\Helpers\Schema;
use Zen\Threes\Classes\Helpers\Settings;
use Zen\Threes\Classes\Helpers\Confirm;

class Helpers
{
    use SingletonTrait;
    use Debug;    # Методы отладки
    use Files;    # Работа с файлами
    use Json;     # Работа с JSON
    use Yaml;     # Работа с YAML
    use Strings;  # Слой настроек
    use State;    # Управлением состоянием (сессия Threes)
    use Carbon;   # Создание объекта Carbon
    use Icon;     # Сервис иконок
    use Env;      # Переменные окружения
    use Schema;   # Управление схемами
    use Settings; # Система настроек Threes
    use Confirm;  # Система подтверждения

    /**
     * Ноды, хранят информацию для схемы, доступны по $nid
     * @return Nodes
     */
    public function nodes(): Nodes
    {
        return Nodes::getInstance();
    }

    /**
     * Хранилище нод
     * @return Store
     */
    public function store(): Store
    {
        return Store::getInstance();
    }

    /**
     * Коннекторы
     * @return Connector
     */
    public function connector(): Connector
    {
        return Connector::getInstance();
    }

    /**
     * Система сообщений
     * @return Messages
     */
    public function messages(): Messages
    {
        return Messages::getInstance();
    }

    public function notice(): Notice
    {
        return Notice::getInstance();
    }

    /**
     * Система событий
     * @return Events
     */
    public function events(): Events
    {
        return Events::getInstance();
    }

    public function versions(): Versions
    {
        return Versions::getInstance();
    }

    public function backlog(): Backlog
    {
        return Backlog::getInstance();
    }

    public function ai(
        string $prompt,
        string $system_prompt = null,
        string $service = 'openai',
        string $model = null
    ): ?string {
        if ($service === 'openai') {
            if (!$system_prompt) {
                $system_prompt = ths()->getSetting('default_prompt');
            }
            if (!$model) {
                $model = 'gpt-4.1';
            }
            return \Zen\Threes\Classes\Services\OpenAiService::query($prompt, $system_prompt, $model);
        }

        if ($service === 'ollama') {
            if (!$model) {
                $model = 'llama3.3:latest';
            }
            return \Zen\Threes\Classes\Services\OllamaService::query($prompt, $system_prompt, $model);
        }

        return null;
    }
}

```
`plugins/zen/threes/classes/Messages.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

class Messages
{
    use SingletonTrait;

    private array $messages = [];

    /**
     * Добавить сообщение (Этот метод будет расширяться)
     * @param string $message
     * @param string $type
     * @return void
     */
    public function addMessage(string $message, string $type = "success"): void
    {
        $this->messages[] = [
            "text" => $message,
            "type" => $type
        ];
    }

    public function pushMessages(array $messages = []): array
    {
        return array_merge($this->messages, $messages);
    }
}

```
`plugins/zen/threes/classes/Nodes.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Node;

class Nodes
{
    use SingletonTrait;

    /**
     * Доступ к модели
     * @param string|null $nid
     * @return Node|null
     */
    public function node(string $nid = null): ?Node
    {
        if ($nid) {
            return Node::find($nid);
        }
        return new Node();
    }

    /**
     * Создаёт новый нод по классу шаблона
     * @param string $type
     * @param array|null $data - Данные передаваемые в шаблон
     * @return Node
     * @throws \Exception
     */
    public function createNode(string $type = 'Threes.NodeText', ?array $data = null): Node
    {
        return $this->node()->create($type, $data);
    }

    /**
     * Получить дерево нод для меню Tree
     * @param string $schema_code
     * @param string|null $search
     * @return array
     */
    public function getNodesTree(string $schema_code = 'default', string $search = null): array
    {
        $schema = ths()->getSchema($schema_code)['schema_nodes'] ?? [];
        $search = trim(mb_strtolower($search ?? ''));

        $build_tree = function (array $item) use (&$build_tree, $search): ?array {
            $node = \Zen\Threes\Models\Node::find(
                $item['nid'],
                ['icon', 'name', 'description', 'type', 'props']
            );

            if (!$node) {
                return null;
            }

            if (data_get($node->props, 'tree') === false) {
                return null;
            }

            $children = [];
            if (!empty($item['nodes']) && data_get($node->props, 'tree_children') !== false) {
                foreach ($item['nodes'] as $child) {
                    $child_node = $build_tree($child);
                    if ($child_node) {
                        $children[] = $child_node;
                    }
                }
            }

            // Фильтрация по name или nid
            $matches = !$search
                || str_contains(mb_strtolower($node->name), $search)
                || str_contains(mb_strtolower($node->nid), $search)
                || count($children) > 0;

            if (!$matches) {
                return null;
            }

            $result = [
                'nid' => $node->nid,
                'icon' => $node->icon,
                'name' => $node->name,
                'description' => $node->description,
                'type' => $node->type,
                'props' => $node->props,
            ];

            if ($children) {
                $result['nodes'] = $children;
            }

            return $result;
        };

        return array_values(array_filter(array_map($build_tree, $schema)));
    }

    /**
     * Построение дерева нод
     * @param string $nid
     * @param string $schema_code
     * @return array
     */
    public function getNodesSchema(string $nid, string $schema_code = 'default'): array
    {
        $schema_nodes = ths()->getSchema($schema_code)['schema_nodes'] ?? [];
        $target_branch = $this->findSchemaBranchByNid($schema_nodes, $nid);
        if (!$target_branch) {
            return [];
        }
        return $this->buildSchemaFromBranch($target_branch, true);
    }

    /**
     * Рекурсивно ищет нужную ветку в schema_nodes по nid
     * @param array $nodes
     * @param string $target_nid
     * @return array|null
     */
    protected function findSchemaBranchByNid(array $nodes, string $target_nid): ?array
    {
        foreach ($nodes as $node_item) {
            if ($node_item['nid'] === $target_nid) {
                return $node_item;
            }

            if (!empty($node_item['nodes'])) {
                $found = $this->findSchemaBranchByNid($node_item['nodes'], $target_nid);
                if ($found) {
                    return $found;
                }
            }
        }

        return null;
    }

    /**
     * Рекурсивно строит дерево схемы, начиная с одной ветки
     * @param array $branch
     * @param bool $is_root
     * @return array|null
     * @throws \ReflectionException
     */
    protected function buildSchemaFromBranch(array $branch, bool $is_root = false): ?array
    {
        $nid = $branch['nid'];
        $node = Node::find($nid, ['name', 'icon', 'description', 'props', 'type', 'data']);

        if (!$node) {
            return null;
        }

        $props = $node->props;

        $schema_node = [
            'nid' => $node->nid,
            'icon' => $node->icon,
            'name' => $node->name,
            'description' => $node->description,
            'props' => $props,
        ];

        # Определяем область представления
        $scope = $is_root ? 'self_content' : 'content';

        # Устанавливаем флаг "собственный контент"
        $get_self_content = $props['self_content'] ?? true;

        if ($get_self_content) {
            $schema_node['data'] = $node->exe('getData', $scope, $node->data);
            $schema_node['component'] = $node->exe('ui', $scope);
        }

        # Рекурсивно достроим дочерние элементы, если разрешено
        if (!empty($props['show_children']) && !empty($branch['nodes'])) {
            $children = [];

            foreach ($branch['nodes'] as $child_branch) {
                $child_schema = $this->buildSchemaFromBranch($child_branch);
                if ($child_schema !== null) {
                    $children[] = $child_schema;
                }
            }

            if (!empty($children)) {
                $schema_node['nodes'] = $children;
            }
        }

        return $schema_node;
    }

    /**
     * Установить иконку для нода
     * @param string $nid
     * @param string $svg
     * @return void
     */
    public function setNodeIcon(string $nid, string $svg): void
    {
        $node = Node::find($nid);
        $node->icon = $svg;
        $node->save();
    }

    /**
     * Установить имя нода
     * @param string $nid
     * @param string|null $name
     * @return void
     */
    public function setNodeName(string $nid, string $name = null): void
    {
        $node = Node::find($nid);
        $node->name = $name;
        $node->save();
    }

    /**
     * Сохранить описание нода
     * @param string $nid
     * @param string|null $description
     * @return void
     */
    public function setNodeDescription(string $nid, string $description = null): void
    {
        if (!$description) {
            return;
        }
        $node = Node::find($nid);
        $node->description = $description;
        $node->save();
    }

    /**
     * Тут определяется массив настроек нода
     * @param string $nid
     * @return array
     */
    public function getNodeSettings(string $nid): array
    {
        $node = Node::find($nid);
        $props = $node->props;

        return [
            'tree' => $props['tree'] ?? false,
            'store' => $props['store'] ?? false,
            'schema' => $props['schema'] ?? false,
            'self_content' => $props['self_content'] ?? false,
            'show_children' => $props['show_children'] ?? false,
        ];
    }

    /**
     * Настройки устанавливаются
     * @param string $nid
     * @param array $settings
     * @return void
     */
    public function setNodeSettings(string $nid, array $settings): void
    {

        $node = Node::find($nid);
        $props = $node->props;

        # Установка флага (Собственный контент)
        if (isset($settings['self_content'])) {
            $props['self_content'] = $settings['self_content'];
        }

        # Установка флага (Показать потомков в дереве)
        if (isset($settings['tree_children'])) {
            $props['tree_children'] = $settings['tree_children'];
        }

        if (isset($settings['show_children'])) {
            $props['show_children'] = $settings['show_children'];
        }
        if (isset($settings['store'])) {
            $props['store'] = $settings['store'];
        }
        if (isset($settings['tree'])) {
            $props['tree'] = $settings['tree'];
        }
        if (isset($settings['schema'])) {
            $props['schema'] = $settings['schema'];
        }
        $node->props = $props;
        $node->save();
    }

    /**
     * Обновить данные нода
     * @param string $nid
     * @param array|string|null $data
     * @param $scope
     * @return void
     */
    public function updateNodeData(
        string $nid,
        array|string|null $data,
        ?string $scope = 'self_content'
    ): void {
        $node = Node::find($nid);
        $node->scope = $scope;
        $node->data = $data;
        $node->save();
    }

    /**
     * Добавить новый или скопированный нод в схему с указанием позиции
     *
     * @param string|null $source_nid Нод, который копировать (если нужно)
     * @param string|null $type Тип нового нода (если нужно создать)
     * @param string|null $target_nid Нод относительно которого вставляем
     * @param array $data
     * @param string $direction before|after|inside|outward
     * @param string $schema_code Код схемы
     * @return void
     * @throws \Exception
     */
    public function addNode(
        string $source_nid = null,
        string $type = null,
        string $target_nid = null,
        ?array $data = null,
        string $direction = 'after',
        string $schema_code = 'default'
    ): void {
        $schema = ths()->getSchema($schema_code);
        $schema_nodes = &$schema['schema_nodes'];

        if ($source_nid) {
            $source_node = Node::find($source_nid);
            if (!$source_node) {
                return;
            }
            $new_node = $source_node->copy();
        } else {
            $new_node = $this->createNode($type ?? 'Threes.NodeText', $data);
        }

        $new_branch = ['nid' => $new_node->nid];

        if (!$target_nid) {
            $schema_nodes[] = $new_branch;
            ths()->setSchema($schema_nodes, $schema_code);
            return;
        }

        $inserted = false;

        $insert = function (&$nodes) use (&$insert, $target_nid, $direction, &$new_branch, &$inserted) {
            foreach ($nodes as $key => &$node) {
                if ($node['nid'] === $target_nid) {
                    switch ($direction) {
                        case 'before':
                            array_splice($nodes, $key, 0, [$new_branch]);
                            break;
                        case 'after':
                            array_splice($nodes, $key + 1, 0, [$new_branch]);
                            break;
                        case 'inside':
                            if (!isset($node['nodes']) || !is_array($node['nodes'])) {
                                $node['nodes'] = [];
                            }
                            $node['nodes'][] = $new_branch;
                            break;
                        case 'outward':
                            return false;
                    }
                    $inserted = true;
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($insert($node['nodes'])) return true;
                }
            }
            return false;
        };

        if ($direction === 'outward') {
            $parent = null;
            $level = null;
            $find_parent = function (&$nodes, string $child_nid, &$parent = null, &$level = null) use (&$find_parent) {
                foreach ($nodes as &$node) {
                    if (!empty($node['nodes'])) {
                        foreach ($node['nodes'] as &$child) {
                            if ($child['nid'] === $child_nid) {
                                $parent = &$node;
                                $level = &$nodes;
                                return true;
                            }
                        }
                        if ($find_parent($node['nodes'], $child_nid, $parent, $level)) {
                            return true;
                        }
                    }
                }
                return false;
            };

            $found = $find_parent($schema_nodes, $target_nid, $parent, $level);

            if ($found && $parent && $level) {
                foreach ($level as $key => $node) {
                    if ($node['nid'] === $parent['nid']) {
                        array_splice($level, $key + 1, 0, [$new_branch]);
                        $inserted = true;
                        break;
                    }
                }
            }

            // Если не нашли — в корень
            if (!$inserted) {
                $schema_nodes[] = $new_branch;
            }

        } else {
            // Остальные действия
            $insert($schema_nodes);

            if (!$inserted) {
                // Если не нашли target — в конец корня
                $schema_nodes[] = $new_branch;
            }
        }

        ths()->setSchema($schema_nodes, $schema_code);
    }

    /**
     * Переместить нод
     * @param string $nid
     * @param string $target_nid
     * @param string $direction - before || after || outward || inside
     * @return void
     */
    public function moveNode(string $nid, string $target_nid, string $direction): void
    {
        switch ($direction) {
            case 'before':
                $this->moveNodeBefore($nid, $target_nid);
                break;
            case 'after':
                $this->moveNodeAfter($nid, $target_nid);
                break;
            case 'inside':
                $this->moveNodeInside($nid, $target_nid);
                break;
            case 'outward':
                $this->moveNodeOutward($nid, $target_nid);
                break;
        }
    }

    public function moveNodeBefore(string $nid, string $target_nid): void
    {
        $schema = ths()->getSchema();
        $schema_nodes = &$schema['schema_nodes'];
        $moving_node = null;

        $remove_node = function (&$nodes) use (&$remove_node, $nid, &$moving_node) {
            foreach ($nodes as $key => &$node) {
                if ($node['nid'] === $nid) {
                    $moving_node = $node;
                    unset($nodes[$key]);
                    $nodes = array_values($nodes);
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($remove_node($node['nodes'])) return true;
                }
            }
            return false;
        };

        $insert_before = function (&$nodes) use (&$insert_before, $target_nid, &$moving_node) {
            foreach ($nodes as $key => &$node) {
                if ($node['nid'] === $target_nid) {
                    array_splice($nodes, $key, 0, [$moving_node]);
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($insert_before($node['nodes'])) return true;
                }
            }
            return false;
        };

        $remove_node($schema_nodes);
        if ($moving_node) $insert_before($schema_nodes);
        ths()->setSchema($schema_nodes);
    }

    public function moveNodeAfter(string $nid, string $target_nid): void
    {
        $schema = ths()->getSchema();
        $schema_nodes = &$schema['schema_nodes'];
        $moving_node = null;

        $remove_node = function (&$nodes) use (&$remove_node, $nid, &$moving_node) {
            foreach ($nodes as $key => &$node) {
                if ($node['nid'] === $nid) {
                    $moving_node = $node;
                    unset($nodes[$key]);
                    $nodes = array_values($nodes);
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($remove_node($node['nodes'])) return true;
                }
            }
            return false;
        };

        $insert_after = function (&$nodes) use (&$insert_after, $target_nid, &$moving_node) {
            foreach ($nodes as $key => &$node) {
                if ($node['nid'] === $target_nid) {
                    array_splice($nodes, $key + 1, 0, [$moving_node]);
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($insert_after($node['nodes'])) return true;
                }
            }
            return false;
        };

        $remove_node($schema_nodes);
        if ($moving_node) $insert_after($schema_nodes);
        ths()->setSchema($schema_nodes);
    }

    public function moveNodeInside(string $nid, string $target_nid): void
    {
        $schema = ths()->getSchema();
        $schema_nodes = &$schema['schema_nodes'];
        $moving_node = null;

        // Защита: нельзя вложить в самого себя или потомка
        if ($nid === $target_nid || $this->isDescendant($schema_nodes, $nid, $target_nid)) {
            ths()->messages()->addMessage("Нельзя вложить узел внутрь самого себя или его потомка", "error");
            return;
        }

        // Удаление
        $remove_node = function (&$nodes) use (&$remove_node, $nid, &$moving_node): bool {
            foreach ($nodes as $key => &$node) {
                if ($node['nid'] === $nid) {
                    $moving_node = $node;
                    unset($nodes[$key]);
                    $nodes = array_values($nodes);
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($remove_node($node['nodes'])) return true;
                }
            }
            return false;
        };

        // Вставка
        $insert_inside = function (&$nodes) use (&$insert_inside, $target_nid, &$moving_node): bool {
            foreach ($nodes as &$node) {
                if ($node['nid'] === $target_nid) {
                    if (!isset($node['nodes']) || !is_array($node['nodes'])) {
                        $node['nodes'] = [];
                    }
                    $node['nodes'][] = $moving_node;
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($insert_inside($node['nodes'])) return true;
                }
            }
            return false;
        };

        $remove_node($schema_nodes);
        if ($moving_node) {
            $insert_inside($schema_nodes);
        }

        ths()->setSchema($schema_nodes);
    }


    public function moveNodeOutward(string $nid, string $target_nid): void
    {
        $schema = ths()->getSchema();
        $schema_nodes = &$schema['schema_nodes'];
        $moving_node = null;

        // Защита от циклов: нельзя переместить, если target — потомок
        if ($nid === $target_nid || $this->isDescendant($schema_nodes, $nid, $target_nid)) {
            ths()->messages()->addMessage("Нельзя поднять узел выше, если он содержит целевой узел", "error");
            return;
        }

        // Удаление
        $remove_node = function (&$nodes, &$parent = null) use (&$remove_node, $nid, &$moving_node): bool {
            foreach ($nodes as $key => &$node) {
                if ($node['nid'] === $nid) {
                    $moving_node = $node;
                    unset($nodes[$key]);
                    $nodes = array_values($nodes);
                    return true;
                }
                if (!empty($node['nodes'])) {
                    if ($remove_node($node['nodes'], $node)) return true;
                }
            }
            return false;
        };

        // Поиск родителя target_nid
        $find_parent = function (&$nodes, string $child_nid, &$parent = null, &$level = null) use (&$find_parent): bool {
            foreach ($nodes as &$node) {
                if (!empty($node['nodes']) && is_array($node['nodes'])) {
                    foreach ($node['nodes'] as &$child) {
                        if ($child['nid'] === $child_nid) {
                            $parent = &$node;
                            $level = &$nodes;
                            return true;
                        }
                    }
                    if ($find_parent($node['nodes'], $child_nid, $parent, $level)) {
                        return true;
                    }
                }
            }
            return false;
        };

        $remove_node($schema_nodes);

        $parent = null;
        $level = null;
        $found = $find_parent($schema_nodes, $target_nid, $parent, $level);

        if ($moving_node && $found && $parent && $level) {
            foreach ($level as $key => $node) {
                if ($node['nid'] === $parent['nid']) {
                    array_splice($level, $key + 1, 0, [$moving_node]);
                    ths()->setSchema($schema_nodes);
                    return;
                }
            }
        }

        // Если родитель не найден — перемещаем в корень
        $schema_nodes[] = $moving_node;
        ths()->setSchema($schema_nodes);
    }

    # Удаляем нод
    public function deleteNode(string $nid): array
    {
        // Текущая схема проекта
        $schema         = ths()->getSchema();
        $schema_nodes   = $schema['schema_nodes'] ?? [];

        /** @var string[] $removed_nids */
        $removed_nids = [];

        /**
         * Рекурсивно собираем nid-ы ветки и удаляем саму ветку из массива схемы
         */
        $remove_node = function (&$nodes) use (&$remove_node, $nid, &$removed_nids): bool {
            foreach ($nodes as $key => &$node) {
                if ($node['nid'] === $nid) {
                    // собрать nid текущего узла + всех потомков
                    $collect = function (array $branch) use (&$collect, &$removed_nids) {
                        $removed_nids[] = $branch['nid'];
                        if (!empty($branch['nodes'])) {
                            foreach ($branch['nodes'] as $child) {
                                $collect($child);
                            }
                        }
                    };
                    $collect($node);

                    unset($nodes[$key]);
                    $nodes = array_values($nodes); // переиндексируем
                    return true;
                }

                // поиск глубже
                if (!empty($node['nodes']) && $remove_node($node['nodes'])) {
                    // если после удаления у родителя нет детей — чистим ключ
                    if (empty($node['nodes'])) {
                        unset($node['nodes']);
                    }
                    return true;
                }
            }
            return false;
        };

        // Удаляем из схемы
        $remove_node($schema_nodes);
        ths()->setSchema($schema_nodes);   // сохраняем обновлённую схему

        $removed_nids = array_unique($removed_nids);

        // Физически удаляем каталоги всех затронутых нодов
        foreach ($removed_nids as $del_nid) {
            if ($node = Node::find($del_nid)) {
                $node->delete();          // см. реализацию delete() в Node :contentReference[oaicite:1]{index=1}
            }
        }

        return $removed_nids;
    }


    /**
     * Проверяет, является ли узел потомком определенного родительского узла в иерархической древовидной структуре.
     *
     * @param array $tree Массив древовидной структуры, содержащий узлы.
     * @param string $parent_nid ID родительского узла для проверки.
     * @param string $child_nid ID дочернего узла для проверки.
     * @return bool Возвращает true, если дочерний узел является потомком родительского узла, иначе false.
     */
    private function isDescendant(array $tree, string $parent_nid, string $child_nid): bool
    {
        foreach ($tree as $node) {
            if ($node['nid'] === $parent_nid) {
                return $this->containsNode($node, $child_nid);
            }
            if (!empty($node['nodes']) && $this->isDescendant($node['nodes'], $parent_nid, $child_nid)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Проверяет, содержится ли узел с заданным идентификатором в дереве узлов.
     *
     * @param array $node Массив, представляющий текущий узел и его потомки.
     * @param string $target_nid Идентификатор узла, который необходимо найти.
     * @return bool Возвращает true, если узел с указанным идентификатором найден, иначе false.
     */
    private function containsNode(array $node, string $target_nid): bool
    {
        if ($node['nid'] === $target_nid) {
            return true;
        }
        if (!empty($node['nodes'])) {
            foreach ($node['nodes'] as $child) {
                if ($this->containsNode($child, $target_nid)) {
                    return true;
                }
            }
        }
        return false;
    }
}

```
`plugins/zen/threes/classes/Notice.php`
```<?php

namespace Zen\Threes\Classes;

use Http;
use Zen\Threes\Traits\SingletonTrait;

class Notice
{
    use SingletonTrait;

    public function telegramSendMessage(string $text, ?string $chat_id = null): void
    {
        $bot_token = env('TELEGRAM_BOT_TOKEN');
        $chat_id = env('TELEGRAM_CHAT_ID', $chat_id);
        if (!$bot_token || !$chat_id) {
            return;
        }
        $api_url = 'https://api.telegram.org';
        $encodedText = urlencode($text);
        $query = "$api_url/bot$bot_token/sendMessage?chat_id=$chat_id&text=$encodedText&parse_mode=HTML";
        Http::get($query);
    }
}

```
`plugins/zen/threes/classes/Store.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;
use Zen\Threes\Models\Node;
use Illuminate\Support\Facades\File;

class Store
{
    use SingletonTrait;

    /**
     * @return array
     * @throws \ReflectionException
     */
    public function getStoreNodes(): array
    {
        $store = [];
        $nodes_templates_path = ths()->env('TYPES_STORAGE');
        $template_files = ths()->filesList($nodes_templates_path, true);
        foreach ($template_files as $template_file) {
            $type = str_replace('.json', '', $template_file['name']);
            $node = ths()->nodes()->node();
            $node->type = $type;
            $template = $node->exe('template');
            $store[] = [
                'nid' => null,
                'name' => $template['name'] ?? 'Без названия',
                'icon' => ths()->checkIcon($template['icon']),
                'description' => $template['description'] ?? '',
                'type' => $type,
                'template' => true,
                'group' => $template['props']['store_data']['group'] ?? 'Шаблоны'
            ];

        }

        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $node_dirs = ths()->dirList($nodes_storage_path);
        foreach ($node_dirs as $nid) {
            $node = Node::find($nid, ['name', 'icon', 'description', 'props', 'type']);
            if (!$node || !($node->props['store'] ?? false)) {
                continue;
            }

            $store[] = [
                'nid' => $node->nid,
                'name' => $node->name,
                'icon' => $node->icon,
                'description' => $node->description,
                'type' => $node->type,
                'template' => false,
                'group' => $node->props['store_data']['group'] ?? 'Сохранённые'
            ];
        }

        return $store;
    }

    /**
     * Копирует ноды по умолчанию в папку с типами
     * @return void
     */
    public function createDefaultNodeTypes(): void
    {
        $default_types = base_path('plugins/zen/threes/resources/default_types');
        $types_storage_path = ths()->checkDir(
            ths()->env('TYPES_STORAGE') . '/'
        );
        File::copyDirectory($default_types, $types_storage_path);
    }
}

```
`plugins/zen/threes/classes/Types.php`
```<?php

namespace Zen\Threes\Classes;

class Types
{
    public static function getType(string $type = 'Threes.NodeText'): array
    {
        $types_path = ths()->env('TYPES_STORAGE');
        return ths()->fromJsonFile("$types_path/$type.json");
    }
}

```
`plugins/zen/threes/classes/Versions.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

use Zen\Threes\Models\Version;

class Versions
{
    use SingletonTrait;

    # Методы версионирования в Version
}

```
`plugins/zen/threes/classes/connectors/MySqlConnector.php`
```<?php

namespace Zen\Threes\Classes\Connectors;

use Illuminate\Database\Connection;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class MySqlConnector
{
    /**
     * Устанавливает соединение с базой данных MySQL с возможностью переопределения параметров
     *
     * @param array $config Параметры подключения (хост, пользователь, пароль и т.д.)
     * @return Connection
     */
    public static function connect(array $config = []): Connection
    {
        // Если конфигурация не передана, используем стандартное подключение
        if (empty($config)) {
            return DB::connection('mysql');
        }

        // Имя для динамического соединения
        $connectionName = 'mysql_dynamic';

        // Устанавливаем конфигурацию для нового соединения,
        // используя за основу стандартные настройки MySQL
        Config::set("database.connections.{$connectionName}", array_merge(
            config('database.connections.mysql'),
            $config
        ));

        // Очищаем кеш соединения, если оно уже было создано
        DB::purge($connectionName);

        // Возвращаем новое соединение с переопределёнными параметрами
        return DB::connection($connectionName);
    }
}

```
`plugins/zen/threes/classes/helpers/Carbon.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

trait Carbon
{
    function carbon(?string $date = null, ?string $format = null): \Carbon\Carbon
    {
        return $format
            ? \Carbon\Carbon::createFromFormat($format, $date)
            : \Carbon\Carbon::parse($date ?? now());
    }
}

```
`plugins/zen/threes/classes/helpers/Confirm.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

trait Confirm
{
    public function submit(
        string $massage = 'Вы уверены?',
        string $yes_label = 'Да',
        string $no_label = 'Нет'
    ): bool | array {
        $request = request()->all();

        if (isset($request['confirm']) && $request['confirm'] === 'yes') {
            return false;
        }

        if (isset($request['confirm']) && $request['confirm'] === 'no') {
            return [
                'success' => false,
                'message' => 'Отказ от операции'
            ];
        }

        return [
            'confirm' => [
                'message' => $massage,
                'yes_label' => $yes_label,
                'no_label' => $no_label,
            ]
        ];
    }
}

```
`plugins/zen/threes/classes/helpers/Debug.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

trait Debug
{
    /**
     * Сохранить запрос
     * @param string $name
     * @return void
     */
    public function requestSave(string $name = 'default'): void
    {
        ths()->toJsonFile(
            storage_path("temp/threes/request_$name.json"),
            request()->all(),
            true
        );
    }

    /**
     * Загрузить запрос
     * @param string $name
     * @return array|null
     */
    public function requestLoad(string $name = 'default'): array | null
    {
        return ths()->fromJsonFile(
            storage_path("temp/threes/request_$name.json"),
        );
    }

    /**
     * Выполнить запрос
     * @param string $name
     * @return void
     */
    public function requestExec(string $name = 'default'): void
    {
        $request = $this->requestLoad($name);
        request()->merge($request);
    }

    /**
     * Автоматическая отладка, если данные есть они сохраняются, если нет они подгружаются
     * @param string $name
     * @return void
     */
    public function requestDebug(string $name = 'default'): void
    {
        if (count(request()->all())) {
            $this->requestSave($name);
        } else {
            $this->requestExec($name);
        }
    }
}

```
`plugins/zen/threes/classes/helpers/Env.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

trait Env
{
    private static array $env = [
        'NODES_STORAGE' => [
            'default' => 'storage/threes/nodes',
        ],
        'TYPES_STORAGE' => [
            'default' => 'storage/threes/types',
        ],
        'SCHEMES_STORAGE' => [
            'default' => 'storage/threes/schemes',
        ]
    ];

    public function env(string $key): ?string
    {
        if (isset(self::$env[$key]['value'])) {
            return self::$env[$key]['value'];
        }

        return self::$env[$key]['value'] = base_path(env($key, self::$env[$key]['default']));
    }
}

```
`plugins/zen/threes/classes/helpers/Files.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

use Illuminate\Support\Collection;
use File;

trait Files
{
    /**
     * Проверить адрес файла и рекурсивно создать недостающие папки
     * @param string $path
     * @param int $permissions
     * @return string
     */
    public function checkDir(string $path, int $permissions = 0777): string
    {
        # Проверяем, считается ли путь директорией (по завершающему слэшу)
        $is_directory = str_ends_with($path, DIRECTORY_SEPARATOR);

        # Определяем, какую директорию нужно создать
        $target_dir = $is_directory ? rtrim($path, DIRECTORY_SEPARATOR) : dirname($path);

        # Создаём директорию, если её нет
        if (!is_dir($target_dir)) {
            mkdir($target_dir, $permissions, true);
        }

        # Возвращаем путь без завершающего слэша
        return rtrim($path, DIRECTORY_SEPARATOR);
    }

    /**
     * Возвращает коллекцию со списком файлов в указанной папке
     * @param string $dir_path - Путь к папке
     * @param bool $recursive - Рекурсивное сканирование (отключено по умолчанию)
     * @param array $settings - Настройки исключений exclude_names, exclude_paths, allowed_extensions
     * @return Collection
     */
    public function filesList(string $dir_path, bool $recursive = false, array $settings = []): Collection
    {
        $files = $recursive ? File::allFiles($dir_path) : File::files($dir_path);
        $output = [];
        $excluded_patterns = $settings['excluded'] ?? [];
        $allowed_extensions = $settings['allowed_extensions'] ?? [];

        foreach ($files as $file) {
            try {
                if ($file->isLink() || !file_exists($file->getRealPath())) {
                    $size = 0;
                } else {
                    $size = $file->getSize();
                }
            } catch (\Exception $e) {
                $size = 0;
            }

            $path = $file->getRealPath();
            if (empty($path)) continue;

            // Проверка по маскам
            if ($this->matchesPatterns($path, $excluded_patterns)) {
                continue;
            }

            // Проверка расширений, если указаны
            if (!empty($allowed_extensions) && !in_array($file->getExtension(), $allowed_extensions)) {
                continue;
            }

            $output[] = [
                'name' => $file->getFilename(),
                'extension' => $file->getExtension(),
                'path' => $path,
                'size' => intval($size)
            ];
        }

        return collect($output);
    }

    /**
     * Вспомогательный метод для this.filesList
     * Проверяет путь на совпадение с любым паттерном из списка $patterns
     * @param string $path
     * @param array $patterns
     * @return bool
     */
    private function matchesPatterns(string $path, array $patterns): bool
    {
        foreach ($patterns as $pattern) {
            // Убираем * для упрощённой логики "начинается с"
            $prefix = rtrim($pattern, '*');

            if (str_starts_with($path, $prefix)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Метод обработки правил фильтрации файлов для filesList
     * @param $file
     * @param $rules
     * @return bool
     */
    private function isSkipped($file, $rules): bool
    {
        if ($this->skip('exclude_names', $file->getFilename(), $rules)) {
            return true;
        }
        if ($this->skip('exclude_paths', $file->getRealPath(), $rules)) {
            return true;
        }
        if ($this->skip('allowed_extensions', $file->getExtension(), $rules, true)) {
            return true;
        }
        return false;
    }

    /**
     * Метод обработки одного правила фильтрации файлов для filesList
     * @param string $rule - Ключ правила
     * @param string $target - Цель фильтрации
     * @param array $settings - Настройки
     * @param bool $inversive - Инверсия фильтрации
     * @return bool - true = Правило нарушено
     */
    private function skip(
        string $rule,
        string $target,
        array $settings = [],
        bool $inversive = false
    ): bool {
        if (isset($settings[$rule]) && $settings[$rule]) {
            $found = in_array($target, $settings[$rule], true);
            return $inversive ? !$found : $found;
        }
        return false;
    }

    /**
     * Возвращает список папок в папке
     * @param string $dir_path
     * @return array
     */
    public function dirList(string $dir_path): array
    {
        return array_filter(scandir($dir_path), function ($entry) use ($dir_path) {
            return $entry !== '.' && $entry !== '..' && is_dir($dir_path . '/' . $entry);
        });
    }

    /**
     * Рекурсивное удаление содержимого директории
     * @param string $dir_path
     * @return void
     */
    public function shellRemoveDir(string $dir_path): void
    {
        if (!file_exists($dir_path) || !is_dir($dir_path) || empty($dir_path)) {
            return;
        }
        $escaped_path = escapeshellarg($dir_path);
        shell_exec("rm -rf $escaped_path/*");
    }
}

```
`plugins/zen/threes/classes/helpers/Icon.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

use Str;

trait Icon
{
    /**
     * Создать иконку из пути до файла или строки svg
     * @param string $svg
     * @return string
     */
    public function setIcon(string $svg): string
    {
        if (Str::startsWith($svg, ['<svg', '<?xml'])) {
            $contents = $svg;
        } else {
            $contents = file_get_contents($svg);
        }

        $hash = md5($contents);
        $path = ths()->checkDir(storage_path("app/uploads/public/threes/icons/$hash.svg"));

        file_put_contents($path, $contents);
        return $hash;
    }

    public function getIcon(string $hash): string
    {
        return env('APP_URL') . "/storage/app/uploads/public/threes/icons/$hash.svg";
    }

    public function checkIcon(string $path): string
    {
        $contents = file_get_contents($path);
        $hash = md5($contents);
        $path = storage_path("app/uploads/public/threes/icons/$hash.svg");
        if (!file_exists($path)) {
            $path = ths()->checkDir($path);
            file_put_contents($path, $contents);
        }
        return $this->getIcon($hash);
    }

}

```
`plugins/zen/threes/classes/helpers/Json.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

trait Json
{
    /**
     * Определяет, является ли строка JSON-массивом
     * @param $string
     * @return bool
     */
    public function isJson($string): bool
    {
        json_decode($string);
        return json_last_error() === JSON_ERROR_NONE;
    }

    /**
     * Преобразовать json-строку в массив
     * @param string $string
     * @param int|bool $assoc
     * @return array|object|null
     */
    public function fromJson(string $string, int|bool $assoc = true): array|null|object
    {
        if (empty($string)) {
            return null;
        }
        return json_decode($string, $assoc);
    }

    /**
     * Прочитать массив из json-файла
     * @param string $file_path
     * @param int|bool $assoc
     * @return array|null
     */
    public function fromJsonFile(string $file_path, int|bool $assoc = true): array|null
    {
        if (!file_exists($file_path)) {
            return null;
        }
        return $this->fromJson(file_get_contents($file_path), $assoc);
    }

    /**
     * Преобразовать массив в json-строку
     * @param array $arr
     * @param bool $pretty_print
     * @param bool $no_slashes
     * @return string|null
     */
    public function toJson(
        array $arr = [],
        bool $pretty_print = true,
        bool $no_slashes = false
    ): ?string {
        if (empty($arr)) {
            return null;
        }
        $options = JSON_UNESCAPED_UNICODE
            | ($pretty_print ? JSON_PRETTY_PRINT : 0)
            | ($no_slashes ? JSON_UNESCAPED_SLASHES : 0);

        return json_encode($arr, $options);
    }

    /**
     * Сохранить массив в json-файл
     * @param string $file_path
     * @param array $arr
     * @param bool $pretty_print
     * @param bool $no_slashes
     * @return void
     */
    public function toJsonFile(
        string $file_path,
        array $arr = [],
        bool $pretty_print = true,
        bool $no_slashes = false
    ): void {
        file_put_contents(
            ths()->checkDir($file_path),
            $this->toJson(
                $arr,
                $pretty_print,
                $no_slashes
            )
        );
    }
}

```
`plugins/zen/threes/classes/helpers/Schema.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

trait Schema
{
    /**
     * @param string $schema_code
     * @return array|null
     */
    public function getSchema(string $schema_code = 'default'): array
    {
        $schema_path = ths()->env('SCHEMES_STORAGE');
        $schema_file = $schema_path . "/$schema_code.json";
        return ths()->fromJsonFile($schema_file) ?? [];
    }

    /**
     * @param string $schema_code
     * @param string $schema_name
     * @param array $nodes
     * @return void
     */
    public function setSchema(
        array $nodes,
        string $schema_code = 'default',
        string $schema_name = 'Схема проекта',
    ): void {
        $schema_path = ths()->env('SCHEMES_STORAGE');
        $schema_file = $schema_path . "/$schema_code.json";
        $schema = [
            'schema_name' => $schema_name,
            'schema_nodes' => $nodes
        ];
        ths()->toJsonFile($schema_file, $schema);
    }
}

```
`plugins/zen/threes/classes/helpers/Settings.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

use Zen\Threes\Models\Settings as SettingsModel;

trait Settings
{
    /**
     * Интерфейс для настроек
     * @param string $key
     * @return mixed
     */
    public function getSetting(string $key): mixed
    {
        return SettingsModel::get($key);
    }

    /**
     * Вписать настройку
     * @param string $key
     * @param mixed $value
     * @return void
     */
    public function setSetting(string $key, mixed $value): void
    {
        $settings = SettingsModel::instance();
        $settings->setAttribute($key, $value);
        $settings->save();
    }
}

```
`plugins/zen/threes/classes/helpers/State.php`
```<?php

namespace Zen\Threes\Classes\Helpers;


trait State
{
    private array $state = [];

    /**
     * Сохранить состояние
     * @param string $key
     * @param mixed $value
     * @return void
     */
    public function setState(string $key, mixed $value): mixed
    {
        return $this->state[$key] = $value;
    }

    /**
     * Загрузить состояние
     * @param string $key
     * @return mixed
     */
    public function getState(string $key): mixed
    {
        return $this->state[$key] ?? null;
    }
}

```
`plugins/zen/threes/classes/helpers/Strings.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

use Str;

/**
 * Операции со строками
 */
trait Strings
{
    /**
     * Сгенерировать UUID
     * @return string
     */
    public function createUuid(): string
    {
        return Str::uuid()->toString();
    }

    /**
     * Сгенерировать токен с заданной длинной
     * @param int $length
     * @return string
     */
    public function createToken(int $length = 8): string
    {
        return strtolower(Str::random($length));
    }

    /**
     * Сгенерировать строку из безопасных символов
     * @param int $length
     * @return string
     */
    public function createShortId(int $length = 12): string
    {
        $alphabet = 'abcdefghjkmnpqrstuvwxyz23456789';
        $max = strlen($alphabet) - 1;
        $token = '';
        for ($i = 0; $i < $length; $i++) {
            $token .= $alphabet[random_int(0, $max)];
        }
        return $token;
    }

    /**
     * Преобразует kebab-case в camelCase
     * @param string $value
     * @return string
     */
    public function kebabToCamel(string $value): string
    {
        return Str::camel($value);
    }

    /**
     * Форматирует вывод байт в человекопонятную строку
     * @param int $bytes
     * @return string
     */
    public function formatSizeUnits(int $bytes): string
    {
        if ($bytes >= 1073741824) {
            return number_format($bytes / 1073741824, 2) . ' GB';
        } elseif ($bytes >= 1048576) {
            return number_format($bytes / 1048576, 2) . ' MB';
        } elseif ($bytes >= 1024) {
            return number_format($bytes / 1024, 2) . ' KB';
        } elseif ($bytes === 1) {
            return '1 byte';
        } elseif ($bytes > 1) {
            return $bytes . ' bytes';
        } else {
            return '0 bytes';
        }
    }
}

```
`plugins/zen/threes/classes/helpers/Yaml.php`
```<?php

namespace Zen\Threes\Classes\Helpers;

use Symfony\Component\Yaml\Yaml as _Yaml;

trait Yaml
{
    /**
     * Преобразовать yaml-строку в массив
     * @param string $string
     * @return array|null
     */
    public function fromYaml(string $string): ?array
    {
        return _Yaml::parse($string);
    }

    /** Прочитать массив из yaml-файла
     * @param string $file_path
     * @return array|null
     */
    public function fromYamlFile(string $file_path): ?array
    {
        if (!file_exists($file_path)) {
            return null;
        }
        return $this->fromYaml(file_get_contents($file_path));
    }

    /**
     * Преобразовать массив в yaml-строку
     * @param array $array
     * @param int $inline
     * @param int $indent
     * @return string|null
     */
    public function toYaml(array $array, int $inline = 10, int $indent = 4): ?string
    {
        return _Yaml::dump($array, $inline, $indent);
    }

    /**
     * Сохранить массив в yaml-файл
     * @param string $file_path
     * @param array $array
     * @param int $inline
     * @param int $indent
     * @return void
     */
    public function toYamlFile(
        string $file_path,
        array $array,
        int $inline = 10,
        int $indent = 4
    ): void {
        file_put_contents(
            ths()->checkDir($file_path),
            $this->toYaml(
                $array,
                $inline,
                $indent
            )
        );
    }
}

```
`plugins/zen/threes/classes/services/OllamaService.php`
```<?php

namespace Zen\Threes\Classes\Services;

use Exception;
use Throwable;
use Http;

class OllamaService
{
    private string $host;

    public function __construct()
    {
        $this->host = env('OLLAMA_HOST', 'http://192.168.201.105:11434');
    }

    /**
     * Выполнить запрос к Ollama с поддержкой system prompt
     * @param string $model
     * @param string $user_prompt
     * @param string|null $system_prompt
     * @return string
     * @throws Exception
     */
    public static function query(string $user_prompt, ?string $system_prompt = null, string $model = 'llama3.3:latest'): string
    {
        set_time_limit(0);

        $service = new self();
        try {
            $payload = [
                'model'  => $model,
                'prompt' => $user_prompt,
                'stream' => false,
            ];

            if ($system_prompt) {
                $payload['system'] = $system_prompt;
            }

            $response = Http::timeout(3600)->post($service->host . '/api/generate', $payload);

            if (!$response || !$response->successful()) {
                throw new Exception('Ollama connection error: ' . $response->body());
            }

            return $response->json()['response'] ?? '';
        } catch (Exception | Throwable $exception) {
            throw new Exception('Ollama connection error', 0, $exception);
        }
    }
}

```
`plugins/zen/threes/classes/services/OpenAiService.php`
```<?php

namespace Zen\Threes\Classes\Services;

use Exception;
use Throwable;
use Http;

class OpenAiService
{
    private string $api_key;
    public function __construct()
    {
        $this->api_key = env('OPEN_AI_API_KEY');
    }

    /**
     * Выполнить запрос к Open Ai
     * @param string $user_prompt
     * @param string $system_prompt
     * @param string $model
     * @return string
     * @throws Exception
     */
    public static function query(string $user_prompt, string $system_prompt, string $model = 'gpt-4.1'): string
    {
        $service = new self();
        try {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $service->api_key,
            ])->timeout(600)->post('https://api.openai.com/v1/chat/completions', [
                'model' => $model,
                'messages' => [
                    [
                        'role' => 'system',
                        'content' => $system_prompt
                    ],
                    [
                        'role' => 'user',
                        'content' => $user_prompt
                    ],
                ],
            ]);

            if (!$response || !$response->successful()) {
                throw new Exception('API connection error');
            }

            return $response->json()['choices'][0]['message']['content'];
        } catch (Exception | Throwable $exception) {
            throw new Exception('API connection error', 0, $exception);
        }
    }
}

```
`plugins/zen/threes/classes/types/Document.php`
```<?php

namespace Zen\Threes\Classes\Types;

class Document
{
    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/color_document.svg'),
            'name' => "Документ",
            'description' => '',
            'type' => 'Threes.Document',
            'data' => null,
            'props' => [
                'self_content' => true,
                'show_children' => true,
                'tree' => true,
                'tree_children' => false,
                'schema' => true,
                'store' => false,
                'store_data' => [
                    'group' => 'Документы',
                    'author' => 'Threes',
                    'tags' => ["code"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    public function ui(): string
    {
        return 'Threes.Document';
    }

    public function getData($data)
    {
        if (!is_array($data)) {
            $data = [];
        }
        return $data;
    }

    public function setData($data)
    {
        return $data;
    }
}

```
`plugins/zen/threes/classes/types/Elements.php`
```<?php

namespace Zen\Threes\Classes\Types;

class Elements
{
    public function template(?array $data = []): array
    {

        if ($data) {
            $type = $data['type'];
            $data = [
                'content' => "Заголовок $type",
                'settings' => [
                    'type' => $type
                ]
            ];
        }

        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/elements.svg'),
            'name' => "Элементы",
            'description' => '',
            'type' => 'Threes.Elements',
            'data' => $data,
            'props' => [
                'self_content' => true,
                'show_children' => false,
                'tree' => true,
                'tree_children' => false,
                'schema' => true,
                'store' => false,
                'store_data' => [
                    'group' => 'Документы',
                    'author' => 'Threes',
                    'tags' => ["text", "document"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    public function ui(): string
    {
        return 'Threes.Elements';
    }

    public function getData($data)
    {
        if (!$data) {
            $data = [
                'content' => 'Заголовок h1',
                'settings' => [
                    'type' => 'h1'
                ]
            ];
        }
        return $data;
    }

    public function setData($data)
    {
        return $data;
    }
}

```
`plugins/zen/threes/classes/types/Method.php`
```<?php

namespace Zen\Threes\Classes\Types;

class Method
{
    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/api.svg'),
            'name' => "Блок метод",
            'type' => 'Threes.Method',
            'data' => [
                'enabled' => true,
                'name' => 'Программный блок',
                'show_name' => true,
                'desc' => '',
                'show_desc' => false,
                'code' => '',
                'show_code' => false,
            ],
            'props' => [
                'self_content' => true,
                'show_children' => true,
                'tree' => true,
                'tree_children' => true,
                'schema' => true,
                'store' => false,
                'store_data' => [
                    'group' => 'Документы',
                    'author' => 'Threes',
                    'tags' => ["text", "document"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    public function ui(): string
    {
        return 'Threes.Method';
    }

    public function getData(?array $data = null)
    {
        return $data;
    }

    public function setData($data, $scope, $node)
    {
        return $data;
    }
}

```
`plugins/zen/threes/classes/types/NodeBuilder.php`
```<?php

namespace Zen\Threes\Classes\Types;

class NodeBuilder
{
    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/code.svg'),
            'name' => "Новый интерфейс",
            'type' => 'Threes.NodeBuilder',
            'data' => '',
            'props' => [
                'self_content' => true,
                'show_children' => false,
                'tree' => true,
                'schema' => true,
                'store' => false,
                'store_data' => [
                    'group' => 'Фронтенд',
                    'author' => 'Threes',
                    'tags' => ["html", "frontend"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    public function ui(): string
    {
        return 'Threes.NodeBuilder';
    }

    public function getData($data)
    {
        return $data;
    }

    public function setData($data)
    {
        return $data;
    }
}

```
`plugins/zen/threes/classes/types/NodeCode.php`
```<?php

namespace Zen\Threes\Classes\Types;

class NodeCode
{
    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/codebase.svg'),
            'name' => "Генератор кода",
            'description' => 'Генерирует код на основе инструкций',
            'type' => 'Threes.NodeCode',
            'data' => '#',
            'props' => [
                'self_content' => true,
                'show_children' => true,
                'tree' => true,
                'schema' => true,
                'store' => false,
                'store_data' => [
                    'group' => 'Документы',
                    'author' => 'Threes',
                    'tags' => ["code"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    public function ui(): string
    {
        return 'Threes.NodeCode';
    }

    public function getData($data, $scope, $node)
    {
        if (!is_array($data)) {
            $data = [];
        }
        return $data;
    }

    public function setData($data, $scope, $node)
    {
        return $data;
    }
}

```
`plugins/zen/threes/classes/types/NodeText.php`
```<?php

namespace Zen\Threes\Classes\Types;

class NodeText
{
    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/document.svg'),
            'name' => "Текст",
            'type' => 'Threes.NodeText',
            'data' => '',
            'props' => [
                'self_content' => true,
                'show_children' => true,
                'tree' => true,
                'tree_children' => true,
                'schema' => true,
                'store' => false,
                'store_data' => [
                    'group' => 'Документы',
                    'author' => 'Threes',
                    'tags' => ["text", "document"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
    }

    public function ui(): string
    {
        return 'Threes.NodeText';
    }

    public function getData($data, $scope, $node)
    {
        return $data;
    }

    public function setData($data, $scope, $node)
    {
        return $data;
    }
}

```
`plugins/zen/threes/console/BacklogFill.php`
```<?php namespace Zen\Threes\Console;

use Illuminate\Console\Command;

/**
 * BacklogFill Command
 *
 * @link https://docs.octobercms.com/3.x/extend/console-commands.html
 */
class BacklogFill extends Command
{

    protected $signature = 'threes:backlog_fill';
    protected $description = 'Заполнить бэклог';

    public function handle()
    {
        $this->output->writeln("Обрабатываю данные...");
        ths()->backlog()->handleVector();
        $this->output->writeln("Обработка завершена.");
    }
}

```
`plugins/zen/threes/console/Gen.php`
```<?php namespace Zen\Threes\Console;

use Illuminate\Console\Command;

class Gen extends Command
{
    protected $signature = 'threes:gen {feature_id}';
    protected $description = 'Генерирует запрос';

    public function handle()
    {
        $feature_id = $this->argument('feature_id');
        $this->output->writeln("Hello {$feature_id}!");
    }
}

```
`plugins/zen/threes/console/Vector.php`
```<?php namespace Zen\Threes\Console;

use Illuminate\Console\Command;
use Closure;

class Vector extends Command
{
    protected $signature = 'threes:vector';
    protected $description = 'Generate vector.md for ai';
    private ?Closure $outputCallback = null;

    public function handle(): void
    {
        $excluded = [
            '/app/plugins/zen/threes/assets/*',
            '/app/plugins/zen/threes/node_modules/*',
            '/app/plugins/zen/threes/controllers/*',
            '/app/plugins/zen/threes/src/vue/trash/*',
            '/app/plugins/zen/threes/package-lock.json',
        ];

        # Разрешённые расширения
        $allowed_extensions = [
            'php', 'yaml', 'json', 'js', 'css', 'html', 'htm', 'txt'
        ];

        $this->log("Scanning directory...");
        $files = ths()->filesList(
            base_path('plugins/zen/threes'),
            true,
            [
                'excluded' => $excluded,
                'allowed_extensions' => $allowed_extensions
            ]
        );

        $output = [];
        foreach ($files as $file) {
            $this->processFile($file, $output);
        }
        $markdown = join(PHP_EOL, $output);
        $output_path = storage_path('threes_vector.md');
        file_put_contents($output_path, $markdown);
        $this->log("Output: $output_path");
    }

    /**
     * Добавить запись в общий .md
     * @param array $file
     * @param array $output
     * @param int $file_size
     * @return void
     */
    protected function processFile(array $file, array &$output): void
    {
        $path = $file['path'];
        $size = $file['size'];
        $size = ths()->formatSizeUnits($size);
        $code = file_get_contents($path);
        $cleanPath = preg_replace('/^\/app\//', '', $path);
        $output[] = "`$cleanPath`" . PHP_EOL . '```' . $code . PHP_EOL . '```';
        $this->log("Render file: $path [$size]");
    }

    public function setOutputCallback(?Closure $callback): void
    {
        $this->outputCallback = $callback;
    }

    protected function log(string $message): void
    {
        if ($this->outputCallback instanceof Closure) {
            call_user_func($this->outputCallback, $message);
        } else {
            $this->output->writeln($message);
        }
    }
}

```
`plugins/zen/threes/exports/FeatureExport.php`
```<?php namespace Zen\Threes\Exports;

use Zen\Threes\Models\Feature;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class FeatureExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        $rows = [];

        $features = Feature::get();

        foreach ($features as $feature) {
            // Основная строка фичи
            $rows[] = [
                $feature->id,
                $feature->name,
                $feature->description,
                $feature->module,
                $feature->category,
                $feature->status,
                $feature->priority,
                $feature->created_at->format('d.m.Y H:i'),
            ];

            // Каждая acceptance criteria — отдельной строкой
            foreach ($feature->acceptance_criteria as $criteria) {
                $rows[] = [
                    '', '', '- ' . $criteria, '', '', '', '', '',
                ];
            }
        }

        return collect($rows);
    }

    public function headings(): array
    {
        return ['ID', 'Название', 'Описание', 'Область', 'Категория', 'Статус', 'Приоритет', 'Создано'];
    }
}

```
`plugins/zen/threes/init.php`
```<?php

if (!function_exists('ths')) {
    function ths(): \Zen\Threes\Threes # Threes entry point for Fluent API
    {
        return \Zen\Threes\Threes::getInstance();
    }
}

```
`plugins/zen/threes/models/Feature.php`
```<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use October\Rain\Database\Traits\Sortable;
use October\Rain\Database\Traits\NestedTree;

/**
 * @property array $acceptance_criteria
 */
class Feature extends Model
{
    use Validation;
    use Sortable;
    use NestedTree;

    public $table = 'zen_threes_features';

    protected $fillable = [
        'parent_id',
        'name',
        'description',
        'category',
        'priority',
        'status',
        'module',
        'release',
        'acceptance_criteria'
    ];

    public $rules = [];


    public function getDataAttribute(?string $data = null): array
    {
        if (!$data) {
            return [];
        }
        return ths()->fromJson($data);
    }

    public function setDataAttribute(?array $data = []): void
    {
        if ($data === null) {
            $this->attributes['data'] = null;
        } else {
            $this->attributes['data'] = ths()->toJson($data);
        }
    }

    public function getModuleOptions(): array
    {
        return $this->getUniqueOptions('module');
    }

    public function getPriorityOptions(): array
    {
        return $this->getUniqueOptions('priority');
    }

    public function getStatusOptions(): array
    {
        return [
            'accepted' => 'accepted',
            'planned' => 'planned',
        ];
        //return $this->getUniqueOptions('status');
    }
    public function getCategoryOptions(): array
    {
        return $this->getUniqueOptions('category');
    }


    public function getCriteriaCountAttribute()
    {
        return count($this->acceptance_criteria);
    }

    public function setAcceptanceCriteriaAttribute(array $value = []): void
    {
        $this->attributes['acceptance_criteria'] = ths()->toJson($value);
    }

    public function getAcceptanceCriteriaAttribute(?string $value = ''): ?array
    {
        if (!$value) {
            return [];
        }
        return ths()->fromJson($value);
    }

    public function getAcceptanceCriteriaRepeaterAttribute(): array
    {
        $raw = $this->acceptance_criteria;
        return array_map(fn($item) => ['item' => $item], $raw);
    }

    public function setAcceptanceCriteriaRepeaterAttribute($value): void
    {
        $transformed = collect($value)
            ->pluck('item')
            ->filter()
            ->values()
            ->all();
        $this->acceptance_criteria = $transformed;
    }

    private function getUniqueOptions(string $field)
    {
        return Feature::query()
            ->withoutGlobalScopes()
            ->whereNotNull($field)
            ->selectRaw("DISTINCT $field")
            ->orderBy($field)
            ->pluck($field, $field)
            ->mapWithKeys(fn($v, $k) => [(string)$k => (string)$v])
            ->toArray();
    }
}

```
`plugins/zen/threes/models/Frame.php`
```<?php namespace Zen\Threes\Models;

use Model;
use October\Rain\Database\Traits\Validation;
use October\Rain\Database\Traits\Sortable;
use October\Rain\Database\Traits\NestedTree;

/**
 * @property  string $id - Идентификатор фрейма
 * @property string $nid - Токен нода
 * @property string $name - Название нода
 * @property string $description - Описание нода
 * @method static active() - Фильтр активности в запросе
 * @method static find($nid) - Найти фрейм по токену нода
 * @method static where(string $nid, int|string $value) - Условие where для фрейма
 */
class Frame extends Model
{
    use Validation;
    use Sortable;
    use NestedTree;

    public $table = 'zen_threes_frames';
    protected $primaryKey = 'id';
    public $rules = [
        'nid' => 'required|unique:zen_threes_frames,nid',
        'name' => 'required', // Оставляем валидацию
    ];

    protected $fillable = [
        'nid',
        'name', // Убеждаемся, что name в fillable
    ];

    protected $node;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (!$this->exists) {
            $this->node = new Node();
            $this->nid = $this->node->nid;
        }
    }

    public function afterFetch()
    {
        $this->node = Node::find($this->nid) ?? new Node(['nid' => $this->nid]);
    }

    public static function findByNid(string $nid): ?Frame
    {
        return self::where('nid', $nid)->firstOrFail();
    }

    public function getNameAttribute($value)
    {
        return $this->node->name ?? $value ?? '';
    }

    public function setNameAttribute($value): void
    {
        $this->attributes['name'] = $value;
        if ($this->node) {
            $this->node->name = $value;
        }
    }

    public function beforeSave()
    {
        if (!$this->nid) {
            $this->nid = $this->node->nid;
        }

        unset($this->attributes['name']);
    }

    public function afterSave()
    {
        if ($this->node) {
            $this->node->nid = $this->nid; // Убеждаемся, что nid совпадает
            $this->node->save(); // Сохраняем связанный Node
        }
    }
}

```
`plugins/zen/threes/models/Node.php`
```<?php

namespace Zen\Threes\Models;

use Zen\Threes\Classes\Types;
use Exception;

/**
 * @property string $nid
 * @property string $icon
 * @property string $name
 * @property string $description
 * @property string $type
 * @property array|string|null $data
 * @property array $props
 * @property string $schema
 * @property string $scope
 * @property Node|null $parent
 * @property Node[] $children
 * @property Node[] $siblings
 */
class Node
{
    protected array $attributes = [];

    protected static array $fields = [
        'icon' => 'string',
        'name' => 'string',
        'description' => 'string',
        'type' => 'string',
        'data' => 'array',
        'props' => 'array',
    ];

    protected static array $extensions = [
        'string' => 'txt',
        'array' => 'json',
        'object' => 'object',
    ];

    public string $schema = 'default';
    public ?string $scope = 'self_content';

    // Runtime caches
    protected ?Node $_parentCache = null;
    protected ?array $_childrenCache = null;
    protected ?array $_siblingsCache = null;

    public function __construct(string $nid = null, string $schema = 'default')
    {
        if ($nid) {
            $this->attributes['nid'] = $nid;
        }
        $this->schema = $schema;
    }

    public function __get($key)
    {
        $method = $this->studlyCaser('get', $key);
        $data = $this->attributes[$key] ?? null;
        if (method_exists($this, $method)) {
            return $this->$method($data);
        }
        return $data;
    }

    public function __set($key, $value): void
    {
        $method = $this->studlyCaser('set', $key);
        if (method_exists($this, $method)) {
            $this->$method($value);
        } else {
            $this->attributes[$key] = $value;
        }
    }

    public function setIconAttribute(string $svg): void
    {
        $this->attributes['icon'] = ths()->setIcon($svg);
    }

    public function getIconAttribute(string $hash): ?string
    {
        return $hash ? ths()->getIcon($hash) : null;
    }

    public function exe(string $method, string $scope = 'self_content', mixed $data = null): mixed
    {
        $type = Types::getType($this->type)['class'];
        return ths()->exe("$type.$method", null, $data, $scope, $this);
    }

    public function getAttr(string $path, mixed $default = null): mixed
    {
        $segments = explode('.', $path);
        $value = $this->attributes;
        foreach ($segments as $segment) {
            if (is_array($value) && array_key_exists($segment, $value)) {
                $value = $value[$segment];
            } else {
                return $default;
            }
        }
        return $value;
    }

    public function setAttr(string $path, mixed $value): void
    {
        $segments = explode('.', $path);
        $ref = &$this->attributes;
        foreach ($segments as $segment) {
            if (!is_array($ref)) $ref = [];
            if (!array_key_exists($segment, $ref)) $ref[$segment] = [];
            $ref = &$ref[$segment];
        }
        $ref = $value;
    }

    public static function find(string $nid, ?array $fields = null, string $schema = 'default'): ?Node
    {
        $node = new self($nid, $schema);
        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $node_path = "$nodes_storage_path/$nid";
        if (file_exists($node_path)) {
            $fields_to_load = $fields ?? array_keys(self::$fields);
            foreach ($fields_to_load as $field_name) {
                if (isset(self::$fields[$field_name])) {
                    $node->loadField($field_name);
                }
            }
        } else {
            return null;
        }
        return $node;
    }

    private function studlyCaser(string $direction, string $method, string $postfix = 'Attribute'): string
    {
        return $direction . str_replace(' ', '', ucwords(str_replace(['-', '_'], ' ', $method))) . $postfix;
    }

    // ✅ РОДИТЕЛЬ, ДЕТИ, СИБЛИНГИ: Lazy-load + runtime cache

    public function getParentAttribute(): ?Node
    {
        if ($this->_parentCache !== null) return $this->_parentCache;

        $schema = ths()->getSchema($this->schema);
        $parentNid = $this->findParentInSchema($schema['schema_nodes'] ?? []);
        return $this->_parentCache = $parentNid ? new Node($parentNid, $this->schema) : null;
    }

    protected function findParentInSchema(array $nodes, ?string $parentNid = null): ?string
    {
        foreach ($nodes as $node) {
            if (($node['nid'] ?? null) === $this->nid) return $parentNid;
            if (!empty($node['nodes'])) {
                $found = $this->findParentInSchema($node['nodes'], $node['nid'] ?? null);
                if ($found) return $found;
            }
        }
        return null;
    }

    public function getChildrenAttribute(): array
    {
        if ($this->_childrenCache !== null) return $this->_childrenCache;

        $schema = ths()->getSchema($this->schema);
        $branch = $this->findBranch($schema['schema_nodes'] ?? [], $this->nid);
        return $this->_childrenCache = $branch && !empty($branch['nodes'])
            ? array_map(fn($child) => self::find($child['nid'], null, $this->schema), $branch['nodes'])
            : [];
    }

    public function getSiblingsAttribute(): array
    {
        if ($this->_siblingsCache !== null) return $this->_siblingsCache;

        $parent = $this->parent;
        return $this->_siblingsCache = $parent
            ? array_filter($parent->children, fn($sibling) => $sibling->nid !== $this->nid)
            : [];
    }

    private function findBranch(array $nodes, string $nid): ?array
    {
        foreach ($nodes as $node) {
            if ($node['nid'] === $nid) return $node;
            if (!empty($node['nodes'])) {
                $found = $this->findBranch($node['nodes'], $nid);
                if ($found) return $found;
            }
        }
        return null;
    }

    public function save(): void
    {
        if (empty($this->attributes['nid'])) {
            $this->attributes['nid'] = ths()->createShortId();
        }

        // Сброс кешей при изменении нода
        $this->_parentCache = null;
        $this->_childrenCache = null;
        $this->_siblingsCache = null;

        foreach ($this->attributes as $key => $value) {
            if ($key === 'nid') continue;
            $this->saveField($key, $value);
        }
    }

    private function saveField(string $field_name, mixed $value): void
    {
        $field_format = self::$fields[$field_name];
        $field_extension = self::$extensions[$field_format];
        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $field_path = ths()->checkDir("$nodes_storage_path/{$this->nid}/$field_name.$field_extension");

        if ($value === null) {
            if (file_exists($field_path)) unlink($field_path);
            return;
        }

        if ($field_format === 'object') $value = serialize($value);
        if ($field_format === 'array') $value = ths()->toJson($value);

        file_put_contents($field_path, trim((string)$value), LOCK_EX);
    }

    private function loadField(string $field_name): void
    {
        $field_format = self::$fields[$field_name];
        $field_extension = self::$extensions[$field_format];
        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $field_path = "$nodes_storage_path/{$this->nid}/$field_name.$field_extension";
        if (!file_exists($field_path)) return;
        $field_data = file_get_contents($field_path);

        $this->attributes[$field_name] = match ($field_format) {
            'object' => unserialize($field_data),
            'array' => ths()->fromJson($field_data),
            'bool' => (bool)$field_data,
            'int' => (int)$field_data,
            'string' => $field_data,
            default => null
        };
    }

    public function delete(): void
    {
        if (empty($this->attributes['nid'])) return;
        $path = ths()->env('NODES_STORAGE') . '/' . $this->attributes['nid'];
        if (is_dir($path)) shell_exec("rm -rf " . escapeshellarg($path));
    }

    public static function truncate(): void
    {
        $paths = [
            ths()->env('NODES_STORAGE'),
            ths()->env('SCHEMES_STORAGE'),
            ths()->env('TYPES_STORAGE')
        ];
        foreach ($paths as $path) {
            ths()->shellRemoveDir($path);
        }
        ths()->store()->createDefaultNodeTypes();
    }

    public function setDataAttribute(array|string|null $data = null): void
    {
        $this->attributes['data'] = [
            $this->exe('setData', $this->scope, $data)
        ];
    }

    public function getDataAttribute(): array|string|null
    {
        return $this->attributes['data'][0] ?? null;
    }

    public function fill(array $data): self
    {
        $this->icon = $data['icon'] ?? null;
        $this->name = $data['name'] ?? '';
        $this->type = $data['type'] ?? 'Threes.NodeText';
        $this->description = $data['description'] ?? '';
        $this->data = $data['data'] ?? null;
        $this->props = $data['props'] ?? [
            [
                'self_content' => true,
                'show_children' => true,
                'tree' => true,
                'tree_children' => true,
                'schema' => true,
                'store' => false,
                'store_data' => [
                    'group' => 'Created',
                    'author' => 'Threes',
                    'tags' => ["node"],
                    'created_at' => now()->toDateTimeString(),
                ]
            ]
        ];
        $this->save();
        return $this;
    }
}

```
`plugins/zen/threes/models/Query.php`
```<?php namespace Zen\Threes\Models;

use Model;
use Cache;

class Query extends Model
{
    public $table = 'zen_threes_queries';

    public $rules = [];
    protected $fillable = [
        'call',
        'data',
        'time'
    ];

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $max_records = 10000;
            $record_count = static::count();
            $cache_key = 'last_query_cleanup';
            $cleanup_interval = 86400; // 24 часа в секундах

            // Получаем временную метку последнего удаления из кеша
            $last_cleanup = Cache::get($cache_key, 0);
            $current_time = time();

            // Проверяем, прошло ли достаточно времени с последнего удаления
            if ($current_time - $last_cleanup >= $cleanup_interval) {
                if ($record_count >= $max_records) {
                    $records_to_delete = $record_count - $max_records + 1;
                    static::orderBy('id', 'asc')->take($records_to_delete)->delete();
                }

                // Обновляем временную метку последнего удаления в кеше
                Cache::put($cache_key, $current_time, $cleanup_interval);
            }
        });
    }

    public function setDataAttribute(?array $data = null)
    {
        if (!is_null($data)) {
            $this->attributes['data'] = ths()->toJson($data);
        }
    }
}

```
`plugins/zen/threes/models/Settings.php`
```<?php

namespace Zen\Threes\Models;

use October\Rain\Database\Model;
use October\Rain\Database\Traits\Validation as ValidationTrait;

/**
 * Модель настроек
 * Существует хелпер для получения параметров: ths()->settings('Ключ')
 * Посмотреть ключи можно тут: app/plugins/zen/threes/models/settings/fields.yaml
 */
class Settings extends Model
{
    use ValidationTrait;
    public $implement = ['System.Behaviors.SettingsModel'];
    public string $settingsCode = 'zen_threes_settings';
    public string $settingsFields = 'fields.yaml';
    public $rules = [];
}

```
`plugins/zen/threes/models/Version.php`
```<?php namespace Zen\Threes\Models;

use Model;
use Illuminate\Support\Facades\DB;

/**
 * Система версионирования Threes
 * @method static where($field, $value)
 */
class Version extends Model
{
    public $table = 'zen_threes_versions';
    public $rules = [];

    protected $fillable = [
        'version',
        'fid',
        'nid',
        'lid',
        'data',
    ];

    /**
     * Сохраняет данные слоя в json-массив
     * @param string|null $value
     * @return array
     */
    public function getDataAttribute(?string $value = null): array
    {
        return $value ? ths()->fromJson($value) : [];
    }

    /**
     * Возвращает оригинальное значение поля дата в виде json-строки
     * @return string
     */
    public function getDataJsonAttribute(): string
    {
        return $this->attributes['data'] ?? '';
    }

    /**
     * Извлекает данные слоя из json-массива
     * @param array|null $value
     * @return void
     */
    public function setDataAttribute(?array $value = null): void
    {
        if (!$value) {
            $value = [];
        }

        $this->attributes['data'] = ths()->toJson($value);
    }

    public function beforeSave()
    {
        $this->addVersionNumber();
    }

    /**
     * Добавить номер версии
     * @return void
     */
    private function addVersionNumber(): void
    {
        $version_type = null;
        $version_token = null;

        if ($this->fid) {
            $version_type = 'fid';
            $version_token = $this->fid;
        }

        if ($this->nid) {
            $version_type = 'nid';
            $version_token = $this->nid;
        }

        if ($this->lid) {
            $version_type = 'lid';
            $version_token = $this->lid;
        }

        $version_before = DB::table('zen_threes_versions')
            ->where($version_type, $version_token)
            ->orderBy('id', 'desc')
            ->first();

        if (!$version_before) {
            $version_number = 1;
        } else {
            $version_number = intval($version_before->version) + 1;
        }

        if (!$version_type || !$version_token) {
            return;
        }

        $this->attributes['version'] = $version_number;
    }
}

```
`plugins/zen/threes/models/feature/columns.yaml`
```columns:
    id:
        label: Фича
        type: text
        searchable: true
        sortable: true
        width: auto
        valueFrom: name
    name:
        label: name
        type: text
        searchable: true
        invisible: true
        sortable: true
        width: auto
    sort_order:
        label: Порядок
        type: number
        sortable: true
        width: 100px
    created_at:
        label: Создано
        type: datetime
        searchable: true
        sortable: true
        width: 150px
        format: 'd.m.Y H:i'
    updated_at:
        label: Обновлено
        type: datetime
        searchable: true
        sortable: true
        width: 150px
        format: 'd.m.Y H:i'
    module:
        label: Модуль
        type: text
        searchable: true
        sortable: true
        width: 100px
    category:
        label: Категория
        type: text
        searchable: true
        sortable: true
        width: 100px
    status:
        label: Статус
        type: text
        searchable: true
        sortable: true
        width: 100px
    priority:
        label: Приоритет
        type: text
        searchable: true
        sortable: true
        width: 100px
    criteria_count:
        label: Критериев
        type: number
        width: 100px
    description:
        label: Описание
        type: text
        invisible: true

```
`plugins/zen/threes/models/feature/fields.yaml`
```tabs:
    fields:
        description:
            label: Описание
            size: large
            span: full
            type: markdown
            tab: Настройки
        acceptance_criteria_repeater:
            label: 'Критерии приёмки'
            prompt: 'Добавить критерий'
            displayMode: accordion
            span: full
            type: repeater
            tab: Настройки
            form:
                fields:
                    item:
                        label: 'Критерии приёмки'
                        span: full
                        size: ''
                        type: textarea
        comment:
            label: Комментарии
            size: small
            span: full
            type: textarea
            tab: Управление
        data:
            label: ''
            prompt: Добавить
            displayMode: accordion
            span: full
            type: repeater
            tab: Промт
            form:
                fields:
                    system:
                        label: 'Системный промт'
                        span: auto
                        default: 0
                        type: switch
                    active:
                        label: Включен
                        span: auto
                        default: 1
                        type: switch
                    title:
                        label: Заголовок
                        span: full
                        type: text
                    text:
                        label: Промт
                        size: large
                        span: full
                        type: textarea
fields:
    name:
        label: 'Название фичи'
        span: full
        type: text
    category:
        label: Категория
        showSearch: true
        span: auto
        type: dropdown
    module:
        label: Модуль
        span: auto
        showSearch: true
        type: dropdown
    priority:
        label: Приоритет
        showSearch: true
        span: auto
        type: dropdown
    status:
        label: Статус
        showSearch: true
        span: auto
        type: dropdown

```
`plugins/zen/threes/models/frame/columns.yaml`
```columns:
    nid:
        label: token
        type: text
        searchable: true
        sortable: true
    name:
        label: name
        type: text
        searchable: true
        sortable: true
    active:
        label: active
        type: switch
        sortable: true

```
`plugins/zen/threes/models/frame/fields.yaml`
```fields:
    name:
        label: 'Название фрейма'
        span: auto
        required: 1
        type: text
    nid:
        label: 'Токен нода (author.scope.name)'
        span: auto
        required: 1
        preset:
            field: name
            type: slug
        type: text
    threes:
        label: ''
        span: full
        path: $/zen/threes/controllers/framecontroller/threes_app_partial.php
        readOnly: 1
        context:
            - update
        type: partial

```
`plugins/zen/threes/models/node/columns.yaml`
```columns:
    svg_path:
        label: Иконка
        type: partial
        width: 40px
        path: $/zen/threes/controllers/nodecontroller/partials/icon.php
    nid:
        label: nid
        type: text
        searchable: true
        sortable: true
    name:
        label: name
        type: text
        searchable: true
        sortable: true
    description:
        label: description
        type: text
        searchable: true
        sortable: true
    created_at:
        label: created_at
        type: datetime
        sortable: true
    updated_at:
        label: updated_at
        type: datetime
        sortable: true

```
`plugins/zen/threes/models/node/fields.yaml`
```tabs:
    fields:
        scheme:
            label: 'Схема интерфейса'
            span: full
            size: giant
            language: plain_text
            type: codeeditor
            tab: Схема
        svg:
            label: 'SVG Иконка'
            span: full
            size: large
            language: php
            type: codeeditor
            tab: SVG
fields:
    name:
        label: 'Название нода'
        span: auto
        type: text
    nid:
        label: 'Токен нода (autor.scope.name)'
        span: auto
        required: 1
        type: text
    description:
        label: Описание
        span: full
        size: small
        type: textarea

```
`plugins/zen/threes/models/query/columns.yaml`
```columns:
    call:
        label: Вызов
        type: text
        searchable: true
        sortable: true
    created_at:
        label: 'Время запроса'
        type: datetime
        searchable: true
        sortable: true
        format: 'd.m.Y H:i:s'

```
`plugins/zen/threes/models/query/fields.yaml`
```fields:
    call:
        label: Вызов
        span: full
        type: text
    data:
        label: 'Данные запроса'
        span: full
        size: huge
        language: php
        type: codeeditor

```
`plugins/zen/threes/models/settings/exe_field.yaml`
```fields:
    exe:
        label: 'Базовая инструкция'
        span: full
        size: giant
        language: plain_text
        type: codeeditor

```
`plugins/zen/threes/models/settings/fields.yaml`
```tabs:
    fields:
        vector_yaml:
            label: 'Векторное представление'
            size: giant
            language: plain_text
            span: full
            type: codeeditor
            tab: 'Vector YAML'
        vector_handlers:
            label: 'Обработка вектора'
            prompt: 'Добавить обработчик'
            displayMode: accordion
            span: full
            type: repeater
            tab: 'Vector YAML'
            form:
                fields:
                    active:
                        label: 'Обработчик включен'
                        span: full
                        type: switch
                    name:
                        label: 'Название обработчика'
                        span: full
                        type: text
                    system_prompt:
                        label: 'Системный промт'
                        size: large
                        span: full
                        type: textarea
        vector_prompt:
            label: 'Промт обработки исходных данных'
            prompt: 'Добавить блок промта'
            displayMode: accordion
            span: full
            type: repeater
            tab: Беклог
            form:
                fields:
                    active:
                        label: Включен
                        span: full
                        default: 1
                        type: switch
                    name:
                        label: 'Название промта'
                        span: full
                        type: text
                        comment: 'Не учитывается ai'
                    text:
                        label: Промт
                        size: small
                        span: full
                        type: textarea
        vector:
            label: 'Сырой вектор'
            size: giant
            language: plain_text
            span: full
            type: codeeditor
            tab: Беклог
        default_prompt:
            label: 'Промт по умолчанию'
            size: giant
            span: full
            type: textarea
            tab: 'Настройки Ai'
fields:
    author_token:
        label: 'Токен автора'
        span: auto
        default: project
        type: text

```
`plugins/zen/threes/models/version/columns.yaml`
```columns:
    id:
        label: 'Версия (id)'
        type: number
        searchable: true
        sortable: true
    fid:
        label: FID
        type: text
        searchable: true
        sortable: true
    nid:
        label: NID
        type: text
        searchable: true
        sortable: true
    lid:
        label: LID
        type: text
        searchable: true
        sortable: true
    created_at:
        label: Время
        type: datetime
        sortable: true
        format: 'd.m.Y H:i:s'

```
`plugins/zen/threes/models/version/fields.yaml`
```fields:
    data_json:
        label: 'Данные версии'
        span: full
        size: giant
        language: php
        type: codeeditor

```
`plugins/zen/threes/package.json`
```{
    "name": "threes",
    "version": "1.0.0",
    "description": "Threes — это революционная платформа для рекурсивно-модульного программирования смыслов, разработанная человеком (Zenc0dr) и ai (ChatGPT) для людей и ai, для облегчения и ускорения процесса разработки и взаимодействия с информацией.",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "npm run development",
        "development": "mix",
        "watch": "mix watch",
        "watch-poll": "mix watch -- --watch-options-poll=1000",
        "hot": "mix watch --hot",
        "prod": "npm run production",
        "production": "mix --production"
    },
    "author": "Alex Blaze",
    "license": "MIT",
    "devDependencies": {
        "@vue/language-server": "^2.2.0",
        "laravel-mix": "^6.0.49",
        "resolve-url-loader": "^5.0.0",
        "sass": "^1.83.4",
        "sass-loader": "^16.0.4",
        "typescript": "^5.7.3",
        "vue-loader": "^16.8.3"
    },
    "dependencies": {
        "@fontsource/exo-2": "^5.2.6",
        "@milkdown/core": "^7.13.1",
        "@milkdown/plugin-block": "^7.13.1",
        "@milkdown/plugin-clipboard": "^7.13.1",
        "@milkdown/plugin-cursor": "^7.13.1",
        "@milkdown/plugin-history": "^7.13.1",
        "@milkdown/plugin-indent": "^7.13.1",
        "@milkdown/plugin-listener": "^7.13.1",
        "@milkdown/plugin-prism": "^7.13.1",
        "@milkdown/plugin-slash": "^7.13.1",
        "@milkdown/plugin-tooltip": "^7.13.1",
        "@milkdown/preset-gfm": "^7.13.1",
        "@milkdown/vue": "^7.13.1",
        "autoprefixer": "^10.4.20",
        "axios": "^1.9.0",
        "grapesjs": "^0.22.6",
        "lodash": "^4.17.21",
        "md5": "^2.3.0",
        "mitt": "^3.0.1",
        "primeicons": "^5.0.0",
        "primevue": "^3.10.0",
        "quill": "^1.3.7",
        "vue": "^3.5.13",
        "vue-click-outside-element": "^3.1.2",
        "vue-contenteditable": "^4.1.0",
        "vue-draggable-plus": "^0.6.0",
        "vue-router": "^4.5.0",
        "vue-select": "^4.0.0-beta.6",
        "vue3-json-editor": "^1.1.5",
        "vuedraggable": "^4.1.0"
    }
}

```
`plugins/zen/threes/plugin.yaml`
```plugin:
    name: Threes
    description: 'Development system'
    author: OS3
    icon: oc-icon-cubes
    homepage: 'https://os3.pro'
permissions:
    zen.threes.main:
        tab: Threes
        label: 'Main access'
    zen.threes.options:
        tab: Threes
        label: 'Threes Options'
    zen.threes.queries:
        tab: Threes
        label: 'Queries control'
    zen.threes.nodes:
        tab: Threes
        label: 'Nodes control'
    zen.threes.features:
        tab: Threes
        label: 'Features control'
navigation:
    main:
        label: Threes
        url: zen/threes/spritecontroller
        icon: icon-cubes
        permissions:
            - zen.threes.main
        sideMenu:
            features:
                label: Бэклог
                url: zen/threes/featurecontroller
                icon: icon-star-o
            nodes:
                label: Ноды
                url: zen/threes/nodecontroller/node
                icon: icon-square
                permissions:
                    - zen.threes.main
                    - zen.threes.nodes
            queries:
                label: 'Журнал API'
                url: zen/threes/querycontroller
                icon: icon-book
            versions:
                label: Версионирование
                url: zen/threes/versioncontroller
                icon: icon-inbox

```
`plugins/zen/threes/pnpm-lock.yaml`
```lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@fontsource/exo-2':
        specifier: ^5.2.6
        version: 5.2.6
      '@milkdown/core':
        specifier: ^7.13.1
        version: 7.13.1
      '@milkdown/plugin-block':
        specifier: ^7.13.1
        version: 7.13.1
      '@milkdown/plugin-clipboard':
        specifier: ^7.13.1
        version: 7.13.1
      '@milkdown/plugin-cursor':
        specifier: ^7.13.1
        version: 7.13.1
      '@milkdown/plugin-history':
        specifier: ^7.13.1
        version: 7.13.1
      '@milkdown/plugin-indent':
        specifier: ^7.13.1
        version: 7.13.1
      '@milkdown/plugin-listener':
        specifier: ^7.13.1
        version: 7.13.1
      '@milkdown/plugin-prism':
        specifier: ^7.13.1
        version: 7.13.1
      '@milkdown/plugin-slash':
        specifier: ^7.13.1
        version: 7.13.1
      '@milkdown/plugin-tooltip':
        specifier: ^7.13.1
        version: 7.13.1
      '@milkdown/preset-gfm':
        specifier: ^7.13.1
        version: 7.13.1
      '@milkdown/vue':
        specifier: ^7.13.1
        version: 7.13.1(@codemirror/language@6.11.1)(@codemirror/state@6.5.2)(@codemirror/view@6.37.1)(prosemirror-model@1.25.1)(prosemirror-state@1.4.3)(prosemirror-view@1.40.0)(typescript@5.8.3)(vue@3.5.16(typescript@5.8.3))
      autoprefixer:
        specifier: ^10.4.20
        version: 10.4.21(postcss@8.5.4)
      axios:
        specifier: ^1.9.0
        version: 1.9.0
      grapesjs:
        specifier: ^0.22.6
        version: 0.22.7
      lodash:
        specifier: ^4.17.21
        version: 4.17.21
      md5:
        specifier: ^2.3.0
        version: 2.3.0
      mitt:
        specifier: ^3.0.1
        version: 3.0.1
      primeicons:
        specifier: ^5.0.0
        version: 5.0.0
      primevue:
        specifier: ^3.10.0
        version: 3.53.1(vue@3.5.16(typescript@5.8.3))
      quill:
        specifier: ^1.3.7
        version: 1.3.7
      vue:
        specifier: ^3.5.13
        version: 3.5.16(typescript@5.8.3)
      vue-click-outside-element:
        specifier: ^3.1.2
        version: 3.1.2
      vue-contenteditable:
        specifier: ^4.1.0
        version: 4.1.0(vue@3.5.16(typescript@5.8.3))
      vue-draggable-plus:
        specifier: ^0.6.0
        version: 0.6.0(@types/sortablejs@1.15.8)
      vue-router:
        specifier: ^4.5.0
        version: 4.5.1(vue@3.5.16(typescript@5.8.3))
      vue-select:
        specifier: ^4.0.0-beta.6
        version: 4.0.0-beta.6(vue@3.5.16(typescript@5.8.3))
      vue3-json-editor:
        specifier: ^1.1.5
        version: 1.1.5(typescript@5.8.3)
      vuedraggable:
        specifier: ^4.1.0
        version: 4.1.0(vue@3.5.16(typescript@5.8.3))
    devDependencies:
      '@vue/language-server':
        specifier: ^2.2.0
        version: 2.2.10(typescript@5.8.3)
      laravel-mix:
        specifier: ^6.0.49
        version: 6.0.49(@babel/core@7.27.4)(@babel/plugin-proposal-object-rest-spread@7.20.7(@babel/core@7.27.4))(@babel/plugin-syntax-dynamic-import@7.8.3(@babel/core@7.27.4))(@babel/plugin-transform-runtime@7.27.4(@babel/core@7.27.4))(@babel/preset-env@7.27.2(@babel/core@7.27.4))(postcss@8.5.4)(webpack-cli@4.10.0)(webpack@5.99.9)
      resolve-url-loader:
        specifier: ^5.0.0
        version: 5.0.0
      sass:
        specifier: ^1.83.4
        version: 1.89.2
      sass-loader:
        specifier: ^16.0.4
        version: 16.0.5(sass@1.89.2)(webpack@5.99.9)
      typescript:
        specifier: ^5.7.3
        version: 5.8.3
      vue-loader:
        specifier: ^16.8.3
        version: 16.8.3(@vue/compiler-sfc@3.5.16)(vue@3.5.16(typescript@5.8.3))(webpack@5.99.9)

packages:

  '@ampproject/remapping@2.3.0':
    resolution: {integrity: sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==}
    engines: {node: '>=6.0.0'}

  '@babel/code-frame@7.27.1':
    resolution: {integrity: sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==}
    engines: {node: '>=6.9.0'}

  '@babel/compat-data@7.27.5':
    resolution: {integrity: sha512-KiRAp/VoJaWkkte84TvUd9qjdbZAdiqyvMxrGl1N6vzFogKmaLgoM3L1kgtLicp2HP5fBJS8JrZKLVIZGVJAVg==}
    engines: {node: '>=6.9.0'}

  '@babel/core@7.27.4':
    resolution: {integrity: sha512-bXYxrXFubeYdvB0NhD/NBB3Qi6aZeV20GOWVI47t2dkecCEoneR4NPVcb7abpXDEvejgrUfFtG6vG/zxAKmg+g==}
    engines: {node: '>=6.9.0'}

  '@babel/generator@7.27.5':
    resolution: {integrity: sha512-ZGhA37l0e/g2s1Cnzdix0O3aLYm66eF8aufiVteOgnwxgnRP8GoyMj7VWsgWnQbVKXyge7hqrFh2K2TQM6t1Hw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-annotate-as-pure@7.27.3':
    resolution: {integrity: sha512-fXSwMQqitTGeHLBC08Eq5yXz2m37E4pJX1qAU1+2cNedz/ifv/bVXft90VeSav5nFO61EcNgwr0aJxbyPaWBPg==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-compilation-targets@7.27.2':
    resolution: {integrity: sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-create-class-features-plugin@7.27.1':
    resolution: {integrity: sha512-QwGAmuvM17btKU5VqXfb+Giw4JcN0hjuufz3DYnpeVDvZLAObloM77bhMXiqry3Iio+Ai4phVRDwl6WU10+r5A==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-create-regexp-features-plugin@7.27.1':
    resolution: {integrity: sha512-uVDC72XVf8UbrH5qQTc18Agb8emwjTiZrQE11Nv3CuBEZmVvTwwE9CBUEvHku06gQCAyYf8Nv6ja1IN+6LMbxQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-define-polyfill-provider@0.6.4':
    resolution: {integrity: sha512-jljfR1rGnXXNWnmQg2K3+bvhkxB51Rl32QRaOTuwwjviGrHzIbSc8+x9CpraDtbT7mfyjXObULP4w/adunNwAw==}
    peerDependencies:
      '@babel/core': ^7.4.0 || ^8.0.0-0 <8.0.0

  '@babel/helper-member-expression-to-functions@7.27.1':
    resolution: {integrity: sha512-E5chM8eWjTp/aNoVpcbfM7mLxu9XGLWYise2eBKGQomAk/Mb4XoxyqXTZbuTohbsl8EKqdlMhnDI2CCLfcs9wA==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-imports@7.27.1':
    resolution: {integrity: sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-transforms@7.27.3':
    resolution: {integrity: sha512-dSOvYwvyLsWBeIRyOeHXp5vPj5l1I011r52FM1+r1jCERv+aFXYk4whgQccYEGYxK2H3ZAIA8nuPkQ0HaUo3qg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-optimise-call-expression@7.27.1':
    resolution: {integrity: sha512-URMGH08NzYFhubNSGJrpUEphGKQwMQYBySzat5cAByY1/YgIRkULnIy3tAMeszlL/so2HbeilYloUmSpd7GdVw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-plugin-utils@7.27.1':
    resolution: {integrity: sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-remap-async-to-generator@7.27.1':
    resolution: {integrity: sha512-7fiA521aVw8lSPeI4ZOD3vRFkoqkJcS+z4hFo82bFSH/2tNd6eJ5qCVMS5OzDmZh/kaHQeBaeyxK6wljcPtveA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-replace-supers@7.27.1':
    resolution: {integrity: sha512-7EHz6qDZc8RYS5ElPoShMheWvEgERonFCs7IAonWLLUTXW59DP14bCZt89/GKyreYn8g3S83m21FelHKbeDCKA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-skip-transparent-expression-wrappers@7.27.1':
    resolution: {integrity: sha512-Tub4ZKEXqbPjXgWLl2+3JpQAYBJ8+ikpQ2Ocj/q/r0LwE3UhENh7EUabyHjz2kCEsrRY83ew2DQdHluuiDQFzg==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-string-parser@7.27.1':
    resolution: {integrity: sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-identifier@7.27.1':
    resolution: {integrity: sha512-D2hP9eA+Sqx1kBZgzxZh0y1trbuU+JoDkiEwqhQ36nodYqJwyEIhPSdMNd7lOm/4io72luTPWH20Yda0xOuUow==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-option@7.27.1':
    resolution: {integrity: sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-wrap-function@7.27.1':
    resolution: {integrity: sha512-NFJK2sHUvrjo8wAU/nQTWU890/zB2jj0qBcCbZbbf+005cAsv6tMjXz31fBign6M5ov1o0Bllu+9nbqkfsjjJQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helpers@7.27.6':
    resolution: {integrity: sha512-muE8Tt8M22638HU31A3CgfSUciwz1fhATfoVai05aPXGor//CdWDCbnlY1yvBPo07njuVOCNGCSp/GTt12lIug==}
    engines: {node: '>=6.9.0'}

  '@babel/parser@7.27.5':
    resolution: {integrity: sha512-OsQd175SxWkGlzbny8J3K8TnnDD0N3lrIUtB92xwyRpzaenGZhxDvxN/JgU00U3CDZNj9tPuDJ5H0WS4Nt3vKg==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  '@babel/plugin-bugfix-firefox-class-in-computed-class-key@7.27.1':
    resolution: {integrity: sha512-QPG3C9cCVRQLxAVwmefEmwdTanECuUBMQZ/ym5kiw3XKCGA7qkuQLcjWWHcrD/GKbn/WmJwaezfuuAOcyKlRPA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/plugin-bugfix-safari-class-field-initializer-scope@7.27.1':
    resolution: {integrity: sha512-qNeq3bCKnGgLkEXUuFry6dPlGfCdQNZbn7yUAPCInwAJHMU7THJfrBSozkcWq5sNM6RcF3S8XyQL2A52KNR9IA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression@7.27.1':
    resolution: {integrity: sha512-g4L7OYun04N1WyqMNjldFwlfPCLVkgB54A/YCXICZYBsvJJE3kByKv9c9+R/nAfmIfjl2rKYLNyMHboYbZaWaA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.27.1':
    resolution: {integrity: sha512-oO02gcONcD5O1iTLi/6frMJBIwWEHceWGSGqrpCmEL8nogiS6J9PBlE48CaK20/Jx1LuRml9aDftLgdjXT8+Cw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.13.0

  '@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly@7.27.1':
    resolution: {integrity: sha512-6BpaYGDavZqkI6yT+KSPdpZFfpnd68UKXbcjI9pJ13pvHhPrCKWOOLp+ysvMeA+DxnhuPpgIaRpxRxo5A9t5jw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/plugin-proposal-object-rest-spread@7.20.7':
    resolution: {integrity: sha512-d2S98yCiLxDVmBmE8UjGcfPvNEUbA1U5q5WxaWFUGRzJSVAZqm5W6MbPct0jxnegUZ0niLeNX+IOzEs7wYg9Dg==}
    engines: {node: '>=6.9.0'}
    deprecated: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-object-rest-spread instead.
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-proposal-private-property-in-object@7.21.0-placeholder-for-preset-env.2':
    resolution: {integrity: sha512-SOSkfJDddaM7mak6cPEpswyTRnuRltl429hMraQEglW+OkovnCzsiszTmsrlY//qLFjCpQDFRvjdm2wA5pPm9w==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-dynamic-import@7.8.3':
    resolution: {integrity: sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-import-assertions@7.27.1':
    resolution: {integrity: sha512-UT/Jrhw57xg4ILHLFnzFpPDlMbcdEicaAtjPQpbj9wa8T4r5KVWCimHcL/460g8Ht0DMxDyjsLgiWSkVjnwPFg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-import-attributes@7.27.1':
    resolution: {integrity: sha512-oFT0FrKHgF53f4vOsZGi2Hh3I35PfSmVs4IBFLFj4dnafP+hIWDLg3VyKmUHfLoLHlyxY4C7DGtmHuJgn+IGww==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-object-rest-spread@7.8.3':
    resolution: {integrity: sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-unicode-sets-regex@7.18.6':
    resolution: {integrity: sha512-727YkEAPwSIQTv5im8QHz3upqp92JTWhidIC81Tdx4VJYIte/VndKf1qKrfnnhPLiPghStWfvC/iFaMCQu7Nqg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/plugin-transform-arrow-functions@7.27.1':
    resolution: {integrity: sha512-8Z4TGic6xW70FKThA5HYEKKyBpOOsucTOD1DjU3fZxDg+K3zBJcXMFnt/4yQiZnf5+MiOMSXQ9PaEK/Ilh1DeA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-async-generator-functions@7.27.1':
    resolution: {integrity: sha512-eST9RrwlpaoJBDHShc+DS2SG4ATTi2MYNb4OxYkf3n+7eb49LWpnS+HSpVfW4x927qQwgk8A2hGNVaajAEw0EA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-async-to-generator@7.27.1':
    resolution: {integrity: sha512-NREkZsZVJS4xmTr8qzE5y8AfIPqsdQfRuUiLRTEzb7Qii8iFWCyDKaUV2c0rCuh4ljDZ98ALHP/PetiBV2nddA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-block-scoped-functions@7.27.1':
    resolution: {integrity: sha512-cnqkuOtZLapWYZUYM5rVIdv1nXYuFVIltZ6ZJ7nIj585QsjKM5dhL2Fu/lICXZ1OyIAFc7Qy+bvDAtTXqGrlhg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-block-scoping@7.27.5':
    resolution: {integrity: sha512-JF6uE2s67f0y2RZcm2kpAUEbD50vH62TyWVebxwHAlbSdM49VqPz8t4a1uIjp4NIOIZ4xzLfjY5emt/RCyC7TQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-class-properties@7.27.1':
    resolution: {integrity: sha512-D0VcalChDMtuRvJIu3U/fwWjf8ZMykz5iZsg77Nuj821vCKI3zCyRLwRdWbsuJ/uRwZhZ002QtCqIkwC/ZkvbA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-class-static-block@7.27.1':
    resolution: {integrity: sha512-s734HmYU78MVzZ++joYM+NkJusItbdRcbm+AGRgJCt3iA+yux0QpD9cBVdz3tKyrjVYWRl7j0mHSmv4lhV0aoA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.12.0

  '@babel/plugin-transform-classes@7.27.1':
    resolution: {integrity: sha512-7iLhfFAubmpeJe/Wo2TVuDrykh/zlWXLzPNdL0Jqn/Xu8R3QQ8h9ff8FQoISZOsw74/HFqFI7NX63HN7QFIHKA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-computed-properties@7.27.1':
    resolution: {integrity: sha512-lj9PGWvMTVksbWiDT2tW68zGS/cyo4AkZ/QTp0sQT0mjPopCmrSkzxeXkznjqBxzDI6TclZhOJbBmbBLjuOZUw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-destructuring@7.27.3':
    resolution: {integrity: sha512-s4Jrok82JpiaIprtY2nHsYmrThKvvwgHwjgd7UMiYhZaN0asdXNLr0y+NjTfkA7SyQE5i2Fb7eawUOZmLvyqOA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-dotall-regex@7.27.1':
    resolution: {integrity: sha512-gEbkDVGRvjj7+T1ivxrfgygpT7GUd4vmODtYpbs0gZATdkX8/iSnOtZSxiZnsgm1YjTgjI6VKBGSJJevkrclzw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-duplicate-keys@7.27.1':
    resolution: {integrity: sha512-MTyJk98sHvSs+cvZ4nOauwTTG1JeonDjSGvGGUNHreGQns+Mpt6WX/dVzWBHgg+dYZhkC4X+zTDfkTU+Vy9y7Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-duplicate-named-capturing-groups-regex@7.27.1':
    resolution: {integrity: sha512-hkGcueTEzuhB30B3eJCbCYeCaaEQOmQR0AdvzpD4LoN0GXMWzzGSuRrxR2xTnCrvNbVwK9N6/jQ92GSLfiZWoQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/plugin-transform-dynamic-import@7.27.1':
    resolution: {integrity: sha512-MHzkWQcEmjzzVW9j2q8LGjwGWpG2mjwaaB0BNQwst3FIjqsg8Ct/mIZlvSPJvfi9y2AC8mi/ktxbFVL9pZ1I4A==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-exponentiation-operator@7.27.1':
    resolution: {integrity: sha512-uspvXnhHvGKf2r4VVtBpeFnuDWsJLQ6MF6lGJLC89jBR1uoVeqM416AZtTuhTezOfgHicpJQmoD5YUakO/YmXQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-export-namespace-from@7.27.1':
    resolution: {integrity: sha512-tQvHWSZ3/jH2xuq/vZDy0jNn+ZdXJeM8gHvX4lnJmsc3+50yPlWdZXIc5ay+umX+2/tJIqHqiEqcJvxlmIvRvQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-for-of@7.27.1':
    resolution: {integrity: sha512-BfbWFFEJFQzLCQ5N8VocnCtA8J1CLkNTe2Ms2wocj75dd6VpiqS5Z5quTYcUoo4Yq+DN0rtikODccuv7RU81sw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-function-name@7.27.1':
    resolution: {integrity: sha512-1bQeydJF9Nr1eBCMMbC+hdwmRlsv5XYOMu03YSWFwNs0HsAmtSxxF1fyuYPqemVldVyFmlCU7w8UE14LupUSZQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-json-strings@7.27.1':
    resolution: {integrity: sha512-6WVLVJiTjqcQauBhn1LkICsR2H+zm62I3h9faTDKt1qP4jn2o72tSvqMwtGFKGTpojce0gJs+76eZ2uCHRZh0Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-literals@7.27.1':
    resolution: {integrity: sha512-0HCFSepIpLTkLcsi86GG3mTUzxV5jpmbv97hTETW3yzrAij8aqlD36toB1D0daVFJM8NK6GvKO0gslVQmm+zZA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-logical-assignment-operators@7.27.1':
    resolution: {integrity: sha512-SJvDs5dXxiae4FbSL1aBJlG4wvl594N6YEVVn9e3JGulwioy6z3oPjx/sQBO3Y4NwUu5HNix6KJ3wBZoewcdbw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-member-expression-literals@7.27.1':
    resolution: {integrity: sha512-hqoBX4dcZ1I33jCSWcXrP+1Ku7kdqXf1oeah7ooKOIiAdKQ+uqftgCFNOSzA5AMS2XIHEYeGFg4cKRCdpxzVOQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-modules-amd@7.27.1':
    resolution: {integrity: sha512-iCsytMg/N9/oFq6n+gFTvUYDZQOMK5kEdeYxmxt91fcJGycfxVP9CnrxoliM0oumFERba2i8ZtwRUCMhvP1LnA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-modules-commonjs@7.27.1':
    resolution: {integrity: sha512-OJguuwlTYlN0gBZFRPqwOGNWssZjfIUdS7HMYtN8c1KmwpwHFBwTeFZrg9XZa+DFTitWOW5iTAG7tyCUPsCCyw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-modules-systemjs@7.27.1':
    resolution: {integrity: sha512-w5N1XzsRbc0PQStASMksmUeqECuzKuTJer7kFagK8AXgpCMkeDMO5S+aaFb7A51ZYDF7XI34qsTX+fkHiIm5yA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-modules-umd@7.27.1':
    resolution: {integrity: sha512-iQBE/xC5BV1OxJbp6WG7jq9IWiD+xxlZhLrdwpPkTX3ydmXdvoCpyfJN7acaIBZaOqTfr76pgzqBJflNbeRK+w==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-named-capturing-groups-regex@7.27.1':
    resolution: {integrity: sha512-SstR5JYy8ddZvD6MhV0tM/j16Qds4mIpJTOd1Yu9J9pJjH93bxHECF7pgtc28XvkzTD6Pxcm/0Z73Hvk7kb3Ng==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/plugin-transform-new-target@7.27.1':
    resolution: {integrity: sha512-f6PiYeqXQ05lYq3TIfIDu/MtliKUbNwkGApPUvyo6+tc7uaR4cPjPe7DFPr15Uyycg2lZU6btZ575CuQoYh7MQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-nullish-coalescing-operator@7.27.1':
    resolution: {integrity: sha512-aGZh6xMo6q9vq1JGcw58lZ1Z0+i0xB2x0XaauNIUXd6O1xXc3RwoWEBlsTQrY4KQ9Jf0s5rgD6SiNkaUdJegTA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-numeric-separator@7.27.1':
    resolution: {integrity: sha512-fdPKAcujuvEChxDBJ5c+0BTaS6revLV7CJL08e4m3de8qJfNIuCc2nc7XJYOjBoTMJeqSmwXJ0ypE14RCjLwaw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-object-rest-spread@7.27.3':
    resolution: {integrity: sha512-7ZZtznF9g4l2JCImCo5LNKFHB5eXnN39lLtLY5Tg+VkR0jwOt7TBciMckuiQIOIW7L5tkQOCh3bVGYeXgMx52Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-object-super@7.27.1':
    resolution: {integrity: sha512-SFy8S9plRPbIcxlJ8A6mT/CxFdJx/c04JEctz4jf8YZaVS2px34j7NXRrlGlHkN/M2gnpL37ZpGRGVFLd3l8Ng==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-optional-catch-binding@7.27.1':
    resolution: {integrity: sha512-txEAEKzYrHEX4xSZN4kJ+OfKXFVSWKB2ZxM9dpcE3wT7smwkNmXo5ORRlVzMVdJbD+Q8ILTgSD7959uj+3Dm3Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-optional-chaining@7.27.1':
    resolution: {integrity: sha512-BQmKPPIuc8EkZgNKsv0X4bPmOoayeu4F1YCwx2/CfmDSXDbp7GnzlUH+/ul5VGfRg1AoFPsrIThlEBj2xb4CAg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-parameters@7.27.1':
    resolution: {integrity: sha512-018KRk76HWKeZ5l4oTj2zPpSh+NbGdt0st5S6x0pga6HgrjBOJb24mMDHorFopOOd6YHkLgOZ+zaCjZGPO4aKg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-private-methods@7.27.1':
    resolution: {integrity: sha512-10FVt+X55AjRAYI9BrdISN9/AQWHqldOeZDUoLyif1Kn05a56xVBXb8ZouL8pZ9jem8QpXaOt8TS7RHUIS+GPA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-private-property-in-object@7.27.1':
    resolution: {integrity: sha512-5J+IhqTi1XPa0DXF83jYOaARrX+41gOewWbkPyjMNRDqgOCqdffGh8L3f/Ek5utaEBZExjSAzcyjmV9SSAWObQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-property-literals@7.27.1':
    resolution: {integrity: sha512-oThy3BCuCha8kDZ8ZkgOg2exvPYUlprMukKQXI1r1pJ47NCvxfkEy8vK+r/hT9nF0Aa4H1WUPZZjHTFtAhGfmQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-regenerator@7.27.5':
    resolution: {integrity: sha512-uhB8yHerfe3MWnuLAhEbeQ4afVoqv8BQsPqrTv7e/jZ9y00kJL6l9a/f4OWaKxotmjzewfEyXE1vgDJenkQ2/Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-regexp-modifiers@7.27.1':
    resolution: {integrity: sha512-TtEciroaiODtXvLZv4rmfMhkCv8jx3wgKpL68PuiPh2M4fvz5jhsA7697N1gMvkvr/JTF13DrFYyEbY9U7cVPA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/plugin-transform-reserved-words@7.27.1':
    resolution: {integrity: sha512-V2ABPHIJX4kC7HegLkYoDpfg9PVmuWy/i6vUM5eGK22bx4YVFD3M5F0QQnWQoDs6AGsUWTVOopBiMFQgHaSkVw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-runtime@7.27.4':
    resolution: {integrity: sha512-D68nR5zxU64EUzV8i7T3R5XP0Xhrou/amNnddsRQssx6GrTLdZl1rLxyjtVZBd+v/NVX4AbTPOB5aU8thAZV1A==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-shorthand-properties@7.27.1':
    resolution: {integrity: sha512-N/wH1vcn4oYawbJ13Y/FxcQrWk63jhfNa7jef0ih7PHSIHX2LB7GWE1rkPrOnka9kwMxb6hMl19p7lidA+EHmQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-spread@7.27.1':
    resolution: {integrity: sha512-kpb3HUqaILBJcRFVhFUs6Trdd4mkrzcGXss+6/mxUd273PfbWqSDHRzMT2234gIg2QYfAjvXLSquP1xECSg09Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-sticky-regex@7.27.1':
    resolution: {integrity: sha512-lhInBO5bi/Kowe2/aLdBAawijx+q1pQzicSgnkB6dUPc1+RC8QmJHKf2OjvU+NZWitguJHEaEmbV6VWEouT58g==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-template-literals@7.27.1':
    resolution: {integrity: sha512-fBJKiV7F2DxZUkg5EtHKXQdbsbURW3DZKQUWphDum0uRP6eHGGa/He9mc0mypL680pb+e/lDIthRohlv8NCHkg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-typeof-symbol@7.27.1':
    resolution: {integrity: sha512-RiSILC+nRJM7FY5srIyc4/fGIwUhyDuuBSdWn4y6yT6gm652DpCHZjIipgn6B7MQ1ITOUnAKWixEUjQRIBIcLw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-unicode-escapes@7.27.1':
    resolution: {integrity: sha512-Ysg4v6AmF26k9vpfFuTZg8HRfVWzsh1kVfowA23y9j/Gu6dOuahdUVhkLqpObp3JIv27MLSii6noRnuKN8H0Mg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-unicode-property-regex@7.27.1':
    resolution: {integrity: sha512-uW20S39PnaTImxp39O5qFlHLS9LJEmANjMG7SxIhap8rCHqu0Ik+tLEPX5DKmHn6CsWQ7j3lix2tFOa5YtL12Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-unicode-regex@7.27.1':
    resolution: {integrity: sha512-xvINq24TRojDuyt6JGtHmkVkrfVV3FPT16uytxImLeBZqW3/H52yN+kM1MGuyPkIQxrzKwPHs5U/MP3qKyzkGw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-unicode-sets-regex@7.27.1':
    resolution: {integrity: sha512-EtkOujbc4cgvb0mlpQefi4NTPBzhSIevblFevACNLUspmrALgmEBdL/XfnyyITfd8fKBZrZys92zOWcik7j9Tw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/preset-env@7.27.2':
    resolution: {integrity: sha512-Ma4zSuYSlGNRlCLO+EAzLnCmJK2vdstgv+n7aUP+/IKZrOfWHOJVdSJtuub8RzHTj3ahD37k5OKJWvzf16TQyQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/preset-modules@0.1.6-no-external-plugins':
    resolution: {integrity: sha512-HrcgcIESLm9aIR842yhJ5RWan/gebQUJ6E/E5+rf0y9o6oj7w0Br+sWuL6kEQ/o/AdfvR1Je9jG18/gnpwjEyA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0 || ^8.0.0-0 <8.0.0

  '@babel/runtime@7.27.6':
    resolution: {integrity: sha512-vbavdySgbTTrmFE+EsiqUTzlOr5bzlnJtUv9PynGCAKvfQqjIXbvFdumPM/GxMDfyuGMJaJAU6TO4zc1Jf1i8Q==}
    engines: {node: '>=6.9.0'}

  '@babel/template@7.27.2':
    resolution: {integrity: sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==}
    engines: {node: '>=6.9.0'}

  '@babel/traverse@7.27.4':
    resolution: {integrity: sha512-oNcu2QbHqts9BtOWJosOVJapWjBDSxGCpFvikNR5TGDYDQf3JwpIoMzIKrvfoti93cLfPJEG4tH9SPVeyCGgdA==}
    engines: {node: '>=6.9.0'}

  '@babel/types@7.27.6':
    resolution: {integrity: sha512-ETyHEk2VHHvl9b9jZP5IHPavHYk57EhanlRRuae9XCpb/j5bDCbPPMOBfCWhnl/7EDJz0jEMCi/RhccCE8r1+Q==}
    engines: {node: '>=6.9.0'}

  '@codemirror/autocomplete@6.18.6':
    resolution: {integrity: sha512-PHHBXFomUs5DF+9tCOM/UoW6XQ4R44lLNNhRaW9PKPTU0D7lIjRg3ElxaJnTwsl/oHiR93WSXDBrekhoUGCPtg==}

  '@codemirror/commands@6.8.1':
    resolution: {integrity: sha512-KlGVYufHMQzxbdQONiLyGQDUW0itrLZwq3CcY7xpv9ZLRHqzkBSoteocBHtMCoY7/Ci4xhzSrToIeLg7FxHuaw==}

  '@codemirror/lang-angular@0.1.4':
    resolution: {integrity: sha512-oap+gsltb/fzdlTQWD6BFF4bSLKcDnlxDsLdePiJpCVNKWXSTAbiiQeYI3UmES+BLAdkmIC1WjyztC1pi/bX4g==}

  '@codemirror/lang-cpp@6.0.2':
    resolution: {integrity: sha512-6oYEYUKHvrnacXxWxYa6t4puTlbN3dgV662BDfSH8+MfjQjVmP697/KYTDOqpxgerkvoNm7q5wlFMBeX8ZMocg==}

  '@codemirror/lang-css@6.3.1':
    resolution: {integrity: sha512-kr5fwBGiGtmz6l0LSJIbno9QrifNMUusivHbnA1H6Dmqy4HZFte3UAICix1VuKo0lMPKQr2rqB+0BkKi/S3Ejg==}

  '@codemirror/lang-go@6.0.1':
    resolution: {integrity: sha512-7fNvbyNylvqCphW9HD6WFnRpcDjr+KXX/FgqXy5H5ZS0eC5edDljukm/yNgYkwTsgp2busdod50AOTIy6Jikfg==}

  '@codemirror/lang-html@6.4.9':
    resolution: {integrity: sha512-aQv37pIMSlueybId/2PVSP6NPnmurFDVmZwzc7jszd2KAF8qd4VBbvNYPXWQq90WIARjsdVkPbw29pszmHws3Q==}

  '@codemirror/lang-java@6.0.1':
    resolution: {integrity: sha512-OOnmhH67h97jHzCuFaIEspbmsT98fNdhVhmA3zCxW0cn7l8rChDhZtwiwJ/JOKXgfm4J+ELxQihxaI7bj7mJRg==}

  '@codemirror/lang-javascript@6.2.4':
    resolution: {integrity: sha512-0WVmhp1QOqZ4Rt6GlVGwKJN3KW7Xh4H2q8ZZNGZaP6lRdxXJzmjm4FqvmOojVj6khWJHIb9sp7U/72W7xQgqAA==}

  '@codemirror/lang-json@6.0.1':
    resolution: {integrity: sha512-+T1flHdgpqDDlJZ2Lkil/rLiRy684WMLc74xUnjJH48GQdfJo/pudlTRreZmKwzP8/tGdKf83wlbAdOCzlJOGQ==}

  '@codemirror/lang-less@6.0.2':
    resolution: {integrity: sha512-EYdQTG22V+KUUk8Qq582g7FMnCZeEHsyuOJisHRft/mQ+ZSZ2w51NupvDUHiqtsOy7It5cHLPGfHQLpMh9bqpQ==}

  '@codemirror/lang-liquid@6.2.3':
    resolution: {integrity: sha512-yeN+nMSrf/lNii3FJxVVEGQwFG0/2eDyH6gNOj+TGCa0hlNO4bhQnoO5ISnd7JOG+7zTEcI/GOoyraisFVY7jQ==}

  '@codemirror/lang-markdown@6.3.2':
    resolution: {integrity: sha512-c/5MYinGbFxYl4itE9q/rgN/sMTjOr8XL5OWnC+EaRMLfCbVUmmubTJfdgpfcSS2SCaT7b+Q+xi3l6CgoE+BsA==}

  '@codemirror/lang-php@6.0.1':
    resolution: {integrity: sha512-ublojMdw/PNWa7qdN5TMsjmqkNuTBD3k6ndZ4Z0S25SBAiweFGyY68AS3xNcIOlb6DDFDvKlinLQ40vSLqf8xA==}

  '@codemirror/lang-python@6.2.1':
    resolution: {integrity: sha512-IRjC8RUBhn9mGR9ywecNhB51yePWCGgvHfY1lWN/Mrp3cKuHr0isDKia+9HnvhiWNnMpbGhWrkhuWOc09exRyw==}

  '@codemirror/lang-rust@6.0.1':
    resolution: {integrity: sha512-344EMWFBzWArHWdZn/NcgkwMvZIWUR1GEBdwG8FEp++6o6vT6KL9V7vGs2ONsKxxFUPXKI0SPcWhyYyl2zPYxQ==}

  '@codemirror/lang-sass@6.0.2':
    resolution: {integrity: sha512-l/bdzIABvnTo1nzdY6U+kPAC51czYQcOErfzQ9zSm9D8GmNPD0WTW8st/CJwBTPLO8jlrbyvlSEcN20dc4iL0Q==}

  '@codemirror/lang-sql@6.9.0':
    resolution: {integrity: sha512-xmtpWqKSgum1B1J3Ro6rf7nuPqf2+kJQg5SjrofCAcyCThOe0ihSktSoXfXuhQBnwx1QbmreBbLJM5Jru6zitg==}

  '@codemirror/lang-vue@0.1.3':
    resolution: {integrity: sha512-QSKdtYTDRhEHCfo5zOShzxCmqKJvgGrZwDQSdbvCRJ5pRLWBS7pD/8e/tH44aVQT6FKm0t6RVNoSUWHOI5vNug==}

  '@codemirror/lang-wast@6.0.2':
    resolution: {integrity: sha512-Imi2KTpVGm7TKuUkqyJ5NRmeFWF7aMpNiwHnLQe0x9kmrxElndyH0K6H/gXtWwY6UshMRAhpENsgfpSwsgmC6Q==}

  '@codemirror/lang-xml@6.1.0':
    resolution: {integrity: sha512-3z0blhicHLfwi2UgkZYRPioSgVTo9PV5GP5ducFH6FaHy0IAJRg+ixj5gTR1gnT/glAIC8xv4w2VL1LoZfs+Jg==}

  '@codemirror/lang-yaml@6.1.2':
    resolution: {integrity: sha512-dxrfG8w5Ce/QbT7YID7mWZFKhdhsaTNOYjOkSIMt1qmC4VQnXSDSYVHHHn8k6kJUfIhtLo8t1JJgltlxWdsITw==}

  '@codemirror/language-data@6.5.1':
    resolution: {integrity: sha512-0sWxeUSNlBr6OmkqybUTImADFUP0M3P0IiSde4nc24bz/6jIYzqYSgkOSLS+CBIoW1vU8Q9KUWXscBXeoMVC9w==}

  '@codemirror/language@6.11.1':
    resolution: {integrity: sha512-5kS1U7emOGV84vxC+ruBty5sUgcD0te6dyupyRVG2zaSjhTDM73LhVKUtVwiqSe6QwmEoA4SCiU8AKPFyumAWQ==}

  '@codemirror/legacy-modes@6.5.1':
    resolution: {integrity: sha512-DJYQQ00N1/KdESpZV7jg9hafof/iBNp9h7TYo1SLMk86TWl9uDsVdho2dzd81K+v4retmK6mdC7WpuOQDytQqw==}

  '@codemirror/lint@6.8.5':
    resolution: {integrity: sha512-s3n3KisH7dx3vsoeGMxsbRAgKe4O1vbrnKBClm99PU0fWxmxsx5rR2PfqQgIt+2MMJBHbiJ5rfIdLYfB9NNvsA==}

  '@codemirror/search@6.5.11':
    resolution: {integrity: sha512-KmWepDE6jUdL6n8cAAqIpRmLPBZ5ZKnicE8oGU/s3QrAVID+0VhLFrzUucVKHG5035/BSykhExDL/Xm7dHthiA==}

  '@codemirror/state@6.5.2':
    resolution: {integrity: sha512-FVqsPqtPWKVVL3dPSxy8wEF/ymIEuVzF1PK3VbUgrxXpJUSHQWWZz4JMToquRxnkw+36LTamCZG2iua2Ptq0fA==}

  '@codemirror/theme-one-dark@6.1.2':
    resolution: {integrity: sha512-F+sH0X16j/qFLMAfbciKTxVOwkdAS336b7AXTKOZhy8BR3eH/RelsnLgLFINrpST63mmN2OuwUt0W2ndUgYwUA==}

  '@codemirror/view@6.37.1':
    resolution: {integrity: sha512-Qy4CAUwngy/VQkEz0XzMKVRcckQuqLYWKqVpDDDghBe5FSXSqfVrJn49nw3ePZHxRUz4nRmb05Lgi+9csWo4eg==}

  '@colors/colors@1.5.0':
    resolution: {integrity: sha512-ooWCrlZP11i8GImSjTHYHLkvFDP48nS4+204nGb1RiX/WXYHmJA2III9/e2DWVabCESdW7hBAEzHRqUn9OUVvQ==}
    engines: {node: '>=0.1.90'}

  '@discoveryjs/json-ext@0.5.7':
    resolution: {integrity: sha512-dBVuXR082gk3jsFp7Rd/JI4kytwGHecnCoTtXFb7DB6CNHp4rg5k1bhg0nWdLGLnOV71lmDzGQaLMy8iPLY0pw==}
    engines: {node: '>=10.0.0'}

  '@emmetio/abbreviation@2.3.3':
    resolution: {integrity: sha512-mgv58UrU3rh4YgbE/TzgLQwJ3pFsHHhCLqY20aJq+9comytTXUDNGG/SMtSeMJdkpxgXSXunBGLD8Boka3JyVA==}

  '@emmetio/css-abbreviation@2.1.8':
    resolution: {integrity: sha512-s9yjhJ6saOO/uk1V74eifykk2CBYi01STTK3WlXWGOepyKa23ymJ053+DNQjpFcy1ingpaO7AxCcwLvHFY9tuw==}

  '@emmetio/css-parser@0.4.0':
    resolution: {integrity: sha512-z7wkxRSZgrQHXVzObGkXG+Vmj3uRlpM11oCZ9pbaz0nFejvCDmAiNDpY75+wgXOcffKpj4rzGtwGaZxfJKsJxw==}

  '@emmetio/html-matcher@1.3.0':
    resolution: {integrity: sha512-NTbsvppE5eVyBMuyGfVu2CRrLvo7J4YHb6t9sBFLyY03WYhXET37qA4zOYUjBWFCRHO7pS1B9khERtY0f5JXPQ==}

  '@emmetio/scanner@1.0.4':
    resolution: {integrity: sha512-IqRuJtQff7YHHBk4G8YZ45uB9BaAGcwQeVzgj/zj8/UdOhtQpEIupUhSk8dys6spFIWVZVeK20CzGEnqR5SbqA==}

  '@emmetio/stream-reader-utils@0.1.0':
    resolution: {integrity: sha512-ZsZ2I9Vzso3Ho/pjZFsmmZ++FWeEd/txqybHTm4OgaZzdS8V9V/YYWQwg5TC38Z7uLWUV1vavpLLbjJtKubR1A==}

  '@emmetio/stream-reader@2.2.0':
    resolution: {integrity: sha512-fXVXEyFA5Yv3M3n8sUGT7+fvecGrZP4k6FnWWMSZVQf69kAq0LLpaBQLGcPR30m3zMmKYhECP4k/ZkzvhEW5kw==}

  '@floating-ui/core@1.7.1':
    resolution: {integrity: sha512-azI0DrjMMfIug/ExbBaeDVJXcY0a7EPvPjb2xAJPa4HeimBX+Z18HK8QQR3jb6356SnDDdxx+hinMLcJEDdOjw==}

  '@floating-ui/dom@1.7.1':
    resolution: {integrity: sha512-cwsmW/zyw5ltYTUeeYJ60CnQuPqmGwuGVhG9w0PRaRKkAyi38BT5CKrpIbb+jtahSwUl04cWzSx9ZOIxeS6RsQ==}

  '@floating-ui/utils@0.2.9':
    resolution: {integrity: sha512-MDWhGtE+eHw5JW7lq4qhc5yRLS11ERl1c7Z6Xd0a58DozHES6EnNNwUWbMiG4J9Cgj053Bhk8zvlhFYKVhULwg==}

  '@fontsource/exo-2@5.2.6':
    resolution: {integrity: sha512-8JKiOCWQIEY9KmBUhENFRKXk8h0Me0HfDc6ta+zFJz/OjvJOcVEjipCaXLaduob0hZu1CiRH8kB2DnaImbE9lw==}

  '@johnsoncodehk/pug-beautify@0.2.2':
    resolution: {integrity: sha512-qqNS/YD0Nck5wtQLCPHAfGVgWbbGafxSPjNh0ekYPFSNNqnDH2kamnduzYly8IiADmeVx/MfAE1njMEjVeHTMA==}

  '@jridgewell/gen-mapping@0.3.8':
    resolution: {integrity: sha512-imAbBGkb+ebQyxKgzv5Hu2nmROxoDOXHh80evxdoXNOrvAnVx7zimzc1Oo5h9RlfV4vPXaE2iM5pOFbvOCClWA==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/set-array@1.2.1':
    resolution: {integrity: sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/source-map@0.3.6':
    resolution: {integrity: sha512-1ZJTZebgqllO79ue2bm3rIGud/bOe0pP5BjSRCRxxYkEZS8STV7zN84UBbiYu7jy+eCKSnVIUgoWWE/tt+shMQ==}

  '@jridgewell/sourcemap-codec@1.5.0':
    resolution: {integrity: sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==}

  '@jridgewell/trace-mapping@0.3.25':
    resolution: {integrity: sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==}

  '@leichtgewicht/ip-codec@2.0.5':
    resolution: {integrity: sha512-Vo+PSpZG2/fmgmiNzYK9qWRh8h/CHrwD0mo1h1DzL4yzHNSfWYujGTYsWGreD000gcgmZ7K4Ys6Tx9TxtsKdDw==}

  '@lezer/common@1.2.3':
    resolution: {integrity: sha512-w7ojc8ejBqr2REPsWxJjrMFsA/ysDCFICn8zEOR9mrqzOu2amhITYuLD8ag6XZf0CFXDrhKqw7+tW8cX66NaDA==}

  '@lezer/cpp@1.1.3':
    resolution: {integrity: sha512-ykYvuFQKGsRi6IcE+/hCSGUhb/I4WPjd3ELhEblm2wS2cOznDFzO+ubK2c+ioysOnlZ3EduV+MVQFCPzAIoY3w==}

  '@lezer/css@1.2.1':
    resolution: {integrity: sha512-2F5tOqzKEKbCUNraIXc0f6HKeyKlmMWJnBB0i4XW6dJgssrZO/YlZ2pY5xgyqDleqqhiNJ3dQhbrV2aClZQMvg==}

  '@lezer/go@1.0.1':
    resolution: {integrity: sha512-xToRsYxwsgJNHTgNdStpcvmbVuKxTapV0dM0wey1geMMRc9aggoVyKgzYp41D2/vVOx+Ii4hmE206kvxIXBVXQ==}

  '@lezer/highlight@1.2.1':
    resolution: {integrity: sha512-Z5duk4RN/3zuVO7Jq0pGLJ3qynpxUVsh7IbUbGj88+uV2ApSAn6kWg2au3iJb+0Zi7kKtqffIESgNcRXWZWmSA==}

  '@lezer/html@1.3.10':
    resolution: {integrity: sha512-dqpT8nISx/p9Do3AchvYGV3qYc4/rKr3IBZxlHmpIKam56P47RSHkSF5f13Vu9hebS1jM0HmtJIwLbWz1VIY6w==}

  '@lezer/java@1.1.3':
    resolution: {integrity: sha512-yHquUfujwg6Yu4Fd1GNHCvidIvJwi/1Xu2DaKl/pfWIA2c1oXkVvawH3NyXhCaFx4OdlYBVX5wvz2f7Aoa/4Xw==}

  '@lezer/javascript@1.5.1':
    resolution: {integrity: sha512-ATOImjeVJuvgm3JQ/bpo2Tmv55HSScE2MTPnKRMRIPx2cLhHGyX2VnqpHhtIV1tVzIjZDbcWQm+NCTF40ggZVw==}

  '@lezer/json@1.0.3':
    resolution: {integrity: sha512-BP9KzdF9Y35PDpv04r0VeSTKDeox5vVr3efE7eBbx3r4s3oNLfunchejZhjArmeieBH+nVOpgIiBJpEAv8ilqQ==}

  '@lezer/lr@1.4.2':
    resolution: {integrity: sha512-pu0K1jCIdnQ12aWNaAVU5bzi7Bd1w54J3ECgANPmYLtQKP0HBj2cE/5coBD66MT10xbtIuUr7tg0Shbsvk0mDA==}

  '@lezer/markdown@1.4.3':
    resolution: {integrity: sha512-kfw+2uMrQ/wy/+ONfrH83OkdFNM0ye5Xq96cLlaCy7h5UT9FO54DU4oRoIc0CSBh5NWmWuiIJA7NGLMJbQ+Oxg==}

  '@lezer/php@1.0.2':
    resolution: {integrity: sha512-GN7BnqtGRpFyeoKSEqxvGvhJQiI4zkgmYnDk/JIyc7H7Ifc1tkPnUn/R2R8meH3h/aBf5rzjvU8ZQoyiNDtDrA==}

  '@lezer/python@1.1.18':
    resolution: {integrity: sha512-31FiUrU7z9+d/ElGQLJFXl+dKOdx0jALlP3KEOsGTex8mvj+SoE1FgItcHWK/axkxCHGUSpqIHt6JAWfWu9Rhg==}

  '@lezer/rust@1.0.2':
    resolution: {integrity: sha512-Lz5sIPBdF2FUXcWeCu1//ojFAZqzTQNRga0aYv6dYXqJqPfMdCAI0NzajWUd4Xijj1IKJLtjoXRPMvTKWBcqKg==}

  '@lezer/sass@1.1.0':
    resolution: {integrity: sha512-3mMGdCTUZ/84ArHOuXWQr37pnf7f+Nw9ycPUeKX+wu19b7pSMcZGLbaXwvD2APMBDOGxPmpK/O6S1v1EvLoqgQ==}

  '@lezer/xml@1.0.6':
    resolution: {integrity: sha512-CdDwirL0OEaStFue/66ZmFSeppuL6Dwjlk8qk153mSQwiSH/Dlri4GNymrNWnUmPl2Um7QfV1FO9KFUyX3Twww==}

  '@lezer/yaml@1.0.3':
    resolution: {integrity: sha512-GuBLekbw9jDBDhGur82nuwkxKQ+a3W5H0GfaAthDXcAu+XdpS43VlnxA9E9hllkpSP5ellRDKjLLj7Lu9Wr6xA==}

  '@marijn/find-cluster-break@1.0.2':
    resolution: {integrity: sha512-l0h88YhZFyKdXIFNfSWpyjStDjGHwZ/U7iobcK1cQQD8sejsONdQtTVU+1wVN1PBw40PiiHB1vA5S7VTfQiP9g==}

  '@milkdown/components@7.13.1':
    resolution: {integrity: sha512-qWQFg0KvPeGmlnsW9Y7w97I5HBwsaYqGaQMEyECkVZNL/CTT7uEdm9ofeLAeL9sNWya9WQYFplr0kJH6laiNKw==}
    peerDependencies:
      '@codemirror/language': ^6
      '@codemirror/state': ^6
      '@codemirror/view': ^6

  '@milkdown/core@7.13.1':
    resolution: {integrity: sha512-cSFH/Ob1kW9I7Q8vDw1Xd6JpIQNB7EZx+PMtEeEQbX/2mUYoDWrfzUeeKJPhtdyr77iN3B609Ok9Xn3bzZnoOg==}

  '@milkdown/crepe@7.13.1':
    resolution: {integrity: sha512-jMNwQ4BJVpI0VQ6/2rO6U1l8bC69VfiUUghqHnjt8+f81Dz+VxeROLfkmSBvqzq5rdknDidPDzr4OUFGoC4a1g==}

  '@milkdown/ctx@7.13.1':
    resolution: {integrity: sha512-S3u0KBz/6K4er5RaRJhZIof1pGK52KwvdPKL//l2++mcC92NG3FAsntllgsm3+AZLpYrk2DjlSqaYBCFvQ5O4g==}

  '@milkdown/exception@7.13.1':
    resolution: {integrity: sha512-3nfGRwXZcLC3dQyGiIJDNhgfpaU134dKX+qJuoCsFWsSib53ogkBdCVXma8d7REXtoMCLbcQWzUbfl+0Mn3TGA==}

  '@milkdown/kit@7.13.1':
    resolution: {integrity: sha512-80kF0Ay6R3kBbysBA41VOYoqXPrz8o/LrxmB6omiJZ+93FrNdMoXx5GfNT4lKsOW1W5vtPvdqffZzQxW0wwzGA==}

  '@milkdown/plugin-block@7.13.1':
    resolution: {integrity: sha512-HG/RJ9C/EHvky0/rio9oSlud89u4ggj9CvWAbiBjyMMeO0V0rDGGsVF+1sTtB6Gvtm7ryk/KDUUkM5a3zm8s4w==}

  '@milkdown/plugin-clipboard@7.13.1':
    resolution: {integrity: sha512-/WoPv4BDNufO6uavnwqMSYAQTgFvy2Vw5e8n1+Qba/kpjJtbXiH/9zrPA1w42SivxRkOSI0lfSm6OXQnQS5Z8Q==}

  '@milkdown/plugin-cursor@7.13.1':
    resolution: {integrity: sha512-ETJW+TLrrJCSf9+Hq4zwjqrW2z/RJBFeNyNoqen8PIpfmWJCM4EqyHLWw2qscJlx2fBDHnIAHCVnbu6Tmk1atg==}

  '@milkdown/plugin-history@7.13.1':
    resolution: {integrity: sha512-C2n3kKWWdEcIlk/HiV9WMK5f9PdxR2yzf3Sg3ibexhhAi4fp0bf0BJNupQVuFqYQPBmXL6rW4lFs9zVjHn/yEg==}

  '@milkdown/plugin-indent@7.13.1':
    resolution: {integrity: sha512-X6IKT/KLNWKww+tinNjBye2ClfaDmWyxu9dL6bz37l5HgBVZ9mL9HS97YIkxh/5YiivYwl98JmWba2ahKdXB5A==}

  '@milkdown/plugin-listener@7.13.1':
    resolution: {integrity: sha512-CCsFtRXXnIwipVCjyBS1c/lthRq+Uiqw/x9GacvGSixNdwGfYn4lD+ujax9WwmNviANHakNZdL3y5aOVPZZ84A==}

  '@milkdown/plugin-prism@7.13.1':
    resolution: {integrity: sha512-YkJgbVvfWZ59fwLHVnZPsK9BhZA7G9GP5xvge8ErO6505FifLirJOUeDXTQ+kkVDDYZ7jQzOqYv51MlLlOgRkA==}

  '@milkdown/plugin-slash@7.13.1':
    resolution: {integrity: sha512-Up91kxFyyPsfjfQ56sNfphaYvxsPdFaEOY6Q37FJYCwmdjIZ9/12FLDQJOr0Bh58Z6R1DHE7GgBQ4c/voQc5Sw==}

  '@milkdown/plugin-tooltip@7.13.1':
    resolution: {integrity: sha512-XvbimMl9EaRsmCpdNnDomeqKqkSuSZMYrn1XAxouhb4Q2DMOEHC4J3prnnndrekbZD2ndlQPONb3asndhKpTXg==}

  '@milkdown/plugin-trailing@7.13.1':
    resolution: {integrity: sha512-Aon8tN4qQl76aX7C6jxi1NqJvjs/q8vAK04iO8qmJ+SzY0d7EaPcxZicTJitXTDI1W7VKSvGMAw1YP2qrH8now==}

  '@milkdown/plugin-upload@7.13.1':
    resolution: {integrity: sha512-jKyoDNroEOdpSWrrhKrbAY41y9k0jbyLReeNRESSbKF61Rf04v9dfRQBNu6GdLpHqL52AeI9TnQh7rcNFtrORA==}

  '@milkdown/preset-commonmark@7.13.1':
    resolution: {integrity: sha512-KK0MOpoCDw1hEGXZiZ26sLPLIJnlzchdGqgxWD5KPGCa9Yj9aGOUqHDGVoH6aIhPBFOYV8nisZkHUGCSufVYnQ==}

  '@milkdown/preset-gfm@7.13.1':
    resolution: {integrity: sha512-y9MPhxyAAu6REJiGT+n/yXmeY7agg0GqbLNb/49bXuY6KAnLiBJNGd8s/rAHKQ08siVHxuUjMI6BSIDFCSShDw==}

  '@milkdown/prose@7.13.1':
    resolution: {integrity: sha512-M3jiySoOW1jDkaT835KU+aWzHQZqmZ/o0FVm5Dkk8bZVI0v+wVEcE4H+1H8SskiP5s8gHgAMDUDrIkLifSeKvQ==}

  '@milkdown/transformer@7.13.1':
    resolution: {integrity: sha512-h9IczhBuDbUrygzi8oCTb607C9kufS8nbLcQQ/pFvHMIjn92uejo84mAc4IWFmmxoXzVRj0/cDFt1KJTTkga+A==}

  '@milkdown/utils@7.13.1':
    resolution: {integrity: sha512-4ct/ovL0h/0kuLFligLdZgt3qtWbNZEHnIKO321qvkaGLx1HmzbMpiL6V8tq7iDqNKeoqAzFb/2vnUeYGv1Ndw==}

  '@milkdown/vue@7.13.1':
    resolution: {integrity: sha512-isuqvaPJVPdWIWAj8lnmcr6qYWyFD9OBMiTWEPsWqkK2qg4b9760oD9FcFv08Pd6IYBWQ12scZA5wQ1I66xv/w==}
    peerDependencies:
      vue: ^3.0.0

  '@nodelib/fs.scandir@2.1.5':
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}

  '@nodelib/fs.stat@2.0.5':
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}

  '@nodelib/fs.walk@1.2.8':
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}

  '@parcel/watcher-android-arm64@2.5.1':
    resolution: {integrity: sha512-KF8+j9nNbUN8vzOFDpRMsaKBHZ/mcjEjMToVMJOhTozkDonQFFrRcfdLWn6yWKCmJKmdVxSgHiYvTCef4/qcBA==}
    engines: {node: '>= 10.0.0'}
    cpu: [arm64]
    os: [android]

  '@parcel/watcher-darwin-arm64@2.5.1':
    resolution: {integrity: sha512-eAzPv5osDmZyBhou8PoF4i6RQXAfeKL9tjb3QzYuccXFMQU0ruIc/POh30ePnaOyD1UXdlKguHBmsTs53tVoPw==}
    engines: {node: '>= 10.0.0'}
    cpu: [arm64]
    os: [darwin]

  '@parcel/watcher-darwin-x64@2.5.1':
    resolution: {integrity: sha512-1ZXDthrnNmwv10A0/3AJNZ9JGlzrF82i3gNQcWOzd7nJ8aj+ILyW1MTxVk35Db0u91oD5Nlk9MBiujMlwmeXZg==}
    engines: {node: '>= 10.0.0'}
    cpu: [x64]
    os: [darwin]

  '@parcel/watcher-freebsd-x64@2.5.1':
    resolution: {integrity: sha512-SI4eljM7Flp9yPuKi8W0ird8TI/JK6CSxju3NojVI6BjHsTyK7zxA9urjVjEKJ5MBYC+bLmMcbAWlZ+rFkLpJQ==}
    engines: {node: '>= 10.0.0'}
    cpu: [x64]
    os: [freebsd]

  '@parcel/watcher-linux-arm-glibc@2.5.1':
    resolution: {integrity: sha512-RCdZlEyTs8geyBkkcnPWvtXLY44BCeZKmGYRtSgtwwnHR4dxfHRG3gR99XdMEdQ7KeiDdasJwwvNSF5jKtDwdA==}
    engines: {node: '>= 10.0.0'}
    cpu: [arm]
    os: [linux]

  '@parcel/watcher-linux-arm-musl@2.5.1':
    resolution: {integrity: sha512-6E+m/Mm1t1yhB8X412stiKFG3XykmgdIOqhjWj+VL8oHkKABfu/gjFj8DvLrYVHSBNC+/u5PeNrujiSQ1zwd1Q==}
    engines: {node: '>= 10.0.0'}
    cpu: [arm]
    os: [linux]

  '@parcel/watcher-linux-arm64-glibc@2.5.1':
    resolution: {integrity: sha512-LrGp+f02yU3BN9A+DGuY3v3bmnFUggAITBGriZHUREfNEzZh/GO06FF5u2kx8x+GBEUYfyTGamol4j3m9ANe8w==}
    engines: {node: '>= 10.0.0'}
    cpu: [arm64]
    os: [linux]

  '@parcel/watcher-linux-arm64-musl@2.5.1':
    resolution: {integrity: sha512-cFOjABi92pMYRXS7AcQv9/M1YuKRw8SZniCDw0ssQb/noPkRzA+HBDkwmyOJYp5wXcsTrhxO0zq1U11cK9jsFg==}
    engines: {node: '>= 10.0.0'}
    cpu: [arm64]
    os: [linux]

  '@parcel/watcher-linux-x64-glibc@2.5.1':
    resolution: {integrity: sha512-GcESn8NZySmfwlTsIur+49yDqSny2IhPeZfXunQi48DMugKeZ7uy1FX83pO0X22sHntJ4Ub+9k34XQCX+oHt2A==}
    engines: {node: '>= 10.0.0'}
    cpu: [x64]
    os: [linux]

  '@parcel/watcher-linux-x64-musl@2.5.1':
    resolution: {integrity: sha512-n0E2EQbatQ3bXhcH2D1XIAANAcTZkQICBPVaxMeaCVBtOpBZpWJuf7LwyWPSBDITb7In8mqQgJ7gH8CILCURXg==}
    engines: {node: '>= 10.0.0'}
    cpu: [x64]
    os: [linux]

  '@parcel/watcher-win32-arm64@2.5.1':
    resolution: {integrity: sha512-RFzklRvmc3PkjKjry3hLF9wD7ppR4AKcWNzH7kXR7GUe0Igb3Nz8fyPwtZCSquGrhU5HhUNDr/mKBqj7tqA2Vw==}
    engines: {node: '>= 10.0.0'}
    cpu: [arm64]
    os: [win32]

  '@parcel/watcher-win32-ia32@2.5.1':
    resolution: {integrity: sha512-c2KkcVN+NJmuA7CGlaGD1qJh1cLfDnQsHjE89E60vUEMlqduHGCdCLJCID5geFVM0dOtA3ZiIO8BoEQmzQVfpQ==}
    engines: {node: '>= 10.0.0'}
    cpu: [ia32]
    os: [win32]

  '@parcel/watcher-win32-x64@2.5.1':
    resolution: {integrity: sha512-9lHBdJITeNR++EvSQVUcaZoWupyHfXe1jZvGZ06O/5MflPcuPLtEphScIBL+AiCWBO46tDSHzWyD0uDmmZqsgA==}
    engines: {node: '>= 10.0.0'}
    cpu: [x64]
    os: [win32]

  '@parcel/watcher@2.5.1':
    resolution: {integrity: sha512-dfUnCxiN9H4ap84DvD2ubjw+3vUNpstxa0TneY/Paat8a3R4uQZDLSvWjmznAY/DoahqTHl9V46HF/Zs3F29pg==}
    engines: {node: '>= 10.0.0'}

  '@trysound/sax@0.2.0':
    resolution: {integrity: sha512-L7z9BgrNEcYyUYtF+HaEfiS5ebkh9jXqbszz7pC0hRBPaatV0XjSD3+eHrpqFemQfgwiFF0QPIarnIihIDn7OA==}
    engines: {node: '>=10.13.0'}

  '@types/babel__core@7.20.5':
    resolution: {integrity: sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==}

  '@types/babel__generator@7.27.0':
    resolution: {integrity: sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==}

  '@types/babel__template@7.4.4':
    resolution: {integrity: sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==}

  '@types/babel__traverse@7.20.7':
    resolution: {integrity: sha512-dkO5fhS7+/oos4ciWxyEyjWe48zmG6wbCheo/G2ZnHx4fs3EU6YC6UM8rk56gAjNJ9P3MTH2jo5jb92/K6wbng==}

  '@types/backbone@1.4.15':
    resolution: {integrity: sha512-WWeKtYlsIMtDyLbbhkb96taJMEbfQBnuz7yw1u0pkphCOtksemoWhIXhK74VRCY9hbjnsH3rsJu2uUiFtnsEYg==}

  '@types/body-parser@1.19.6':
    resolution: {integrity: sha512-HLFeCYgz89uk22N5Qg3dvGvsv46B8GLvKKo1zKG4NybA8U2DiEO3w9lqGg29t/tfLRJpJ6iQxnVw4OnB7MoM9g==}

  '@types/bonjour@3.5.13':
    resolution: {integrity: sha512-z9fJ5Im06zvUL548KvYNecEVlA7cVDkGUi6kZusb04mpyEFKCIZJvloCcmpmLaIahDpOQGHaHmG6imtPMmPXGQ==}

  '@types/clean-css@4.2.11':
    resolution: {integrity: sha512-Y8n81lQVTAfP2TOdtJJEsCoYl1AnOkqDqMvXb9/7pfgZZ7r8YrEyurrAvAoAjHOGXKRybay+5CsExqIH6liccw==}

  '@types/connect-history-api-fallback@1.5.4':
    resolution: {integrity: sha512-n6Cr2xS1h4uAulPRdlw6Jl6s1oG8KrVilPN2yUITEs+K48EzMJJ3W1xy8K5eWuFvjp3R74AOIGSmp2UfBJ8HFw==}

  '@types/connect@3.4.38':
    resolution: {integrity: sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==}

  '@types/debug@4.1.12':
    resolution: {integrity: sha512-vIChWdVG3LG1SMxEvI/AK+FWJthlrqlTu7fbrlywTkkaONwk/UAGaULXRlf8vkzFBLVm0zkMdCquhL5aOjhXPQ==}

  '@types/eslint-scope@3.7.7':
    resolution: {integrity: sha512-MzMFlSLBqNF2gcHWO0G1vP/YQyfvrxZ0bF+u7mzUdZ1/xK4A4sru+nraZz5i3iEIk1l1uyicaDVTB4QbbEkAYg==}

  '@types/eslint@9.6.1':
    resolution: {integrity: sha512-FXx2pKgId/WyYo2jXw63kk7/+TY7u7AziEJxJAnSFzHlqTAS3Ync6SvgYAN/k4/PQpnnVuzoMuVnByKK2qp0ag==}

  '@types/estree@1.0.8':
    resolution: {integrity: sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==}

  '@types/express-serve-static-core@4.19.6':
    resolution: {integrity: sha512-N4LZ2xG7DatVqhCZzOGb1Yi5lMbXSZcmdLDe9EzSndPV2HpWYWzRbaerl2n27irrm94EPpprqa8KpskPT085+A==}

  '@types/express-serve-static-core@5.0.6':
    resolution: {integrity: sha512-3xhRnjJPkULekpSzgtoNYYcTWgEZkp4myc+Saevii5JPnHNvHMRlBSHDbs7Bh1iPPoVTERHEZXyhyLbMEsExsA==}

  '@types/express@4.17.23':
    resolution: {integrity: sha512-Crp6WY9aTYP3qPi2wGDo9iUe/rceX01UMhnF1jmwDcKCFM6cx7YhGP/Mpr3y9AASpfHixIG0E6azCcL5OcDHsQ==}

  '@types/glob@7.2.0':
    resolution: {integrity: sha512-ZUxbzKl0IfJILTS6t7ip5fQQM/J3TJYubDm3nMbgubNNYS62eXeUpoLUC8/7fJNiFYHTrGPQn7hspDUzIHX3UA==}

  '@types/hast@3.0.4':
    resolution: {integrity: sha512-WPs+bbQw5aCj+x6laNGWLH3wviHtoCv/P3+otBhbOhJgG8qtpdAMlTCxLtsTWA7LH1Oh/bFCHsBn0TPS5m30EQ==}

  '@types/http-errors@2.0.5':
    resolution: {integrity: sha512-r8Tayk8HJnX0FztbZN7oVqGccWgw98T/0neJphO91KkmOzug1KkofZURD4UaD5uH8AqcFLfdPErnBod0u71/qg==}

  '@types/http-proxy@1.17.16':
    resolution: {integrity: sha512-sdWoUajOB1cd0A8cRRQ1cfyWNbmFKLAqBB89Y8x5iYyG/mkJHc0YUH8pdWBy2omi9qtCpiIgGjuwO0dQST2l5w==}

  '@types/imagemin-gifsicle@7.0.4':
    resolution: {integrity: sha512-ZghMBd/Jgqg5utTJNPmvf6DkuHzMhscJ8vgf/7MUGCpO+G+cLrhYltL+5d+h3A1B4W73S2SrmJZ1jS5LACpX+A==}

  '@types/imagemin-mozjpeg@8.0.4':
    resolution: {integrity: sha512-ZCAxV8SYJB8ehwHpnbRpHjg5Wc4HcyuAMiDhXbkgC7gujDoOTyHO3dhDkUtZ1oK1DLBRZapqG9etdLVhUml7yQ==}

  '@types/imagemin-optipng@5.2.4':
    resolution: {integrity: sha512-mvKnDMC8eCYZetAQudjs1DbgpR84WhsTx1wgvdiXnpuUEti3oJ+MaMYBRWPY0JlQ4+y4TXKOfa7+LOuT8daegQ==}

  '@types/imagemin-svgo@8.0.1':
    resolution: {integrity: sha512-YafkdrVAcr38U0Ln1C+L1n4SIZqC47VBHTyxCq7gTUSd1R9MdIvMcrljWlgU1M9O68WZDeQWUrKipKYfEOCOvQ==}

  '@types/imagemin@9.0.1':
    resolution: {integrity: sha512-xMWpvrUhtYxl6EeW+UhVH3rwUKhCRx21XddcoWByjDAasXZT5pQaCn0YVnXoTijX5hlTrGqV4TGQL/Htpp00+w==}

  '@types/jquery@3.5.32':
    resolution: {integrity: sha512-b9Xbf4CkMqS02YH8zACqN1xzdxc3cO735Qe5AbSUFmyOiaWAbcpqh9Wna+Uk0vgACvoQHpWDg2rGdHkYPLmCiQ==}

  '@types/json-schema@7.0.15':
    resolution: {integrity: sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==}

  '@types/katex@0.16.7':
    resolution: {integrity: sha512-HMwFiRujE5PjrgwHQ25+bsLJgowjGjm5Z8FVSf0N6PwgJrwxH0QxzHYDcKsTfV3wva0vzrpqMTJS2jXPr5BMEQ==}

  '@types/lodash-es@4.17.12':
    resolution: {integrity: sha512-0NgftHUcV4v34VhXm8QBSftKVXtbkBG3ViCjs6+eJ5a6y6Mi/jiFGPc1sC7QK+9BFhWrURE3EOggmWaSxL9OzQ==}

  '@types/lodash.debounce@4.0.9':
    resolution: {integrity: sha512-Ma5JcgTREwpLRwMM+XwBR7DaWe96nC38uCBDFKZWbNKD+osjVzdpnUSwBcqCptrp16sSOLBAUb50Car5I0TCsQ==}

  '@types/lodash.throttle@4.1.9':
    resolution: {integrity: sha512-PCPVfpfueguWZQB7pJQK890F2scYKoDUL3iM522AptHWn7d5NQmeS/LTEHIcLr5PaTzl3dK2Z0xSUHHTHwaL5g==}

  '@types/lodash@4.17.17':
    resolution: {integrity: sha512-RRVJ+J3J+WmyOTqnz3PiBLA501eKwXl2noseKOrNo/6+XEHjTAxO4xHvxQB6QuNm+s4WRbn6rSiap8+EA+ykFQ==}

  '@types/mdast@4.0.4':
    resolution: {integrity: sha512-kGaNbPh1k7AFzgpud/gMdvIm5xuECykRR+JnWKQno9TAXVa6WIVCGTPvYGekIDL4uwCZQSYbUxNBSb1aUo79oA==}

  '@types/mime@1.3.5':
    resolution: {integrity: sha512-/pyBZWSLD2n0dcHE3hq8s8ZvcETHtEuF+3E7XVt0Ig2nvsVQXdghHVcEkIWjy9A0wKfTn97a/PSDYohKIlnP/w==}

  '@types/minimatch@5.1.2':
    resolution: {integrity: sha512-K0VQKziLUWkVKiRVrx4a40iPaxTUefQmjtkQofBkYRcoaaL/8rhwDWww9qWbrgicNOgnpIsMxyNIUM4+n6dUIA==}

  '@types/ms@2.1.0':
    resolution: {integrity: sha512-GsCCIZDE/p3i96vtEqx+7dBUGXrc7zeSK3wwPHIaRThS+9OhWIXRqzs4d6k1SVU8g91DrNRWxWUGhp5KXQb2VA==}

  '@types/node-forge@1.3.11':
    resolution: {integrity: sha512-FQx220y22OKNTqaByeBGqHWYz4cl94tpcxeFdvBo3wjG6XPBuZ0BNgNZRV5J5TFmmcsJ4IzsLkmGRiQbnYsBEQ==}

  '@types/node@24.0.0':
    resolution: {integrity: sha512-yZQa2zm87aRVcqDyH5+4Hv9KYgSdgwX1rFnGvpbzMaC7YAljmhBET93TPiTd3ObwTL+gSpIzPKg5BqVxdCvxKg==}

  '@types/parse-json@4.0.2':
    resolution: {integrity: sha512-dISoDXWWQwUquiKsyZ4Ng+HX2KsPL7LyHKHQwgGFEA3IaKac4Obd+h2a/a6waisAoepJlBcx9paWqjA8/HVjCw==}

  '@types/prismjs@1.26.5':
    resolution: {integrity: sha512-AUZTa7hQ2KY5L7AmtSiqxlhWxb4ina0yd8hNbl4TWuqnv/pFP0nDMb3YrfSBf4hJVGLh2YEIBfKaBW/9UEl6IQ==}

  '@types/qs@6.14.0':
    resolution: {integrity: sha512-eOunJqu0K1923aExK6y8p6fsihYEn/BYuQ4g0CxAAgFc4b/ZLN4CrsRZ55srTdqoiLzU2B2evC+apEIxprEzkQ==}

  '@types/range-parser@1.2.7':
    resolution: {integrity: sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==}

  '@types/retry@0.12.0':
    resolution: {integrity: sha512-wWKOClTTiizcZhXnPY4wikVAwmdYHp8q6DmC+EJUzAMsycb7HB32Kh9RN4+0gExjmPmZSAQjgURXIGATPegAvA==}

  '@types/send@0.17.5':
    resolution: {integrity: sha512-z6F2D3cOStZvuk2SaP6YrwkNO65iTZcwA2ZkSABegdkAh/lf+Aa/YQndZVfmEXT5vgAp6zv06VQ3ejSVjAny4w==}

  '@types/serve-index@1.9.4':
    resolution: {integrity: sha512-qLpGZ/c2fhSs5gnYsQxtDEq3Oy8SXPClIXkW5ghvAvsNuVSA8k+gCONcUCS/UjLEYvYps+e8uBtfgXgvhwfNug==}

  '@types/serve-static@1.15.8':
    resolution: {integrity: sha512-roei0UY3LhpOJvjbIP6ZZFngyLKl5dskOtDhxY5THRSpO+ZI+nzJ+m5yUMzGrp89YRa7lvknKkMYjqQFGwA7Sg==}

  '@types/sizzle@2.3.9':
    resolution: {integrity: sha512-xzLEyKB50yqCUPUJkIsrVvoWNfFUbIZI+RspLWt8u+tIW/BetMBZtgV2LY/2o+tYH8dRvQ+eoPf3NdhQCcLE2w==}

  '@types/sockjs@0.3.36':
    resolution: {integrity: sha512-MK9V6NzAS1+Ud7JV9lJLFqW85VbC9dq3LmwZCuBe4wBDgKC0Kj/jd8Xl+nSviU+Qc3+m7umHHyHg//2KSa0a0Q==}

  '@types/sortablejs@1.15.8':
    resolution: {integrity: sha512-b79830lW+RZfwaztgs1aVPgbasJ8e7AXtZYHTELNXZPsERt4ymJdjV4OccDbHQAvHrCcFpbF78jkm0R6h/pZVg==}

  '@types/svgo@1.3.6':
    resolution: {integrity: sha512-AZU7vQcy/4WFEuwnwsNsJnFwupIpbllH1++LXScN6uxT1Z4zPzdrWG97w4/I7eFKFTvfy/bHFStWjdBAg2Vjug==}

  '@types/trusted-types@2.0.7':
    resolution: {integrity: sha512-ScaPdn1dQczgbl0QFTeTOmVHFULt394XJgOQNoyVhZ6r2vLnMLJfBPd53SB52T/3G36VI1/g2MZaX0cwDuXsfw==}

  '@types/underscore@1.13.0':
    resolution: {integrity: sha512-L6LBgy1f0EFQZ+7uSA57+n2g/s4Qs5r06Vwrwn0/nuK1de+adz00NWaztRQ30aEqw5qOaWbPI8u2cGQ52lj6VA==}

  '@types/unist@2.0.11':
    resolution: {integrity: sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA==}

  '@types/unist@3.0.3':
    resolution: {integrity: sha512-ko/gIFJRv177XgZsZcBwnqJN5x/Gien8qNOn0D5bQU/zAzVf9Zt3BlcUiLqhV9y4ARk0GbT3tnUiPNgnTXzc/Q==}

  '@types/ws@8.18.1':
    resolution: {integrity: sha512-ThVF6DCVhA8kUGy+aazFQ4kXQ7E1Ty7A3ypFOe0IcJV8O/M511G99AW24irKrW56Wt44yG9+ij8FaqoBGkuBXg==}

  '@volar/language-core@2.4.14':
    resolution: {integrity: sha512-X6beusV0DvuVseaOEy7GoagS4rYHgDHnTrdOj5jeUb49fW5ceQyP9Ej5rBhqgz2wJggl+2fDbbojq1XKaxDi6w==}

  '@volar/language-server@2.4.14':
    resolution: {integrity: sha512-P3mGbQbW0v40UYBnb3DAaNtRYx6/MGOVKzdOWmBCGwjUkCR2xBkGrCFt05XnPDwFS/cTWDh2U6Mc9lpZ8Aecfw==}

  '@volar/language-service@2.4.14':
    resolution: {integrity: sha512-vNC3823EJohdzLTyjZoCMPwoWCfINB5emusniCkW5CGoGHQov4VVmT6yI5ncgP/NpgAIUv2NEkJooXvLHA4VeQ==}

  '@volar/source-map@2.4.14':
    resolution: {integrity: sha512-5TeKKMh7Sfxo8021cJfmBzcjfY1SsXsPMMjMvjY7ivesdnybqqS+GxGAoXHAOUawQTwtdUxgP65Im+dEmvWtYQ==}

  '@volar/test-utils@2.4.14':
    resolution: {integrity: sha512-+3fzjRA3HSchFw22848xofqvv1+Y2LBEduyjYc1vqQWFYcWjkKOOLgSonRflmJrFwLa9bBcvUxNihhh71FsbGw==}

  '@volar/typescript@2.4.14':
    resolution: {integrity: sha512-p8Z6f/bZM3/HyCdRNFZOEEzts51uV8WHeN8Tnfnm2EBv6FDB2TQLzfVx7aJvnl8ofKAOnS64B2O8bImBFaauRw==}

  '@vscode/emmet-helper@2.11.0':
    resolution: {integrity: sha512-QLxjQR3imPZPQltfbWRnHU6JecWTF1QSWhx3GAKQpslx7y3Dp6sIIXhKjiUJ/BR9FX8PVthjr9PD6pNwOJfAzw==}

  '@vscode/l10n@0.0.18':
    resolution: {integrity: sha512-KYSIHVmslkaCDyw013pphY+d7x1qV8IZupYfeIfzNA+nsaWHbn5uPuQRvdRFsa9zFzGeudPuoGoZ1Op4jrJXIQ==}

  '@vue/compiler-core@3.5.16':
    resolution: {integrity: sha512-AOQS2eaQOaaZQoL1u+2rCJIKDruNXVBZSiUD3chnUrsoX5ZTQMaCvXlWNIfxBJuU15r1o7+mpo5223KVtIhAgQ==}

  '@vue/compiler-dom@3.5.16':
    resolution: {integrity: sha512-SSJIhBr/teipXiXjmWOVWLnxjNGo65Oj/8wTEQz0nqwQeP75jWZ0n4sF24Zxoht1cuJoWopwj0J0exYwCJ0dCQ==}

  '@vue/compiler-sfc@3.5.16':
    resolution: {integrity: sha512-rQR6VSFNpiinDy/DVUE0vHoIDUF++6p910cgcZoaAUm3POxgNOOdS/xgoll3rNdKYTYPnnbARDCZOyZ+QSe6Pw==}

  '@vue/compiler-ssr@3.5.16':
    resolution: {integrity: sha512-d2V7kfxbdsjrDSGlJE7my1ZzCXViEcqN6w14DOsDrUCHEA6vbnVCpRFfrc4ryCP/lCKzX2eS1YtnLE/BuC9f/A==}

  '@vue/compiler-vue2@2.7.16':
    resolution: {integrity: sha512-qYC3Psj9S/mfu9uVi5WvNZIzq+xnXMhOwbTFKKDD7b1lhpnn71jXSFdTQ+WsIEk0ONCd7VV2IMm7ONl6tbQ86A==}

  '@vue/devtools-api@6.6.4':
    resolution: {integrity: sha512-sGhTPMuXqZ1rVOk32RylztWkfXTRhuS7vgAKv0zjqk8gbsHkJ7xfFf+jbySxt7tWObEJwyKaHMikV/WGDiQm8g==}

  '@vue/language-core@2.2.10':
    resolution: {integrity: sha512-+yNoYx6XIKuAO8Mqh1vGytu8jkFEOH5C8iOv3i8Z/65A7x9iAOXA97Q+PqZ3nlm2lxf5rOJuIGI/wDtx/riNYw==}
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@vue/language-server@2.2.10':
    resolution: {integrity: sha512-xNV7zmENTzTZdD9xRDpZK21S/cfwVBeIS7zEf8VIuBCkFEA21zgG/EmI6Q/vF3N7RJnNm1oCCyRCdyl6MI29tQ==}
    hasBin: true

  '@vue/language-service@2.2.10':
    resolution: {integrity: sha512-7ERgApCm65FnsSmOB9JmDk+DXBz4ReQdL9P1J9jo3ZSG5AFuyRCVD/mrLgqBh0k8xtPrVbcBnx5+rYvbI+KP/Q==}

  '@vue/reactivity@3.5.16':
    resolution: {integrity: sha512-FG5Q5ee/kxhIm1p2bykPpPwqiUBV3kFySsHEQha5BJvjXdZTUfmya7wP7zC39dFuZAcf/PD5S4Lni55vGLMhvA==}

  '@vue/runtime-core@3.5.16':
    resolution: {integrity: sha512-bw5Ykq6+JFHYxrQa7Tjr+VSzw7Dj4ldR/udyBZbq73fCdJmyy5MPIFR9IX/M5Qs+TtTjuyUTCnmK3lWWwpAcFQ==}

  '@vue/runtime-dom@3.5.16':
    resolution: {integrity: sha512-T1qqYJsG2xMGhImRUV9y/RseB9d0eCYZQ4CWca9ztCuiPj/XWNNN+lkNBuzVbia5z4/cgxdL28NoQCvC0Xcfww==}

  '@vue/server-renderer@3.5.16':
    resolution: {integrity: sha512-BrX0qLiv/WugguGsnQUJiYOE0Fe5mZTwi6b7X/ybGB0vfrPH9z0gD/Y6WOR1sGCgX4gc25L1RYS5eYQKDMoNIg==}
    peerDependencies:
      vue: 3.5.16

  '@vue/shared@3.5.16':
    resolution: {integrity: sha512-c/0fWy3Jw6Z8L9FmTyYfkpM5zklnqqa9+a6dz3DvONRKW2NEbh46BP0FHuLFSWi2TnQEtp91Z6zOWNrU6QiyPg==}

  '@vue/typescript-plugin@2.2.10':
    resolution: {integrity: sha512-niKMM8rvDep6AsZ+8FBnv5BjhkUFnxSkyVrihXkSKITGiz3UMLIvPBKRfgvWGtMdc+2a3yW7GEIo+eFJK+91ZA==}

  '@webassemblyjs/ast@1.14.1':
    resolution: {integrity: sha512-nuBEDgQfm1ccRp/8bCQrx1frohyufl4JlbMMZ4P1wpeOfDhF6FQkxZJ1b/e+PLwr6X1Nhw6OLme5usuBWYBvuQ==}

  '@webassemblyjs/floating-point-hex-parser@1.13.2':
    resolution: {integrity: sha512-6oXyTOzbKxGH4steLbLNOu71Oj+C8Lg34n6CqRvqfS2O71BxY6ByfMDRhBytzknj9yGUPVJ1qIKhRlAwO1AovA==}

  '@webassemblyjs/helper-api-error@1.13.2':
    resolution: {integrity: sha512-U56GMYxy4ZQCbDZd6JuvvNV/WFildOjsaWD3Tzzvmw/mas3cXzRJPMjP83JqEsgSbyrmaGjBfDtV7KDXV9UzFQ==}

  '@webassemblyjs/helper-buffer@1.14.1':
    resolution: {integrity: sha512-jyH7wtcHiKssDtFPRB+iQdxlDf96m0E39yb0k5uJVhFGleZFoNw1c4aeIcVUPPbXUVJ94wwnMOAqUHyzoEPVMA==}

  '@webassemblyjs/helper-numbers@1.13.2':
    resolution: {integrity: sha512-FE8aCmS5Q6eQYcV3gI35O4J789wlQA+7JrqTTpJqn5emA4U2hvwJmvFRC0HODS+3Ye6WioDklgd6scJ3+PLnEA==}

  '@webassemblyjs/helper-wasm-bytecode@1.13.2':
    resolution: {integrity: sha512-3QbLKy93F0EAIXLh0ogEVR6rOubA9AoZ+WRYhNbFyuB70j3dRdwH9g+qXhLAO0kiYGlg3TxDV+I4rQTr/YNXkA==}

  '@webassemblyjs/helper-wasm-section@1.14.1':
    resolution: {integrity: sha512-ds5mXEqTJ6oxRoqjhWDU83OgzAYjwsCV8Lo/N+oRsNDmx/ZDpqalmrtgOMkHwxsG0iI//3BwWAErYRHtgn0dZw==}

  '@webassemblyjs/ieee754@1.13.2':
    resolution: {integrity: sha512-4LtOzh58S/5lX4ITKxnAK2USuNEvpdVV9AlgGQb8rJDHaLeHciwG4zlGr0j/SNWlr7x3vO1lDEsuePvtcDNCkw==}

  '@webassemblyjs/leb128@1.13.2':
    resolution: {integrity: sha512-Lde1oNoIdzVzdkNEAWZ1dZ5orIbff80YPdHx20mrHwHrVNNTjNr8E3xz9BdpcGqRQbAEa+fkrCb+fRFTl/6sQw==}

  '@webassemblyjs/utf8@1.13.2':
    resolution: {integrity: sha512-3NQWGjKTASY1xV5m7Hr0iPeXD9+RDobLll3T9d2AO+g3my8xy5peVyjSag4I50mR1bBSN/Ct12lo+R9tJk0NZQ==}

  '@webassemblyjs/wasm-edit@1.14.1':
    resolution: {integrity: sha512-RNJUIQH/J8iA/1NzlE4N7KtyZNHi3w7at7hDjvRNm5rcUXa00z1vRz3glZoULfJ5mpvYhLybmVcwcjGrC1pRrQ==}

  '@webassemblyjs/wasm-gen@1.14.1':
    resolution: {integrity: sha512-AmomSIjP8ZbfGQhumkNvgC33AY7qtMCXnN6bL2u2Js4gVCg8fp735aEiMSBbDR7UQIj90n4wKAFUSEd0QN2Ukg==}

  '@webassemblyjs/wasm-opt@1.14.1':
    resolution: {integrity: sha512-PTcKLUNvBqnY2U6E5bdOQcSM+oVP/PmrDY9NzowJjislEjwP/C4an2303MCVS2Mg9d3AJpIGdUFIQQWbPds0Sw==}

  '@webassemblyjs/wasm-parser@1.14.1':
    resolution: {integrity: sha512-JLBl+KZ0R5qB7mCnud/yyX08jWFw5MsoalJ1pQ4EdFlgj9VdXKGuENGsiCIjegI1W7p91rUlcB/LB5yRJKNTcQ==}

  '@webassemblyjs/wast-printer@1.14.1':
    resolution: {integrity: sha512-kPSSXE6De1XOR820C90RIo2ogvZG+c3KiHzqUoO/F34Y2shGzesfqv7o57xrxovZJH/MetF5UjroJ/R/3isoiw==}

  '@webpack-cli/configtest@1.2.0':
    resolution: {integrity: sha512-4FB8Tj6xyVkyqjj1OaTqCjXYULB9FMkqQ8yGrZjRDrYh0nOE+7Lhs45WioWQQMV+ceFlE368Ukhe6xdvJM9Egg==}
    peerDependencies:
      webpack: 4.x.x || 5.x.x
      webpack-cli: 4.x.x

  '@webpack-cli/info@1.5.0':
    resolution: {integrity: sha512-e8tSXZpw2hPl2uMJY6fsMswaok5FdlGNRTktvFk2sD8RjH0hE2+XistawJx1vmKteh4NmGmNUrp+Tb2w+udPcQ==}
    peerDependencies:
      webpack-cli: 4.x.x

  '@webpack-cli/serve@1.7.0':
    resolution: {integrity: sha512-oxnCNGj88fL+xzV+dacXs44HcDwf1ovs3AuEzvP7mqXw7fQntqIhQ1BRmynh4qEKQSSSRSWVyXRjmTbZIX9V2Q==}
    peerDependencies:
      webpack-cli: 4.x.x
      webpack-dev-server: '*'
    peerDependenciesMeta:
      webpack-dev-server:
        optional: true

  '@xtuc/ieee754@1.2.0':
    resolution: {integrity: sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==}

  '@xtuc/long@4.2.2':
    resolution: {integrity: sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==}

  accepts@1.3.8:
    resolution: {integrity: sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==}
    engines: {node: '>= 0.6'}

  acorn@7.4.1:
    resolution: {integrity: sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  acorn@8.15.0:
    resolution: {integrity: sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  adjust-sourcemap-loader@4.0.0:
    resolution: {integrity: sha512-OXwN5b9pCUXNQHJpwwD2qP40byEmSgzj8B4ydSN0uMNYWiFmJ6x6KwUllMmfk8Rwu/HJDFR7U8ubsWBoN0Xp0A==}
    engines: {node: '>=8.9'}

  ajv-formats@2.1.1:
    resolution: {integrity: sha512-Wx0Kx52hxE7C18hkMEggYlEifqWZtYaRgouJor+WMdPnQyEK13vgEWyVNup7SoeeoLMsr4kf5h6dOW11I15MUA==}
    peerDependencies:
      ajv: ^8.0.0
    peerDependenciesMeta:
      ajv:
        optional: true

  ajv-keywords@3.5.2:
    resolution: {integrity: sha512-5p6WTN0DdTGVQk6VjcEju19IgaHudalcfabD7yhDGeA6bcQnmL+CpveLJq/3hvfwd1aof6L386Ougkx6RfyMIQ==}
    peerDependencies:
      ajv: ^6.9.1

  ajv-keywords@5.1.0:
    resolution: {integrity: sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==}
    peerDependencies:
      ajv: ^8.8.2

  ajv@6.12.6:
    resolution: {integrity: sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==}

  ajv@8.17.1:
    resolution: {integrity: sha512-B/gBuNg5SiMTrPkC+A2+cW0RszwxYmn6VYxB/inlBStS5nx6xHIt/ehKRhIMhqusl7a8LjQoZnjCs5vhwxOQ1g==}

  alien-signals@1.0.13:
    resolution: {integrity: sha512-OGj9yyTnJEttvzhTUWuscOvtqxq5vrhF7vL9oS0xJ2mK0ItPYP1/y+vCFebfxoEyAz0++1AIwJ5CMr+Fk3nDmg==}

  ansi-html-community@0.0.8:
    resolution: {integrity: sha512-1APHAyr3+PCamwNw3bXCPp4HFLONZt/yIH0sZp0/469KWNTEy+qN5jQ3GVX6DMZ1UXAi34yVwtTeaG/HpBuuzw==}
    engines: {'0': node >= 0.8.0}
    hasBin: true

  ansi-regex@5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}

  ansi-styles@4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}

  anymatch@3.1.3:
    resolution: {integrity: sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==}
    engines: {node: '>= 8'}

  array-flatten@1.1.1:
    resolution: {integrity: sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==}

  array-union@2.1.0:
    resolution: {integrity: sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==}
    engines: {node: '>=8'}

  asn1.js@4.10.1:
    resolution: {integrity: sha512-p32cOF5q0Zqs9uBiONKYLm6BClCoBCM5O9JfeUSlnQLBTxYdTK+pW+nXflm8UkKd2UYlEbYz5qEi0JuZR9ckSw==}

  assert@1.5.1:
    resolution: {integrity: sha512-zzw1uCAgLbsKwBfFc8CX78DDg+xZeBksSO3vwVIDDN5i94eOrPsSSyiVhmsSABFDM/OcpE2aagCat9dnWQLG1A==}

  asynckit@0.4.0:
    resolution: {integrity: sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==}

  autoprefixer@10.4.21:
    resolution: {integrity: sha512-O+A6LWV5LDHSJD3LjHYoNi4VLsj/Whi7k6zG12xTYaU4cQ8oxQGckXNX8cRHK5yOZ/ppVHe0ZBXGzSV9jXdVbQ==}
    engines: {node: ^10 || ^12 || >=14}
    hasBin: true
    peerDependencies:
      postcss: ^8.1.0

  axios@1.9.0:
    resolution: {integrity: sha512-re4CqKTJaURpzbLHtIi6XpDv20/CnpXOtjRY5/CU32L8gU8ek9UIivcfvSWvmKEngmVbrUtPpdDwWDWL7DNHvg==}

  babel-loader@8.4.1:
    resolution: {integrity: sha512-nXzRChX+Z1GoE6yWavBQg6jDslyFF3SDjl2paADuoQtQW10JqShJt62R6eJQ5m/pjJFDT8xgKIWSP85OY8eXeA==}
    engines: {node: '>= 8.9'}
    peerDependencies:
      '@babel/core': ^7.0.0
      webpack: '>=2'

  babel-plugin-polyfill-corejs2@0.4.13:
    resolution: {integrity: sha512-3sX/eOms8kd3q2KZ6DAhKPc0dgm525Gqq5NtWKZ7QYYZEv57OQ54KtblzJzH1lQF/eQxO8KjWGIK9IPUJNus5g==}
    peerDependencies:
      '@babel/core': ^7.4.0 || ^8.0.0-0 <8.0.0

  babel-plugin-polyfill-corejs3@0.11.1:
    resolution: {integrity: sha512-yGCqvBT4rwMczo28xkH/noxJ6MZ4nJfkVYdoDaC/utLtWrXxv27HVrzAeSbqR8SxDsp46n0YF47EbHoixy6rXQ==}
    peerDependencies:
      '@babel/core': ^7.4.0 || ^8.0.0-0 <8.0.0

  babel-plugin-polyfill-regenerator@0.6.4:
    resolution: {integrity: sha512-7gD3pRadPrbjhjLyxebmx/WrFYcuSjZ0XbdUujQMZ/fcE9oeewk2U/7PCvez84UeuK3oSjmPZ0Ch0dlupQvGzw==}
    peerDependencies:
      '@babel/core': ^7.4.0 || ^8.0.0-0 <8.0.0

  backbone-undo@0.2.6:
    resolution: {integrity: sha512-AsfpNiljLXlk7TcffDUu3EAUq7CxWbyTNwARWrql5XTzN4vh6WzEEBZYaKK4kTTz+iW1tSzqUooaGRIwO83kWA==}
    deprecated: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.

  backbone@1.4.1:
    resolution: {integrity: sha512-ADy1ztN074YkWbHi8ojJVFe3vAanO/lrzMGZWUClIP7oDD/Pjy2vrASraUP+2EVCfIiTtCW4FChVow01XneivA==}

  bail@2.0.2:
    resolution: {integrity: sha512-0xO6mYd7JB2YesxDKplafRpsiOzPt9V02ddPCLbY1xYGPOX24NTyN50qnUxgCPcSoYMhKpAuBTjQoRZCAkUDRw==}

  balanced-match@1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}

  base64-js@1.5.1:
    resolution: {integrity: sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==}

  batch@0.6.1:
    resolution: {integrity: sha512-x+VAiMRL6UPkx+kudNvxTl6hB2XNNCG2r+7wixVfIYwu/2HKRXimwQyaumLjMveWvT2Hkd/cAJw+QBMfJ/EKVw==}

  big.js@5.2.2:
    resolution: {integrity: sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ==}

  binary-extensions@2.3.0:
    resolution: {integrity: sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==}
    engines: {node: '>=8'}

  bn.js@4.12.2:
    resolution: {integrity: sha512-n4DSx829VRTRByMRGdjQ9iqsN0Bh4OolPsFnaZBLcbi8iXcB+kJ9s7EnRt4wILZNV3kPLHkRVfOc/HvhC3ovDw==}

  bn.js@5.2.2:
    resolution: {integrity: sha512-v2YAxEmKaBLahNwE1mjp4WON6huMNeuDvagFZW+ASCuA/ku0bXR9hSMw0XpiqMoA3+rmnyck/tPRSFQkoC9Cuw==}

  body-parser@1.20.3:
    resolution: {integrity: sha512-7rAxByjUMqQ3/bHJy7D6OGXvx/MMc4IqBn/X0fcM1QUcAItpZrBEYhWGem+tzXH90c+G01ypMcYJBO9Y30203g==}
    engines: {node: '>= 0.8', npm: 1.2.8000 || >= 1.4.16}

  bonjour-service@1.3.0:
    resolution: {integrity: sha512-3YuAUiSkWykd+2Azjgyxei8OWf8thdn8AITIog2M4UICzoqfjlqr64WIjEXZllf/W6vK1goqleSR6brGomxQqA==}

  boolbase@1.0.0:
    resolution: {integrity: sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==}

  brace-expansion@1.1.11:
    resolution: {integrity: sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==}

  brace-expansion@2.0.1:
    resolution: {integrity: sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==}

  braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}

  brorand@1.1.0:
    resolution: {integrity: sha512-cKV8tMCEpQs4hK/ik71d6LrPOnpkpGBR0wzxqr68g2m/LB2GxVYQroAjMJZRVM1Y4BCjCKc3vAamxSzOY2RP+w==}

  browserify-aes@1.2.0:
    resolution: {integrity: sha512-+7CHXqGuspUn/Sl5aO7Ea0xWGAtETPXNSAjHo48JfLdPWcMng33Xe4znFvQweqc/uzk5zSOI3H52CYnjCfb5hA==}

  browserify-cipher@1.0.1:
    resolution: {integrity: sha512-sPhkz0ARKbf4rRQt2hTpAHqn47X3llLkUGn+xEJzLjwY8LRs2p0v7ljvI5EyoRO/mexrNunNECisZs+gw2zz1w==}

  browserify-des@1.0.2:
    resolution: {integrity: sha512-BioO1xf3hFwz4kc6iBhI3ieDFompMhrMlnDFC4/0/vd5MokpuAc3R+LYbwTA9A5Yc9pq9UYPqffKpW2ObuwX5A==}

  browserify-rsa@4.1.1:
    resolution: {integrity: sha512-YBjSAiTqM04ZVei6sXighu679a3SqWORA3qZTEqZImnlkDIFtKc6pNutpjyZ8RJTjQtuYfeetkxM11GwoYXMIQ==}
    engines: {node: '>= 0.10'}

  browserify-sign@4.2.3:
    resolution: {integrity: sha512-JWCZW6SKhfhjJxO8Tyiiy+XYB7cqd2S5/+WeYHsKdNKFlCBhKbblba1A/HN/90YwtxKc8tCErjffZl++UNmGiw==}
    engines: {node: '>= 0.12'}

  browserify-zlib@0.2.0:
    resolution: {integrity: sha512-Z942RysHXmJrhqk88FmKBVq/v5tqmSkDz7p54G/MGyjMnCFFnC79XWNbg+Vta8W6Wb2qtSZTSxIGkJrRpCFEiA==}

  browserslist@4.25.0:
    resolution: {integrity: sha512-PJ8gYKeS5e/whHBh8xrwYK+dAvEj7JXtz6uTucnMRB8OiGTsKccFekoRrjajPBHV8oOY+2tI4uxeceSimKwMFA==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true

  buffer-from@1.1.2:
    resolution: {integrity: sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==}

  buffer-xor@1.0.3:
    resolution: {integrity: sha512-571s0T7nZWK6vB67HI5dyUF7wXiNcfaPPPTl6zYCNApANjIvYJTg7hlud/+cJpdAhS7dVzqMLmfhfHR3rAcOjQ==}

  buffer@4.9.2:
    resolution: {integrity: sha512-xq+q3SRMOxGivLhBNaUdC64hDTQwejJ+H0T/NB1XMtTVEwNTrfFF3gAxiyW0Bu/xWEGhjVKgUcMhCrUy2+uCWg==}

  builtin-status-codes@3.0.0:
    resolution: {integrity: sha512-HpGFw18DgFWlncDfjTa2rcQ4W88O1mC8e8yZ2AvQY5KDaktSTwo+KRf6nHK6FRI5FyRyb/5T6+TSxfP7QyGsmQ==}

  bytes@3.1.2:
    resolution: {integrity: sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==}
    engines: {node: '>= 0.8'}

  call-bind-apply-helpers@1.0.2:
    resolution: {integrity: sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==}
    engines: {node: '>= 0.4'}

  call-bind@1.0.8:
    resolution: {integrity: sha512-oKlSFMcMwpUg2ednkhQ454wfWiU/ul3CkJe/PEHcTKuiX6RpbehUiFMXu13HalGZxfUwCQzZG747YXBn1im9ww==}
    engines: {node: '>= 0.4'}

  call-bound@1.0.4:
    resolution: {integrity: sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==}
    engines: {node: '>= 0.4'}

  callsites@3.1.0:
    resolution: {integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==}
    engines: {node: '>=6'}

  camel-case@4.1.2:
    resolution: {integrity: sha512-gxGWBrTT1JuMx6R+o5PTXMmUnhnVzLQ9SNutD4YqKtI6ap897t3tKECYla6gCWEkplXnlNybEkZg9GEGxKFCgw==}

  caniuse-api@3.0.0:
    resolution: {integrity: sha512-bsTwuIg/BZZK/vreVTYYbSWoe2F+71P7K5QGEX+pT250DZbfU1MQ5prOKpPR+LL6uWKK3KMwMCAS74QB3Um1uw==}

  caniuse-lite@1.0.30001721:
    resolution: {integrity: sha512-cOuvmUVtKrtEaoKiO0rSc29jcjwMwX5tOHDy4MgVFEWiUXj4uBMJkwI8MDySkgXidpMiHUcviogAvFi4pA2hDQ==}

  ccount@2.0.1:
    resolution: {integrity: sha512-eyrF0jiFpY+3drT6383f1qhkbGsLSifNAjA61IUjZjmLCWjItY6LB9ft9YhoDgwfmclB2zhu51Lc7+95b8NRAg==}

  chalk@4.1.2:
    resolution: {integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==}
    engines: {node: '>=10'}

  character-entities-legacy@3.0.0:
    resolution: {integrity: sha512-RpPp0asT/6ufRm//AJVwpViZbGM/MkjQFxJccQRHmISF/22NBtsHqAWmL+/pmkPWoIUJdWyeVleTl1wydHATVQ==}

  character-entities@2.0.2:
    resolution: {integrity: sha512-shx7oQ0Awen/BRIdkjkvz54PnEEI/EjwXDSIZp86/KKdbafHh1Df/RYGBhn4hbe2+uKC9FnT5UCEdyPz3ai9hQ==}

  character-parser@2.2.0:
    resolution: {integrity: sha512-+UqJQjFEFaTAs3bNsF2j2kEN1baG/zghZbdqoYEDxGZtJo9LBzl1A+m0D4n3qKx8N2FNv8/Xp6yV9mQmBuptaw==}

  character-reference-invalid@2.0.1:
    resolution: {integrity: sha512-iBZ4F4wRbyORVsu0jPV7gXkOsGYjGHPmAyv+HiHG8gi5PtC9KI2j1+v8/tlibRvjoWX027ypmG/n0HtO5t7unw==}

  charenc@0.0.2:
    resolution: {integrity: sha512-yrLQ/yVUFXkzg7EDQsPieE/53+0RlaWTs+wBrvW36cyilJ2SaDWfl4Yj7MtLTXleV9uEKefbAGUPv2/iWSooRA==}

  chokidar@3.6.0:
    resolution: {integrity: sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==}
    engines: {node: '>= 8.10.0'}

  chokidar@4.0.3:
    resolution: {integrity: sha512-Qgzu8kfBvo+cA4962jnP1KkS6Dop5NS6g7R5LFYJr4b8Ub94PPQXUksCw9PvXoeXPRRddRNC5C1JQUR2SMGtnA==}
    engines: {node: '>= 14.16.0'}

  chrome-trace-event@1.0.4:
    resolution: {integrity: sha512-rNjApaLzuwaOTjCiT8lSDdGN1APCiqkChLMJxJPWLunPAt5fy8xgU9/jNOchV84wfIxrA0lRQB7oCT8jrn/wrQ==}
    engines: {node: '>=6.0'}

  cipher-base@1.0.6:
    resolution: {integrity: sha512-3Ek9H3X6pj5TgenXYtNWdaBon1tgYCaebd+XPg0keyjEbEfkD4KkmAxkQ/i1vYvxdcT5nscLBfq9VJRmCBcFSw==}
    engines: {node: '>= 0.10'}

  clean-css@4.2.4:
    resolution: {integrity: sha512-EJUDT7nDVFDvaQgAo2G/PJvxmp1o/c6iXLbswsBbUFXi1Nr+AjA2cKmfbKDMjMvzEe75g3P6JkaDDAKk96A85A==}
    engines: {node: '>= 4.0'}

  clean-css@5.3.3:
    resolution: {integrity: sha512-D5J+kHaVb/wKSFcyyV75uCn8fiY4sV38XJoe4CUyGQ+mOU/fMVYUdH1hJC+CJQ5uY3EnW27SbJYS4X8BiLrAFg==}
    engines: {node: '>= 10.0'}

  cli-table3@0.6.5:
    resolution: {integrity: sha512-+W/5efTR7y5HRD7gACw9yQjqMVvEMLBHmboM/kPWam+H+Hmyrgjh6YncVKK122YZkXrLudzTuAukUw9FnMf7IQ==}
    engines: {node: 10.* || >= 12.*}

  cliui@8.0.1:
    resolution: {integrity: sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==}
    engines: {node: '>=12'}

  clone-deep@4.0.1:
    resolution: {integrity: sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==}
    engines: {node: '>=6'}

  clone@2.1.2:
    resolution: {integrity: sha512-3Pe/CF1Nn94hyhIYpjtiLhdCoEoz0DqQ+988E9gmeEdQZlojxnOb74wctFyuwWQHzqyf9X7C7MG8juUpqBJT8w==}
    engines: {node: '>=0.8'}

  clsx@2.1.1:
    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}
    engines: {node: '>=6'}

  codemirror-formatting@1.0.0:
    resolution: {integrity: sha512-br9yM6eJI3pJHekEnoyHaBEb1B7XxxDjju+vRyBe8QGLp5saTIXXkZ+eFCTqXSAtI8QEZDFVEX2/SOjH2sVWRQ==}

  codemirror@5.63.0:
    resolution: {integrity: sha512-KlLWRPggDg2rBD1Mx7/EqEhaBdy+ybBCVh/efgjBDsPpMeEu6MbTAJzIT4TuCzvmbTEgvKOGzVT6wdBTNusqrg==}

  codemirror@6.0.1:
    resolution: {integrity: sha512-J8j+nZ+CdWmIeFIGXEFbFPtpiYacFMDR8GlHK3IyHQJMCaVRfGx9NT+Hxivv1ckLWPvNdZqndbr/7lVhrf/Svg==}

  collect.js@4.36.1:
    resolution: {integrity: sha512-jd97xWPKgHn6uvK31V6zcyPd40lUJd7gpYxbN2VOVxGWO4tyvS9Li4EpsFjXepGTo2tYcOTC4a8YsbQXMJ4XUw==}

  color-convert@2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}

  color-name@1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}

  colord@2.9.3:
    resolution: {integrity: sha512-jeC1axXpnb0/2nn/Y1LPuLdgXBLH7aDcHu4KEKfqw3CUhX7ZpfBSlPKyqXE6btIgEzfWtrX3/tyBCaCvXvMkOw==}

  colorette@2.0.20:
    resolution: {integrity: sha512-IfEDxwoWIjkeXL1eXcDiow4UbKjhLdq6/EuSVR9GMN7KVH3r9gQ83e73hsz1Nd1T3ijd5xv1wcWRYO+D6kCI2w==}

  combined-stream@1.0.8:
    resolution: {integrity: sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==}
    engines: {node: '>= 0.8'}

  comma-separated-tokens@2.0.3:
    resolution: {integrity: sha512-Fu4hJdvzeylCfQPp9SGWidpzrMs7tTrlu6Vb8XGaRGck8QSNZJJp538Wrb60Lax4fPwR64ViY468OIUTbRlGZg==}

  commander@2.20.3:
    resolution: {integrity: sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==}

  commander@4.1.1:
    resolution: {integrity: sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==}
    engines: {node: '>= 6'}

  commander@7.2.0:
    resolution: {integrity: sha512-QrWXB+ZQSVPmIWIhtEO9H+gwHaMGYiF5ChvoJ+K9ZGHG/sVsa6yiesAD1GC/x46sET00Xlwo1u49RVVVzvcSkw==}
    engines: {node: '>= 10'}

  commander@8.3.0:
    resolution: {integrity: sha512-OkTL9umf+He2DZkUq8f8J9of7yL6RJKI24dVITBmNfZBmri9zYZQrKkuXiKhyfPSu8tUhnVBB1iKXevvnlR4Ww==}
    engines: {node: '>= 12'}

  commondir@1.0.1:
    resolution: {integrity: sha512-W9pAhw0ja1Edb5GVdIF1mjZw/ASI0AlShXM83UUGe2DVr5TdAPEA1OA8m/g8zWp9x6On7gqufY+FatDbC3MDQg==}

  compressible@2.0.18:
    resolution: {integrity: sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==}
    engines: {node: '>= 0.6'}

  compression@1.8.0:
    resolution: {integrity: sha512-k6WLKfunuqCYD3t6AsuPGvQWaKwuLLh2/xHNcX4qE+vIfDNXpSqnrhwA7O53R7WVQUnt8dVAIW+YHr7xTgOgGA==}
    engines: {node: '>= 0.8.0'}

  concat-map@0.0.1:
    resolution: {integrity: sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==}

  concat@1.0.3:
    resolution: {integrity: sha512-f/ZaH1aLe64qHgTILdldbvyfGiGF4uzeo9IuXUloIOLQzFmIPloy9QbZadNsuVv0j5qbKQvQb/H/UYf2UsKTpw==}
    engines: {node: '>=6'}
    hasBin: true

  connect-history-api-fallback@2.0.0:
    resolution: {integrity: sha512-U73+6lQFmfiNPrYbXqr6kZ1i1wiRqXnp2nhMsINseWXO8lDau0LGEffJ8kQi4EjLZympVgRdvqjAgiZ1tgzDDA==}
    engines: {node: '>=0.8'}

  consola@2.15.3:
    resolution: {integrity: sha512-9vAdYbHj6x2fLKC4+oPH0kFzY/orMZyG2Aj+kNylHxKGJ/Ed4dpNyAQYwJOdqO4zdM7XpVHmyejQDcQHrnuXbw==}

  console-browserify@1.2.0:
    resolution: {integrity: sha512-ZMkYO/LkF17QvCPqM0gxw8yUzigAOZOSWSHg91FH6orS7vcEj5dVZTidN2fQ14yBSdg97RqhSNwLUXInd52OTA==}

  constants-browserify@1.0.0:
    resolution: {integrity: sha512-xFxOwqIzR/e1k1gLiWEophSCMqXcwVHIH7akf7b/vxcUeGunlj3hvZaaqxwHsTgn+IndtkQJgSztIDWeumWJDQ==}

  content-disposition@0.5.4:
    resolution: {integrity: sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==}
    engines: {node: '>= 0.6'}

  content-type@1.0.5:
    resolution: {integrity: sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==}
    engines: {node: '>= 0.6'}

  convert-source-map@1.9.0:
    resolution: {integrity: sha512-ASFBup0Mz1uyiIjANan1jzLQami9z1PoYSZCiiYW2FczPbenXc45FZdBZLzOT+r6+iciuEModtmCti+hjaAk0A==}

  convert-source-map@2.0.0:
    resolution: {integrity: sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==}

  cookie-signature@1.0.6:
    resolution: {integrity: sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ==}

  cookie@0.7.1:
    resolution: {integrity: sha512-6DnInpx7SJ2AK3+CTUE/ZM0vWTUboZCegxhC2xiIydHR9jNuTAASBrfEpHhiGOZw/nX51bHt6YQl8jsGo4y/0w==}
    engines: {node: '>= 0.6'}

  core-js-compat@3.43.0:
    resolution: {integrity: sha512-2GML2ZsCc5LR7hZYz4AXmjQw8zuy2T//2QntwdnpuYI7jteT6GVYJL7F6C2C57R7gSYrcqVW3lAALefdbhBLDA==}

  core-js@3.43.0:
    resolution: {integrity: sha512-N6wEbTTZSYOY2rYAn85CuvWWkCK6QweMn7/4Nr3w+gDBeBhk/x4EJeY6FPo4QzDoJZxVTv8U7CMvgWk6pOHHqA==}

  core-util-is@1.0.3:
    resolution: {integrity: sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==}

  cosmiconfig@7.1.0:
    resolution: {integrity: sha512-AdmX6xUzdNASswsFtmwSt7Vj8po9IuqXm0UXz7QKPuEUmPB4XyjGfaAr2PSuELMwkRMVH1EpIkX5bTZGRB3eCA==}
    engines: {node: '>=10'}

  create-ecdh@4.0.4:
    resolution: {integrity: sha512-mf+TCx8wWc9VpuxfP2ht0iSISLZnt0JgWlrOKZiNqyUZWnjIaCIVNQArMHnCZKfEYRg6IM7A+NeJoN8gf/Ws0A==}

  create-hash@1.2.0:
    resolution: {integrity: sha512-z00bCGNHDG8mHAkP7CtT1qVu+bFQUPjYq/4Iv3C3kWjTFV10zIjfSoeqXo9Asws8gwSHDGj/hl2u4OGIjapeCg==}

  create-hmac@1.1.7:
    resolution: {integrity: sha512-MJG9liiZ+ogc4TzUwuvbER1JRdgvUFSB5+VR/g5h82fGaIRWMWddtKBHi7/sVhfjQZ6SehlyhvQYrcYkaUIpLg==}

  crelt@1.0.6:
    resolution: {integrity: sha512-VQ2MBenTq1fWZUH9DJNGti7kKv6EeAuYr3cLwxUWhIu1baTaXh4Ib5W2CqHVqib4/MqbYGJqiL3Zb8GJZr3l4g==}

  cross-spawn@7.0.6:
    resolution: {integrity: sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==}
    engines: {node: '>= 8'}

  crypt@0.0.2:
    resolution: {integrity: sha512-mCxBlsHFYh9C+HVpiEacem8FEBnMXgU9gy4zmNC+SXAZNB/1idgp/aulFJ4FgCi7GPEVbfyng092GqL2k2rmow==}

  crypto-browserify@3.12.1:
    resolution: {integrity: sha512-r4ESw/IlusD17lgQi1O20Fa3qNnsckR126TdUuBgAu7GBYSIPvdNyONd3Zrxh0xCwA4+6w/TDArBPsMvhur+KQ==}
    engines: {node: '>= 0.10'}

  css-declaration-sorter@6.4.1:
    resolution: {integrity: sha512-rtdthzxKuyq6IzqX6jEcIzQF/YqccluefyCYheovBOLhFT/drQA9zj/UbRAa9J7C0o6EG6u3E6g+vKkay7/k3g==}
    engines: {node: ^10 || ^12 || >=14}
    peerDependencies:
      postcss: ^8.0.9

  css-loader@5.2.7:
    resolution: {integrity: sha512-Q7mOvpBNBG7YrVGMxRxcBJZFL75o+cH2abNASdibkj/fffYD8qWbInZrD0S9ccI6vZclF3DsHE7njGlLtaHbhg==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      webpack: ^4.27.0 || ^5.0.0

  css-select@4.3.0:
    resolution: {integrity: sha512-wPpOYtnsVontu2mODhA19JrqWxNsfdatRKd64kmpRbQgh1KtItko5sTnEpPdpSaJszTOhEMlF/RPz28qj4HqhQ==}

  css-tree@1.1.3:
    resolution: {integrity: sha512-tRpdppF7TRazZrjJ6v3stzv93qxRcSsFmW6cX0Zm2NVKpxE1WV1HblnghVv9TreireHkqI/VDEsfolRF1p6y7Q==}
    engines: {node: '>=8.0.0'}

  css-what@6.1.0:
    resolution: {integrity: sha512-HTUrgRJ7r4dsZKU6GjmpfRK1O76h97Z8MfS1G0FozR+oF2kG6Vfe8JE6zwrkbxigziPHinCJ+gCPjA9EaBDtRw==}
    engines: {node: '>= 6'}

  cssesc@3.0.0:
    resolution: {integrity: sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==}
    engines: {node: '>=4'}
    hasBin: true

  cssnano-preset-default@5.2.14:
    resolution: {integrity: sha512-t0SFesj/ZV2OTylqQVOrFgEh5uanxbO6ZAdeCrNsUQ6fVuXwYTxJPNAGvGTxHbD68ldIJNec7PyYZDBrfDQ+6A==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  cssnano-utils@3.1.0:
    resolution: {integrity: sha512-JQNR19/YZhz4psLX/rQ9M83e3z2Wf/HdJbryzte4a3NSuafyp9w/I4U+hx5C2S9g41qlstH7DEWnZaaj83OuEA==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  cssnano@5.1.15:
    resolution: {integrity: sha512-j+BKgDcLDQA+eDifLx0EO4XSA56b7uut3BQFH+wbSaSTuGLuiyTa/wbRYthUXX8LC9mLg+WWKe8h+qJuwTAbHw==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  csso@4.2.0:
    resolution: {integrity: sha512-wvlcdIbf6pwKEk7vHj8/Bkc0B4ylXZruLvOgs9doS5eOsOpuodOV2zJChSpkp+pRpYQLQMeF04nr3Z68Sta9jA==}
    engines: {node: '>=8.0.0'}

  csstype@3.1.3:
    resolution: {integrity: sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==}

  de-indent@1.0.2:
    resolution: {integrity: sha512-e/1zu3xH5MQryN2zdVaF0OrdNLUbvWxzMbi+iNA6Bky7l1RoP8a2fIbRocyHclXt/arDrrR6lL3TqFD9pMQTsg==}

  debug@2.6.9:
    resolution: {integrity: sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  debug@4.4.1:
    resolution: {integrity: sha512-KcKCqiftBJcZr++7ykoDIEwSa3XWowTfNPo92BYxjXiyYEVrUQh2aLyhxBCwww+heortUFxEJYcRzosstTEBYQ==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  decode-named-character-reference@1.1.0:
    resolution: {integrity: sha512-Wy+JTSbFThEOXQIR2L6mxJvEs+veIzpmqD7ynWxMXGpnk3smkHQOp6forLdHsKpAMW9iJpaBBIxz285t1n1C3w==}

  deep-equal@1.1.2:
    resolution: {integrity: sha512-5tdhKF6DbU7iIzrIOa1AOUt39ZRm13cmL1cGEh//aqR8x9+tNfbywRf0n5FD/18OKMdo7DNEtrX2t22ZAkI+eg==}
    engines: {node: '>= 0.4'}

  default-gateway@6.0.3:
    resolution: {integrity: sha512-fwSOJsbbNzZ/CUFpqFBqYfYNLj1NbMPm8MMCIzHjC83iSJRBEGmDUxU+WP661BaBQImeC2yHwXtz+P/O9o+XEg==}
    engines: {node: '>= 10'}

  define-data-property@1.1.4:
    resolution: {integrity: sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==}
    engines: {node: '>= 0.4'}

  define-lazy-prop@2.0.0:
    resolution: {integrity: sha512-Ds09qNh8yw3khSjiJjiUInaGX9xlqZDY7JVryGxdxV7NPeuqQfplOpQ66yJFZut3jLa5zOwkXw1g9EI2uKh4Og==}
    engines: {node: '>=8'}

  define-properties@1.2.1:
    resolution: {integrity: sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==}
    engines: {node: '>= 0.4'}

  delayed-stream@1.0.0:
    resolution: {integrity: sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==}
    engines: {node: '>=0.4.0'}

  depd@1.1.2:
    resolution: {integrity: sha512-7emPTl6Dpo6JRXOXjLRxck+FlLRX5847cLKEn00PLAgc3g2hTZZgr+e4c2v6QpSmLeFP3n5yUo7ft6avBK/5jQ==}
    engines: {node: '>= 0.6'}

  depd@2.0.0:
    resolution: {integrity: sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==}
    engines: {node: '>= 0.8'}

  dequal@2.0.3:
    resolution: {integrity: sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==}
    engines: {node: '>=6'}

  des.js@1.1.0:
    resolution: {integrity: sha512-r17GxjhUCjSRy8aiJpr8/UadFIzMzJGexI3Nmz4ADi9LYSFx4gTBp80+NaX/YsXWWLhpZ7v/v/ubEc/bCNfKwg==}

  destroy@1.2.0:
    resolution: {integrity: sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==}
    engines: {node: '>= 0.8', npm: 1.2.8000 || >= 1.4.16}

  detect-libc@1.0.3:
    resolution: {integrity: sha512-pGjwhsmsp4kL2RTz08wcOlGN83otlqHeD/Z5T8GXZB+/YcpQ/dgo+lbU8ZsGxV0HIvqqxo9l7mqYwyYMD9bKDg==}
    engines: {node: '>=0.10'}
    hasBin: true

  detect-node@2.1.0:
    resolution: {integrity: sha512-T0NIuQpnTvFDATNuHN5roPwSBG83rFsuO+MXXH9/3N1eFbn4wcPjttvjMLEPWJ0RGUYgQE7cGgS3tNxbqCGM7g==}

  devlop@1.1.0:
    resolution: {integrity: sha512-RWmIqhcFf1lRYBvNmr7qTNuyCt/7/ns2jbpp1+PalgE/rDQcBT0fioSMUpJ93irlUhC5hrg4cYqe6U+0ImW0rA==}

  diffie-hellman@5.0.3:
    resolution: {integrity: sha512-kqag/Nl+f3GwyK25fhUMYj81BUOrZ9IuJsjIcDE5icNM9FJHAVm3VcUDxdLPoQtTuUylWm6ZIknYJwwaPxsUzg==}

  dir-glob@3.0.1:
    resolution: {integrity: sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==}
    engines: {node: '>=8'}

  dns-packet@5.6.1:
    resolution: {integrity: sha512-l4gcSouhcgIKRvyy99RNVOgxXiicE+2jZoNmaNmZ6JXiGajBOJAesk1OBlJuM5k2c+eudGdLxDqXuPCKIj6kpw==}
    engines: {node: '>=6'}

  dom-serializer@1.4.1:
    resolution: {integrity: sha512-VHwB3KfrcOOkelEG2ZOfxqLZdfkil8PtJi4P8N2MMXucZq2yLp75ClViUlOVwyoHEDjYU433Aq+5zWP61+RGag==}

  domain-browser@1.2.0:
    resolution: {integrity: sha512-jnjyiM6eRyZl2H+W8Q/zLMA481hzi0eszAaBUzIVnmYVDBbnLxVNnfu1HgEBvCbL+71FrxMl3E6lpKH7Ge3OXA==}
    engines: {node: '>=0.4', npm: '>=1.2'}

  domelementtype@2.3.0:
    resolution: {integrity: sha512-OLETBj6w0OsagBwdXnPdN0cnMfF9opN69co+7ZrbfPGrdpPVNBUj02spi6B1N7wChLQiPn4CSH/zJvXw56gmHw==}

  domhandler@3.3.0:
    resolution: {integrity: sha512-J1C5rIANUbuYK+FuFL98650rihynUOEzRLxW+90bKZRWB6A1X1Tf82GxR1qAWLyfNPRvjqfip3Q5tdYlmAa9lA==}
    engines: {node: '>= 4'}

  domhandler@4.3.1:
    resolution: {integrity: sha512-GrwoxYN+uWlzO8uhUXRl0P+kHE4GtVPfYzVLcUxPL7KNdHKj66vvlhiweIHqYYXWlw+T8iLMp42Lm67ghw4WMQ==}
    engines: {node: '>= 4'}

  dompurify@3.2.6:
    resolution: {integrity: sha512-/2GogDQlohXPZe6D6NOgQvXLPSYBqIWMnZ8zzOhn09REE4eyAzb+Hed3jhoM9OkuaJ8P6ZGTTVWQKAi8ieIzfQ==}

  domutils@2.8.0:
    resolution: {integrity: sha512-w96Cjofp72M5IIhpjgobBimYEfoPjx1Vx0BSX9P30WBdZW2WIKU0T1Bd0kz2eNZ9ikjKgHbEyKx8BB6H1L3h3A==}

  dot-case@3.0.4:
    resolution: {integrity: sha512-Kv5nKlh6yRrdrGvxeJ2e5y2eRUpkUosIW4A2AS38zwSz27zu7ufDwQPi5Jhs3XAlGNetl3bmnGhQsMtkKJnj3w==}

  dotenv-expand@5.1.0:
    resolution: {integrity: sha512-YXQl1DSa4/PQyRfgrv6aoNjhasp/p4qs9FjJ4q4cQk+8m4r6k4ZSiEyytKG8f8W9gi8WsQtIObNmKd+tMzNTmA==}

  dotenv@10.0.0:
    resolution: {integrity: sha512-rlBi9d8jpv9Sf1klPjNfFAuWDjKLwTIJJ/VxtoTwIR6hnZxcEOQCZg2oIL3MWBYw5GpUDKOEnND7LXTbIpQ03Q==}
    engines: {node: '>=10'}

  dunder-proto@1.0.1:
    resolution: {integrity: sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==}
    engines: {node: '>= 0.4'}

  ee-first@1.1.1:
    resolution: {integrity: sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==}

  electron-to-chromium@1.5.166:
    resolution: {integrity: sha512-QPWqHL0BglzPYyJJ1zSSmwFFL6MFXhbACOCcsCdUMCkzPdS9/OIBVxg516X/Ado2qwAq8k0nJJ7phQPCqiaFAw==}

  elliptic@6.6.1:
    resolution: {integrity: sha512-RaddvvMatK2LJHqFJ+YA4WysVN5Ita9E35botqIYspQ4TkRAlCicdzKOjlyv/1Za5RyTNn7di//eEV0uTAfe3g==}

  emmet@2.4.11:
    resolution: {integrity: sha512-23QPJB3moh/U9sT4rQzGgeyyGIrcM+GH5uVYg2C6wZIxAIJq7Ng3QLT79tl8FUwDXhyq9SusfknOrofAKqvgyQ==}

  emoji-regex@8.0.0:
    resolution: {integrity: sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==}

  emojis-list@3.0.0:
    resolution: {integrity: sha512-/kyM18EfinwXZbno9FyUGeFh87KC8HRQBQGildHZbEuRyWFOmv1U10o9BBp8XVZDVNNuQKyIGIu5ZYAAXJ0V2Q==}
    engines: {node: '>= 4'}

  encodeurl@1.0.2:
    resolution: {integrity: sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==}
    engines: {node: '>= 0.8'}

  encodeurl@2.0.0:
    resolution: {integrity: sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==}
    engines: {node: '>= 0.8'}

  enhanced-resolve@5.18.1:
    resolution: {integrity: sha512-ZSW3ma5GkcQBIpwZTSRAI8N71Uuwgs93IezB7mf7R60tC8ZbJideoDNKjHn2O9KIlx6rkGTTEk1xUCK2E1Y2Yg==}
    engines: {node: '>=10.13.0'}

  entities@2.2.0:
    resolution: {integrity: sha512-p92if5Nz619I0w+akJrLZH0MX0Pb5DX39XOwQTtXSdQQOaYH03S1uIQp4mhOZtAXrxq4ViO67YTiLBo2638o9A==}

  entities@4.5.0:
    resolution: {integrity: sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==}
    engines: {node: '>=0.12'}

  envinfo@7.14.0:
    resolution: {integrity: sha512-CO40UI41xDQzhLB1hWyqUKgFhs250pNcGbyGKe1l/e4FSaI/+YE4IMG76GDt0In67WLPACIITC+sOi08x4wIvg==}
    engines: {node: '>=4'}
    hasBin: true

  error-ex@1.3.2:
    resolution: {integrity: sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==}

  es-define-property@1.0.1:
    resolution: {integrity: sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==}
    engines: {node: '>= 0.4'}

  es-errors@1.3.0:
    resolution: {integrity: sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==}
    engines: {node: '>= 0.4'}

  es-module-lexer@1.7.0:
    resolution: {integrity: sha512-jEQoCwk8hyb2AZziIOLhDqpm5+2ww5uIE6lkO/6jcOCusfk6LhMHpXXfBLXTZ7Ydyt0j4VoUQv6uGNYbdW+kBA==}

  es-object-atoms@1.1.1:
    resolution: {integrity: sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==}
    engines: {node: '>= 0.4'}

  es-set-tostringtag@2.1.0:
    resolution: {integrity: sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==}
    engines: {node: '>= 0.4'}

  escalade@3.2.0:
    resolution: {integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==}
    engines: {node: '>=6'}

  escape-html@1.0.3:
    resolution: {integrity: sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==}

  escape-string-regexp@5.0.0:
    resolution: {integrity: sha512-/veY75JbMK4j1yjvuUxuVsiS/hr/4iHs9FTT6cgTexxdE0Ly/glccBAkloH/DofkjRbZU3bnoj38mOmhkZ0lHw==}
    engines: {node: '>=12'}

  eslint-scope@5.1.1:
    resolution: {integrity: sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==}
    engines: {node: '>=8.0.0'}

  esrecurse@4.3.0:
    resolution: {integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==}
    engines: {node: '>=4.0'}

  estraverse@4.3.0:
    resolution: {integrity: sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==}
    engines: {node: '>=4.0'}

  estraverse@5.3.0:
    resolution: {integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==}
    engines: {node: '>=4.0'}

  estree-walker@2.0.2:
    resolution: {integrity: sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w==}

  esutils@2.0.3:
    resolution: {integrity: sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==}
    engines: {node: '>=0.10.0'}

  etag@1.8.1:
    resolution: {integrity: sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==}
    engines: {node: '>= 0.6'}

  eventemitter3@2.0.3:
    resolution: {integrity: sha512-jLN68Dx5kyFHaePoXWPsCGW5qdyZQtLYHkxkg02/Mz6g0kYpDx4FyP6XfArhQdlOC4b8Mv+EMxPo/8La7Tzghg==}

  eventemitter3@4.0.7:
    resolution: {integrity: sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==}

  events@3.3.0:
    resolution: {integrity: sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==}
    engines: {node: '>=0.8.x'}

  evp_bytestokey@1.0.3:
    resolution: {integrity: sha512-/f2Go4TognH/KvCISP7OUsHn85hT9nUkxxA9BEWxFn+Oj9o8ZNLm/40hdlgSLyuOimsrTKLUMEorQexp/aPQeA==}

  execa@5.1.1:
    resolution: {integrity: sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==}
    engines: {node: '>=10'}

  express@4.21.2:
    resolution: {integrity: sha512-28HqgMZAmih1Czt9ny7qr6ek2qddF4FclbMzwhCREB6OFfH+rXAnuNCwo1/wFvrtbgsQDb4kSbX9de9lFbrXnA==}
    engines: {node: '>= 0.10.0'}

  extend@3.0.2:
    resolution: {integrity: sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==}

  fast-deep-equal@3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  fast-diff@1.1.2:
    resolution: {integrity: sha512-KaJUt+M9t1qaIteSvjc6P3RbMdXsNhK61GRftR6SNxqmhthcd9MGIi4T+o0jD8LUSpSnSKXE20nLtJ3fOHxQig==}

  fast-glob@3.3.3:
    resolution: {integrity: sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==}
    engines: {node: '>=8.6.0'}

  fast-json-stable-stringify@2.1.0:
    resolution: {integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==}

  fast-uri@3.0.6:
    resolution: {integrity: sha512-Atfo14OibSv5wAp4VWNsFYE1AchQRTv9cBGWET4pZWHzYshFSS9NQI6I57rdKn9croWVMbYFbLhJ+yJvmZIIHw==}

  fastest-levenshtein@1.0.16:
    resolution: {integrity: sha512-eRnCtTTtGZFpQCwhJiUOuxPQWRXVKYDn0b2PeHfXL6/Zi53SLAzAHfVhVWK2AryC/WH05kGfxhFIPvTF0SXQzg==}
    engines: {node: '>= 4.9.1'}

  fastq@1.19.1:
    resolution: {integrity: sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==}

  faye-websocket@0.11.4:
    resolution: {integrity: sha512-CzbClwlXAuiRQAlUyfqPgvPoNKTckTPGfwZV4ZdAhVcP2lh9KUxJg2b5GkE7XbjKQ3YJnQ9z6D9ntLAlB+tP8g==}
    engines: {node: '>=0.8.0'}

  file-loader@6.2.0:
    resolution: {integrity: sha512-qo3glqyTa61Ytg4u73GultjHGjdRyig3tG6lPtyX/jOEJvHif9uB0/OCI2Kif6ctF3caQTW2G5gym21oAsI4pw==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0

  file-type@12.4.2:
    resolution: {integrity: sha512-UssQP5ZgIOKelfsaB5CuGAL+Y+q7EmONuiwF3N5HAH0t27rvrttgi6Ra9k/+DVaY9UF6+ybxu5pOXLUdA8N7Vg==}
    engines: {node: '>=8'}

  fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}

  finalhandler@1.3.1:
    resolution: {integrity: sha512-6BN9trH7bp3qvnrRyzsBz+g3lZxTNZTbVO2EV1CS0WIcDbawYVdYvGflME/9QP0h0pYlCDBCTjYa9nZzMDpyxQ==}
    engines: {node: '>= 0.8'}

  find-cache-dir@3.3.2:
    resolution: {integrity: sha512-wXZV5emFEjrridIgED11OoUKLxiYjAcqot/NJdAkOhlJ+vGzwhOAfcG5OX1jP+S0PcjEn8bdMJv+g2jwQ3Onig==}
    engines: {node: '>=8'}

  find-up@4.1.0:
    resolution: {integrity: sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==}
    engines: {node: '>=8'}

  flat@5.0.2:
    resolution: {integrity: sha512-b6suED+5/3rTpUBdG1gupIl8MPFCAMA0QXwmljLhvCUKcUvdE4gWky9zpuGCcXHOsz4J9wPGNWq6OKpmIzz3hQ==}
    hasBin: true

  follow-redirects@1.15.9:
    resolution: {integrity: sha512-gew4GsXizNgdoRyqmyfMHyAmXsZDk6mHkSxZFCzW9gwlbtOW44CDtYavM+y+72qD/Vq2l550kMF52DT8fOLJqQ==}
    engines: {node: '>=4.0'}
    peerDependencies:
      debug: '*'
    peerDependenciesMeta:
      debug:
        optional: true

  form-data@4.0.3:
    resolution: {integrity: sha512-qsITQPfmvMOSAdeyZ+12I1c+CKSstAFAwu+97zrnWAbIr5u8wfsExUzCesVLC8NgHuRUqNN4Zy6UPWUTRGslcA==}
    engines: {node: '>= 6'}

  forwarded@0.2.0:
    resolution: {integrity: sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==}
    engines: {node: '>= 0.6'}

  fraction.js@4.3.7:
    resolution: {integrity: sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==}

  fresh@0.5.2:
    resolution: {integrity: sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==}
    engines: {node: '>= 0.6'}

  fs-extra@10.1.0:
    resolution: {integrity: sha512-oRXApq54ETRj4eMiFzGnHWGy+zo5raudjuxN0b8H7s/RU2oW0Wvsx9O0ACRN/kRq9E8Vu/ReskGB5o3ji+FzHQ==}
    engines: {node: '>=12'}

  fs-monkey@1.0.6:
    resolution: {integrity: sha512-b1FMfwetIKymC0eioW7mTywihSQE4oLzQn1dB6rZB5fx/3NpNEdAWeCSMB+60/AeT0TCXsxzAlcYVEFCTAksWg==}

  fs.realpath@1.0.0:
    resolution: {integrity: sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==}

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  function-bind@1.1.2:
    resolution: {integrity: sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==}

  functions-have-names@1.2.3:
    resolution: {integrity: sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==}

  gensync@1.0.0-beta.2:
    resolution: {integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==}
    engines: {node: '>=6.9.0'}

  get-caller-file@2.0.5:
    resolution: {integrity: sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==}
    engines: {node: 6.* || 8.* || >= 10.*}

  get-intrinsic@1.3.0:
    resolution: {integrity: sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==}
    engines: {node: '>= 0.4'}

  get-proto@1.0.1:
    resolution: {integrity: sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==}
    engines: {node: '>= 0.4'}

  get-stream@6.0.1:
    resolution: {integrity: sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==}
    engines: {node: '>=10'}

  glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}

  glob-to-regexp@0.4.1:
    resolution: {integrity: sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==}

  glob@7.2.3:
    resolution: {integrity: sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==}
    deprecated: Glob versions prior to v9 are no longer supported

  globals@11.12.0:
    resolution: {integrity: sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==}
    engines: {node: '>=4'}

  globby@10.0.2:
    resolution: {integrity: sha512-7dUi7RvCoT/xast/o/dLN53oqND4yk0nsHkhRgn9w65C4PofCLOoJ39iSOg+qVDdWQPIEj+eszMHQ+aLVwwQSg==}
    engines: {node: '>=8'}

  gopd@1.2.0:
    resolution: {integrity: sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==}
    engines: {node: '>= 0.4'}

  graceful-fs@4.2.11:
    resolution: {integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==}

  grapesjs@0.22.7:
    resolution: {integrity: sha512-uKaLsT/wJmM9QnBK46efLlQ2K2rbzDyF1mEDMx4oaej1xwohM+C1/0fcUehdewwtzy6TRrCIXd5Q93aEmgYXTQ==}

  growly@1.3.0:
    resolution: {integrity: sha512-+xGQY0YyAWCnqy7Cd++hc2JqMYzlm0dG30Jd0beaA64sROr8C4nt8Yc9V5Ro3avlSUDTN0ulqP/VBKi1/lLygw==}

  handle-thing@2.0.1:
    resolution: {integrity: sha512-9Qn4yBxelxoh2Ow62nP+Ka/kMnOXRi8BXnRaUwezLNhqelnN49xKz4F/dPP8OYLxLxq6JDtZb2i9XznUQbNPTg==}

  has-flag@4.0.0:
    resolution: {integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==}
    engines: {node: '>=8'}

  has-property-descriptors@1.0.2:
    resolution: {integrity: sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==}

  has-symbols@1.1.0:
    resolution: {integrity: sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==}
    engines: {node: '>= 0.4'}

  has-tostringtag@1.0.2:
    resolution: {integrity: sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==}
    engines: {node: '>= 0.4'}

  hash-base@3.0.5:
    resolution: {integrity: sha512-vXm0l45VbcHEVlTCzs8M+s0VeYsB2lnlAaThoLKGXr3bE/VWDOelNUnycUPEhKEaXARL2TEFjBOyUiM6+55KBg==}
    engines: {node: '>= 0.10'}

  hash-sum@1.0.2:
    resolution: {integrity: sha512-fUs4B4L+mlt8/XAtSOGMUO1TXmAelItBPtJG7CyHJfYTdDjwisntGO2JQz7oUsatOY9o68+57eziUVNw/mRHmA==}

  hash-sum@2.0.0:
    resolution: {integrity: sha512-WdZTbAByD+pHfl/g9QSsBIIwy8IT+EsPiKDs0KNX+zSHhdDLFKdZu0BQHljvO+0QI/BasbMSUa8wYNCZTvhslg==}

  hash.js@1.1.7:
    resolution: {integrity: sha512-taOaskGt4z4SOANNseOviYDvjEJinIkRgmp7LbKP2YTTmVxWBl87s/uzK9r+44BclBSp2X7K1hqeNfz9JbBeXA==}

  hasown@2.0.2:
    resolution: {integrity: sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==}
    engines: {node: '>= 0.4'}

  hast-util-parse-selector@4.0.0:
    resolution: {integrity: sha512-wkQCkSYoOGCRKERFWcxMVMOcYE2K1AaNLU8DXS9arxnLOUEWbOXKXiJUNzEpqZ3JOKpnha3jkFrumEjVliDe7A==}

  hastscript@9.0.1:
    resolution: {integrity: sha512-g7df9rMFX/SPi34tyGCyUBREQoKkapwdY/T04Qn9TDWfHhAYt4/I0gMVirzK5wEzeUqIjEB+LXC/ypb7Aqno5w==}

  he@1.2.0:
    resolution: {integrity: sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==}
    hasBin: true

  hmac-drbg@1.0.1:
    resolution: {integrity: sha512-Tti3gMqLdZfhOQY1Mzf/AanLiqh1WTiJgEj26ZuYQ9fbkLomzGchCws4FyrSd4VkpBfiNhaE1On+lOz894jvXg==}

  hpack.js@2.1.6:
    resolution: {integrity: sha512-zJxVehUdMGIKsRaNt7apO2Gqp0BdqW5yaiGHXXmbpvxgBYVZnAql+BJb4RO5ad2MgpbZKn5G6nMnegrH1FcNYQ==}

  html-entities@1.4.0:
    resolution: {integrity: sha512-8nxjcBcd8wovbeKx7h3wTji4e6+rhaVuPNpMqwWgnHh+N9ToqsCs6XztWRBPQ+UtzsoMAdKZtUENoVzU/EMtZA==}

  html-entities@2.6.0:
    resolution: {integrity: sha512-kig+rMn/QOVRvr7c86gQ8lWXq+Hkv6CbAH1hLu+RG338StTpE8Z0b44SDVaqVu7HGKf27frdmUYEs9hTUX/cLQ==}

  html-loader@1.3.2:
    resolution: {integrity: sha512-DEkUwSd0sijK5PF3kRWspYi56XP7bTNkyg5YWSzBdjaSDmvCufep5c4Vpb3PBf6lUL0YPtLwBfy9fL0t5hBAGA==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0

  html-minifier-terser@5.1.1:
    resolution: {integrity: sha512-ZPr5MNObqnV/T9akshPKbVgyOqLmy+Bxo7juKCfTfnjNniTAMdy4hz21YQqoofMBJD2kdREaqPPdThoR78Tgxg==}
    engines: {node: '>=6'}
    hasBin: true

  htmlparser2@4.1.0:
    resolution: {integrity: sha512-4zDq1a1zhE4gQso/c5LP1OtrhYTncXNSpvJYtWJBtXAETPlMfi3IFNjGuQbYLuVY4ZR0QMqRVvo4Pdy9KLyP8Q==}

  http-deceiver@1.2.7:
    resolution: {integrity: sha512-LmpOGxTfbpgtGVxJrj5k7asXHCgNZp5nLfp+hWc8QQRqtb7fUy6kRY3BO1h9ddF6yIPYUARgxGOwB42DnxIaNw==}

  http-errors@1.6.3:
    resolution: {integrity: sha512-lks+lVC8dgGyh97jxvxeYTWQFvh4uw4yC12gVl63Cg30sjPX4wuGcdkICVXDAESr6OJGjqGA8Iz5mkeN6zlD7A==}
    engines: {node: '>= 0.6'}

  http-errors@2.0.0:
    resolution: {integrity: sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==}
    engines: {node: '>= 0.8'}

  http-parser-js@0.5.10:
    resolution: {integrity: sha512-Pysuw9XpUq5dVc/2SMHpuTY01RFl8fttgcyunjL7eEMhGM3cI4eOmiCycJDVCo/7O7ClfQD3SaI6ftDzqOXYMA==}

  http-proxy-middleware@2.0.9:
    resolution: {integrity: sha512-c1IyJYLYppU574+YI7R4QyX2ystMtVXZwIdzazUIPIJsHuWNd+mho2j+bKoHftndicGj9yh+xjd+l0yj7VeT1Q==}
    engines: {node: '>=12.0.0'}
    peerDependencies:
      '@types/express': ^4.17.13
    peerDependenciesMeta:
      '@types/express':
        optional: true

  http-proxy@1.18.1:
    resolution: {integrity: sha512-7mz/721AbnJwIVbnaSv1Cz3Am0ZLT/UBwkC92VlxhXv/k/BBQfM2fXElQNC27BVGr0uwUpplYPQM9LnaBMR5NQ==}
    engines: {node: '>=8.0.0'}

  https-browserify@1.0.0:
    resolution: {integrity: sha512-J+FkSdyD+0mA0N+81tMotaRMfSL9SGi+xpD3T6YApKsc3bGSXJlfXri3VyFOeYkfLRQisDk1W+jIFFKBeUBbBg==}

  human-signals@2.1.0:
    resolution: {integrity: sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==}
    engines: {node: '>=10.17.0'}

  iconv-lite@0.4.24:
    resolution: {integrity: sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==}
    engines: {node: '>=0.10.0'}

  icss-utils@5.1.0:
    resolution: {integrity: sha512-soFhflCVWLfRNOPU3iv5Z9VUdT44xFRbzjLsEzSr5AQmgqPMTHdU3PMT1Cf1ssx8fLNJDA1juftYl+PUcv3MqA==}
    engines: {node: ^10 || ^12 || >= 14}
    peerDependencies:
      postcss: ^8.1.0

  ieee754@1.2.1:
    resolution: {integrity: sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==}

  ignore@5.3.2:
    resolution: {integrity: sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==}
    engines: {node: '>= 4'}

  imagemin@7.0.1:
    resolution: {integrity: sha512-33AmZ+xjZhg2JMCe+vDf6a9mzWukE7l+wAtesjE7KyteqqKjzxv7aVQeWnul1Ve26mWvEQqyPwl0OctNBfSR9w==}
    engines: {node: '>=8'}

  img-loader@4.0.0:
    resolution: {integrity: sha512-UwRcPQdwdOyEHyCxe1V9s9YFwInwEWCpoO+kJGfIqDrBDqA8jZUsEZTxQ0JteNPGw/Gupmwesk2OhLTcnw6tnQ==}
    engines: {node: '>=12'}
    peerDependencies:
      imagemin: ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0

  immutable@5.1.2:
    resolution: {integrity: sha512-qHKXW1q6liAk1Oys6umoaZbDRqjcjgSrbnrifHsfsttza7zcvRAsL7mMV6xWcyhwQy7Xj5v4hhbr6b+iDYwlmQ==}

  import-fresh@3.3.1:
    resolution: {integrity: sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==}
    engines: {node: '>=6'}

  import-local@3.2.0:
    resolution: {integrity: sha512-2SPlun1JUPWoM6t3F0dw0FkCF/jWY8kttcY4f599GLTSjh2OCuuhdTkJQsEcZzBqbXZGKMK2OqW1oZsjtf/gQA==}
    engines: {node: '>=8'}
    hasBin: true

  inflight@1.0.6:
    resolution: {integrity: sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==}
    deprecated: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.

  inherits@2.0.3:
    resolution: {integrity: sha512-x00IRNXNy63jwGkJmzPigoySHbaqpNuzKbBOmzK+g2OdZpQ9w+sxCN+VSB3ja7IAge2OP2qpfxTjeNcyjmW1uw==}

  inherits@2.0.4:
    resolution: {integrity: sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==}

  interpret@2.2.0:
    resolution: {integrity: sha512-Ju0Bz/cEia55xDwUWEa8+olFpCiQoypjnQySseKtmjNrnps3P+xfpUmGr90T7yjlVJmOtybRvPXhKMbHr+fWnw==}
    engines: {node: '>= 0.10'}

  ipaddr.js@1.9.1:
    resolution: {integrity: sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==}
    engines: {node: '>= 0.10'}

  ipaddr.js@2.2.0:
    resolution: {integrity: sha512-Ag3wB2o37wslZS19hZqorUnrnzSkpOVy+IiiDEiTqNubEYpYuHWIf6K4psgN2ZWKExS4xhVCrRVfb/wfW8fWJA==}
    engines: {node: '>= 10'}

  is-alphabetical@2.0.1:
    resolution: {integrity: sha512-FWyyY60MeTNyeSRpkM2Iry0G9hpr7/9kD40mD/cGQEuilcZYS4okz8SN2Q6rLCJ8gbCt6fN+rC+6tMGS99LaxQ==}

  is-alphanumerical@2.0.1:
    resolution: {integrity: sha512-hmbYhX/9MUMF5uh7tOXyK/n0ZvWpad5caBA17GsC6vyuCqaWliRG5K1qS9inmUhEMaOBIW7/whAnSwveW/LtZw==}

  is-arguments@1.2.0:
    resolution: {integrity: sha512-7bVbi0huj/wrIAOzb8U1aszg9kdi3KN/CyU19CTI7tAoZYEZoL9yCDXpbXN+uPsuWnP02cyug1gleqq+TU+YCA==}
    engines: {node: '>= 0.4'}

  is-arrayish@0.2.1:
    resolution: {integrity: sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==}

  is-binary-path@2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}

  is-buffer@1.1.6:
    resolution: {integrity: sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==}

  is-core-module@2.16.1:
    resolution: {integrity: sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==}
    engines: {node: '>= 0.4'}

  is-date-object@1.1.0:
    resolution: {integrity: sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==}
    engines: {node: '>= 0.4'}

  is-decimal@2.0.1:
    resolution: {integrity: sha512-AAB9hiomQs5DXWcRB1rqsxGUstbRroFOPPVAomNk/3XHR5JyEZChOyTWe2oayKnsSsr/kcGqF+z6yuH6HHpN0A==}

  is-docker@2.2.1:
    resolution: {integrity: sha512-F+i2BKsFrH66iaUFc0woD8sLy8getkwTwtOBjvs56Cx4CgJDeKQeqfz8wAYiSb8JOprWhHH5p77PbmYCvvUuXQ==}
    engines: {node: '>=8'}
    hasBin: true

  is-expression@4.0.0:
    resolution: {integrity: sha512-zMIXX63sxzG3XrkHkrAPvm/OVZVSCPNkwMHU8oTX7/U3AL78I0QXCEICXUM13BIa8TYGZ68PiTKfQz3yaTNr4A==}

  is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  is-fullwidth-code-point@3.0.0:
    resolution: {integrity: sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==}
    engines: {node: '>=8'}

  is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}

  is-hexadecimal@2.0.1:
    resolution: {integrity: sha512-DgZQp241c8oO6cA1SbTEWiXeoxV42vlcJxgH+B3hi1AiqqKruZR3ZGF8In3fj4+/y/7rHvlOZLZtgJ/4ttYGZg==}

  is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  is-plain-obj@3.0.0:
    resolution: {integrity: sha512-gwsOE28k+23GP1B6vFl1oVh/WOzmawBrKwo5Ev6wMKzPkaXaCDIQKzLnvsA42DRlbVTWorkgTKIviAKCWkfUwA==}
    engines: {node: '>=10'}

  is-plain-obj@4.1.0:
    resolution: {integrity: sha512-+Pgi+vMuUNkJyExiMBt5IlFoMyKnr5zhJ4Uspz58WOhBF5QoIZkFyNHIbBAtHwzVAgk5RtndVNsDRN61/mmDqg==}
    engines: {node: '>=12'}

  is-plain-object@2.0.4:
    resolution: {integrity: sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==}
    engines: {node: '>=0.10.0'}

  is-regex@1.2.1:
    resolution: {integrity: sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==}
    engines: {node: '>= 0.4'}

  is-stream@2.0.1:
    resolution: {integrity: sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==}
    engines: {node: '>=8'}

  is-wsl@2.2.0:
    resolution: {integrity: sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==}
    engines: {node: '>=8'}

  isarray@1.0.0:
    resolution: {integrity: sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==}

  isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}

  isobject@3.0.1:
    resolution: {integrity: sha512-WhB9zCku7EGTj/HQQRz5aUQEUeoQZH2bWcltRErOpymJ4boYE6wL9Tbr23krRPSZ+C5zqNSrSw+Cc7sZZ4b7vg==}
    engines: {node: '>=0.10.0'}

  jest-worker@27.5.1:
    resolution: {integrity: sha512-7vuh85V5cdDofPyxn58nrPjBktZo0u9x1g8WtjQol+jZDaE+fhN+cIvTj11GndBnMnyfrUOG1sZQxCdjKh+DKg==}
    engines: {node: '>= 10.13.0'}

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  jsesc@3.0.2:
    resolution: {integrity: sha512-xKqzzWXDttJuOcawBt4KnKHHIf5oQ/Cxax+0PWFG+DFDgHNAdi+TXECADI+RYiFUMmx8792xsMbbgXj4CwnP4g==}
    engines: {node: '>=6'}
    hasBin: true

  jsesc@3.1.0:
    resolution: {integrity: sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==}
    engines: {node: '>=6'}
    hasBin: true

  json-parse-even-better-errors@2.3.1:
    resolution: {integrity: sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==}

  json-schema-traverse@0.4.1:
    resolution: {integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==}

  json-schema-traverse@1.0.0:
    resolution: {integrity: sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==}

  json5@1.0.2:
    resolution: {integrity: sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==}
    hasBin: true

  json5@2.2.3:
    resolution: {integrity: sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==}
    engines: {node: '>=6'}
    hasBin: true

  jsonc-parser@2.3.1:
    resolution: {integrity: sha512-H8jvkz1O50L3dMZCsLqiuB2tA7muqbSg1AtGEkN0leAqGjsUzDJir3Zwr02BhqdcITPg3ei3mZ+HjMocAknhhg==}

  jsonc-parser@3.3.1:
    resolution: {integrity: sha512-HUgH65KyejrUFPvHFPbqOY0rsFip3Bo5wb4ngvdi1EpCYWUQDC5V+Y7mZws+DLkr4M//zQJoanu1SP+87Dv1oQ==}

  jsonfile@6.1.0:
    resolution: {integrity: sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==}

  junk@3.1.0:
    resolution: {integrity: sha512-pBxcB3LFc8QVgdggvZWyeys+hnrNWg4OcZIU/1X59k5jQdLBlCsYGRQaz234SqoRLTCgMH00fY0xRJH+F9METQ==}
    engines: {node: '>=8'}

  katex@0.16.22:
    resolution: {integrity: sha512-XCHRdUw4lf3SKBaJe4EvgqIuWwkPSo9XoeO8GjQW94Bp7TWv9hNhzZjZ+OH9yf1UmLygb7DIT5GSFQiyt16zYg==}
    hasBin: true

  kind-of@6.0.3:
    resolution: {integrity: sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==}
    engines: {node: '>=0.10.0'}

  klona@2.0.6:
    resolution: {integrity: sha512-dhG34DXATL5hSxJbIexCft8FChFXtmskoZYnoPWjXQuebWYCNkVeV3KkGegCK9CP1oswI/vQibS2GY7Em/sJJA==}
    engines: {node: '>= 8'}

  laravel-mix@6.0.49:
    resolution: {integrity: sha512-bBMFpFjp26XfijPvY5y9zGKud7VqlyOE0OWUcPo3vTBY5asw8LTjafAbee1dhfLz6PWNqDziz69CP78ELSpfKw==}
    engines: {node: '>=12.14.0'}
    hasBin: true
    peerDependencies:
      '@babel/core': ^7.15.8
      '@babel/plugin-proposal-object-rest-spread': ^7.15.6
      '@babel/plugin-syntax-dynamic-import': ^7.8.3
      '@babel/plugin-transform-runtime': ^7.15.8
      '@babel/preset-env': ^7.15.8
      postcss: ^8.3.11
      webpack: ^5.60.0
      webpack-cli: ^4.9.1

  launch-editor@2.10.0:
    resolution: {integrity: sha512-D7dBRJo/qcGX9xlvt/6wUYzQxjh5G1RvZPgPv8vi4KRU99DVQL/oW7tnVOCCTm2HGeo3C5HvGE5Yrh6UBoZ0vA==}

  lilconfig@2.1.0:
    resolution: {integrity: sha512-utWOt/GHzuUxnLKxB6dk81RoOeoNeHgbrXiuGk4yyF5qlRz+iIVWu56E2fqGHFrXz0QNUhLB/8nKqvRH66JKGQ==}
    engines: {node: '>=10'}

  lines-and-columns@1.2.4:
    resolution: {integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==}

  loader-runner@4.3.0:
    resolution: {integrity: sha512-3R/1M+yS3j5ou80Me59j7F9IMs4PXs3VqRrm0TU3AbKPxlmpoY1TNscJV/oGJXo8qCatFGTfDbY6W6ipGOYXfg==}
    engines: {node: '>=6.11.5'}

  loader-utils@1.4.2:
    resolution: {integrity: sha512-I5d00Pd/jwMD2QCduo657+YM/6L3KZu++pmX9VFncxaxvHcru9jx1lBaFft+r4Mt2jK0Yhp41XlRAihzPxHNCg==}
    engines: {node: '>=4.0.0'}

  loader-utils@2.0.4:
    resolution: {integrity: sha512-xXqpXoINfFhgua9xiqD8fPFHgkoq1mmmpE92WlDbm9rNRd/EbRb+Gqf908T2DMfuHjjJlksiK2RbHVOdD/MqSw==}
    engines: {node: '>=8.9.0'}

  locate-path@5.0.0:
    resolution: {integrity: sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==}
    engines: {node: '>=8'}

  lodash-es@4.17.21:
    resolution: {integrity: sha512-mKnC+QJ9pWVzv+C4/U3rRsHapFfHvQFoFB92e52xeyGMcX6/OlIl78je1u8vePzYZSkkogMPJ2yjxxsb89cxyw==}

  lodash.debounce@4.0.8:
    resolution: {integrity: sha512-FT1yDzDYEoYWhnSGnpE/4Kj1fLZkDFyqRb7fNt6FdYOSxlUWAtp42Eh6Wb0rGIv/m9Bgo7x4GhQbm5Ys4SG5ow==}

  lodash.memoize@4.1.2:
    resolution: {integrity: sha512-t7j+NzmgnQzTAYXcsHYLgimltOV1MXHtlOWf6GjL9Kj8GK5FInw5JotxvbOs+IvV1/Dzo04/fCGfLVs7aXb4Ag==}

  lodash.throttle@4.1.1:
    resolution: {integrity: sha512-wIkUCfVKpVsWo3JSZlc+8MB5it+2AN5W8J7YVMST30UrvcQNZ1Okbj+rbVniijTWE6FGYy4XJq/rHkas8qJMLQ==}

  lodash.uniq@4.5.0:
    resolution: {integrity: sha512-xfBaXQd9ryd9dlSDvnvI0lvxfLJlYAZzXomUYzLKtUeOQvOP5piqAWuGtrhWeqaXK9hhoM/iyJc5AV+XfsX3HQ==}

  lodash@4.17.21:
    resolution: {integrity: sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==}

  longest-streak@3.1.0:
    resolution: {integrity: sha512-9Ri+o0JYgehTaVBBDoMqIl8GXtbWg711O3srftcHhZ0dqnETqLaoIK0x17fUw9rFSlK/0NlsKe0Ahhyl5pXE2g==}

  lower-case@2.0.2:
    resolution: {integrity: sha512-7fm3l3NAF9WfN6W3JOmf5drwpVqX78JtoGJ3A6W0a6ZnldM41w2fV5D490psKFTpMds8TJse/eHLFFsNHHjHgg==}

  lru-cache@5.1.1:
    resolution: {integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==}

  magic-string@0.30.17:
    resolution: {integrity: sha512-sNPKHvyjVf7gyjwS4xGTaW/mCnF8wnjtifKBEhxfZ7E/S8tQ0rssrwGNn6q8JH/ohItJfSQp9mBtQYuTlH5QnA==}

  make-dir@3.1.0:
    resolution: {integrity: sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==}
    engines: {node: '>=8'}

  markdown-table@3.0.4:
    resolution: {integrity: sha512-wiYz4+JrLyb/DqW2hkFJxP7Vd7JuTDm77fvbM8VfEQdmSMqcImWeeRbHwZjBjIFki/VaMK2BhFi7oUUZeM5bqw==}

  math-intrinsics@1.1.0:
    resolution: {integrity: sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==}
    engines: {node: '>= 0.4'}

  md5.js@1.3.5:
    resolution: {integrity: sha512-xitP+WxNPcTTOgnTJcrhM0xvdPepipPSf3I8EIpGKeFLjt3PlJLIDG3u8EX53ZIubkb+5U2+3rELYpEhHhzdkg==}

  md5@2.3.0:
    resolution: {integrity: sha512-T1GITYmFaKuO91vxyoQMFETst+O71VUPEU3ze5GNzDm0OWdP8v1ziTaAEPUr/3kLsY3Sftgz242A1SetQiDL7g==}

  mdast-util-definitions@6.0.0:
    resolution: {integrity: sha512-scTllyX6pnYNZH/AIp/0ePz6s4cZtARxImwoPJ7kS42n+MnVsI4XbnG6d4ibehRIldYMWM2LD7ImQblVhUejVQ==}

  mdast-util-find-and-replace@3.0.2:
    resolution: {integrity: sha512-Tmd1Vg/m3Xz43afeNxDIhWRtFZgM2VLyaf4vSTYwudTyeuTneoL3qtWMA5jeLyz/O1vDJmmV4QuScFCA2tBPwg==}

  mdast-util-from-markdown@2.0.2:
    resolution: {integrity: sha512-uZhTV/8NBuw0WHkPTrCqDOl0zVe1BIng5ZtHoDk49ME1qqcjYmmLmOf0gELgcRMxN4w2iuIeVso5/6QymSrgmA==}

  mdast-util-gfm-autolink-literal@2.0.1:
    resolution: {integrity: sha512-5HVP2MKaP6L+G6YaxPNjuL0BPrq9orG3TsrZ9YXbA3vDw/ACI4MEsnoDpn6ZNm7GnZgtAcONJyPhOP8tNJQavQ==}

  mdast-util-gfm-footnote@2.1.0:
    resolution: {integrity: sha512-sqpDWlsHn7Ac9GNZQMeUzPQSMzR6Wv0WKRNvQRg0KqHh02fpTz69Qc1QSseNX29bhz1ROIyNyxExfawVKTm1GQ==}

  mdast-util-gfm-strikethrough@2.0.0:
    resolution: {integrity: sha512-mKKb915TF+OC5ptj5bJ7WFRPdYtuHv0yTRxK2tJvi+BDqbkiG7h7u/9SI89nRAYcmap2xHQL9D+QG/6wSrTtXg==}

  mdast-util-gfm-table@2.0.0:
    resolution: {integrity: sha512-78UEvebzz/rJIxLvE7ZtDd/vIQ0RHv+3Mh5DR96p7cS7HsBhYIICDBCu8csTNWNO6tBWfqXPWekRuj2FNOGOZg==}

  mdast-util-gfm-task-list-item@2.0.0:
    resolution: {integrity: sha512-IrtvNvjxC1o06taBAVJznEnkiHxLFTzgonUdy8hzFVeDun0uTjxxrRGVaNFqkU1wJR3RBPEfsxmU6jDWPofrTQ==}

  mdast-util-gfm@3.1.0:
    resolution: {integrity: sha512-0ulfdQOM3ysHhCJ1p06l0b0VKlhU0wuQs3thxZQagjcjPrlFRqY215uZGHHJan9GEAXd9MbfPjFJz+qMkVR6zQ==}

  mdast-util-math@3.0.0:
    resolution: {integrity: sha512-Tl9GBNeG/AhJnQM221bJR2HPvLOSnLE/T9cJI9tlc6zwQk2nPk/4f0cHkOdEixQPC/j8UtKDdITswvLAy1OZ1w==}

  mdast-util-phrasing@4.1.0:
    resolution: {integrity: sha512-TqICwyvJJpBwvGAMZjj4J2n0X8QWp21b9l0o7eXyVJ25YNWYbJDVIyD1bZXE6WtV6RmKJVYmQAKWa0zWOABz2w==}

  mdast-util-to-markdown@2.1.2:
    resolution: {integrity: sha512-xj68wMTvGXVOKonmog6LwyJKrYXZPvlwabaryTjLh9LuvovB/KAH+kvi8Gjj+7rJjsFi23nkUxRQv1KqSroMqA==}

  mdast-util-to-string@4.0.0:
    resolution: {integrity: sha512-0H44vDimn51F0YwvxSJSm0eCDOJTRlmN0R1yBh4HLj9wiV1Dn0QoXGbvFAWj2hSItVTlCmBF1hqKlIyUBVFLPg==}

  mdn-data@2.0.14:
    resolution: {integrity: sha512-dn6wd0uw5GsdswPFfsgMp5NSB0/aDe6fK94YJV/AJDYXL6HVLWBsxeq7js7Ad+mU2K9LAlwpk6kN2D5mwCPVow==}

  media-typer@0.3.0:
    resolution: {integrity: sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==}
    engines: {node: '>= 0.6'}

  memfs@3.5.3:
    resolution: {integrity: sha512-UERzLsxzllchadvbPs5aolHh65ISpKpM+ccLbOJ8/vvpBKmAWf+la7dXFy7Mr0ySHbdHrFv5kGFCUHHe6GFEmw==}
    engines: {node: '>= 4.0.0'}

  merge-descriptors@1.0.3:
    resolution: {integrity: sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ==}

  merge-stream@2.0.0:
    resolution: {integrity: sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==}

  merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}

  methods@1.1.2:
    resolution: {integrity: sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==}
    engines: {node: '>= 0.6'}

  micromark-core-commonmark@2.0.3:
    resolution: {integrity: sha512-RDBrHEMSxVFLg6xvnXmb1Ayr2WzLAWjeSATAoxwKYJV94TeNavgoIdA0a9ytzDSVzBy2YKFK+emCPOEibLeCrg==}

  micromark-extension-gfm-autolink-literal@2.1.0:
    resolution: {integrity: sha512-oOg7knzhicgQ3t4QCjCWgTmfNhvQbDDnJeVu9v81r7NltNCVmhPy1fJRX27pISafdjL+SVc4d3l48Gb6pbRypw==}

  micromark-extension-gfm-footnote@2.1.0:
    resolution: {integrity: sha512-/yPhxI1ntnDNsiHtzLKYnE3vf9JZ6cAisqVDauhp4CEHxlb4uoOTxOCJ+9s51bIB8U1N1FJ1RXOKTIlD5B/gqw==}

  micromark-extension-gfm-strikethrough@2.1.0:
    resolution: {integrity: sha512-ADVjpOOkjz1hhkZLlBiYA9cR2Anf8F4HqZUO6e5eDcPQd0Txw5fxLzzxnEkSkfnD0wziSGiv7sYhk/ktvbf1uw==}

  micromark-extension-gfm-table@2.1.1:
    resolution: {integrity: sha512-t2OU/dXXioARrC6yWfJ4hqB7rct14e8f7m0cbI5hUmDyyIlwv5vEtooptH8INkbLzOatzKuVbQmAYcbWoyz6Dg==}

  micromark-extension-gfm-tagfilter@2.0.0:
    resolution: {integrity: sha512-xHlTOmuCSotIA8TW1mDIM6X2O1SiX5P9IuDtqGonFhEK0qgRI4yeC6vMxEV2dgyr2TiD+2PQ10o+cOhdVAcwfg==}

  micromark-extension-gfm-task-list-item@2.1.0:
    resolution: {integrity: sha512-qIBZhqxqI6fjLDYFTBIa4eivDMnP+OZqsNwmQ3xNLE4Cxwc+zfQEfbs6tzAo2Hjq+bh6q5F+Z8/cksrLFYWQQw==}

  micromark-extension-gfm@3.0.0:
    resolution: {integrity: sha512-vsKArQsicm7t0z2GugkCKtZehqUm31oeGBV/KVSorWSy8ZlNAv7ytjFhvaryUiCUJYqs+NoE6AFhpQvBTM6Q4w==}

  micromark-extension-math@3.1.0:
    resolution: {integrity: sha512-lvEqd+fHjATVs+2v/8kg9i5Q0AP2k85H0WUOwpIVvUML8BapsMvh1XAogmQjOCsLpoKRCVQqEkQBB3NhVBcsOg==}

  micromark-factory-destination@2.0.1:
    resolution: {integrity: sha512-Xe6rDdJlkmbFRExpTOmRj9N3MaWmbAgdpSrBQvCFqhezUn4AHqJHbaEnfbVYYiexVSs//tqOdY/DxhjdCiJnIA==}

  micromark-factory-label@2.0.1:
    resolution: {integrity: sha512-VFMekyQExqIW7xIChcXn4ok29YE3rnuyveW3wZQWWqF4Nv9Wk5rgJ99KzPvHjkmPXF93FXIbBp6YdW3t71/7Vg==}

  micromark-factory-space@2.0.1:
    resolution: {integrity: sha512-zRkxjtBxxLd2Sc0d+fbnEunsTj46SWXgXciZmHq0kDYGnck/ZSGj9/wULTV95uoeYiK5hRXP2mJ98Uo4cq/LQg==}

  micromark-factory-title@2.0.1:
    resolution: {integrity: sha512-5bZ+3CjhAd9eChYTHsjy6TGxpOFSKgKKJPJxr293jTbfry2KDoWkhBb6TcPVB4NmzaPhMs1Frm9AZH7OD4Cjzw==}

  micromark-factory-whitespace@2.0.1:
    resolution: {integrity: sha512-Ob0nuZ3PKt/n0hORHyvoD9uZhr+Za8sFoP+OnMcnWK5lngSzALgQYKMr9RJVOWLqQYuyn6ulqGWSXdwf6F80lQ==}

  micromark-util-character@2.1.1:
    resolution: {integrity: sha512-wv8tdUTJ3thSFFFJKtpYKOYiGP2+v96Hvk4Tu8KpCAsTMs6yi+nVmGh1syvSCsaxz45J6Jbw+9DD6g97+NV67Q==}

  micromark-util-chunked@2.0.1:
    resolution: {integrity: sha512-QUNFEOPELfmvv+4xiNg2sRYeS/P84pTW0TCgP5zc9FpXetHY0ab7SxKyAQCNCc1eK0459uoLI1y5oO5Vc1dbhA==}

  micromark-util-classify-character@2.0.1:
    resolution: {integrity: sha512-K0kHzM6afW/MbeWYWLjoHQv1sgg2Q9EccHEDzSkxiP/EaagNzCm7T/WMKZ3rjMbvIpvBiZgwR3dKMygtA4mG1Q==}

  micromark-util-combine-extensions@2.0.1:
    resolution: {integrity: sha512-OnAnH8Ujmy59JcyZw8JSbK9cGpdVY44NKgSM7E9Eh7DiLS2E9RNQf0dONaGDzEG9yjEl5hcqeIsj4hfRkLH/Bg==}

  micromark-util-decode-numeric-character-reference@2.0.2:
    resolution: {integrity: sha512-ccUbYk6CwVdkmCQMyr64dXz42EfHGkPQlBj5p7YVGzq8I7CtjXZJrubAYezf7Rp+bjPseiROqe7G6foFd+lEuw==}

  micromark-util-decode-string@2.0.1:
    resolution: {integrity: sha512-nDV/77Fj6eH1ynwscYTOsbK7rR//Uj0bZXBwJZRfaLEJ1iGBR6kIfNmlNqaqJf649EP0F3NWNdeJi03elllNUQ==}

  micromark-util-encode@2.0.1:
    resolution: {integrity: sha512-c3cVx2y4KqUnwopcO9b/SCdo2O67LwJJ/UyqGfbigahfegL9myoEFoDYZgkT7f36T0bLrM9hZTAaAyH+PCAXjw==}

  micromark-util-html-tag-name@2.0.1:
    resolution: {integrity: sha512-2cNEiYDhCWKI+Gs9T0Tiysk136SnR13hhO8yW6BGNyhOC4qYFnwF1nKfD3HFAIXA5c45RrIG1ub11GiXeYd1xA==}

  micromark-util-normalize-identifier@2.0.1:
    resolution: {integrity: sha512-sxPqmo70LyARJs0w2UclACPUUEqltCkJ6PhKdMIDuJ3gSf/Q+/GIe3WKl0Ijb/GyH9lOpUkRAO2wp0GVkLvS9Q==}

  micromark-util-resolve-all@2.0.1:
    resolution: {integrity: sha512-VdQyxFWFT2/FGJgwQnJYbe1jjQoNTS4RjglmSjTUlpUMa95Htx9NHeYW4rGDJzbjvCsl9eLjMQwGeElsqmzcHg==}

  micromark-util-sanitize-uri@2.0.1:
    resolution: {integrity: sha512-9N9IomZ/YuGGZZmQec1MbgxtlgougxTodVwDzzEouPKo3qFWvymFHWcnDi2vzV1ff6kas9ucW+o3yzJK9YB1AQ==}

  micromark-util-subtokenize@2.1.0:
    resolution: {integrity: sha512-XQLu552iSctvnEcgXw6+Sx75GflAPNED1qx7eBJ+wydBb2KCbRZe+NwvIEEMM83uml1+2WSXpBAcp9IUCgCYWA==}

  micromark-util-symbol@2.0.1:
    resolution: {integrity: sha512-vs5t8Apaud9N28kgCrRUdEed4UJ+wWNvicHLPxCa9ENlYuAY31M0ETy5y1vA33YoNPDFTghEbnh6efaE8h4x0Q==}

  micromark-util-types@2.0.2:
    resolution: {integrity: sha512-Yw0ECSpJoViF1qTU4DC6NwtC4aWGt1EkzaQB8KPPyCRR8z9TWeV0HbEFGTO+ZY1wB22zmxnJqhPyTpOVCpeHTA==}

  micromark@4.0.2:
    resolution: {integrity: sha512-zpe98Q6kvavpCr1NPVSCMebCKfD7CA2NqZ+rykeNhONIJBpc1tFKt9hucLGwha3jNTNI8lHpctWJWoimVF4PfA==}

  micromatch@4.0.8:
    resolution: {integrity: sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==}
    engines: {node: '>=8.6'}

  miller-rabin@4.0.1:
    resolution: {integrity: sha512-115fLhvZVqWwHPbClyntxEVfVDfl9DLLTuJvq3g2O/Oxi8AiNouAHvDSzHS0viUJc+V5vm3eq91Xwqn9dp4jRA==}
    hasBin: true

  mime-db@1.52.0:
    resolution: {integrity: sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==}
    engines: {node: '>= 0.6'}

  mime-db@1.54.0:
    resolution: {integrity: sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==}
    engines: {node: '>= 0.6'}

  mime-types@2.1.35:
    resolution: {integrity: sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==}
    engines: {node: '>= 0.6'}

  mime@1.6.0:
    resolution: {integrity: sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==}
    engines: {node: '>=4'}
    hasBin: true

  mimic-fn@2.1.0:
    resolution: {integrity: sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==}
    engines: {node: '>=6'}

  mini-css-extract-plugin@1.6.2:
    resolution: {integrity: sha512-WhDvO3SjGm40oV5y26GjMJYjd2UMqrLAGKy5YS2/3QKJy2F7jgynuHTir/tgUUOiNQu5saXHdc8reo7YuhhT4Q==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      webpack: ^4.4.0 || ^5.0.0

  minimalistic-assert@1.0.1:
    resolution: {integrity: sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==}

  minimalistic-crypto-utils@1.0.1:
    resolution: {integrity: sha512-JIYlbt6g8i5jKfJ3xz7rF0LXmv2TkDxBLUkiBeZ7bAx4GnnNMr8xFpGnOxn6GhTEHx3SjRrZEoU+j04prX1ktg==}

  minimatch@3.1.2:
    resolution: {integrity: sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==}

  minimatch@9.0.5:
    resolution: {integrity: sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==}
    engines: {node: '>=16 || 14 >=14.17'}

  minimist@1.2.8:
    resolution: {integrity: sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==}

  mitt@3.0.1:
    resolution: {integrity: sha512-vKivATfr97l2/QBCYAkXYDbrIWPM2IIKEl7YPhjCvKlG3kE2gm+uBo6nEXK3M5/Ffh/FLpKExzOQ3JJoJGFKBw==}

  ms@2.0.0:
    resolution: {integrity: sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==}

  ms@2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  muggle-string@0.4.1:
    resolution: {integrity: sha512-VNTrAak/KhO2i8dqqnqnAHOa3cYBwXEZe9h+D5h/1ZqFSTEFHdM65lR7RoIqq3tBBYavsOXV84NoHXZ0AkPyqQ==}

  multicast-dns@7.2.5:
    resolution: {integrity: sha512-2eznPJP8z2BFLX50tf0LuODrpINqP1RVIm/CObbTcBRITQgmC/TjcREF1NeTBzIcR5XO/ukWo+YHOjBbFwIupg==}
    hasBin: true

  nanoid@3.3.11:
    resolution: {integrity: sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  nanoid@5.1.5:
    resolution: {integrity: sha512-Ir/+ZpE9fDsNH0hQ3C68uyThDXzYcim2EqcZ8zn8Chtt1iylPT9xXJB0kPCnqzgcEGikO9RxSrh63MsmVCU7Fw==}
    engines: {node: ^18 || >=20}
    hasBin: true

  negotiator@0.6.3:
    resolution: {integrity: sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==}
    engines: {node: '>= 0.6'}

  negotiator@0.6.4:
    resolution: {integrity: sha512-myRT3DiWPHqho5PrJaIRyaMv2kgYf0mUVgBNOYMuCH5Ki1yEiQaf/ZJuQ62nvpc44wL5WDbTX7yGJi1Neevw8w==}
    engines: {node: '>= 0.6'}

  neo-async@2.6.2:
    resolution: {integrity: sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==}

  no-case@3.0.4:
    resolution: {integrity: sha512-fgAN3jGAh+RoxUGZHTSOLJIqUc2wmoBwGR4tbpNAKmmovFoWq0OdRkb0VkldReO2a2iBT/OEulG9XSUc10r3zg==}

  node-addon-api@7.1.1:
    resolution: {integrity: sha512-5m3bsyrjFWE1xf7nz7YXdN4udnVtXK6/Yfgn5qnahL6bCkf2yKt4k3nuTKAtT4r3IG8JNR2ncsIMdZuAzJjHQQ==}

  node-forge@1.3.1:
    resolution: {integrity: sha512-dPEtOeMvF9VMcYV/1Wb8CPoVAXtp6MKMlcbAt4ddqmGqUJ6fQZFXkNZNkNlfevtNkGtaSoXf/vNNNSvgrdXwtA==}
    engines: {node: '>= 6.13.0'}

  node-libs-browser@2.2.1:
    resolution: {integrity: sha512-h/zcD8H9kaDZ9ALUWwlBUDo6TKF8a7qBSCSEGfjTVIYeqsioSKaAX+BN7NgiMGp6iSIXZ3PxgCu8KS3b71YK5Q==}

  node-notifier@9.0.1:
    resolution: {integrity: sha512-fPNFIp2hF/Dq7qLDzSg4vZ0J4e9v60gJR+Qx7RbjbWqzPDdEqeVpEx5CFeDAELIl+A/woaaNn1fQ5nEVerMxJg==}

  node-releases@2.0.19:
    resolution: {integrity: sha512-xxOWJsBKtzAq7DY0J+DTzuz58K8e7sJbdgwkbMWQe8UYB6ekmsQ45q0M/tJDsGaZmbC+l7n57UV8Hl5tHxO9uw==}

  normalize-path@3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}

  normalize-range@0.1.2:
    resolution: {integrity: sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==}
    engines: {node: '>=0.10.0'}

  normalize-url@6.1.0:
    resolution: {integrity: sha512-DlL+XwOy3NxAQ8xuC0okPgK46iuVNAK01YN7RueYBqqFeGsBjV9XmCAzAdgt+667bCl5kPh9EqKKDwnaPG1I7A==}
    engines: {node: '>=10'}

  npm-run-path@4.0.1:
    resolution: {integrity: sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==}
    engines: {node: '>=8'}

  nth-check@2.1.1:
    resolution: {integrity: sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==}

  object-assign@4.1.1:
    resolution: {integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==}
    engines: {node: '>=0.10.0'}

  object-inspect@1.13.4:
    resolution: {integrity: sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==}
    engines: {node: '>= 0.4'}

  object-is@1.1.6:
    resolution: {integrity: sha512-F8cZ+KfGlSGi09lJT7/Nd6KJZ9ygtvYC0/UYYLI9nmQKLMnydpB9yvbv9K1uSkEu7FU9vYPmVwLg328tX+ot3Q==}
    engines: {node: '>= 0.4'}

  object-keys@1.1.1:
    resolution: {integrity: sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==}
    engines: {node: '>= 0.4'}

  object.assign@4.1.7:
    resolution: {integrity: sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==}
    engines: {node: '>= 0.4'}

  obuf@1.1.2:
    resolution: {integrity: sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg==}

  on-finished@2.4.1:
    resolution: {integrity: sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==}
    engines: {node: '>= 0.8'}

  on-headers@1.0.2:
    resolution: {integrity: sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA==}
    engines: {node: '>= 0.8'}

  once@1.4.0:
    resolution: {integrity: sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==}

  onetime@5.1.2:
    resolution: {integrity: sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==}
    engines: {node: '>=6'}

  open@8.4.2:
    resolution: {integrity: sha512-7x81NCL719oNbsq/3mh+hVrAWmFuEYUqrq/Iw3kUzH8ReypT9QQ0BLoJS7/G9k6N81XjW4qHWtjWwe/9eLy1EQ==}
    engines: {node: '>=12'}

  orderedmap@2.1.1:
    resolution: {integrity: sha512-TvAWxi0nDe1j/rtMcWcIj94+Ffe6n7zhow33h40SKxmsmozs6dz/e+EajymfoFcHd7sxNn8yHM8839uixMOV6g==}

  os-browserify@0.3.0:
    resolution: {integrity: sha512-gjcpUc3clBf9+210TRaDWbf+rZZZEshZ+DlXMRCeAjp0xhTrnQsKHypIy1J3d5hKdUzj69t708EHtU8P6bUn0A==}

  p-limit@2.3.0:
    resolution: {integrity: sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==}
    engines: {node: '>=6'}

  p-locate@4.1.0:
    resolution: {integrity: sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==}
    engines: {node: '>=8'}

  p-pipe@3.1.0:
    resolution: {integrity: sha512-08pj8ATpzMR0Y80x50yJHn37NF6vjrqHutASaX5LiH5npS9XPvrUmscd9MF5R4fuYRHOxQR1FfMIlF7AzwoPqw==}
    engines: {node: '>=8'}

  p-retry@4.6.2:
    resolution: {integrity: sha512-312Id396EbJdvRONlngUx0NydfrIQ5lsYu0znKVUzVvArzEIt08V1qhtyESbGVd1FGX7UKtiFp5uwKZdM8wIuQ==}
    engines: {node: '>=8'}

  p-try@2.2.0:
    resolution: {integrity: sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==}
    engines: {node: '>=6'}

  pako@1.0.11:
    resolution: {integrity: sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==}

  param-case@3.0.4:
    resolution: {integrity: sha512-RXlj7zCYokReqWpOPH9oYivUzLYZ5vAPIfEmCTNViosC78F8F0H9y7T7gG2M39ymgutxF5gcFEsyZQSph9Bp3A==}

  parchment@1.1.4:
    resolution: {integrity: sha512-J5FBQt/pM2inLzg4hEWmzQx/8h8D0CiDxaG3vyp9rKrQRSDgBlhjdP5jQGgosEajXPSQouXGHOmVdgo7QmJuOg==}

  parent-module@1.0.1:
    resolution: {integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==}
    engines: {node: '>=6'}

  parse-asn1@5.1.7:
    resolution: {integrity: sha512-CTM5kuWR3sx9IFamcl5ErfPl6ea/N8IYwiJ+vpeB2g+1iknv7zBl5uPwbMbRVznRVbrNY6lGuDoE5b30grmbqg==}
    engines: {node: '>= 0.10'}

  parse-entities@4.0.2:
    resolution: {integrity: sha512-GG2AQYWoLgL877gQIKeRPGO1xF9+eG1ujIb5soS5gPvLQ1y2o8FL90w2QWNdf9I361Mpp7726c+lj3U0qK1uGw==}

  parse-json@5.2.0:
    resolution: {integrity: sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==}
    engines: {node: '>=8'}

  parseurl@1.3.3:
    resolution: {integrity: sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==}
    engines: {node: '>= 0.8'}

  pascal-case@3.1.2:
    resolution: {integrity: sha512-uWlGT3YSnK9x3BQJaOdcZwrnV6hPpd8jFH1/ucpiLRPh/2zCVJKS19E4GvYHvaCcACn3foXZ0cLB9Wrx1KGe5g==}

  path-browserify@0.0.1:
    resolution: {integrity: sha512-BapA40NHICOS+USX9SN4tyhq+A2RrN/Ws5F0Z5aMHDp98Fl86lX8Oti8B7uN93L4Ifv4fHOEA+pQw87gmMO/lQ==}

  path-browserify@1.0.1:
    resolution: {integrity: sha512-b7uo2UCUOYZcnF/3ID0lulOJi/bafxa1xPe7ZPsammBSpjSWQkjNxlt635YGS2MiR9GjvuXCtz2emr3jbsz98g==}

  path-exists@4.0.0:
    resolution: {integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==}
    engines: {node: '>=8'}

  path-is-absolute@1.0.1:
    resolution: {integrity: sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==}
    engines: {node: '>=0.10.0'}

  path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}

  path-parse@1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}

  path-to-regexp@0.1.12:
    resolution: {integrity: sha512-RA1GjUVMnvYFxuqovrEqZoxxW5NUZqbwKtYz/Tt7nXerk0LbLblQmrsgdeOxV5SFHf0UDggjS/bSeOZwt1pmEQ==}

  path-type@4.0.0:
    resolution: {integrity: sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==}
    engines: {node: '>=8'}

  pbkdf2@3.1.2:
    resolution: {integrity: sha512-iuh7L6jA7JEGu2WxDwtQP1ddOpaJNC4KlDEFfdQajSGgGPNi4OyDc2R7QnbY2bR9QjBVGwgvTdNJZoE7RaxUMA==}
    engines: {node: '>=0.12'}

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}

  pkg-dir@4.2.0:
    resolution: {integrity: sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==}
    engines: {node: '>=8'}

  postcss-calc@8.2.4:
    resolution: {integrity: sha512-SmWMSJmB8MRnnULldx0lQIyhSNvuDl9HfrZkaqqE/WHAhToYsAvDq+yAsA/kIyINDszOp3Rh0GFoNuH5Ypsm3Q==}
    peerDependencies:
      postcss: ^8.2.2

  postcss-colormin@5.3.1:
    resolution: {integrity: sha512-UsWQG0AqTFQmpBegeLLc1+c3jIqBNB0zlDGRWR+dQ3pRKJL1oeMzyqmH3o2PIfn9MBdNrVPWhDbT769LxCTLJQ==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-convert-values@5.1.3:
    resolution: {integrity: sha512-82pC1xkJZtcJEfiLw6UXnXVXScgtBrjlO5CBmuDQc+dlb88ZYheFsjTn40+zBVi3DkfF7iezO0nJUPLcJK3pvA==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-discard-comments@5.1.2:
    resolution: {integrity: sha512-+L8208OVbHVF2UQf1iDmRcbdjJkuBF6IS29yBDSiWUIzpYaAhtNl6JYnYm12FnkeCwQqF5LeklOu6rAqgfBZqQ==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-discard-duplicates@5.1.0:
    resolution: {integrity: sha512-zmX3IoSI2aoenxHV6C7plngHWWhUOV3sP1T8y2ifzxzbtnuhk1EdPwm0S1bIUNaJ2eNbWeGLEwzw8huPD67aQw==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-discard-empty@5.1.1:
    resolution: {integrity: sha512-zPz4WljiSuLWsI0ir4Mcnr4qQQ5e1Ukc3i7UfE2XcrwKK2LIPIqE5jxMRxO6GbI3cv//ztXDsXwEWT3BHOGh3A==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-discard-overridden@5.1.0:
    resolution: {integrity: sha512-21nOL7RqWR1kasIVdKs8HNqQJhFxLsyRfAnUDm4Fe4t4mCWL9OJiHvlHPjcd8zc5Myu89b/7wZDnOSjFgeWRtw==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-load-config@3.1.4:
    resolution: {integrity: sha512-6DiM4E7v4coTE4uzA8U//WhtPwyhiim3eyjEMFCnUpzbrkK9wJHgKDT2mR+HbtSrd/NubVaYTOpSpjUl8NQeRg==}
    engines: {node: '>= 10'}
    peerDependencies:
      postcss: '>=8.0.9'
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      postcss:
        optional: true
      ts-node:
        optional: true

  postcss-loader@6.2.1:
    resolution: {integrity: sha512-WbbYpmAaKcux/P66bZ40bpWsBucjx/TTgVVzRZ9yUO8yQfVBlameJ0ZGVaPfH64hNSBh63a+ICP5nqOpBA0w+Q==}
    engines: {node: '>= 12.13.0'}
    peerDependencies:
      postcss: ^7.0.0 || ^8.0.1
      webpack: ^5.0.0

  postcss-merge-longhand@5.1.7:
    resolution: {integrity: sha512-YCI9gZB+PLNskrK0BB3/2OzPnGhPkBEwmwhfYk1ilBHYVAZB7/tkTHFBAnCrvBBOmeYyMYw3DMjT55SyxMBzjQ==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-merge-rules@5.1.4:
    resolution: {integrity: sha512-0R2IuYpgU93y9lhVbO/OylTtKMVcHb67zjWIfCiKR9rWL3GUk1677LAqD/BcHizukdZEjT8Ru3oHRoAYoJy44g==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-minify-font-values@5.1.0:
    resolution: {integrity: sha512-el3mYTgx13ZAPPirSVsHqFzl+BBBDrXvbySvPGFnQcTI4iNslrPaFq4muTkLZmKlGk4gyFAYUBMH30+HurREyA==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-minify-gradients@5.1.1:
    resolution: {integrity: sha512-VGvXMTpCEo4qHTNSa9A0a3D+dxGFZCYwR6Jokk+/3oB6flu2/PnPXAh2x7x52EkY5xlIHLm+Le8tJxe/7TNhzw==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-minify-params@5.1.4:
    resolution: {integrity: sha512-+mePA3MgdmVmv6g+30rn57USjOGSAyuxUmkfiWpzalZ8aiBkdPYjXWtHuwJGm1v5Ojy0Z0LaSYhHaLJQB0P8Jw==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-minify-selectors@5.2.1:
    resolution: {integrity: sha512-nPJu7OjZJTsVUmPdm2TcaiohIwxP+v8ha9NehQ2ye9szv4orirRU3SDdtUmKH+10nzn0bAyOXZ0UEr7OpvLehg==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-modules-extract-imports@3.1.0:
    resolution: {integrity: sha512-k3kNe0aNFQDAZGbin48pL2VNidTF0w4/eASDsxlyspobzU3wZQLOGj7L9gfRe0Jo9/4uud09DsjFNH7winGv8Q==}
    engines: {node: ^10 || ^12 || >= 14}
    peerDependencies:
      postcss: ^8.1.0

  postcss-modules-local-by-default@4.2.0:
    resolution: {integrity: sha512-5kcJm/zk+GJDSfw+V/42fJ5fhjL5YbFDl8nVdXkJPLLW+Vf9mTD5Xe0wqIaDnLuL2U6cDNpTr+UQ+v2HWIBhzw==}
    engines: {node: ^10 || ^12 || >= 14}
    peerDependencies:
      postcss: ^8.1.0

  postcss-modules-scope@3.2.1:
    resolution: {integrity: sha512-m9jZstCVaqGjTAuny8MdgE88scJnCiQSlSrOWcTQgM2t32UBe+MUmFSO5t7VMSfAf/FJKImAxBav8ooCHJXCJA==}
    engines: {node: ^10 || ^12 || >= 14}
    peerDependencies:
      postcss: ^8.1.0

  postcss-modules-values@4.0.0:
    resolution: {integrity: sha512-RDxHkAiEGI78gS2ofyvCsu7iycRv7oqw5xMWn9iMoR0N/7mf9D50ecQqUo5BZ9Zh2vH4bCUR/ktCqbB9m8vJjQ==}
    engines: {node: ^10 || ^12 || >= 14}
    peerDependencies:
      postcss: ^8.1.0

  postcss-normalize-charset@5.1.0:
    resolution: {integrity: sha512-mSgUJ+pd/ldRGVx26p2wz9dNZ7ji6Pn8VWBajMXFf8jk7vUoSrZ2lt/wZR7DtlZYKesmZI680qjr2CeFF2fbUg==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-normalize-display-values@5.1.0:
    resolution: {integrity: sha512-WP4KIM4o2dazQXWmFaqMmcvsKmhdINFblgSeRgn8BJ6vxaMyaJkwAzpPpuvSIoG/rmX3M+IrRZEz2H0glrQNEA==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-normalize-positions@5.1.1:
    resolution: {integrity: sha512-6UpCb0G4eofTCQLFVuI3EVNZzBNPiIKcA1AKVka+31fTVySphr3VUgAIULBhxZkKgwLImhzMR2Bw1ORK+37INg==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-normalize-repeat-style@5.1.1:
    resolution: {integrity: sha512-mFpLspGWkQtBcWIRFLmewo8aC3ImN2i/J3v8YCFUwDnPu3Xz4rLohDO26lGjwNsQxB3YF0KKRwspGzE2JEuS0g==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-normalize-string@5.1.0:
    resolution: {integrity: sha512-oYiIJOf4T9T1N4i+abeIc7Vgm/xPCGih4bZz5Nm0/ARVJ7K6xrDlLwvwqOydvyL3RHNf8qZk6vo3aatiw/go3w==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-normalize-timing-functions@5.1.0:
    resolution: {integrity: sha512-DOEkzJ4SAXv5xkHl0Wa9cZLF3WCBhF3o1SKVxKQAa+0pYKlueTpCgvkFAHfk+Y64ezX9+nITGrDZeVGgITJXjg==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-normalize-unicode@5.1.1:
    resolution: {integrity: sha512-qnCL5jzkNUmKVhZoENp1mJiGNPcsJCs1aaRmURmeJGES23Z/ajaln+EPTD+rBeNkSryI+2WTdW+lwcVdOikrpA==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-normalize-url@5.1.0:
    resolution: {integrity: sha512-5upGeDO+PVthOxSmds43ZeMeZfKH+/DKgGRD7TElkkyS46JXAUhMzIKiCa7BabPeIy3AQcTkXwVVN7DbqsiCew==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-normalize-whitespace@5.1.1:
    resolution: {integrity: sha512-83ZJ4t3NUDETIHTa3uEg6asWjSBYL5EdkVB0sDncx9ERzOKBVJIUeDO9RyA9Zwtig8El1d79HBp0JEi8wvGQnA==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-ordered-values@5.1.3:
    resolution: {integrity: sha512-9UO79VUhPwEkzbb3RNpqqghc6lcYej1aveQteWY+4POIwlqkYE21HKWaLDF6lWNuqCobEAyTovVhtI32Rbv2RQ==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-reduce-initial@5.1.2:
    resolution: {integrity: sha512-dE/y2XRaqAi6OvjzD22pjTUQ8eOfc6m/natGHgKFBK9DxFmIm69YmaRVQrGgFlEfc1HePIurY0TmDeROK05rIg==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-reduce-transforms@5.1.0:
    resolution: {integrity: sha512-2fbdbmgir5AvpW9RLtdONx1QoYG2/EtqpNQbFASDlixBbAYuTcJ0dECwlqNqH7VbaUnEnh8SrxOe2sRIn24XyQ==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-selector-parser@6.1.2:
    resolution: {integrity: sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==}
    engines: {node: '>=4'}

  postcss-selector-parser@7.1.0:
    resolution: {integrity: sha512-8sLjZwK0R+JlxlYcTuVnyT2v+htpdrjDOKuMcOVdYjt52Lh8hWRYpxBPoKx/Zg+bcjc3wx6fmQevMmUztS/ccA==}
    engines: {node: '>=4'}

  postcss-svgo@5.1.0:
    resolution: {integrity: sha512-D75KsH1zm5ZrHyxPakAxJWtkyXew5qwS70v56exwvw542d9CRtTo78K0WeFxZB4G7JXKKMbEZtZayTGdIky/eA==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-unique-selectors@5.1.1:
    resolution: {integrity: sha512-5JiODlELrz8L2HwxfPnhOWZYWDxVHWL83ufOv84NrcgipI7TaeRsatAhK4Tr2/ZiYldpK/wBvw5BD3qfaK96GA==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  postcss-value-parser@4.2.0:
    resolution: {integrity: sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==}

  postcss@8.5.4:
    resolution: {integrity: sha512-QSa9EBe+uwlGTFmHsPKokv3B/oEMQZxfqW0QqNCyhpa6mB1afzulwn8hihglqAb2pOw+BJgNlmXQ8la2VeHB7w==}
    engines: {node: ^10 || ^12 || >=14}

  pretty-time@1.1.0:
    resolution: {integrity: sha512-28iF6xPQrP8Oa6uxE6a1biz+lWeTOAPKggvjB8HAs6nVMKZwf5bG++632Dx614hIWgUPkgivRfG+a8uAXGTIbA==}
    engines: {node: '>=4'}

  primeicons@5.0.0:
    resolution: {integrity: sha512-heygWF0X5HFI1otlZE62pp6ye7sZ8om78J9au2BRkg8O7Y8AHTZ9qKMRzchZUHLe8zUAvdi6hZzzm9XxgwIExw==}

  primevue@3.53.1:
    resolution: {integrity: sha512-Bp4peZPdhfKYXwvtsOGGh5dfgmTelm+LZEZKGs/c5mOHhsUJ6xi3EcOZoQVI6oklS946ayMQvgD5L0S7itGO0g==}
    peerDependencies:
      vue: ^3.0.0

  process-nextick-args@2.0.1:
    resolution: {integrity: sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==}

  process@0.11.10:
    resolution: {integrity: sha512-cdGef/drWFoydD1JsMzuFf8100nZl+GT+yacc2bEced5f9Rjk4z+WtFUTBu9PhOi9j/jfmBPu0mMEY4wIdAF8A==}
    engines: {node: '>= 0.6.0'}

  promise-polyfill@8.3.0:
    resolution: {integrity: sha512-H5oELycFml5yto/atYqmjyigJoAo3+OXwolYiH7OfQuYlAqhxNvTfiNMbV9hsC6Yp83yE5r2KTVmtrG6R9i6Pg==}

  property-information@7.1.0:
    resolution: {integrity: sha512-TwEZ+X+yCJmYfL7TPUOcvBZ4QfoT5YenQiJuX//0th53DE6w0xxLEtfK3iyryQFddXuvkIk51EEgrJQ0WJkOmQ==}

  prosemirror-changeset@2.3.1:
    resolution: {integrity: sha512-j0kORIBm8ayJNl3zQvD1TTPHJX3g042et6y/KQhZhnPrruO8exkTgG8X+NRpj7kIyMMEx74Xb3DyMIBtO0IKkQ==}

  prosemirror-commands@1.7.1:
    resolution: {integrity: sha512-rT7qZnQtx5c0/y/KlYaGvtG411S97UaL6gdp6RIZ23DLHanMYLyfGBV5DtSnZdthQql7W+lEVbpSfwtO8T+L2w==}

  prosemirror-dropcursor@1.8.2:
    resolution: {integrity: sha512-CCk6Gyx9+Tt2sbYk5NK0nB1ukHi2ryaRgadV/LvyNuO3ena1payM2z6Cg0vO1ebK8cxbzo41ku2DE5Axj1Zuiw==}

  prosemirror-gapcursor@1.3.2:
    resolution: {integrity: sha512-wtjswVBd2vaQRrnYZaBCbyDqr232Ed4p2QPtRIUK5FuqHYKGWkEwl08oQM4Tw7DOR0FsasARV5uJFvMZWxdNxQ==}

  prosemirror-history@1.4.1:
    resolution: {integrity: sha512-2JZD8z2JviJrboD9cPuX/Sv/1ChFng+xh2tChQ2X4bB2HeK+rra/bmJ3xGntCcjhOqIzSDG6Id7e8RJ9QPXLEQ==}

  prosemirror-inputrules@1.5.0:
    resolution: {integrity: sha512-K0xJRCmt+uSw7xesnHmcn72yBGTbY45vm8gXI4LZXbx2Z0jwh5aF9xrGQgrVPu0WbyFVFF3E/o9VhJYz6SQWnA==}

  prosemirror-keymap@1.2.3:
    resolution: {integrity: sha512-4HucRlpiLd1IPQQXNqeo81BGtkY8Ai5smHhKW9jjPKRc2wQIxksg7Hl1tTI2IfT2B/LgX6bfYvXxEpJl7aKYKw==}

  prosemirror-model@1.25.1:
    resolution: {integrity: sha512-AUvbm7qqmpZa5d9fPKMvH1Q5bqYQvAZWOGRvxsB6iFLyycvC9MwNemNVjHVrWgjaoxAfY8XVg7DbvQ/qxvI9Eg==}

  prosemirror-safari-ime-span@1.0.2:
    resolution: {integrity: sha512-QJqD8s1zE/CuK56kDsUhndh5hiHh/gFnAuPOA9ytva2s85/ZEt2tNWeALTJN48DtWghSKOmiBsvVn2OlnJ5H2w==}

  prosemirror-schema-list@1.5.1:
    resolution: {integrity: sha512-927lFx/uwyQaGwJxLWCZRkjXG0p48KpMj6ueoYiu4JX05GGuGcgzAy62dfiV8eFZftgyBUvLx76RsMe20fJl+Q==}

  prosemirror-state@1.4.3:
    resolution: {integrity: sha512-goFKORVbvPuAQaXhpbemJFRKJ2aixr+AZMGiquiqKxaucC6hlpHNZHWgz5R7dS4roHiwq9vDctE//CZ++o0W1Q==}

  prosemirror-tables@1.7.1:
    resolution: {integrity: sha512-eRQ97Bf+i9Eby99QbyAiyov43iOKgWa7QCGly+lrDt7efZ1v8NWolhXiB43hSDGIXT1UXgbs4KJN3a06FGpr1Q==}

  prosemirror-transform@1.10.4:
    resolution: {integrity: sha512-pwDy22nAnGqNR1feOQKHxoFkkUtepoFAd3r2hbEDsnf4wp57kKA36hXsB3njA9FtONBEwSDnDeCiJe+ItD+ykw==}

  prosemirror-view@1.40.0:
    resolution: {integrity: sha512-2G3svX0Cr1sJjkD/DYWSe3cfV5VPVTBOxI9XQEGWJDFEpsZb/gh4MV29ctv+OJx2RFX4BLt09i+6zaGM/ldkCw==}

  prosemirror-virtual-cursor@0.4.2:
    resolution: {integrity: sha512-pUMKnIuOhhnMcgIJUjhIQTVJruBEGxfMBVQSrK0g2qhGPDm1i12KdsVaFw15dYk+29tZcxjMeR7P5VDKwmbwJg==}
    peerDependencies:
      prosemirror-model: ^1.0.0
      prosemirror-state: ^1.0.0
      prosemirror-view: ^1.0.0
    peerDependenciesMeta:
      prosemirror-model:
        optional: true
      prosemirror-state:
        optional: true
      prosemirror-view:
        optional: true

  proxy-addr@2.0.7:
    resolution: {integrity: sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==}
    engines: {node: '>= 0.10'}

  proxy-from-env@1.1.0:
    resolution: {integrity: sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==}

  public-encrypt@4.0.3:
    resolution: {integrity: sha512-zVpa8oKZSz5bTMTFClc1fQOnyyEzpl5ozpi1B5YcvBrdohMjH2rfsBtyXcuNuwjsDIXmBYlF2N5FlJYhR29t8Q==}

  pug-error@2.1.0:
    resolution: {integrity: sha512-lv7sU9e5Jk8IeUheHata6/UThZ7RK2jnaaNztxfPYUY+VxZyk/ePVaNZ/vwmH8WqGvDz3LrNYt/+gA55NDg6Pg==}

  pug-lexer@5.0.1:
    resolution: {integrity: sha512-0I6C62+keXlZPZkOJeVam9aBLVP2EnbeDw3An+k0/QlqdwH6rv8284nko14Na7c0TtqtogfWXcRoFE4O4Ff20w==}

  pug-parser@6.0.0:
    resolution: {integrity: sha512-ukiYM/9cH6Cml+AOl5kETtM9NR3WulyVP2y4HOU45DyMim1IeP/OOiyEWRr6qk5I5klpsBnbuHpwKmTx6WURnw==}

  punycode@1.4.1:
    resolution: {integrity: sha512-jmYNElW7yvO7TV33CjSmvSiE2yco3bV2czu/OzDKdMNVZQWfxCblURLhf+47syQRBntjfLdd/H0egrzIG+oaFQ==}

  punycode@2.3.1:
    resolution: {integrity: sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==}
    engines: {node: '>=6'}

  qs@6.13.0:
    resolution: {integrity: sha512-+38qI9SOr8tfZ4QmJNplMUxqjbe7LKvvZgWdExBOmd+egZTtjLB67Gu0HRX3u/XOq7UU2Nx6nsjvS16Z9uwfpg==}
    engines: {node: '>=0.6'}

  qs@6.14.0:
    resolution: {integrity: sha512-YWWTjgABSKcvs/nWBi9PycY/JiPJqOD4JA6o9Sej2AtvSGarXxKC3OQSk4pAarbdQlKAh5D4FCQkJNkW+GAn3w==}
    engines: {node: '>=0.6'}

  querystring-es3@0.2.1:
    resolution: {integrity: sha512-773xhDQnZBMFobEiztv8LIl70ch5MSF/jUQVlhwFyBILqq96anmoctVIYz+ZRp0qbCKATTn6ev02M3r7Ga5vqA==}
    engines: {node: '>=0.4.x'}

  queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}

  quill-delta@3.6.3:
    resolution: {integrity: sha512-wdIGBlcX13tCHOXGMVnnTVFtGRLoP0imqxM696fIPwIf5ODIYUHIvHbZcyvGlZFiFhK5XzDC2lpjbxRhnM05Tg==}
    engines: {node: '>=0.10'}

  quill@1.3.7:
    resolution: {integrity: sha512-hG/DVzh/TiknWtE6QmWAF/pxoZKYxfe3J/d/+ShUWkDvvkZQVTPeVmUJVu1uE6DDooC4fWTiCLh84ul89oNz5g==}

  randombytes@2.1.0:
    resolution: {integrity: sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==}

  randomfill@1.0.4:
    resolution: {integrity: sha512-87lcbR8+MhcWcUiQ+9e+Rwx8MyR2P7qnt15ynUlbm3TU/fjbgz4GsvfSUDTemtCCtVCqb4ZcEFlyPNTh9bBTLw==}

  range-parser@1.2.1:
    resolution: {integrity: sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==}
    engines: {node: '>= 0.6'}

  raw-body@2.5.2:
    resolution: {integrity: sha512-8zGqypfENjCIqGhgXToC8aB2r7YrBX+AQAfIPs/Mlk+BtPTztOvTS01NRW/3Eh60J+a48lt8qsCzirQ6loCVfA==}
    engines: {node: '>= 0.8'}

  readable-stream@2.3.8:
    resolution: {integrity: sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==}

  readable-stream@3.6.2:
    resolution: {integrity: sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==}
    engines: {node: '>= 6'}

  readdirp@3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}

  readdirp@4.1.2:
    resolution: {integrity: sha512-GDhwkLfywWL2s6vEjyhri+eXmfH6j1L7JE27WhqLeYzoh/A3DBaYGEj2H/HFZCn/kMfim73FXxEJTw06WtxQwg==}
    engines: {node: '>= 14.18.0'}

  rechoir@0.7.1:
    resolution: {integrity: sha512-/njmZ8s1wVeR6pjTZ+0nCnv8SpZNRMT2D1RLOJQESlYFDBvwpTA4KWJpZ+sBJ4+vhjILRcK7JIFdGCdxEAAitg==}
    engines: {node: '>= 0.10'}

  refractor@5.0.0:
    resolution: {integrity: sha512-QXOrHQF5jOpjjLfiNk5GFnWhRXvxjUVnlFxkeDmewR5sXkr3iM46Zo+CnRR8B+MDVqkULW4EcLVcRBNOPXHosw==}

  regenerate-unicode-properties@10.2.0:
    resolution: {integrity: sha512-DqHn3DwbmmPVzeKj9woBadqmXxLvQoQIwu7nopMc72ztvxVmVk2SBhSnx67zuye5TP+lJsb/TBQsjLKhnDf3MA==}
    engines: {node: '>=4'}

  regenerate@1.4.2:
    resolution: {integrity: sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A==}

  regex-parser@2.3.1:
    resolution: {integrity: sha512-yXLRqatcCuKtVHsWrNg0JL3l1zGfdXeEvDa0bdu4tCDQw0RpMDZsqbkyRTUnKMR0tXF627V2oEWjBEaEdqTwtQ==}

  regexp.prototype.flags@1.5.4:
    resolution: {integrity: sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==}
    engines: {node: '>= 0.4'}

  regexpu-core@6.2.0:
    resolution: {integrity: sha512-H66BPQMrv+V16t8xtmq+UC0CBpiTBA60V8ibS1QVReIp8T1z8hwFxqcGzm9K6lgsN7sB5edVH8a+ze6Fqm4weA==}
    engines: {node: '>=4'}

  regjsgen@0.8.0:
    resolution: {integrity: sha512-RvwtGe3d7LvWiDQXeQw8p5asZUmfU1G/l6WbUXeHta7Y2PEIvBTwH6E2EfmYUK8pxcxEdEmaomqyp0vZZ7C+3Q==}

  regjsparser@0.12.0:
    resolution: {integrity: sha512-cnE+y8bz4NhMjISKbgeVJtqNbtf5QpjZP+Bslo+UqkIt9QPnX9q095eiRRASJG1/tz6dlNr6Z5NsBiWYokp6EQ==}
    hasBin: true

  relateurl@0.2.7:
    resolution: {integrity: sha512-G08Dxvm4iDN3MLM0EsP62EDV9IuhXPR6blNz6Utcp7zyV3tr4HVNINt6MpaRWbxoOHT3Q7YN2P+jaHX8vUbgog==}
    engines: {node: '>= 0.10'}

  remark-gfm@4.0.1:
    resolution: {integrity: sha512-1quofZ2RQ9EWdeN34S79+KExV1764+wCUGop5CPL1WGdD0ocPpu91lzPGbwWMECpEpd42kJGQwzRfyov9j4yNg==}

  remark-inline-links@7.0.0:
    resolution: {integrity: sha512-4uj1pPM+F495ySZhTIB6ay2oSkTsKgmYaKk/q5HIdhX2fuyLEegpjWa0VdJRJ01sgOqAFo7MBKdDUejIYBMVMQ==}

  remark-math@6.0.0:
    resolution: {integrity: sha512-MMqgnP74Igy+S3WwnhQ7kqGlEerTETXMvJhrUzDikVZ2/uogJCb+WHUg97hK9/jcfc0dkD73s3LN8zU49cTEtA==}

  remark-parse@11.0.0:
    resolution: {integrity: sha512-FCxlKLNGknS5ba/1lmpYijMUzX2esxW5xQqjWxw2eHFfS2MSdaHVINFmhjo+qN1WhZhNimq0dZATN9pH0IDrpA==}

  remark-stringify@11.0.0:
    resolution: {integrity: sha512-1OSmLd3awB/t8qdoEOMazZkNsfVTeY4fTsgzcQFdXNq8ToTN4ZGwrMnlda4K6smTFKD+GRV6O48i6Z4iKgPPpw==}

  remark@15.0.1:
    resolution: {integrity: sha512-Eht5w30ruCXgFmxVUSlNWQ9iiimq07URKeFS3hNc8cUWy1llX4KDWfyEDZRycMc+znsN9Ux5/tJ/BFdgdOwA3A==}

  replace-ext@1.0.1:
    resolution: {integrity: sha512-yD5BHCe7quCgBph4rMQ+0KkIRKwWCrHDOX1p1Gp6HwjPM5kVoCdKGNhN7ydqqsX6lJEnQDKZ/tFMiEdQ1dvPEw==}
    engines: {node: '>= 0.10'}

  request-light@0.7.0:
    resolution: {integrity: sha512-lMbBMrDoxgsyO+yB3sDcrDuX85yYt7sS8BfQd11jtbW/z5ZWgLZRcEGLsLoYw7I0WSUGQBs8CC8ScIxkTX1+6Q==}

  require-directory@2.1.1:
    resolution: {integrity: sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==}
    engines: {node: '>=0.10.0'}

  require-from-string@2.0.2:
    resolution: {integrity: sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==}
    engines: {node: '>=0.10.0'}

  requires-port@1.0.0:
    resolution: {integrity: sha512-KigOCHcocU3XODJxsu8i/j8T9tzT4adHiecwORRQ0ZZFcp7ahwXuRU1m+yuO90C5ZUyGeGfocHDI14M3L3yDAQ==}

  resolve-cwd@3.0.0:
    resolution: {integrity: sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==}
    engines: {node: '>=8'}

  resolve-from@4.0.0:
    resolution: {integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==}
    engines: {node: '>=4'}

  resolve-from@5.0.0:
    resolution: {integrity: sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==}
    engines: {node: '>=8'}

  resolve-url-loader@5.0.0:
    resolution: {integrity: sha512-uZtduh8/8srhBoMx//5bwqjQ+rfYOUq8zC9NrMUGtjBiGTtFJM42s58/36+hTqeqINcnYe08Nj3LkK9lW4N8Xg==}
    engines: {node: '>=12'}

  resolve@1.22.10:
    resolution: {integrity: sha512-NPRy+/ncIMeDlTAsuqwKIiferiawhefFJtkNSW0qZJEqMEb+qBt/77B/jGeeek+F0uOeN05CDa6HXbbIgtVX4w==}
    engines: {node: '>= 0.4'}
    hasBin: true

  retry@0.13.1:
    resolution: {integrity: sha512-XQBQ3I8W1Cge0Seh+6gjj03LbmRFWuoszgK9ooCpwYIrhhoO80pfq4cUkU5DkknwfOfFteRwlZ56PYOGYyFWdg==}
    engines: {node: '>= 4'}

  reusify@1.1.0:
    resolution: {integrity: sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}

  rimraf@3.0.2:
    resolution: {integrity: sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==}
    deprecated: Rimraf versions prior to v4 are no longer supported
    hasBin: true

  ripemd160@2.0.2:
    resolution: {integrity: sha512-ii4iagi25WusVoiC4B4lq7pbXfAp3D9v5CwfkY33vffw2+pkDjY1D8GaN7spsxvCSx8dkPqOZCEZyfxcmJG2IA==}

  rope-sequence@1.3.4:
    resolution: {integrity: sha512-UT5EDe2cu2E/6O4igUr5PSFs23nvvukicWHx6GnOPlHAiiYbzNuCRQCuiUdHJQcqKalLKlrYJnjY0ySGsXNQXQ==}

  run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}

  safe-buffer@5.1.2:
    resolution: {integrity: sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==}

  safe-buffer@5.2.1:
    resolution: {integrity: sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==}

  safer-buffer@2.1.2:
    resolution: {integrity: sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==}

  sass-loader@16.0.5:
    resolution: {integrity: sha512-oL+CMBXrj6BZ/zOq4os+UECPL+bWqt6OAC6DWS8Ln8GZRcMDjlJ4JC3FBDuHJdYaFWIdKNIBYmtZtK2MaMkNIw==}
    engines: {node: '>= 18.12.0'}
    peerDependencies:
      '@rspack/core': 0.x || 1.x
      node-sass: ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0 || ^9.0.0
      sass: ^1.3.0
      sass-embedded: '*'
      webpack: ^5.0.0
    peerDependenciesMeta:
      '@rspack/core':
        optional: true
      node-sass:
        optional: true
      sass:
        optional: true
      sass-embedded:
        optional: true
      webpack:
        optional: true

  sass@1.89.2:
    resolution: {integrity: sha512-xCmtksBKd/jdJ9Bt9p7nPKiuqrlBMBuuGkQlkhZjjQk3Ty48lv93k5Dq6OPkKt4XwxDJ7tvlfrTa1MPA9bf+QA==}
    engines: {node: '>=14.0.0'}
    hasBin: true

  schema-utils@2.7.1:
    resolution: {integrity: sha512-SHiNtMOUGWBQJwzISiVYKu82GiV4QYGePp3odlY1tuKO7gPtphAT5R/py0fA6xtbgLL/RvtJZnU9b8s0F1q0Xg==}
    engines: {node: '>= 8.9.0'}

  schema-utils@3.3.0:
    resolution: {integrity: sha512-pN/yOAvcC+5rQ5nERGuwrjLlYvLTbCibnZ1I7B1LaiAz9BRBlE9GMgE/eqV30P7aJQUf7Ddimy/RsbYO/GrVGg==}
    engines: {node: '>= 10.13.0'}

  schema-utils@4.3.2:
    resolution: {integrity: sha512-Gn/JaSk/Mt9gYubxTtSn/QCV4em9mpAPiR1rqy/Ocu19u/G9J5WWdNoUT4SiV6mFC3y6cxyFcFwdzPM3FgxGAQ==}
    engines: {node: '>= 10.13.0'}

  select-hose@2.0.0:
    resolution: {integrity: sha512-mEugaLK+YfkijB4fx0e6kImuJdCIt2LxCRcbEYPqRGCs4F2ogyfZU5IAZRdjCP8JPq2AtdNoC/Dux63d9Kiryg==}

  selfsigned@2.4.1:
    resolution: {integrity: sha512-th5B4L2U+eGLq1TVh7zNRGBapioSORUeymIydxgFpwww9d2qyKvtuPU2jJuHvYAwwqi2Y596QBL3eEqcPEYL8Q==}
    engines: {node: '>=10'}

  semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true

  semver@7.7.2:
    resolution: {integrity: sha512-RF0Fw+rO5AMf9MAyaRXI4AV0Ulj5lMHqVxxdSgiVbixSCXoEmmX/jk0CuJw4+3SqroYO9VoUh+HcuJivvtJemA==}
    engines: {node: '>=10'}
    hasBin: true

  send@0.19.0:
    resolution: {integrity: sha512-dW41u5VfLXu8SJh5bwRmyYUbAoSB3c9uQh6L8h/KtsFREPWpbX1lrljJo186Jc4nmci/sGUZ9a0a0J2zgfq2hw==}
    engines: {node: '>= 0.8.0'}

  serialize-javascript@6.0.2:
    resolution: {integrity: sha512-Saa1xPByTTq2gdeFZYLLo+RFE35NHZkAbqZeWNd3BpzppeVisAqpDjcp8dyf6uIvEqJRd46jemmyA4iFIeVk8g==}

  serve-index@1.9.1:
    resolution: {integrity: sha512-pXHfKNP4qujrtteMrSBb0rc8HJ9Ms/GrXwcUtUtD5s4ewDJI8bT3Cz2zTVRMKtri49pLx2e0Ya8ziP5Ya2pZZw==}
    engines: {node: '>= 0.8.0'}

  serve-static@1.16.2:
    resolution: {integrity: sha512-VqpjJZKadQB/PEbEwvFdO43Ax5dFBZ2UECszz8bQ7pi7wt//PWe1P6MN7eCnjsatYtBT6EuiClbjSWP2WrIoTw==}
    engines: {node: '>= 0.8.0'}

  set-function-length@1.2.2:
    resolution: {integrity: sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==}
    engines: {node: '>= 0.4'}

  set-function-name@2.0.2:
    resolution: {integrity: sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==}
    engines: {node: '>= 0.4'}

  setimmediate@1.0.5:
    resolution: {integrity: sha512-MATJdZp8sLqDl/68LfQmbP8zKPLQNV6BIZoIgrscFDQ+RsvK/BxeDQOgyxKKoh0y/8h3BqVFnCqQ/gd+reiIXA==}

  setprototypeof@1.1.0:
    resolution: {integrity: sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ==}

  setprototypeof@1.2.0:
    resolution: {integrity: sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==}

  sha.js@2.4.11:
    resolution: {integrity: sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==}
    hasBin: true

  shallow-clone@3.0.1:
    resolution: {integrity: sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==}
    engines: {node: '>=8'}

  shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}

  shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}

  shell-quote@1.8.3:
    resolution: {integrity: sha512-ObmnIF4hXNg1BqhnHmgbDETF8dLPCggZWBjkQfhZpbszZnYur5DUljTcCHii5LC3J5E0yeO/1LIMyH+UvHQgyw==}
    engines: {node: '>= 0.4'}

  shellwords@0.1.1:
    resolution: {integrity: sha512-vFwSUfQvqybiICwZY5+DAWIPLKsWO31Q91JSKl3UYv+K5c2QRPzn0qzec6QPu1Qc9eHYItiP3NdJqNVqetYAww==}

  side-channel-list@1.0.0:
    resolution: {integrity: sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==}
    engines: {node: '>= 0.4'}

  side-channel-map@1.0.1:
    resolution: {integrity: sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==}
    engines: {node: '>= 0.4'}

  side-channel-weakmap@1.0.2:
    resolution: {integrity: sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==}
    engines: {node: '>= 0.4'}

  side-channel@1.1.0:
    resolution: {integrity: sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==}
    engines: {node: '>= 0.4'}

  signal-exit@3.0.7:
    resolution: {integrity: sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==}

  slash@3.0.0:
    resolution: {integrity: sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==}
    engines: {node: '>=8'}

  sockjs@0.3.24:
    resolution: {integrity: sha512-GJgLTZ7vYb/JtPSSZ10hsOYIvEYsjbNU+zPdIHcUaWVNUEPivzxku31865sSSud0Da0W4lEeOPlmw93zLQchuQ==}

  sortablejs@1.14.0:
    resolution: {integrity: sha512-pBXvQCs5/33fdN1/39pPL0NZF20LeRbLQ5jtnheIPN9JQAaufGjKdWduZn4U7wCtVuzKhmRkI0DFYHYRbB2H1w==}

  source-list-map@2.0.1:
    resolution: {integrity: sha512-qnQ7gVMxGNxsiL4lEuJwe/To8UnK7fAnmbGEEH8RpLouuKbeEm0lhbQVFIrNSuB+G7tVrAlVsZgETT5nljf+Iw==}

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  source-map-support@0.5.21:
    resolution: {integrity: sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==}

  source-map@0.6.1:
    resolution: {integrity: sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==}
    engines: {node: '>=0.10.0'}

  space-separated-tokens@2.0.2:
    resolution: {integrity: sha512-PEGlAwrG8yXGXRjW32fGbg66JAlOAwbObuqVoJpv/mRgoWDQfgH1wDPvtzWyUSNAXBGSk8h755YDbbcEy3SH2Q==}

  spdy-transport@3.0.0:
    resolution: {integrity: sha512-hsLVFE5SjA6TCisWeJXFKniGGOpBgMLmerfO2aCyCU5s7nJ/rpAepqmFifv/GCbSbueEeAJJnmSQ2rKC/g8Fcw==}

  spdy@4.0.2:
    resolution: {integrity: sha512-r46gZQZQV+Kl9oItvl1JZZqJKGr+oEkB08A6BzkiR7593/7IbtuncXHd2YoYeTsG4157ZssMu9KYvUHLcjcDoA==}
    engines: {node: '>=6.0.0'}

  stable@0.1.8:
    resolution: {integrity: sha512-ji9qxRnOVfcuLDySj9qzhGSEFVobyt1kIOSkj1qZzYLzq7Tos/oUUWvotUPQLlrsidqsK6tBH89Bc9kL5zHA6w==}
    deprecated: 'Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility'

  statuses@1.5.0:
    resolution: {integrity: sha512-OpZ3zP+jT1PI7I8nemJX4AKmAX070ZkYPVWV/AaKTJl+tXCTGyVdC1a4SL8RUQYEwk/f34ZX8UTykN68FwrqAA==}
    engines: {node: '>= 0.6'}

  statuses@2.0.1:
    resolution: {integrity: sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==}
    engines: {node: '>= 0.8'}

  std-env@3.9.0:
    resolution: {integrity: sha512-UGvjygr6F6tpH7o2qyqR6QYpwraIjKSdtzyBdyytFOHmPZY917kwdwLG0RbOjWOnKmnm3PeHjaoLLMie7kPLQw==}

  stream-browserify@2.0.2:
    resolution: {integrity: sha512-nX6hmklHs/gr2FuxYDltq8fJA1GDlxKQCz8O/IM4atRqBH8OORmBNgfvW5gG10GT/qQ9u0CzIvr2X5Pkt6ntqg==}

  stream-http@2.8.3:
    resolution: {integrity: sha512-+TSkfINHDo4J+ZobQLWiMouQYB+UVYFttRA94FpEzzJ7ZdqcL4uUUQ7WkdkI4DSozGmgBUE/a47L+38PenXhUw==}

  string-width@4.2.3:
    resolution: {integrity: sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==}
    engines: {node: '>=8'}

  string_decoder@1.1.1:
    resolution: {integrity: sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==}

  string_decoder@1.3.0:
    resolution: {integrity: sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==}

  strip-ansi@6.0.1:
    resolution: {integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==}
    engines: {node: '>=8'}

  strip-final-newline@2.0.0:
    resolution: {integrity: sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==}
    engines: {node: '>=6'}

  style-loader@2.0.0:
    resolution: {integrity: sha512-Z0gYUJmzZ6ZdRUqpg1r8GsaFKypE+3xAzuFeMuoHgjc9KZv3wMyCRjQIWEbhoFSq7+7yoHXySDJyyWQaPajeiQ==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0

  style-mod@4.1.2:
    resolution: {integrity: sha512-wnD1HyVqpJUI2+eKZ+eo1UwghftP6yuFheBqqe+bWCotBjC2K1YnteJILRMs3SM4V/0dLEW1SC27MWP5y+mwmw==}

  stylehacks@5.1.1:
    resolution: {integrity: sha512-sBpcd5Hx7G6seo7b1LkpttvTz7ikD0LlH5RmdcBNb6fFR0Fl7LQwHDFr300q4cwUqi+IYrFGmsIHieMBfnN/Bw==}
    engines: {node: ^10 || ^12 || >=14.0}
    peerDependencies:
      postcss: ^8.2.15

  supports-color@7.2.0:
    resolution: {integrity: sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==}
    engines: {node: '>=8'}

  supports-color@8.1.1:
    resolution: {integrity: sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==}
    engines: {node: '>=10'}

  supports-preserve-symlinks-flag@1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}

  svgo@2.8.0:
    resolution: {integrity: sha512-+N/Q9kV1+F+UeWYoSiULYo4xYSDQlTgb+ayMobAXPwMnLvop7oxKMo9OzIrX5x3eS4L4f2UHhc9axXwY8DpChg==}
    engines: {node: '>=10.13.0'}
    hasBin: true

  tapable@2.2.2:
    resolution: {integrity: sha512-Re10+NauLTMCudc7T5WLFLAwDhQ0JWdrMK+9B2M8zR5hRExKmsRDCBA7/aV/pNJFltmBFO5BAMlQFi/vq3nKOg==}
    engines: {node: '>=6'}

  terser-webpack-plugin@5.3.14:
    resolution: {integrity: sha512-vkZjpUjb6OMS7dhV+tILUW6BhpDR7P2L/aQSAv+Uwk+m8KATX9EccViHTJR2qDtACKPIYndLGCyl3FMo+r2LMw==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      '@swc/core': '*'
      esbuild: '*'
      uglify-js: '*'
      webpack: ^5.1.0
    peerDependenciesMeta:
      '@swc/core':
        optional: true
      esbuild:
        optional: true
      uglify-js:
        optional: true

  terser@4.8.1:
    resolution: {integrity: sha512-4GnLC0x667eJG0ewJTa6z/yXrbLGv80D9Ru6HIpCQmO+Q4PfEtBFi0ObSckqwL6VyQv/7ENJieXHo2ANmdQwgw==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  terser@5.42.0:
    resolution: {integrity: sha512-UYCvU9YQW2f/Vwl+P0GfhxJxbUGLwd+5QrrGgLajzWAtC/23AX0vcise32kkP7Eu0Wu9VlzzHAXkLObgjQfFlQ==}
    engines: {node: '>=10'}
    hasBin: true

  thunky@1.1.0:
    resolution: {integrity: sha512-eHY7nBftgThBqOyHGVN+l8gF0BucP09fMo0oO/Lb0w1OF80dJv+lDVpXG60WMQvkcxAkNybKsrEIE3ZtKGmPrA==}

  timers-browserify@2.0.12:
    resolution: {integrity: sha512-9phl76Cqm6FhSX9Xe1ZUAMLtm1BLkKj2Qd5ApyWkXzsMRaA7dgr81kf4wJmQf/hAvg8EEyJxDo3du/0KlhPiKQ==}
    engines: {node: '>=0.6.0'}

  to-arraybuffer@1.0.1:
    resolution: {integrity: sha512-okFlQcoGTi4LQBG/PgSYblw9VOyptsz2KJZqc6qtgGdes8VktzUQkj4BI2blit072iS8VODNcMA+tvnS9dnuMA==}

  to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}

  toidentifier@1.0.1:
    resolution: {integrity: sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==}
    engines: {node: '>=0.6'}

  token-stream@1.0.0:
    resolution: {integrity: sha512-VSsyNPPW74RpHwR8Fc21uubwHY7wMDeJLys2IX5zJNih+OnAnaifKHo+1LHT7DAdloQ7apeaaWg8l7qnf/TnEg==}

  trough@2.2.0:
    resolution: {integrity: sha512-tmMpK00BjZiUyVyvrBK7knerNgmgvcV/KLVyuma/SC+TQN167GrMRciANTz09+k3zW8L8t60jWO1GpfkZdjTaw==}

  tslib@2.8.1:
    resolution: {integrity: sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==}

  tty-browserify@0.0.0:
    resolution: {integrity: sha512-JVa5ijo+j/sOoHGjw0sxw734b1LhBkQ3bvUGNdxnVXDCX81Yx7TFgnZygxrIIWn23hbfTaMYLwRmAxFyDuFmIw==}

  type-is@1.6.18:
    resolution: {integrity: sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==}
    engines: {node: '>= 0.6'}

  typescript-auto-import-cache@0.3.6:
    resolution: {integrity: sha512-RpuHXrknHdVdK7wv/8ug3Fr0WNsNi5l5aB8MYYuXhq2UH5lnEB1htJ1smhtD5VeCsGr2p8mUDtd83LCQDFVgjQ==}

  typescript@5.8.3:
    resolution: {integrity: sha512-p1diW6TqL9L07nNxvRMM7hMMw4c5XOo/1ibL4aAIGmSAt9slTE1Xgw5KWuof2uTOvCg9BY7ZRi+GaF+7sfgPeQ==}
    engines: {node: '>=14.17'}
    hasBin: true

  underscore@1.13.1:
    resolution: {integrity: sha512-hzSoAVtJF+3ZtiFX0VgfFPHEDRm7Y/QPjGyNo4TVdnDTdft3tr8hEkD25a1jC+TjTuE7tkHGKkhwCgs9dgBB2g==}

  undici-types@7.8.0:
    resolution: {integrity: sha512-9UJ2xGDvQ43tYyVMpuHlsgApydB8ZKfVYTsLDhXkFL/6gfkp+U8xTGdh8pMJv1SpZna0zxG1DwsKZsreLbXBxw==}

  unicode-canonical-property-names-ecmascript@2.0.1:
    resolution: {integrity: sha512-dA8WbNeb2a6oQzAQ55YlT5vQAWGV9WXOsi3SskE3bcCdM0P4SDd+24zS/OCacdRq5BkdsRj9q3Pg6YyQoxIGqg==}
    engines: {node: '>=4'}

  unicode-match-property-ecmascript@2.0.0:
    resolution: {integrity: sha512-5kaZCrbp5mmbz5ulBkDkbY0SsPOjKqVS35VpL9ulMPfSl0J0Xsm+9Evphv9CoIZFwre7aJoa94AY6seMKGVN5Q==}
    engines: {node: '>=4'}

  unicode-match-property-value-ecmascript@2.2.0:
    resolution: {integrity: sha512-4IehN3V/+kkr5YeSSDDQG8QLqO26XpL2XP3GQtqwlT/QYSECAwFztxVHjlbh0+gjJ3XmNLS0zDsbgs9jWKExLg==}
    engines: {node: '>=4'}

  unicode-property-aliases-ecmascript@2.1.0:
    resolution: {integrity: sha512-6t3foTQI9qne+OZoVQB/8x8rk2k1eVy1gRXhV3oFQ5T6R1dqQ1xtin3XqSlx3+ATBkliTaR/hHyJBm+LVPNM8w==}
    engines: {node: '>=4'}

  unified@11.0.5:
    resolution: {integrity: sha512-xKvGhPWw3k84Qjh8bI3ZeJjqnyadK+GEFtazSfZv/rKeTkTjOJho6mFqh2SM96iIcZokxiOpg78GazTSg8+KHA==}

  unist-util-is@6.0.0:
    resolution: {integrity: sha512-2qCTHimwdxLfz+YzdGfkqNlH0tLi9xjTnHddPmJwtIG9MGsdbutfTc4P+haPD7l7Cjxf/WZj+we5qfVPvvxfYw==}

  unist-util-remove-position@5.0.0:
    resolution: {integrity: sha512-Hp5Kh3wLxv0PHj9m2yZhhLt58KzPtEYKQQ4yxfYFEO7EvHwzyDYnduhHnY1mDxoqr7VUwVuHXk9RXKIiYS1N8Q==}

  unist-util-stringify-position@4.0.0:
    resolution: {integrity: sha512-0ASV06AAoKCDkS2+xw5RXJywruurpbC4JZSm7nr7MOt1ojAzvyyaO+UxZf18j8FCF6kmzCZKcAgN/yu2gm2XgQ==}

  unist-util-visit-parents@6.0.1:
    resolution: {integrity: sha512-L/PqWzfTP9lzzEa6CKs0k2nARxTdZduw3zyh8d2NVBnsyvHjSX4TWse388YrrQKbvI8w20fGjGlhgT96WwKykw==}

  unist-util-visit@5.0.0:
    resolution: {integrity: sha512-MR04uvD+07cwl/yhVuVWAtw+3GOR/knlL55Nd/wAdblk27GCVt3lqpTivy/tkJcZoNPzTwS1Y+KMojlLDhoTzg==}

  universalify@2.0.1:
    resolution: {integrity: sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==}
    engines: {node: '>= 10.0.0'}

  unpipe@1.0.0:
    resolution: {integrity: sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==}
    engines: {node: '>= 0.8'}

  update-browserslist-db@1.1.3:
    resolution: {integrity: sha512-UxhIZQ+QInVdunkDAaiazvvT/+fXL5Osr0JZlJulepYu6Jd7qJtDZjlur0emRlT71EN3ScPoE7gvsuIKKNavKw==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'

  uri-js@4.4.1:
    resolution: {integrity: sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==}

  url@0.11.4:
    resolution: {integrity: sha512-oCwdVC7mTuWiPyjLUz/COz5TLk6wgp0RCsN+wHZ2Ekneac9w8uuV0njcbbie2ME+Vs+d6duwmYuR3HgQXs1fOg==}
    engines: {node: '>= 0.4'}

  util-deprecate@1.0.2:
    resolution: {integrity: sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==}

  util@0.10.4:
    resolution: {integrity: sha512-0Pm9hTQ3se5ll1XihRic3FDIku70C+iHUdT/W926rSgHV5QgXsYbKZN8MSC3tJtSkhuROzvsQjAaFENRXr+19A==}

  util@0.11.1:
    resolution: {integrity: sha512-HShAsny+zS2TZfaXxD9tYj4HQGlBezXZMZuM/S5PKLLoZkShZiGk9o5CzukI1LVHZvjdvZ2Sj1aW/Ndn2NB/HQ==}

  utils-merge@1.0.1:
    resolution: {integrity: sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==}
    engines: {node: '>= 0.4.0'}

  uuid@8.3.2:
    resolution: {integrity: sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==}
    hasBin: true

  vary@1.1.2:
    resolution: {integrity: sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==}
    engines: {node: '>= 0.8'}

  vfile-message@4.0.2:
    resolution: {integrity: sha512-jRDZ1IMLttGj41KcZvlrYAaI3CfqpLpfpf+Mfig13viT6NKvRzWZ+lXz0Y5D60w6uJIBAOGq9mSHf0gktF0duw==}

  vfile@6.0.3:
    resolution: {integrity: sha512-KzIbH/9tXat2u30jf+smMwFCsno4wHVdNmzFyL+T/L3UGqqk6JKfVqOFOZEpZSHADH1k40ab6NUIXZq422ov3Q==}

  vm-browserify@1.1.2:
    resolution: {integrity: sha512-2ham8XPWTONajOR0ohOKOHXkm3+gaBmGut3SRuu75xLd/RRaY6vqgh8NBYYk7+RW3u5AtzPQZG8F10LHkl0lAQ==}

  volar-service-css@0.0.62:
    resolution: {integrity: sha512-JwNyKsH3F8PuzZYuqPf+2e+4CTU8YoyUHEHVnoXNlrLe7wy9U3biomZ56llN69Ris7TTy/+DEX41yVxQpM4qvg==}
    peerDependencies:
      '@volar/language-service': ~2.4.0
    peerDependenciesMeta:
      '@volar/language-service':
        optional: true

  volar-service-emmet@0.0.62:
    resolution: {integrity: sha512-U4dxWDBWz7Pi4plpbXf4J4Z/ss6kBO3TYrACxWNsE29abu75QzVS0paxDDhI6bhqpbDFXlpsDhZ9aXVFpnfGRQ==}
    peerDependencies:
      '@volar/language-service': ~2.4.0
    peerDependenciesMeta:
      '@volar/language-service':
        optional: true

  volar-service-html@0.0.62:
    resolution: {integrity: sha512-Zw01aJsZRh4GTGUjveyfEzEqpULQUdQH79KNEiKVYHZyuGtdBRYCHlrus1sueSNMxwwkuF5WnOHfvBzafs8yyQ==}
    peerDependencies:
      '@volar/language-service': ~2.4.0
    peerDependenciesMeta:
      '@volar/language-service':
        optional: true

  volar-service-json@0.0.62:
    resolution: {integrity: sha512-Ot+jP+/LzKcaGF7nzrn+gwpzAleb4ej5buO05M8KxfwfODte7o1blARKRoJ3Nv7ls0DBM38Dd5vjzvA9c/9Jtg==}
    peerDependencies:
      '@volar/language-service': ~2.4.0
    peerDependenciesMeta:
      '@volar/language-service':
        optional: true

  volar-service-pug-beautify@0.0.62:
    resolution: {integrity: sha512-dAFNuNEwTnnVthYoNJhoStwhf/PojzglwCrdhOb2nBegTG3xXMWRFmQzb0JfIlt2wq2wfUq5j+JJswgSD3KluQ==}
    peerDependencies:
      '@volar/language-service': ~2.4.0
    peerDependenciesMeta:
      '@volar/language-service':
        optional: true

  volar-service-pug@0.0.62:
    resolution: {integrity: sha512-C0/O8uGnRfijWKE0zFXxJ/o7BbLebzretsEaiMkvBDIxm5oe7HRDzQr6CgknV/WVgiohZ74v+0CwBPl2YmcPUQ==}

  volar-service-typescript-twoslash-queries@0.0.62:
    resolution: {integrity: sha512-KxFt4zydyJYYI0kFAcWPTh4u0Ha36TASPZkAnNY784GtgajerUqM80nX/W1d0wVhmcOFfAxkVsf/Ed+tiYU7ng==}
    peerDependencies:
      '@volar/language-service': ~2.4.0
    peerDependenciesMeta:
      '@volar/language-service':
        optional: true

  volar-service-typescript@0.0.62:
    resolution: {integrity: sha512-p7MPi71q7KOsH0eAbZwPBiKPp9B2+qrdHAd6VY5oTo9BUXatsOAdakTm9Yf0DUj6uWBAaOT01BSeVOPwucMV1g==}
    peerDependencies:
      '@volar/language-service': ~2.4.0
    peerDependenciesMeta:
      '@volar/language-service':
        optional: true

  vscode-css-languageservice@6.3.6:
    resolution: {integrity: sha512-fU4h8mT3KlvfRcbF74v/M+Gzbligav6QMx4AD/7CbclWPYOpGb9kgIswfpZVJbIcOEJJACI9iYizkNwdiAqlHw==}

  vscode-html-languageservice@5.5.0:
    resolution: {integrity: sha512-No6Er2P2L8IsXDnUFlp0bP4f2sdkJv+zJLZYFhtEQIp+2xNfxY8WYkhSxLJ/7bZhuV/aU55lmGSSHBVxSGer3Q==}

  vscode-json-languageservice@5.6.0:
    resolution: {integrity: sha512-w1dv0nEoFxaNDq0PlYleYnlM4sFYXtFNZxaGGYy9nsCidXqHMh4RFHqld6XkFOhxs7hRBpK1QuXlH9OFDkTyfg==}

  vscode-jsonrpc@8.2.0:
    resolution: {integrity: sha512-C+r0eKJUIfiDIfwJhria30+TYWPtuHJXHtI7J0YlOmKAo7ogxP20T0zxB7HZQIFhIyvoBPwWskjxrvAtfjyZfA==}
    engines: {node: '>=14.0.0'}

  vscode-languageserver-protocol@3.17.5:
    resolution: {integrity: sha512-mb1bvRJN8SVznADSGWM9u/b07H7Ecg0I3OgXDuLdn307rl/J3A9YD6/eYOssqhecL27hK1IPZAsaqh00i/Jljg==}

  vscode-languageserver-textdocument@1.0.12:
    resolution: {integrity: sha512-cxWNPesCnQCcMPeenjKKsOCKQZ/L6Tv19DTRIGuLWe32lyzWhihGVJ/rcckZXJxfdKCFvRLS3fpBIsV/ZGX4zA==}

  vscode-languageserver-types@3.17.5:
    resolution: {integrity: sha512-Ld1VelNuX9pdF39h2Hgaeb5hEZM2Z3jUrrMgWQAu82jMtZp7p3vJT3BzToKtZI7NgQssZje5o0zryOrhQvzQAg==}

  vscode-languageserver@9.0.1:
    resolution: {integrity: sha512-woByF3PDpkHFUreUa7Hos7+pUWdeWMXRd26+ZX2A8cFx6v/JPTtd4/uN0/jB6XQHYaOlHbio03NTHCqrgG5n7g==}
    hasBin: true

  vscode-nls@5.2.0:
    resolution: {integrity: sha512-RAaHx7B14ZU04EU31pT+rKz2/zSl7xMsfIZuo8pd+KZO6PXtQmpevpq3vxvWNcrGbdmhM/rr5Uw5Mz+NBfhVng==}

  vscode-uri@3.1.0:
    resolution: {integrity: sha512-/BpdSx+yCQGnCvecbyXdxHDkuk55/G3xwnC0GqY4gmQ3j+A+g8kzzgB4Nk/SINjqn6+waqw3EgbVF2QKExkRxQ==}

  vue-click-outside-element@3.1.2:
    resolution: {integrity: sha512-yIej7+kpQ7gIjup3L1KbdL/jUrBcrldnl7Fy0A76LgMeW9TJ6utAjmOC1IrlWbVpSu7hYfYIjqwSGDC3Evfazw==}

  vue-contenteditable@4.1.0:
    resolution: {integrity: sha512-PCQD8JNYt6lbocYvquHB0p3SWd0QGtHNydfbO4Ma3wOMiUTwjJiCyBv3vJRf7WvTkuLObn66GqEYUurfBLfrRQ==}
    peerDependencies:
      vue: ^3.2.25

  vue-draggable-plus@0.6.0:
    resolution: {integrity: sha512-G5TSfHrt9tX9EjdG49InoFJbt2NYk0h3kgjgKxkFWr3ulIUays0oFObr5KZ8qzD4+QnhtALiRwIqY6qul4egqw==}
    peerDependencies:
      '@types/sortablejs': ^1.15.0
      '@vue/composition-api': '*'
    peerDependenciesMeta:
      '@vue/composition-api':
        optional: true

  vue-loader@16.8.3:
    resolution: {integrity: sha512-7vKN45IxsKxe5GcVCbc2qFU5aWzyiLrYJyUuMz4BQLKctCj/fmCa0w6fGiiQ2cLFetNcek1ppGJQDCup0c1hpA==}
    peerDependencies:
      '@vue/compiler-sfc': ^3.0.8
      vue: ^3.2.13
      webpack: ^4.1.0 || ^5.0.0-0
    peerDependenciesMeta:
      '@vue/compiler-sfc':
        optional: true
      vue:
        optional: true

  vue-router@4.5.1:
    resolution: {integrity: sha512-ogAF3P97NPm8fJsE4by9dwSYtDwXIY1nFY9T6DyQnGHd1E2Da94w9JIolpe42LJGIl0DwOHBi8TcRPlPGwbTtw==}
    peerDependencies:
      vue: ^3.2.0

  vue-select@4.0.0-beta.6:
    resolution: {integrity: sha512-K+zrNBSpwMPhAxYLTCl56gaMrWZGgayoWCLqe5rWwkB8aUbAUh7u6sXjIR7v4ckp2WKC7zEEUY27g6h1MRsIHw==}
    peerDependencies:
      vue: 3.x

  vue-style-loader@4.1.3:
    resolution: {integrity: sha512-sFuh0xfbtpRlKfm39ss/ikqs9AbKCoXZBpHeVZ8Tx650o0k0q/YCM7FRvigtxpACezfq6af+a7JeqVTWvncqDg==}

  vue3-json-editor@1.1.5:
    resolution: {integrity: sha512-p+hbl5SdMifA9brPt9TsG2HYB7Xy7xy98b61zcIusVpwhGtS5a0IwWPKM7BXcj9poIdc/bPs4AFchQOHIBq++w==}

  vue@3.5.16:
    resolution: {integrity: sha512-rjOV2ecxMd5SiAmof2xzh2WxntRcigkX/He4YFJ6WdRvVUrbt6DxC1Iujh10XLl8xCDRDtGKMeO3D+pRQ1PP9w==}
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  vuedraggable@4.1.0:
    resolution: {integrity: sha512-FU5HCWBmsf20GpP3eudURW3WdWTKIbEIQxh9/8GE806hydR9qZqRRxRE3RjqX7PkuLuMQG/A7n3cfj9rCEchww==}
    peerDependencies:
      vue: ^3.0.1

  w3c-keyname@2.2.8:
    resolution: {integrity: sha512-dpojBhNsCNN7T82Tm7k26A6G9ML3NkhDsnw9n/eoxSRlVBB4CEtIQ/KTCLI2Fwf3ataSXRhYFkQi3SlnFwPvPQ==}

  watchpack@2.4.4:
    resolution: {integrity: sha512-c5EGNOiyxxV5qmTtAB7rbiXxi1ooX1pQKMLX/MIabJjRA0SJBQOjKF+KSVfHkr9U1cADPon0mRiVe/riyaiDUA==}
    engines: {node: '>=10.13.0'}

  wbuf@1.7.3:
    resolution: {integrity: sha512-O84QOnr0icsbFGLS0O3bI5FswxzRr8/gHwWkDlQFskhSPryQXvrTMxjxGP4+iWYoauLoBvfDpkrOauZ+0iZpDA==}

  webpack-cli@4.10.0:
    resolution: {integrity: sha512-NLhDfH/h4O6UOy+0LSso42xvYypClINuMNBVVzX4vX98TmTaTUxwRbXdhucbFMd2qLaCTcLq/PdYrvi8onw90w==}
    engines: {node: '>=10.13.0'}
    hasBin: true
    peerDependencies:
      '@webpack-cli/generators': '*'
      '@webpack-cli/migrate': '*'
      webpack: 4.x.x || 5.x.x
      webpack-bundle-analyzer: '*'
      webpack-dev-server: '*'
    peerDependenciesMeta:
      '@webpack-cli/generators':
        optional: true
      '@webpack-cli/migrate':
        optional: true
      webpack-bundle-analyzer:
        optional: true
      webpack-dev-server:
        optional: true

  webpack-dev-middleware@5.3.4:
    resolution: {integrity: sha512-BVdTqhhs+0IfoeAf7EoH5WE+exCmqGerHfDM0IL096Px60Tq2Mn9MAbnaGUe6HiMa41KMCYF19gyzZmBcq/o4Q==}
    engines: {node: '>= 12.13.0'}
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0

  webpack-dev-server@4.15.2:
    resolution: {integrity: sha512-0XavAZbNJ5sDrCbkpWL8mia0o5WPOd2YGtxrEiZkBK9FjLppIUK2TgxK6qGD2P3hUXTJNNPVibrerKcx5WkR1g==}
    engines: {node: '>= 12.13.0'}
    hasBin: true
    peerDependencies:
      webpack: ^4.37.0 || ^5.0.0
      webpack-cli: '*'
    peerDependenciesMeta:
      webpack:
        optional: true
      webpack-cli:
        optional: true

  webpack-merge@5.10.0:
    resolution: {integrity: sha512-+4zXKdx7UnO+1jaN4l2lHVD+mFvnlZQP/6ljaJVb4SZiwIKeUnrT5l0gkT8z+n4hKpC+jpOv6O9R+gLtag7pSA==}
    engines: {node: '>=10.0.0'}

  webpack-notifier@1.15.0:
    resolution: {integrity: sha512-N2V8UMgRB5komdXQRavBsRpw0hPhJq2/SWNOGuhrXpIgRhcMexzkGQysUyGStHLV5hkUlgpRiF7IUXoBqyMmzQ==}
    peerDependencies:
      '@types/webpack': '>4.41.31'
    peerDependenciesMeta:
      '@types/webpack':
        optional: true

  webpack-sources@1.4.3:
    resolution: {integrity: sha512-lgTS3Xhv1lCOKo7SA5TjKXMjpSM4sBjNV5+q2bqesbSPs5FjGmU6jjtBSkX9b4qW87vDIsCIlUPOEhbZrMdjeQ==}

  webpack-sources@3.3.2:
    resolution: {integrity: sha512-ykKKus8lqlgXX/1WjudpIEjqsafjOTcOJqxnAbMLAu/KCsDCJ6GBtvscewvTkrn24HsnvFwrSCbenFrhtcCsAA==}
    engines: {node: '>=10.13.0'}

  webpack@5.99.9:
    resolution: {integrity: sha512-brOPwM3JnmOa+7kd3NsmOUOwbDAj8FT9xDsG3IW0MgbN9yZV7Oi/s/+MNQ/EcSMqw7qfoRyXPoeEWT8zLVdVGg==}
    engines: {node: '>=10.13.0'}
    hasBin: true
    peerDependencies:
      webpack-cli: '*'
    peerDependenciesMeta:
      webpack-cli:
        optional: true

  webpackbar@5.0.2:
    resolution: {integrity: sha512-BmFJo7veBDgQzfWXl/wwYXr/VFus0614qZ8i9znqcl9fnEdiVkdbi0TedLQ6xAK92HZHDJ0QmyQ0fmuZPAgCYQ==}
    engines: {node: '>=12'}
    peerDependencies:
      webpack: 3 || 4 || 5

  websocket-driver@0.7.4:
    resolution: {integrity: sha512-b17KeDIQVjvb0ssuSDF2cYXSg2iztliJ4B9WdsuB6J952qCPKmnVq4DyW5motImXHDC1cBT/1UezrJVsKw5zjg==}
    engines: {node: '>=0.8.0'}

  websocket-extensions@0.1.4:
    resolution: {integrity: sha512-OqedPIGOfsDlo31UNwYbCFMSaO9m9G/0faIHj5/dZFDMFqPTcx6UwqyOy3COEaEOg/9VsGIpdqn62W5KhoKSpg==}
    engines: {node: '>=0.8.0'}

  which@2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true

  wildcard@2.0.1:
    resolution: {integrity: sha512-CC1bOL87PIWSBhDcTrdeLo6eGT7mCFtrg0uIJtqJUFyK+eJnzl8A1niH56uu7KMa5XFrtiV+AQuHO3n7DsHnLQ==}

  wrap-ansi@7.0.0:
    resolution: {integrity: sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==}
    engines: {node: '>=10'}

  wrappy@1.0.2:
    resolution: {integrity: sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==}

  ws@8.18.2:
    resolution: {integrity: sha512-DMricUmwGZUVr++AEAe2uiVM7UoO9MAVZMDu05UQOaUII0lp+zOzLLU4Xqh/JvTqklB1T4uELaaPBKyjE1r4fQ==}
    engines: {node: '>=10.0.0'}
    peerDependencies:
      bufferutil: ^4.0.1
      utf-8-validate: '>=5.0.2'
    peerDependenciesMeta:
      bufferutil:
        optional: true
      utf-8-validate:
        optional: true

  xtend@4.0.2:
    resolution: {integrity: sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==}
    engines: {node: '>=0.4'}

  y18n@5.0.8:
    resolution: {integrity: sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==}
    engines: {node: '>=10'}

  yallist@3.1.1:
    resolution: {integrity: sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==}

  yaml@1.10.2:
    resolution: {integrity: sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==}
    engines: {node: '>= 6'}

  yargs-parser@21.1.1:
    resolution: {integrity: sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==}
    engines: {node: '>=12'}

  yargs@17.7.2:
    resolution: {integrity: sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==}
    engines: {node: '>=12'}

  zwitch@2.0.4:
    resolution: {integrity: sha512-bXE4cR/kVZhKZX/RjPEflHaKVhUVl85noU3v6b8apfQEc1x4A+zBxjZ4lN8LqGd6WZ3dl98pY4o717VFmoPp+A==}

snapshots:

  '@ampproject/remapping@2.3.0':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.8
      '@jridgewell/trace-mapping': 0.3.25

  '@babel/code-frame@7.27.1':
    dependencies:
      '@babel/helper-validator-identifier': 7.27.1
      js-tokens: 4.0.0
      picocolors: 1.1.1

  '@babel/compat-data@7.27.5': {}

  '@babel/core@7.27.4':
    dependencies:
      '@ampproject/remapping': 2.3.0
      '@babel/code-frame': 7.27.1
      '@babel/generator': 7.27.5
      '@babel/helper-compilation-targets': 7.27.2
      '@babel/helper-module-transforms': 7.27.3(@babel/core@7.27.4)
      '@babel/helpers': 7.27.6
      '@babel/parser': 7.27.5
      '@babel/template': 7.27.2
      '@babel/traverse': 7.27.4
      '@babel/types': 7.27.6
      convert-source-map: 2.0.0
      debug: 4.4.1
      gensync: 1.0.0-beta.2
      json5: 2.2.3
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  '@babel/generator@7.27.5':
    dependencies:
      '@babel/parser': 7.27.5
      '@babel/types': 7.27.6
      '@jridgewell/gen-mapping': 0.3.8
      '@jridgewell/trace-mapping': 0.3.25
      jsesc: 3.1.0

  '@babel/helper-annotate-as-pure@7.27.3':
    dependencies:
      '@babel/types': 7.27.6

  '@babel/helper-compilation-targets@7.27.2':
    dependencies:
      '@babel/compat-data': 7.27.5
      '@babel/helper-validator-option': 7.27.1
      browserslist: 4.25.0
      lru-cache: 5.1.1
      semver: 6.3.1

  '@babel/helper-create-class-features-plugin@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-annotate-as-pure': 7.27.3
      '@babel/helper-member-expression-to-functions': 7.27.1
      '@babel/helper-optimise-call-expression': 7.27.1
      '@babel/helper-replace-supers': 7.27.1(@babel/core@7.27.4)
      '@babel/helper-skip-transparent-expression-wrappers': 7.27.1
      '@babel/traverse': 7.27.4
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-create-regexp-features-plugin@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-annotate-as-pure': 7.27.3
      regexpu-core: 6.2.0
      semver: 6.3.1

  '@babel/helper-define-polyfill-provider@0.6.4(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-compilation-targets': 7.27.2
      '@babel/helper-plugin-utils': 7.27.1
      debug: 4.4.1
      lodash.debounce: 4.0.8
      resolve: 1.22.10
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-member-expression-to-functions@7.27.1':
    dependencies:
      '@babel/traverse': 7.27.4
      '@babel/types': 7.27.6
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-module-imports@7.27.1':
    dependencies:
      '@babel/traverse': 7.27.4
      '@babel/types': 7.27.6
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-module-transforms@7.27.3(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-module-imports': 7.27.1
      '@babel/helper-validator-identifier': 7.27.1
      '@babel/traverse': 7.27.4
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-optimise-call-expression@7.27.1':
    dependencies:
      '@babel/types': 7.27.6

  '@babel/helper-plugin-utils@7.27.1': {}

  '@babel/helper-remap-async-to-generator@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-annotate-as-pure': 7.27.3
      '@babel/helper-wrap-function': 7.27.1
      '@babel/traverse': 7.27.4
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-replace-supers@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-member-expression-to-functions': 7.27.1
      '@babel/helper-optimise-call-expression': 7.27.1
      '@babel/traverse': 7.27.4
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-skip-transparent-expression-wrappers@7.27.1':
    dependencies:
      '@babel/traverse': 7.27.4
      '@babel/types': 7.27.6
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-string-parser@7.27.1': {}

  '@babel/helper-validator-identifier@7.27.1': {}

  '@babel/helper-validator-option@7.27.1': {}

  '@babel/helper-wrap-function@7.27.1':
    dependencies:
      '@babel/template': 7.27.2
      '@babel/traverse': 7.27.4
      '@babel/types': 7.27.6
    transitivePeerDependencies:
      - supports-color

  '@babel/helpers@7.27.6':
    dependencies:
      '@babel/template': 7.27.2
      '@babel/types': 7.27.6

  '@babel/parser@7.27.5':
    dependencies:
      '@babel/types': 7.27.6

  '@babel/plugin-bugfix-firefox-class-in-computed-class-key@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/traverse': 7.27.4
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-bugfix-safari-class-field-initializer-scope@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/helper-skip-transparent-expression-wrappers': 7.27.1
      '@babel/plugin-transform-optional-chaining': 7.27.1(@babel/core@7.27.4)
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/traverse': 7.27.4
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-proposal-object-rest-spread@7.20.7(@babel/core@7.27.4)':
    dependencies:
      '@babel/compat-data': 7.27.5
      '@babel/core': 7.27.4
      '@babel/helper-compilation-targets': 7.27.2
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/plugin-syntax-object-rest-spread': 7.8.3(@babel/core@7.27.4)
      '@babel/plugin-transform-parameters': 7.27.1(@babel/core@7.27.4)

  '@babel/plugin-proposal-private-property-in-object@7.21.0-placeholder-for-preset-env.2(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4

  '@babel/plugin-syntax-dynamic-import@7.8.3(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-syntax-import-assertions@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-syntax-import-attributes@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-syntax-object-rest-spread@7.8.3(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-syntax-unicode-sets-regex@7.18.6(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-create-regexp-features-plugin': 7.27.1(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-arrow-functions@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-async-generator-functions@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/helper-remap-async-to-generator': 7.27.1(@babel/core@7.27.4)
      '@babel/traverse': 7.27.4
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-async-to-generator@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-module-imports': 7.27.1
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/helper-remap-async-to-generator': 7.27.1(@babel/core@7.27.4)
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-block-scoped-functions@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-block-scoping@7.27.5(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-class-properties@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-create-class-features-plugin': 7.27.1(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-class-static-block@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-create-class-features-plugin': 7.27.1(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-classes@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-annotate-as-pure': 7.27.3
      '@babel/helper-compilation-targets': 7.27.2
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/helper-replace-supers': 7.27.1(@babel/core@7.27.4)
      '@babel/traverse': 7.27.4
      globals: 11.12.0
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-computed-properties@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/template': 7.27.2

  '@babel/plugin-transform-destructuring@7.27.3(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-dotall-regex@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-create-regexp-features-plugin': 7.27.1(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-duplicate-keys@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-duplicate-named-capturing-groups-regex@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-create-regexp-features-plugin': 7.27.1(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-dynamic-import@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-exponentiation-operator@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-export-namespace-from@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-for-of@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/helper-skip-transparent-expression-wrappers': 7.27.1
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-function-name@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-compilation-targets': 7.27.2
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/traverse': 7.27.4
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-json-strings@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-literals@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-logical-assignment-operators@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-member-expression-literals@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-modules-amd@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-module-transforms': 7.27.3(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-modules-commonjs@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-module-transforms': 7.27.3(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-modules-systemjs@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-module-transforms': 7.27.3(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/helper-validator-identifier': 7.27.1
      '@babel/traverse': 7.27.4
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-modules-umd@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-module-transforms': 7.27.3(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-named-capturing-groups-regex@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-create-regexp-features-plugin': 7.27.1(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-new-target@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-nullish-coalescing-operator@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-numeric-separator@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-object-rest-spread@7.27.3(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-compilation-targets': 7.27.2
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/plugin-transform-destructuring': 7.27.3(@babel/core@7.27.4)
      '@babel/plugin-transform-parameters': 7.27.1(@babel/core@7.27.4)

  '@babel/plugin-transform-object-super@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/helper-replace-supers': 7.27.1(@babel/core@7.27.4)
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-optional-catch-binding@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-optional-chaining@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/helper-skip-transparent-expression-wrappers': 7.27.1
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-parameters@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-private-methods@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-create-class-features-plugin': 7.27.1(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-private-property-in-object@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-annotate-as-pure': 7.27.3
      '@babel/helper-create-class-features-plugin': 7.27.1(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-property-literals@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-regenerator@7.27.5(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-regexp-modifiers@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-create-regexp-features-plugin': 7.27.1(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-reserved-words@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-runtime@7.27.4(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-module-imports': 7.27.1
      '@babel/helper-plugin-utils': 7.27.1
      babel-plugin-polyfill-corejs2: 0.4.13(@babel/core@7.27.4)
      babel-plugin-polyfill-corejs3: 0.11.1(@babel/core@7.27.4)
      babel-plugin-polyfill-regenerator: 0.6.4(@babel/core@7.27.4)
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-shorthand-properties@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-spread@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/helper-skip-transparent-expression-wrappers': 7.27.1
    transitivePeerDependencies:
      - supports-color

  '@babel/plugin-transform-sticky-regex@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-template-literals@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-typeof-symbol@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-unicode-escapes@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-unicode-property-regex@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-create-regexp-features-plugin': 7.27.1(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-unicode-regex@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-create-regexp-features-plugin': 7.27.1(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/plugin-transform-unicode-sets-regex@7.27.1(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-create-regexp-features-plugin': 7.27.1(@babel/core@7.27.4)
      '@babel/helper-plugin-utils': 7.27.1

  '@babel/preset-env@7.27.2(@babel/core@7.27.4)':
    dependencies:
      '@babel/compat-data': 7.27.5
      '@babel/core': 7.27.4
      '@babel/helper-compilation-targets': 7.27.2
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/helper-validator-option': 7.27.1
      '@babel/plugin-bugfix-firefox-class-in-computed-class-key': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-bugfix-safari-class-field-initializer-scope': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-proposal-private-property-in-object': 7.21.0-placeholder-for-preset-env.2(@babel/core@7.27.4)
      '@babel/plugin-syntax-import-assertions': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-syntax-import-attributes': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-syntax-unicode-sets-regex': 7.18.6(@babel/core@7.27.4)
      '@babel/plugin-transform-arrow-functions': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-async-generator-functions': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-async-to-generator': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-block-scoped-functions': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-block-scoping': 7.27.5(@babel/core@7.27.4)
      '@babel/plugin-transform-class-properties': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-class-static-block': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-classes': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-computed-properties': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-destructuring': 7.27.3(@babel/core@7.27.4)
      '@babel/plugin-transform-dotall-regex': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-duplicate-keys': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-duplicate-named-capturing-groups-regex': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-dynamic-import': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-exponentiation-operator': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-export-namespace-from': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-for-of': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-function-name': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-json-strings': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-literals': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-logical-assignment-operators': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-member-expression-literals': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-modules-amd': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-modules-commonjs': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-modules-systemjs': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-modules-umd': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-named-capturing-groups-regex': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-new-target': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-nullish-coalescing-operator': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-numeric-separator': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-object-rest-spread': 7.27.3(@babel/core@7.27.4)
      '@babel/plugin-transform-object-super': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-optional-catch-binding': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-optional-chaining': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-parameters': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-private-methods': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-private-property-in-object': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-property-literals': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-regenerator': 7.27.5(@babel/core@7.27.4)
      '@babel/plugin-transform-regexp-modifiers': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-reserved-words': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-shorthand-properties': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-spread': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-sticky-regex': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-template-literals': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-typeof-symbol': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-unicode-escapes': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-unicode-property-regex': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-unicode-regex': 7.27.1(@babel/core@7.27.4)
      '@babel/plugin-transform-unicode-sets-regex': 7.27.1(@babel/core@7.27.4)
      '@babel/preset-modules': 0.1.6-no-external-plugins(@babel/core@7.27.4)
      babel-plugin-polyfill-corejs2: 0.4.13(@babel/core@7.27.4)
      babel-plugin-polyfill-corejs3: 0.11.1(@babel/core@7.27.4)
      babel-plugin-polyfill-regenerator: 0.6.4(@babel/core@7.27.4)
      core-js-compat: 3.43.0
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  '@babel/preset-modules@0.1.6-no-external-plugins(@babel/core@7.27.4)':
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-plugin-utils': 7.27.1
      '@babel/types': 7.27.6
      esutils: 2.0.3

  '@babel/runtime@7.27.6': {}

  '@babel/template@7.27.2':
    dependencies:
      '@babel/code-frame': 7.27.1
      '@babel/parser': 7.27.5
      '@babel/types': 7.27.6

  '@babel/traverse@7.27.4':
    dependencies:
      '@babel/code-frame': 7.27.1
      '@babel/generator': 7.27.5
      '@babel/parser': 7.27.5
      '@babel/template': 7.27.2
      '@babel/types': 7.27.6
      debug: 4.4.1
      globals: 11.12.0
    transitivePeerDependencies:
      - supports-color

  '@babel/types@7.27.6':
    dependencies:
      '@babel/helper-string-parser': 7.27.1
      '@babel/helper-validator-identifier': 7.27.1

  '@codemirror/autocomplete@6.18.6':
    dependencies:
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@codemirror/view': 6.37.1
      '@lezer/common': 1.2.3

  '@codemirror/commands@6.8.1':
    dependencies:
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@codemirror/view': 6.37.1
      '@lezer/common': 1.2.3

  '@codemirror/lang-angular@0.1.4':
    dependencies:
      '@codemirror/lang-html': 6.4.9
      '@codemirror/lang-javascript': 6.2.4
      '@codemirror/language': 6.11.1
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@codemirror/lang-cpp@6.0.2':
    dependencies:
      '@codemirror/language': 6.11.1
      '@lezer/cpp': 1.1.3

  '@codemirror/lang-css@6.3.1':
    dependencies:
      '@codemirror/autocomplete': 6.18.6
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@lezer/common': 1.2.3
      '@lezer/css': 1.2.1

  '@codemirror/lang-go@6.0.1':
    dependencies:
      '@codemirror/autocomplete': 6.18.6
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@lezer/common': 1.2.3
      '@lezer/go': 1.0.1

  '@codemirror/lang-html@6.4.9':
    dependencies:
      '@codemirror/autocomplete': 6.18.6
      '@codemirror/lang-css': 6.3.1
      '@codemirror/lang-javascript': 6.2.4
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@codemirror/view': 6.37.1
      '@lezer/common': 1.2.3
      '@lezer/css': 1.2.1
      '@lezer/html': 1.3.10

  '@codemirror/lang-java@6.0.1':
    dependencies:
      '@codemirror/language': 6.11.1
      '@lezer/java': 1.1.3

  '@codemirror/lang-javascript@6.2.4':
    dependencies:
      '@codemirror/autocomplete': 6.18.6
      '@codemirror/language': 6.11.1
      '@codemirror/lint': 6.8.5
      '@codemirror/state': 6.5.2
      '@codemirror/view': 6.37.1
      '@lezer/common': 1.2.3
      '@lezer/javascript': 1.5.1

  '@codemirror/lang-json@6.0.1':
    dependencies:
      '@codemirror/language': 6.11.1
      '@lezer/json': 1.0.3

  '@codemirror/lang-less@6.0.2':
    dependencies:
      '@codemirror/lang-css': 6.3.1
      '@codemirror/language': 6.11.1
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@codemirror/lang-liquid@6.2.3':
    dependencies:
      '@codemirror/autocomplete': 6.18.6
      '@codemirror/lang-html': 6.4.9
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@codemirror/view': 6.37.1
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@codemirror/lang-markdown@6.3.2':
    dependencies:
      '@codemirror/autocomplete': 6.18.6
      '@codemirror/lang-html': 6.4.9
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@codemirror/view': 6.37.1
      '@lezer/common': 1.2.3
      '@lezer/markdown': 1.4.3

  '@codemirror/lang-php@6.0.1':
    dependencies:
      '@codemirror/lang-html': 6.4.9
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@lezer/common': 1.2.3
      '@lezer/php': 1.0.2

  '@codemirror/lang-python@6.2.1':
    dependencies:
      '@codemirror/autocomplete': 6.18.6
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@lezer/common': 1.2.3
      '@lezer/python': 1.1.18

  '@codemirror/lang-rust@6.0.1':
    dependencies:
      '@codemirror/language': 6.11.1
      '@lezer/rust': 1.0.2

  '@codemirror/lang-sass@6.0.2':
    dependencies:
      '@codemirror/lang-css': 6.3.1
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@lezer/common': 1.2.3
      '@lezer/sass': 1.1.0

  '@codemirror/lang-sql@6.9.0':
    dependencies:
      '@codemirror/autocomplete': 6.18.6
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@codemirror/lang-vue@0.1.3':
    dependencies:
      '@codemirror/lang-html': 6.4.9
      '@codemirror/lang-javascript': 6.2.4
      '@codemirror/language': 6.11.1
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@codemirror/lang-wast@6.0.2':
    dependencies:
      '@codemirror/language': 6.11.1
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@codemirror/lang-xml@6.1.0':
    dependencies:
      '@codemirror/autocomplete': 6.18.6
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@codemirror/view': 6.37.1
      '@lezer/common': 1.2.3
      '@lezer/xml': 1.0.6

  '@codemirror/lang-yaml@6.1.2':
    dependencies:
      '@codemirror/autocomplete': 6.18.6
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2
      '@lezer/yaml': 1.0.3

  '@codemirror/language-data@6.5.1':
    dependencies:
      '@codemirror/lang-angular': 0.1.4
      '@codemirror/lang-cpp': 6.0.2
      '@codemirror/lang-css': 6.3.1
      '@codemirror/lang-go': 6.0.1
      '@codemirror/lang-html': 6.4.9
      '@codemirror/lang-java': 6.0.1
      '@codemirror/lang-javascript': 6.2.4
      '@codemirror/lang-json': 6.0.1
      '@codemirror/lang-less': 6.0.2
      '@codemirror/lang-liquid': 6.2.3
      '@codemirror/lang-markdown': 6.3.2
      '@codemirror/lang-php': 6.0.1
      '@codemirror/lang-python': 6.2.1
      '@codemirror/lang-rust': 6.0.1
      '@codemirror/lang-sass': 6.0.2
      '@codemirror/lang-sql': 6.9.0
      '@codemirror/lang-vue': 0.1.3
      '@codemirror/lang-wast': 6.0.2
      '@codemirror/lang-xml': 6.1.0
      '@codemirror/lang-yaml': 6.1.2
      '@codemirror/language': 6.11.1
      '@codemirror/legacy-modes': 6.5.1

  '@codemirror/language@6.11.1':
    dependencies:
      '@codemirror/state': 6.5.2
      '@codemirror/view': 6.37.1
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2
      style-mod: 4.1.2

  '@codemirror/legacy-modes@6.5.1':
    dependencies:
      '@codemirror/language': 6.11.1

  '@codemirror/lint@6.8.5':
    dependencies:
      '@codemirror/state': 6.5.2
      '@codemirror/view': 6.37.1
      crelt: 1.0.6

  '@codemirror/search@6.5.11':
    dependencies:
      '@codemirror/state': 6.5.2
      '@codemirror/view': 6.37.1
      crelt: 1.0.6

  '@codemirror/state@6.5.2':
    dependencies:
      '@marijn/find-cluster-break': 1.0.2

  '@codemirror/theme-one-dark@6.1.2':
    dependencies:
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@codemirror/view': 6.37.1
      '@lezer/highlight': 1.2.1

  '@codemirror/view@6.37.1':
    dependencies:
      '@codemirror/state': 6.5.2
      crelt: 1.0.6
      style-mod: 4.1.2
      w3c-keyname: 2.2.8

  '@colors/colors@1.5.0':
    optional: true

  '@discoveryjs/json-ext@0.5.7': {}

  '@emmetio/abbreviation@2.3.3':
    dependencies:
      '@emmetio/scanner': 1.0.4

  '@emmetio/css-abbreviation@2.1.8':
    dependencies:
      '@emmetio/scanner': 1.0.4

  '@emmetio/css-parser@0.4.0':
    dependencies:
      '@emmetio/stream-reader': 2.2.0
      '@emmetio/stream-reader-utils': 0.1.0

  '@emmetio/html-matcher@1.3.0':
    dependencies:
      '@emmetio/scanner': 1.0.4

  '@emmetio/scanner@1.0.4': {}

  '@emmetio/stream-reader-utils@0.1.0': {}

  '@emmetio/stream-reader@2.2.0': {}

  '@floating-ui/core@1.7.1':
    dependencies:
      '@floating-ui/utils': 0.2.9

  '@floating-ui/dom@1.7.1':
    dependencies:
      '@floating-ui/core': 1.7.1
      '@floating-ui/utils': 0.2.9

  '@floating-ui/utils@0.2.9': {}

  '@fontsource/exo-2@5.2.6': {}

  '@johnsoncodehk/pug-beautify@0.2.2': {}

  '@jridgewell/gen-mapping@0.3.8':
    dependencies:
      '@jridgewell/set-array': 1.2.1
      '@jridgewell/sourcemap-codec': 1.5.0
      '@jridgewell/trace-mapping': 0.3.25

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/set-array@1.2.1': {}

  '@jridgewell/source-map@0.3.6':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.8
      '@jridgewell/trace-mapping': 0.3.25

  '@jridgewell/sourcemap-codec@1.5.0': {}

  '@jridgewell/trace-mapping@0.3.25':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.0

  '@leichtgewicht/ip-codec@2.0.5': {}

  '@lezer/common@1.2.3': {}

  '@lezer/cpp@1.1.3':
    dependencies:
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@lezer/css@1.2.1':
    dependencies:
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@lezer/go@1.0.1':
    dependencies:
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@lezer/highlight@1.2.1':
    dependencies:
      '@lezer/common': 1.2.3

  '@lezer/html@1.3.10':
    dependencies:
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@lezer/java@1.1.3':
    dependencies:
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@lezer/javascript@1.5.1':
    dependencies:
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@lezer/json@1.0.3':
    dependencies:
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@lezer/lr@1.4.2':
    dependencies:
      '@lezer/common': 1.2.3

  '@lezer/markdown@1.4.3':
    dependencies:
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1

  '@lezer/php@1.0.2':
    dependencies:
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@lezer/python@1.1.18':
    dependencies:
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@lezer/rust@1.0.2':
    dependencies:
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@lezer/sass@1.1.0':
    dependencies:
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@lezer/xml@1.0.6':
    dependencies:
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@lezer/yaml@1.0.3':
    dependencies:
      '@lezer/common': 1.2.3
      '@lezer/highlight': 1.2.1
      '@lezer/lr': 1.4.2

  '@marijn/find-cluster-break@1.0.2': {}

  '@milkdown/components@7.13.1(@codemirror/language@6.11.1)(@codemirror/state@6.5.2)(@codemirror/view@6.37.1)(typescript@5.8.3)':
    dependencies:
      '@codemirror/language': 6.11.1
      '@codemirror/state': 6.5.2
      '@codemirror/view': 6.37.1
      '@floating-ui/dom': 1.7.1
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/exception': 7.13.1
      '@milkdown/plugin-tooltip': 7.13.1
      '@milkdown/preset-commonmark': 7.13.1
      '@milkdown/preset-gfm': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/transformer': 7.13.1
      '@milkdown/utils': 7.13.1
      '@types/lodash.debounce': 4.0.9
      '@types/lodash.throttle': 4.1.9
      clsx: 2.1.1
      dompurify: 3.2.6
      lodash.debounce: 4.0.8
      lodash.throttle: 4.1.1
      nanoid: 5.1.5
      tslib: 2.8.1
      unist-util-visit: 5.0.0
      vue: 3.5.16(typescript@5.8.3)
    transitivePeerDependencies:
      - supports-color
      - typescript

  '@milkdown/core@7.13.1':
    dependencies:
      '@milkdown/ctx': 7.13.1
      '@milkdown/exception': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/transformer': 7.13.1
      remark-parse: 11.0.0
      remark-stringify: 11.0.0
      tslib: 2.8.1
      unified: 11.0.5
    transitivePeerDependencies:
      - supports-color

  '@milkdown/crepe@7.13.1(prosemirror-model@1.25.1)(prosemirror-state@1.4.3)(prosemirror-view@1.40.0)(typescript@5.8.3)':
    dependencies:
      '@codemirror/commands': 6.8.1
      '@codemirror/language': 6.11.1
      '@codemirror/language-data': 6.5.1
      '@codemirror/state': 6.5.2
      '@codemirror/theme-one-dark': 6.1.2
      '@codemirror/view': 6.37.1
      '@milkdown/kit': 7.13.1(@codemirror/language@6.11.1)(@codemirror/state@6.5.2)(@codemirror/view@6.37.1)(typescript@5.8.3)
      '@types/lodash-es': 4.17.12
      clsx: 2.1.1
      codemirror: 6.0.1
      katex: 0.16.22
      lodash-es: 4.17.21
      nanoid: 5.1.5
      prosemirror-virtual-cursor: 0.4.2(prosemirror-model@1.25.1)(prosemirror-state@1.4.3)(prosemirror-view@1.40.0)
      remark-math: 6.0.0
      tslib: 2.8.1
      unist-util-visit: 5.0.0
      vue: 3.5.16(typescript@5.8.3)
    transitivePeerDependencies:
      - prosemirror-model
      - prosemirror-state
      - prosemirror-view
      - supports-color
      - typescript

  '@milkdown/ctx@7.13.1':
    dependencies:
      '@milkdown/exception': 7.13.1
      tslib: 2.8.1

  '@milkdown/exception@7.13.1':
    dependencies:
      tslib: 2.8.1

  '@milkdown/kit@7.13.1(@codemirror/language@6.11.1)(@codemirror/state@6.5.2)(@codemirror/view@6.37.1)(typescript@5.8.3)':
    dependencies:
      '@milkdown/components': 7.13.1(@codemirror/language@6.11.1)(@codemirror/state@6.5.2)(@codemirror/view@6.37.1)(typescript@5.8.3)
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/plugin-block': 7.13.1
      '@milkdown/plugin-clipboard': 7.13.1
      '@milkdown/plugin-cursor': 7.13.1
      '@milkdown/plugin-history': 7.13.1
      '@milkdown/plugin-indent': 7.13.1
      '@milkdown/plugin-listener': 7.13.1
      '@milkdown/plugin-slash': 7.13.1
      '@milkdown/plugin-tooltip': 7.13.1
      '@milkdown/plugin-trailing': 7.13.1
      '@milkdown/plugin-upload': 7.13.1
      '@milkdown/preset-commonmark': 7.13.1
      '@milkdown/preset-gfm': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/transformer': 7.13.1
      '@milkdown/utils': 7.13.1
      tslib: 2.8.1
    transitivePeerDependencies:
      - '@codemirror/language'
      - '@codemirror/state'
      - '@codemirror/view'
      - supports-color
      - typescript

  '@milkdown/plugin-block@7.13.1':
    dependencies:
      '@floating-ui/dom': 1.7.1
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/exception': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/utils': 7.13.1
      '@types/lodash.throttle': 4.1.9
      lodash.throttle: 4.1.1
      tslib: 2.8.1
    transitivePeerDependencies:
      - supports-color

  '@milkdown/plugin-clipboard@7.13.1':
    dependencies:
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/utils': 7.13.1
      tslib: 2.8.1
    transitivePeerDependencies:
      - supports-color

  '@milkdown/plugin-cursor@7.13.1':
    dependencies:
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/utils': 7.13.1
      tslib: 2.8.1
    transitivePeerDependencies:
      - supports-color

  '@milkdown/plugin-history@7.13.1':
    dependencies:
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/utils': 7.13.1
      tslib: 2.8.1
    transitivePeerDependencies:
      - supports-color

  '@milkdown/plugin-indent@7.13.1':
    dependencies:
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/utils': 7.13.1
      tslib: 2.8.1
    transitivePeerDependencies:
      - supports-color

  '@milkdown/plugin-listener@7.13.1':
    dependencies:
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/utils': 7.13.1
      '@types/lodash.debounce': 4.0.9
      lodash.debounce: 4.0.8
      tslib: 2.8.1
    transitivePeerDependencies:
      - supports-color

  '@milkdown/plugin-prism@7.13.1':
    dependencies:
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/utils': 7.13.1
      '@types/hast': 3.0.4
      refractor: 5.0.0
      tslib: 2.8.1
    transitivePeerDependencies:
      - supports-color

  '@milkdown/plugin-slash@7.13.1':
    dependencies:
      '@floating-ui/dom': 1.7.1
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/exception': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/utils': 7.13.1
      '@types/lodash.debounce': 4.0.9
      lodash.debounce: 4.0.8
      tslib: 2.8.1
    transitivePeerDependencies:
      - supports-color

  '@milkdown/plugin-tooltip@7.13.1':
    dependencies:
      '@floating-ui/dom': 1.7.1
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/exception': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/utils': 7.13.1
      '@types/lodash.throttle': 4.1.9
      lodash.throttle: 4.1.1
      tslib: 2.8.1
    transitivePeerDependencies:
      - supports-color

  '@milkdown/plugin-trailing@7.13.1':
    dependencies:
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/utils': 7.13.1
      tslib: 2.8.1
    transitivePeerDependencies:
      - supports-color

  '@milkdown/plugin-upload@7.13.1':
    dependencies:
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/exception': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/utils': 7.13.1
      tslib: 2.8.1
    transitivePeerDependencies:
      - supports-color

  '@milkdown/preset-commonmark@7.13.1':
    dependencies:
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/exception': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/transformer': 7.13.1
      '@milkdown/utils': 7.13.1
      remark-inline-links: 7.0.0
      tslib: 2.8.1
      unist-util-visit: 5.0.0
      unist-util-visit-parents: 6.0.1
    transitivePeerDependencies:
      - supports-color

  '@milkdown/preset-gfm@7.13.1':
    dependencies:
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/exception': 7.13.1
      '@milkdown/preset-commonmark': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/transformer': 7.13.1
      '@milkdown/utils': 7.13.1
      prosemirror-safari-ime-span: 1.0.2
      remark-gfm: 4.0.1
      tslib: 2.8.1
    transitivePeerDependencies:
      - supports-color

  '@milkdown/prose@7.13.1':
    dependencies:
      '@milkdown/exception': 7.13.1
      prosemirror-changeset: 2.3.1
      prosemirror-commands: 1.7.1
      prosemirror-dropcursor: 1.8.2
      prosemirror-gapcursor: 1.3.2
      prosemirror-history: 1.4.1
      prosemirror-inputrules: 1.5.0
      prosemirror-keymap: 1.2.3
      prosemirror-model: 1.25.1
      prosemirror-schema-list: 1.5.1
      prosemirror-state: 1.4.3
      prosemirror-tables: 1.7.1
      prosemirror-transform: 1.10.4
      prosemirror-view: 1.40.0
      tslib: 2.8.1

  '@milkdown/transformer@7.13.1':
    dependencies:
      '@milkdown/exception': 7.13.1
      '@milkdown/prose': 7.13.1
      remark: 15.0.1
      remark-parse: 11.0.0
      remark-stringify: 11.0.0
      tslib: 2.8.1
      unified: 11.0.5
    transitivePeerDependencies:
      - supports-color

  '@milkdown/utils@7.13.1':
    dependencies:
      '@milkdown/core': 7.13.1
      '@milkdown/ctx': 7.13.1
      '@milkdown/exception': 7.13.1
      '@milkdown/prose': 7.13.1
      '@milkdown/transformer': 7.13.1
      nanoid: 5.1.5
      tslib: 2.8.1
    transitivePeerDependencies:
      - supports-color

  '@milkdown/vue@7.13.1(@codemirror/language@6.11.1)(@codemirror/state@6.5.2)(@codemirror/view@6.37.1)(prosemirror-model@1.25.1)(prosemirror-state@1.4.3)(prosemirror-view@1.40.0)(typescript@5.8.3)(vue@3.5.16(typescript@5.8.3))':
    dependencies:
      '@milkdown/crepe': 7.13.1(prosemirror-model@1.25.1)(prosemirror-state@1.4.3)(prosemirror-view@1.40.0)(typescript@5.8.3)
      '@milkdown/kit': 7.13.1(@codemirror/language@6.11.1)(@codemirror/state@6.5.2)(@codemirror/view@6.37.1)(typescript@5.8.3)
      tslib: 2.8.1
      vue: 3.5.16(typescript@5.8.3)
    transitivePeerDependencies:
      - '@codemirror/language'
      - '@codemirror/state'
      - '@codemirror/view'
      - prosemirror-model
      - prosemirror-state
      - prosemirror-view
      - supports-color
      - typescript

  '@nodelib/fs.scandir@2.1.5':
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0

  '@nodelib/fs.stat@2.0.5': {}

  '@nodelib/fs.walk@1.2.8':
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.19.1

  '@parcel/watcher-android-arm64@2.5.1':
    optional: true

  '@parcel/watcher-darwin-arm64@2.5.1':
    optional: true

  '@parcel/watcher-darwin-x64@2.5.1':
    optional: true

  '@parcel/watcher-freebsd-x64@2.5.1':
    optional: true

  '@parcel/watcher-linux-arm-glibc@2.5.1':
    optional: true

  '@parcel/watcher-linux-arm-musl@2.5.1':
    optional: true

  '@parcel/watcher-linux-arm64-glibc@2.5.1':
    optional: true

  '@parcel/watcher-linux-arm64-musl@2.5.1':
    optional: true

  '@parcel/watcher-linux-x64-glibc@2.5.1':
    optional: true

  '@parcel/watcher-linux-x64-musl@2.5.1':
    optional: true

  '@parcel/watcher-win32-arm64@2.5.1':
    optional: true

  '@parcel/watcher-win32-ia32@2.5.1':
    optional: true

  '@parcel/watcher-win32-x64@2.5.1':
    optional: true

  '@parcel/watcher@2.5.1':
    dependencies:
      detect-libc: 1.0.3
      is-glob: 4.0.3
      micromatch: 4.0.8
      node-addon-api: 7.1.1
    optionalDependencies:
      '@parcel/watcher-android-arm64': 2.5.1
      '@parcel/watcher-darwin-arm64': 2.5.1
      '@parcel/watcher-darwin-x64': 2.5.1
      '@parcel/watcher-freebsd-x64': 2.5.1
      '@parcel/watcher-linux-arm-glibc': 2.5.1
      '@parcel/watcher-linux-arm-musl': 2.5.1
      '@parcel/watcher-linux-arm64-glibc': 2.5.1
      '@parcel/watcher-linux-arm64-musl': 2.5.1
      '@parcel/watcher-linux-x64-glibc': 2.5.1
      '@parcel/watcher-linux-x64-musl': 2.5.1
      '@parcel/watcher-win32-arm64': 2.5.1
      '@parcel/watcher-win32-ia32': 2.5.1
      '@parcel/watcher-win32-x64': 2.5.1
    optional: true

  '@trysound/sax@0.2.0': {}

  '@types/babel__core@7.20.5':
    dependencies:
      '@babel/parser': 7.27.5
      '@babel/types': 7.27.6
      '@types/babel__generator': 7.27.0
      '@types/babel__template': 7.4.4
      '@types/babel__traverse': 7.20.7

  '@types/babel__generator@7.27.0':
    dependencies:
      '@babel/types': 7.27.6

  '@types/babel__template@7.4.4':
    dependencies:
      '@babel/parser': 7.27.5
      '@babel/types': 7.27.6

  '@types/babel__traverse@7.20.7':
    dependencies:
      '@babel/types': 7.27.6

  '@types/backbone@1.4.15':
    dependencies:
      '@types/jquery': 3.5.32
      '@types/underscore': 1.13.0

  '@types/body-parser@1.19.6':
    dependencies:
      '@types/connect': 3.4.38
      '@types/node': 24.0.0

  '@types/bonjour@3.5.13':
    dependencies:
      '@types/node': 24.0.0

  '@types/clean-css@4.2.11':
    dependencies:
      '@types/node': 24.0.0
      source-map: 0.6.1

  '@types/connect-history-api-fallback@1.5.4':
    dependencies:
      '@types/express-serve-static-core': 5.0.6
      '@types/node': 24.0.0

  '@types/connect@3.4.38':
    dependencies:
      '@types/node': 24.0.0

  '@types/debug@4.1.12':
    dependencies:
      '@types/ms': 2.1.0

  '@types/eslint-scope@3.7.7':
    dependencies:
      '@types/eslint': 9.6.1
      '@types/estree': 1.0.8

  '@types/eslint@9.6.1':
    dependencies:
      '@types/estree': 1.0.8
      '@types/json-schema': 7.0.15

  '@types/estree@1.0.8': {}

  '@types/express-serve-static-core@4.19.6':
    dependencies:
      '@types/node': 24.0.0
      '@types/qs': 6.14.0
      '@types/range-parser': 1.2.7
      '@types/send': 0.17.5

  '@types/express-serve-static-core@5.0.6':
    dependencies:
      '@types/node': 24.0.0
      '@types/qs': 6.14.0
      '@types/range-parser': 1.2.7
      '@types/send': 0.17.5

  '@types/express@4.17.23':
    dependencies:
      '@types/body-parser': 1.19.6
      '@types/express-serve-static-core': 4.19.6
      '@types/qs': 6.14.0
      '@types/serve-static': 1.15.8

  '@types/glob@7.2.0':
    dependencies:
      '@types/minimatch': 5.1.2
      '@types/node': 24.0.0

  '@types/hast@3.0.4':
    dependencies:
      '@types/unist': 3.0.3

  '@types/http-errors@2.0.5': {}

  '@types/http-proxy@1.17.16':
    dependencies:
      '@types/node': 24.0.0

  '@types/imagemin-gifsicle@7.0.4':
    dependencies:
      '@types/imagemin': 9.0.1

  '@types/imagemin-mozjpeg@8.0.4':
    dependencies:
      '@types/imagemin': 9.0.1

  '@types/imagemin-optipng@5.2.4':
    dependencies:
      '@types/imagemin': 9.0.1

  '@types/imagemin-svgo@8.0.1':
    dependencies:
      '@types/imagemin': 9.0.1
      '@types/svgo': 1.3.6

  '@types/imagemin@9.0.1':
    dependencies:
      '@types/node': 24.0.0

  '@types/jquery@3.5.32':
    dependencies:
      '@types/sizzle': 2.3.9

  '@types/json-schema@7.0.15': {}

  '@types/katex@0.16.7': {}

  '@types/lodash-es@4.17.12':
    dependencies:
      '@types/lodash': 4.17.17

  '@types/lodash.debounce@4.0.9':
    dependencies:
      '@types/lodash': 4.17.17

  '@types/lodash.throttle@4.1.9':
    dependencies:
      '@types/lodash': 4.17.17

  '@types/lodash@4.17.17': {}

  '@types/mdast@4.0.4':
    dependencies:
      '@types/unist': 3.0.3

  '@types/mime@1.3.5': {}

  '@types/minimatch@5.1.2': {}

  '@types/ms@2.1.0': {}

  '@types/node-forge@1.3.11':
    dependencies:
      '@types/node': 24.0.0

  '@types/node@24.0.0':
    dependencies:
      undici-types: 7.8.0

  '@types/parse-json@4.0.2': {}

  '@types/prismjs@1.26.5': {}

  '@types/qs@6.14.0': {}

  '@types/range-parser@1.2.7': {}

  '@types/retry@0.12.0': {}

  '@types/send@0.17.5':
    dependencies:
      '@types/mime': 1.3.5
      '@types/node': 24.0.0

  '@types/serve-index@1.9.4':
    dependencies:
      '@types/express': 4.17.23

  '@types/serve-static@1.15.8':
    dependencies:
      '@types/http-errors': 2.0.5
      '@types/node': 24.0.0
      '@types/send': 0.17.5

  '@types/sizzle@2.3.9': {}

  '@types/sockjs@0.3.36':
    dependencies:
      '@types/node': 24.0.0

  '@types/sortablejs@1.15.8': {}

  '@types/svgo@1.3.6': {}

  '@types/trusted-types@2.0.7':
    optional: true

  '@types/underscore@1.13.0': {}

  '@types/unist@2.0.11': {}

  '@types/unist@3.0.3': {}

  '@types/ws@8.18.1':
    dependencies:
      '@types/node': 24.0.0

  '@volar/language-core@2.4.14':
    dependencies:
      '@volar/source-map': 2.4.14

  '@volar/language-server@2.4.14':
    dependencies:
      '@volar/language-core': 2.4.14
      '@volar/language-service': 2.4.14
      '@volar/typescript': 2.4.14
      path-browserify: 1.0.1
      request-light: 0.7.0
      vscode-languageserver: 9.0.1
      vscode-languageserver-protocol: 3.17.5
      vscode-languageserver-textdocument: 1.0.12
      vscode-uri: 3.1.0

  '@volar/language-service@2.4.14':
    dependencies:
      '@volar/language-core': 2.4.14
      vscode-languageserver-protocol: 3.17.5
      vscode-languageserver-textdocument: 1.0.12
      vscode-uri: 3.1.0

  '@volar/source-map@2.4.14': {}

  '@volar/test-utils@2.4.14':
    dependencies:
      '@volar/language-core': 2.4.14
      '@volar/language-server': 2.4.14
      vscode-languageserver-textdocument: 1.0.12
      vscode-uri: 3.1.0

  '@volar/typescript@2.4.14':
    dependencies:
      '@volar/language-core': 2.4.14
      path-browserify: 1.0.1
      vscode-uri: 3.1.0

  '@vscode/emmet-helper@2.11.0':
    dependencies:
      emmet: 2.4.11
      jsonc-parser: 2.3.1
      vscode-languageserver-textdocument: 1.0.12
      vscode-languageserver-types: 3.17.5
      vscode-uri: 3.1.0

  '@vscode/l10n@0.0.18': {}

  '@vue/compiler-core@3.5.16':
    dependencies:
      '@babel/parser': 7.27.5
      '@vue/shared': 3.5.16
      entities: 4.5.0
      estree-walker: 2.0.2
      source-map-js: 1.2.1

  '@vue/compiler-dom@3.5.16':
    dependencies:
      '@vue/compiler-core': 3.5.16
      '@vue/shared': 3.5.16

  '@vue/compiler-sfc@3.5.16':
    dependencies:
      '@babel/parser': 7.27.5
      '@vue/compiler-core': 3.5.16
      '@vue/compiler-dom': 3.5.16
      '@vue/compiler-ssr': 3.5.16
      '@vue/shared': 3.5.16
      estree-walker: 2.0.2
      magic-string: 0.30.17
      postcss: 8.5.4
      source-map-js: 1.2.1

  '@vue/compiler-ssr@3.5.16':
    dependencies:
      '@vue/compiler-dom': 3.5.16
      '@vue/shared': 3.5.16

  '@vue/compiler-vue2@2.7.16':
    dependencies:
      de-indent: 1.0.2
      he: 1.2.0

  '@vue/devtools-api@6.6.4': {}

  '@vue/language-core@2.2.10(typescript@5.8.3)':
    dependencies:
      '@volar/language-core': 2.4.14
      '@vue/compiler-dom': 3.5.16
      '@vue/compiler-vue2': 2.7.16
      '@vue/shared': 3.5.16
      alien-signals: 1.0.13
      minimatch: 9.0.5
      muggle-string: 0.4.1
      path-browserify: 1.0.1
    optionalDependencies:
      typescript: 5.8.3

  '@vue/language-server@2.2.10(typescript@5.8.3)':
    dependencies:
      '@volar/language-core': 2.4.14
      '@volar/language-server': 2.4.14
      '@volar/test-utils': 2.4.14
      '@vue/language-core': 2.2.10(typescript@5.8.3)
      '@vue/language-service': 2.2.10(typescript@5.8.3)
      '@vue/typescript-plugin': 2.2.10(typescript@5.8.3)
      vscode-languageserver-protocol: 3.17.5
      vscode-uri: 3.1.0
    transitivePeerDependencies:
      - typescript

  '@vue/language-service@2.2.10(typescript@5.8.3)':
    dependencies:
      '@volar/language-core': 2.4.14
      '@volar/language-service': 2.4.14
      '@volar/typescript': 2.4.14
      '@vue/compiler-dom': 3.5.16
      '@vue/language-core': 2.2.10(typescript@5.8.3)
      '@vue/shared': 3.5.16
      '@vue/typescript-plugin': 2.2.10(typescript@5.8.3)
      alien-signals: 1.0.13
      path-browserify: 1.0.1
      volar-service-css: 0.0.62(@volar/language-service@2.4.14)
      volar-service-emmet: 0.0.62(@volar/language-service@2.4.14)
      volar-service-html: 0.0.62(@volar/language-service@2.4.14)
      volar-service-json: 0.0.62(@volar/language-service@2.4.14)
      volar-service-pug: 0.0.62
      volar-service-pug-beautify: 0.0.62(@volar/language-service@2.4.14)
      volar-service-typescript: 0.0.62(@volar/language-service@2.4.14)
      volar-service-typescript-twoslash-queries: 0.0.62(@volar/language-service@2.4.14)
      vscode-css-languageservice: 6.3.6
      vscode-html-languageservice: 5.5.0
      vscode-languageserver-textdocument: 1.0.12
      vscode-uri: 3.1.0
    transitivePeerDependencies:
      - typescript

  '@vue/reactivity@3.5.16':
    dependencies:
      '@vue/shared': 3.5.16

  '@vue/runtime-core@3.5.16':
    dependencies:
      '@vue/reactivity': 3.5.16
      '@vue/shared': 3.5.16

  '@vue/runtime-dom@3.5.16':
    dependencies:
      '@vue/reactivity': 3.5.16
      '@vue/runtime-core': 3.5.16
      '@vue/shared': 3.5.16
      csstype: 3.1.3

  '@vue/server-renderer@3.5.16(vue@3.5.16(typescript@5.8.3))':
    dependencies:
      '@vue/compiler-ssr': 3.5.16
      '@vue/shared': 3.5.16
      vue: 3.5.16(typescript@5.8.3)

  '@vue/shared@3.5.16': {}

  '@vue/typescript-plugin@2.2.10(typescript@5.8.3)':
    dependencies:
      '@volar/typescript': 2.4.14
      '@vue/language-core': 2.2.10(typescript@5.8.3)
      '@vue/shared': 3.5.16
    transitivePeerDependencies:
      - typescript

  '@webassemblyjs/ast@1.14.1':
    dependencies:
      '@webassemblyjs/helper-numbers': 1.13.2
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2

  '@webassemblyjs/floating-point-hex-parser@1.13.2': {}

  '@webassemblyjs/helper-api-error@1.13.2': {}

  '@webassemblyjs/helper-buffer@1.14.1': {}

  '@webassemblyjs/helper-numbers@1.13.2':
    dependencies:
      '@webassemblyjs/floating-point-hex-parser': 1.13.2
      '@webassemblyjs/helper-api-error': 1.13.2
      '@xtuc/long': 4.2.2

  '@webassemblyjs/helper-wasm-bytecode@1.13.2': {}

  '@webassemblyjs/helper-wasm-section@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-buffer': 1.14.1
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2
      '@webassemblyjs/wasm-gen': 1.14.1

  '@webassemblyjs/ieee754@1.13.2':
    dependencies:
      '@xtuc/ieee754': 1.2.0

  '@webassemblyjs/leb128@1.13.2':
    dependencies:
      '@xtuc/long': 4.2.2

  '@webassemblyjs/utf8@1.13.2': {}

  '@webassemblyjs/wasm-edit@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-buffer': 1.14.1
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2
      '@webassemblyjs/helper-wasm-section': 1.14.1
      '@webassemblyjs/wasm-gen': 1.14.1
      '@webassemblyjs/wasm-opt': 1.14.1
      '@webassemblyjs/wasm-parser': 1.14.1
      '@webassemblyjs/wast-printer': 1.14.1

  '@webassemblyjs/wasm-gen@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2
      '@webassemblyjs/ieee754': 1.13.2
      '@webassemblyjs/leb128': 1.13.2
      '@webassemblyjs/utf8': 1.13.2

  '@webassemblyjs/wasm-opt@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-buffer': 1.14.1
      '@webassemblyjs/wasm-gen': 1.14.1
      '@webassemblyjs/wasm-parser': 1.14.1

  '@webassemblyjs/wasm-parser@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-api-error': 1.13.2
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2
      '@webassemblyjs/ieee754': 1.13.2
      '@webassemblyjs/leb128': 1.13.2
      '@webassemblyjs/utf8': 1.13.2

  '@webassemblyjs/wast-printer@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@xtuc/long': 4.2.2

  '@webpack-cli/configtest@1.2.0(webpack-cli@4.10.0)(webpack@5.99.9)':
    dependencies:
      webpack: 5.99.9(webpack-cli@4.10.0)
      webpack-cli: 4.10.0(webpack@5.99.9)

  '@webpack-cli/info@1.5.0(webpack-cli@4.10.0)':
    dependencies:
      envinfo: 7.14.0
      webpack-cli: 4.10.0(webpack@5.99.9)

  '@webpack-cli/serve@1.7.0(webpack-cli@4.10.0)':
    dependencies:
      webpack-cli: 4.10.0(webpack@5.99.9)

  '@xtuc/ieee754@1.2.0': {}

  '@xtuc/long@4.2.2': {}

  accepts@1.3.8:
    dependencies:
      mime-types: 2.1.35
      negotiator: 0.6.3

  acorn@7.4.1: {}

  acorn@8.15.0: {}

  adjust-sourcemap-loader@4.0.0:
    dependencies:
      loader-utils: 2.0.4
      regex-parser: 2.3.1

  ajv-formats@2.1.1(ajv@8.17.1):
    optionalDependencies:
      ajv: 8.17.1

  ajv-keywords@3.5.2(ajv@6.12.6):
    dependencies:
      ajv: 6.12.6

  ajv-keywords@5.1.0(ajv@8.17.1):
    dependencies:
      ajv: 8.17.1
      fast-deep-equal: 3.1.3

  ajv@6.12.6:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-json-stable-stringify: 2.1.0
      json-schema-traverse: 0.4.1
      uri-js: 4.4.1

  ajv@8.17.1:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-uri: 3.0.6
      json-schema-traverse: 1.0.0
      require-from-string: 2.0.2

  alien-signals@1.0.13: {}

  ansi-html-community@0.0.8: {}

  ansi-regex@5.0.1: {}

  ansi-styles@4.3.0:
    dependencies:
      color-convert: 2.0.1

  anymatch@3.1.3:
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.1

  array-flatten@1.1.1: {}

  array-union@2.1.0: {}

  asn1.js@4.10.1:
    dependencies:
      bn.js: 4.12.2
      inherits: 2.0.4
      minimalistic-assert: 1.0.1

  assert@1.5.1:
    dependencies:
      object.assign: 4.1.7
      util: 0.10.4

  asynckit@0.4.0: {}

  autoprefixer@10.4.21(postcss@8.5.4):
    dependencies:
      browserslist: 4.25.0
      caniuse-lite: 1.0.30001721
      fraction.js: 4.3.7
      normalize-range: 0.1.2
      picocolors: 1.1.1
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  axios@1.9.0:
    dependencies:
      follow-redirects: 1.15.9
      form-data: 4.0.3
      proxy-from-env: 1.1.0
    transitivePeerDependencies:
      - debug

  babel-loader@8.4.1(@babel/core@7.27.4)(webpack@5.99.9):
    dependencies:
      '@babel/core': 7.27.4
      find-cache-dir: 3.3.2
      loader-utils: 2.0.4
      make-dir: 3.1.0
      schema-utils: 2.7.1
      webpack: 5.99.9(webpack-cli@4.10.0)

  babel-plugin-polyfill-corejs2@0.4.13(@babel/core@7.27.4):
    dependencies:
      '@babel/compat-data': 7.27.5
      '@babel/core': 7.27.4
      '@babel/helper-define-polyfill-provider': 0.6.4(@babel/core@7.27.4)
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  babel-plugin-polyfill-corejs3@0.11.1(@babel/core@7.27.4):
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-define-polyfill-provider': 0.6.4(@babel/core@7.27.4)
      core-js-compat: 3.43.0
    transitivePeerDependencies:
      - supports-color

  babel-plugin-polyfill-regenerator@0.6.4(@babel/core@7.27.4):
    dependencies:
      '@babel/core': 7.27.4
      '@babel/helper-define-polyfill-provider': 0.6.4(@babel/core@7.27.4)
    transitivePeerDependencies:
      - supports-color

  backbone-undo@0.2.6:
    dependencies:
      backbone: 1.4.1
      underscore: 1.13.1

  backbone@1.4.1:
    dependencies:
      underscore: 1.13.1

  bail@2.0.2: {}

  balanced-match@1.0.2: {}

  base64-js@1.5.1: {}

  batch@0.6.1: {}

  big.js@5.2.2: {}

  binary-extensions@2.3.0: {}

  bn.js@4.12.2: {}

  bn.js@5.2.2: {}

  body-parser@1.20.3:
    dependencies:
      bytes: 3.1.2
      content-type: 1.0.5
      debug: 2.6.9
      depd: 2.0.0
      destroy: 1.2.0
      http-errors: 2.0.0
      iconv-lite: 0.4.24
      on-finished: 2.4.1
      qs: 6.13.0
      raw-body: 2.5.2
      type-is: 1.6.18
      unpipe: 1.0.0
    transitivePeerDependencies:
      - supports-color

  bonjour-service@1.3.0:
    dependencies:
      fast-deep-equal: 3.1.3
      multicast-dns: 7.2.5

  boolbase@1.0.0: {}

  brace-expansion@1.1.11:
    dependencies:
      balanced-match: 1.0.2
      concat-map: 0.0.1

  brace-expansion@2.0.1:
    dependencies:
      balanced-match: 1.0.2

  braces@3.0.3:
    dependencies:
      fill-range: 7.1.1

  brorand@1.1.0: {}

  browserify-aes@1.2.0:
    dependencies:
      buffer-xor: 1.0.3
      cipher-base: 1.0.6
      create-hash: 1.2.0
      evp_bytestokey: 1.0.3
      inherits: 2.0.4
      safe-buffer: 5.2.1

  browserify-cipher@1.0.1:
    dependencies:
      browserify-aes: 1.2.0
      browserify-des: 1.0.2
      evp_bytestokey: 1.0.3

  browserify-des@1.0.2:
    dependencies:
      cipher-base: 1.0.6
      des.js: 1.1.0
      inherits: 2.0.4
      safe-buffer: 5.2.1

  browserify-rsa@4.1.1:
    dependencies:
      bn.js: 5.2.2
      randombytes: 2.1.0
      safe-buffer: 5.2.1

  browserify-sign@4.2.3:
    dependencies:
      bn.js: 5.2.2
      browserify-rsa: 4.1.1
      create-hash: 1.2.0
      create-hmac: 1.1.7
      elliptic: 6.6.1
      hash-base: 3.0.5
      inherits: 2.0.4
      parse-asn1: 5.1.7
      readable-stream: 2.3.8
      safe-buffer: 5.2.1

  browserify-zlib@0.2.0:
    dependencies:
      pako: 1.0.11

  browserslist@4.25.0:
    dependencies:
      caniuse-lite: 1.0.30001721
      electron-to-chromium: 1.5.166
      node-releases: 2.0.19
      update-browserslist-db: 1.1.3(browserslist@4.25.0)

  buffer-from@1.1.2: {}

  buffer-xor@1.0.3: {}

  buffer@4.9.2:
    dependencies:
      base64-js: 1.5.1
      ieee754: 1.2.1
      isarray: 1.0.0

  builtin-status-codes@3.0.0: {}

  bytes@3.1.2: {}

  call-bind-apply-helpers@1.0.2:
    dependencies:
      es-errors: 1.3.0
      function-bind: 1.1.2

  call-bind@1.0.8:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      get-intrinsic: 1.3.0
      set-function-length: 1.2.2

  call-bound@1.0.4:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      get-intrinsic: 1.3.0

  callsites@3.1.0: {}

  camel-case@4.1.2:
    dependencies:
      pascal-case: 3.1.2
      tslib: 2.8.1

  caniuse-api@3.0.0:
    dependencies:
      browserslist: 4.25.0
      caniuse-lite: 1.0.30001721
      lodash.memoize: 4.1.2
      lodash.uniq: 4.5.0

  caniuse-lite@1.0.30001721: {}

  ccount@2.0.1: {}

  chalk@4.1.2:
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0

  character-entities-legacy@3.0.0: {}

  character-entities@2.0.2: {}

  character-parser@2.2.0:
    dependencies:
      is-regex: 1.2.1

  character-reference-invalid@2.0.1: {}

  charenc@0.0.2: {}

  chokidar@3.6.0:
    dependencies:
      anymatch: 3.1.3
      braces: 3.0.3
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.6.0
    optionalDependencies:
      fsevents: 2.3.3

  chokidar@4.0.3:
    dependencies:
      readdirp: 4.1.2

  chrome-trace-event@1.0.4: {}

  cipher-base@1.0.6:
    dependencies:
      inherits: 2.0.4
      safe-buffer: 5.2.1

  clean-css@4.2.4:
    dependencies:
      source-map: 0.6.1

  clean-css@5.3.3:
    dependencies:
      source-map: 0.6.1

  cli-table3@0.6.5:
    dependencies:
      string-width: 4.2.3
    optionalDependencies:
      '@colors/colors': 1.5.0

  cliui@8.0.1:
    dependencies:
      string-width: 4.2.3
      strip-ansi: 6.0.1
      wrap-ansi: 7.0.0

  clone-deep@4.0.1:
    dependencies:
      is-plain-object: 2.0.4
      kind-of: 6.0.3
      shallow-clone: 3.0.1

  clone@2.1.2: {}

  clsx@2.1.1: {}

  codemirror-formatting@1.0.0: {}

  codemirror@5.63.0: {}

  codemirror@6.0.1:
    dependencies:
      '@codemirror/autocomplete': 6.18.6
      '@codemirror/commands': 6.8.1
      '@codemirror/language': 6.11.1
      '@codemirror/lint': 6.8.5
      '@codemirror/search': 6.5.11
      '@codemirror/state': 6.5.2
      '@codemirror/view': 6.37.1

  collect.js@4.36.1: {}

  color-convert@2.0.1:
    dependencies:
      color-name: 1.1.4

  color-name@1.1.4: {}

  colord@2.9.3: {}

  colorette@2.0.20: {}

  combined-stream@1.0.8:
    dependencies:
      delayed-stream: 1.0.0

  comma-separated-tokens@2.0.3: {}

  commander@2.20.3: {}

  commander@4.1.1: {}

  commander@7.2.0: {}

  commander@8.3.0: {}

  commondir@1.0.1: {}

  compressible@2.0.18:
    dependencies:
      mime-db: 1.54.0

  compression@1.8.0:
    dependencies:
      bytes: 3.1.2
      compressible: 2.0.18
      debug: 2.6.9
      negotiator: 0.6.4
      on-headers: 1.0.2
      safe-buffer: 5.2.1
      vary: 1.1.2
    transitivePeerDependencies:
      - supports-color

  concat-map@0.0.1: {}

  concat@1.0.3:
    dependencies:
      commander: 2.20.3

  connect-history-api-fallback@2.0.0: {}

  consola@2.15.3: {}

  console-browserify@1.2.0: {}

  constants-browserify@1.0.0: {}

  content-disposition@0.5.4:
    dependencies:
      safe-buffer: 5.2.1

  content-type@1.0.5: {}

  convert-source-map@1.9.0: {}

  convert-source-map@2.0.0: {}

  cookie-signature@1.0.6: {}

  cookie@0.7.1: {}

  core-js-compat@3.43.0:
    dependencies:
      browserslist: 4.25.0

  core-js@3.43.0: {}

  core-util-is@1.0.3: {}

  cosmiconfig@7.1.0:
    dependencies:
      '@types/parse-json': 4.0.2
      import-fresh: 3.3.1
      parse-json: 5.2.0
      path-type: 4.0.0
      yaml: 1.10.2

  create-ecdh@4.0.4:
    dependencies:
      bn.js: 4.12.2
      elliptic: 6.6.1

  create-hash@1.2.0:
    dependencies:
      cipher-base: 1.0.6
      inherits: 2.0.4
      md5.js: 1.3.5
      ripemd160: 2.0.2
      sha.js: 2.4.11

  create-hmac@1.1.7:
    dependencies:
      cipher-base: 1.0.6
      create-hash: 1.2.0
      inherits: 2.0.4
      ripemd160: 2.0.2
      safe-buffer: 5.2.1
      sha.js: 2.4.11

  crelt@1.0.6: {}

  cross-spawn@7.0.6:
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2

  crypt@0.0.2: {}

  crypto-browserify@3.12.1:
    dependencies:
      browserify-cipher: 1.0.1
      browserify-sign: 4.2.3
      create-ecdh: 4.0.4
      create-hash: 1.2.0
      create-hmac: 1.1.7
      diffie-hellman: 5.0.3
      hash-base: 3.0.5
      inherits: 2.0.4
      pbkdf2: 3.1.2
      public-encrypt: 4.0.3
      randombytes: 2.1.0
      randomfill: 1.0.4

  css-declaration-sorter@6.4.1(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4

  css-loader@5.2.7(webpack@5.99.9):
    dependencies:
      icss-utils: 5.1.0(postcss@8.5.4)
      loader-utils: 2.0.4
      postcss: 8.5.4
      postcss-modules-extract-imports: 3.1.0(postcss@8.5.4)
      postcss-modules-local-by-default: 4.2.0(postcss@8.5.4)
      postcss-modules-scope: 3.2.1(postcss@8.5.4)
      postcss-modules-values: 4.0.0(postcss@8.5.4)
      postcss-value-parser: 4.2.0
      schema-utils: 3.3.0
      semver: 7.7.2
      webpack: 5.99.9(webpack-cli@4.10.0)

  css-select@4.3.0:
    dependencies:
      boolbase: 1.0.0
      css-what: 6.1.0
      domhandler: 4.3.1
      domutils: 2.8.0
      nth-check: 2.1.1

  css-tree@1.1.3:
    dependencies:
      mdn-data: 2.0.14
      source-map: 0.6.1

  css-what@6.1.0: {}

  cssesc@3.0.0: {}

  cssnano-preset-default@5.2.14(postcss@8.5.4):
    dependencies:
      css-declaration-sorter: 6.4.1(postcss@8.5.4)
      cssnano-utils: 3.1.0(postcss@8.5.4)
      postcss: 8.5.4
      postcss-calc: 8.2.4(postcss@8.5.4)
      postcss-colormin: 5.3.1(postcss@8.5.4)
      postcss-convert-values: 5.1.3(postcss@8.5.4)
      postcss-discard-comments: 5.1.2(postcss@8.5.4)
      postcss-discard-duplicates: 5.1.0(postcss@8.5.4)
      postcss-discard-empty: 5.1.1(postcss@8.5.4)
      postcss-discard-overridden: 5.1.0(postcss@8.5.4)
      postcss-merge-longhand: 5.1.7(postcss@8.5.4)
      postcss-merge-rules: 5.1.4(postcss@8.5.4)
      postcss-minify-font-values: 5.1.0(postcss@8.5.4)
      postcss-minify-gradients: 5.1.1(postcss@8.5.4)
      postcss-minify-params: 5.1.4(postcss@8.5.4)
      postcss-minify-selectors: 5.2.1(postcss@8.5.4)
      postcss-normalize-charset: 5.1.0(postcss@8.5.4)
      postcss-normalize-display-values: 5.1.0(postcss@8.5.4)
      postcss-normalize-positions: 5.1.1(postcss@8.5.4)
      postcss-normalize-repeat-style: 5.1.1(postcss@8.5.4)
      postcss-normalize-string: 5.1.0(postcss@8.5.4)
      postcss-normalize-timing-functions: 5.1.0(postcss@8.5.4)
      postcss-normalize-unicode: 5.1.1(postcss@8.5.4)
      postcss-normalize-url: 5.1.0(postcss@8.5.4)
      postcss-normalize-whitespace: 5.1.1(postcss@8.5.4)
      postcss-ordered-values: 5.1.3(postcss@8.5.4)
      postcss-reduce-initial: 5.1.2(postcss@8.5.4)
      postcss-reduce-transforms: 5.1.0(postcss@8.5.4)
      postcss-svgo: 5.1.0(postcss@8.5.4)
      postcss-unique-selectors: 5.1.1(postcss@8.5.4)

  cssnano-utils@3.1.0(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4

  cssnano@5.1.15(postcss@8.5.4):
    dependencies:
      cssnano-preset-default: 5.2.14(postcss@8.5.4)
      lilconfig: 2.1.0
      postcss: 8.5.4
      yaml: 1.10.2

  csso@4.2.0:
    dependencies:
      css-tree: 1.1.3

  csstype@3.1.3: {}

  de-indent@1.0.2: {}

  debug@2.6.9:
    dependencies:
      ms: 2.0.0

  debug@4.4.1:
    dependencies:
      ms: 2.1.3

  decode-named-character-reference@1.1.0:
    dependencies:
      character-entities: 2.0.2

  deep-equal@1.1.2:
    dependencies:
      is-arguments: 1.2.0
      is-date-object: 1.1.0
      is-regex: 1.2.1
      object-is: 1.1.6
      object-keys: 1.1.1
      regexp.prototype.flags: 1.5.4

  default-gateway@6.0.3:
    dependencies:
      execa: 5.1.1

  define-data-property@1.1.4:
    dependencies:
      es-define-property: 1.0.1
      es-errors: 1.3.0
      gopd: 1.2.0

  define-lazy-prop@2.0.0: {}

  define-properties@1.2.1:
    dependencies:
      define-data-property: 1.1.4
      has-property-descriptors: 1.0.2
      object-keys: 1.1.1

  delayed-stream@1.0.0: {}

  depd@1.1.2: {}

  depd@2.0.0: {}

  dequal@2.0.3: {}

  des.js@1.1.0:
    dependencies:
      inherits: 2.0.4
      minimalistic-assert: 1.0.1

  destroy@1.2.0: {}

  detect-libc@1.0.3:
    optional: true

  detect-node@2.1.0: {}

  devlop@1.1.0:
    dependencies:
      dequal: 2.0.3

  diffie-hellman@5.0.3:
    dependencies:
      bn.js: 4.12.2
      miller-rabin: 4.0.1
      randombytes: 2.1.0

  dir-glob@3.0.1:
    dependencies:
      path-type: 4.0.0

  dns-packet@5.6.1:
    dependencies:
      '@leichtgewicht/ip-codec': 2.0.5

  dom-serializer@1.4.1:
    dependencies:
      domelementtype: 2.3.0
      domhandler: 4.3.1
      entities: 2.2.0

  domain-browser@1.2.0: {}

  domelementtype@2.3.0: {}

  domhandler@3.3.0:
    dependencies:
      domelementtype: 2.3.0

  domhandler@4.3.1:
    dependencies:
      domelementtype: 2.3.0

  dompurify@3.2.6:
    optionalDependencies:
      '@types/trusted-types': 2.0.7

  domutils@2.8.0:
    dependencies:
      dom-serializer: 1.4.1
      domelementtype: 2.3.0
      domhandler: 4.3.1

  dot-case@3.0.4:
    dependencies:
      no-case: 3.0.4
      tslib: 2.8.1

  dotenv-expand@5.1.0: {}

  dotenv@10.0.0: {}

  dunder-proto@1.0.1:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-errors: 1.3.0
      gopd: 1.2.0

  ee-first@1.1.1: {}

  electron-to-chromium@1.5.166: {}

  elliptic@6.6.1:
    dependencies:
      bn.js: 4.12.2
      brorand: 1.1.0
      hash.js: 1.1.7
      hmac-drbg: 1.0.1
      inherits: 2.0.4
      minimalistic-assert: 1.0.1
      minimalistic-crypto-utils: 1.0.1

  emmet@2.4.11:
    dependencies:
      '@emmetio/abbreviation': 2.3.3
      '@emmetio/css-abbreviation': 2.1.8

  emoji-regex@8.0.0: {}

  emojis-list@3.0.0: {}

  encodeurl@1.0.2: {}

  encodeurl@2.0.0: {}

  enhanced-resolve@5.18.1:
    dependencies:
      graceful-fs: 4.2.11
      tapable: 2.2.2

  entities@2.2.0: {}

  entities@4.5.0: {}

  envinfo@7.14.0: {}

  error-ex@1.3.2:
    dependencies:
      is-arrayish: 0.2.1

  es-define-property@1.0.1: {}

  es-errors@1.3.0: {}

  es-module-lexer@1.7.0: {}

  es-object-atoms@1.1.1:
    dependencies:
      es-errors: 1.3.0

  es-set-tostringtag@2.1.0:
    dependencies:
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      has-tostringtag: 1.0.2
      hasown: 2.0.2

  escalade@3.2.0: {}

  escape-html@1.0.3: {}

  escape-string-regexp@5.0.0: {}

  eslint-scope@5.1.1:
    dependencies:
      esrecurse: 4.3.0
      estraverse: 4.3.0

  esrecurse@4.3.0:
    dependencies:
      estraverse: 5.3.0

  estraverse@4.3.0: {}

  estraverse@5.3.0: {}

  estree-walker@2.0.2: {}

  esutils@2.0.3: {}

  etag@1.8.1: {}

  eventemitter3@2.0.3: {}

  eventemitter3@4.0.7: {}

  events@3.3.0: {}

  evp_bytestokey@1.0.3:
    dependencies:
      md5.js: 1.3.5
      safe-buffer: 5.2.1

  execa@5.1.1:
    dependencies:
      cross-spawn: 7.0.6
      get-stream: 6.0.1
      human-signals: 2.1.0
      is-stream: 2.0.1
      merge-stream: 2.0.0
      npm-run-path: 4.0.1
      onetime: 5.1.2
      signal-exit: 3.0.7
      strip-final-newline: 2.0.0

  express@4.21.2:
    dependencies:
      accepts: 1.3.8
      array-flatten: 1.1.1
      body-parser: 1.20.3
      content-disposition: 0.5.4
      content-type: 1.0.5
      cookie: 0.7.1
      cookie-signature: 1.0.6
      debug: 2.6.9
      depd: 2.0.0
      encodeurl: 2.0.0
      escape-html: 1.0.3
      etag: 1.8.1
      finalhandler: 1.3.1
      fresh: 0.5.2
      http-errors: 2.0.0
      merge-descriptors: 1.0.3
      methods: 1.1.2
      on-finished: 2.4.1
      parseurl: 1.3.3
      path-to-regexp: 0.1.12
      proxy-addr: 2.0.7
      qs: 6.13.0
      range-parser: 1.2.1
      safe-buffer: 5.2.1
      send: 0.19.0
      serve-static: 1.16.2
      setprototypeof: 1.2.0
      statuses: 2.0.1
      type-is: 1.6.18
      utils-merge: 1.0.1
      vary: 1.1.2
    transitivePeerDependencies:
      - supports-color

  extend@3.0.2: {}

  fast-deep-equal@3.1.3: {}

  fast-diff@1.1.2: {}

  fast-glob@3.3.3:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.8

  fast-json-stable-stringify@2.1.0: {}

  fast-uri@3.0.6: {}

  fastest-levenshtein@1.0.16: {}

  fastq@1.19.1:
    dependencies:
      reusify: 1.1.0

  faye-websocket@0.11.4:
    dependencies:
      websocket-driver: 0.7.4

  file-loader@6.2.0(webpack@5.99.9):
    dependencies:
      loader-utils: 2.0.4
      schema-utils: 3.3.0
      webpack: 5.99.9(webpack-cli@4.10.0)

  file-type@12.4.2: {}

  fill-range@7.1.1:
    dependencies:
      to-regex-range: 5.0.1

  finalhandler@1.3.1:
    dependencies:
      debug: 2.6.9
      encodeurl: 2.0.0
      escape-html: 1.0.3
      on-finished: 2.4.1
      parseurl: 1.3.3
      statuses: 2.0.1
      unpipe: 1.0.0
    transitivePeerDependencies:
      - supports-color

  find-cache-dir@3.3.2:
    dependencies:
      commondir: 1.0.1
      make-dir: 3.1.0
      pkg-dir: 4.2.0

  find-up@4.1.0:
    dependencies:
      locate-path: 5.0.0
      path-exists: 4.0.0

  flat@5.0.2: {}

  follow-redirects@1.15.9: {}

  form-data@4.0.3:
    dependencies:
      asynckit: 0.4.0
      combined-stream: 1.0.8
      es-set-tostringtag: 2.1.0
      hasown: 2.0.2
      mime-types: 2.1.35

  forwarded@0.2.0: {}

  fraction.js@4.3.7: {}

  fresh@0.5.2: {}

  fs-extra@10.1.0:
    dependencies:
      graceful-fs: 4.2.11
      jsonfile: 6.1.0
      universalify: 2.0.1

  fs-monkey@1.0.6: {}

  fs.realpath@1.0.0: {}

  fsevents@2.3.3:
    optional: true

  function-bind@1.1.2: {}

  functions-have-names@1.2.3: {}

  gensync@1.0.0-beta.2: {}

  get-caller-file@2.0.5: {}

  get-intrinsic@1.3.0:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      function-bind: 1.1.2
      get-proto: 1.0.1
      gopd: 1.2.0
      has-symbols: 1.1.0
      hasown: 2.0.2
      math-intrinsics: 1.1.0

  get-proto@1.0.1:
    dependencies:
      dunder-proto: 1.0.1
      es-object-atoms: 1.1.1

  get-stream@6.0.1: {}

  glob-parent@5.1.2:
    dependencies:
      is-glob: 4.0.3

  glob-to-regexp@0.4.1: {}

  glob@7.2.3:
    dependencies:
      fs.realpath: 1.0.0
      inflight: 1.0.6
      inherits: 2.0.4
      minimatch: 3.1.2
      once: 1.4.0
      path-is-absolute: 1.0.1

  globals@11.12.0: {}

  globby@10.0.2:
    dependencies:
      '@types/glob': 7.2.0
      array-union: 2.1.0
      dir-glob: 3.0.1
      fast-glob: 3.3.3
      glob: 7.2.3
      ignore: 5.3.2
      merge2: 1.4.1
      slash: 3.0.0

  gopd@1.2.0: {}

  graceful-fs@4.2.11: {}

  grapesjs@0.22.7:
    dependencies:
      '@types/backbone': 1.4.15
      backbone: 1.4.1
      backbone-undo: 0.2.6
      codemirror: 5.63.0
      codemirror-formatting: 1.0.0
      html-entities: 1.4.0
      promise-polyfill: 8.3.0
      underscore: 1.13.1

  growly@1.3.0: {}

  handle-thing@2.0.1: {}

  has-flag@4.0.0: {}

  has-property-descriptors@1.0.2:
    dependencies:
      es-define-property: 1.0.1

  has-symbols@1.1.0: {}

  has-tostringtag@1.0.2:
    dependencies:
      has-symbols: 1.1.0

  hash-base@3.0.5:
    dependencies:
      inherits: 2.0.4
      safe-buffer: 5.2.1

  hash-sum@1.0.2: {}

  hash-sum@2.0.0: {}

  hash.js@1.1.7:
    dependencies:
      inherits: 2.0.4
      minimalistic-assert: 1.0.1

  hasown@2.0.2:
    dependencies:
      function-bind: 1.1.2

  hast-util-parse-selector@4.0.0:
    dependencies:
      '@types/hast': 3.0.4

  hastscript@9.0.1:
    dependencies:
      '@types/hast': 3.0.4
      comma-separated-tokens: 2.0.3
      hast-util-parse-selector: 4.0.0
      property-information: 7.1.0
      space-separated-tokens: 2.0.2

  he@1.2.0: {}

  hmac-drbg@1.0.1:
    dependencies:
      hash.js: 1.1.7
      minimalistic-assert: 1.0.1
      minimalistic-crypto-utils: 1.0.1

  hpack.js@2.1.6:
    dependencies:
      inherits: 2.0.4
      obuf: 1.1.2
      readable-stream: 2.3.8
      wbuf: 1.7.3

  html-entities@1.4.0: {}

  html-entities@2.6.0: {}

  html-loader@1.3.2(webpack@5.99.9):
    dependencies:
      html-minifier-terser: 5.1.1
      htmlparser2: 4.1.0
      loader-utils: 2.0.4
      schema-utils: 3.3.0
      webpack: 5.99.9(webpack-cli@4.10.0)

  html-minifier-terser@5.1.1:
    dependencies:
      camel-case: 4.1.2
      clean-css: 4.2.4
      commander: 4.1.1
      he: 1.2.0
      param-case: 3.0.4
      relateurl: 0.2.7
      terser: 4.8.1

  htmlparser2@4.1.0:
    dependencies:
      domelementtype: 2.3.0
      domhandler: 3.3.0
      domutils: 2.8.0
      entities: 2.2.0

  http-deceiver@1.2.7: {}

  http-errors@1.6.3:
    dependencies:
      depd: 1.1.2
      inherits: 2.0.3
      setprototypeof: 1.1.0
      statuses: 1.5.0

  http-errors@2.0.0:
    dependencies:
      depd: 2.0.0
      inherits: 2.0.4
      setprototypeof: 1.2.0
      statuses: 2.0.1
      toidentifier: 1.0.1

  http-parser-js@0.5.10: {}

  http-proxy-middleware@2.0.9(@types/express@4.17.23):
    dependencies:
      '@types/http-proxy': 1.17.16
      http-proxy: 1.18.1
      is-glob: 4.0.3
      is-plain-obj: 3.0.0
      micromatch: 4.0.8
    optionalDependencies:
      '@types/express': 4.17.23
    transitivePeerDependencies:
      - debug

  http-proxy@1.18.1:
    dependencies:
      eventemitter3: 4.0.7
      follow-redirects: 1.15.9
      requires-port: 1.0.0
    transitivePeerDependencies:
      - debug

  https-browserify@1.0.0: {}

  human-signals@2.1.0: {}

  iconv-lite@0.4.24:
    dependencies:
      safer-buffer: 2.1.2

  icss-utils@5.1.0(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4

  ieee754@1.2.1: {}

  ignore@5.3.2: {}

  imagemin@7.0.1:
    dependencies:
      file-type: 12.4.2
      globby: 10.0.2
      graceful-fs: 4.2.11
      junk: 3.1.0
      make-dir: 3.1.0
      p-pipe: 3.1.0
      replace-ext: 1.0.1

  img-loader@4.0.0(imagemin@7.0.1):
    dependencies:
      imagemin: 7.0.1
      loader-utils: 1.4.2

  immutable@5.1.2: {}

  import-fresh@3.3.1:
    dependencies:
      parent-module: 1.0.1
      resolve-from: 4.0.0

  import-local@3.2.0:
    dependencies:
      pkg-dir: 4.2.0
      resolve-cwd: 3.0.0

  inflight@1.0.6:
    dependencies:
      once: 1.4.0
      wrappy: 1.0.2

  inherits@2.0.3: {}

  inherits@2.0.4: {}

  interpret@2.2.0: {}

  ipaddr.js@1.9.1: {}

  ipaddr.js@2.2.0: {}

  is-alphabetical@2.0.1: {}

  is-alphanumerical@2.0.1:
    dependencies:
      is-alphabetical: 2.0.1
      is-decimal: 2.0.1

  is-arguments@1.2.0:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-arrayish@0.2.1: {}

  is-binary-path@2.1.0:
    dependencies:
      binary-extensions: 2.3.0

  is-buffer@1.1.6: {}

  is-core-module@2.16.1:
    dependencies:
      hasown: 2.0.2

  is-date-object@1.1.0:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-decimal@2.0.1: {}

  is-docker@2.2.1: {}

  is-expression@4.0.0:
    dependencies:
      acorn: 7.4.1
      object-assign: 4.1.1

  is-extglob@2.1.1: {}

  is-fullwidth-code-point@3.0.0: {}

  is-glob@4.0.3:
    dependencies:
      is-extglob: 2.1.1

  is-hexadecimal@2.0.1: {}

  is-number@7.0.0: {}

  is-plain-obj@3.0.0: {}

  is-plain-obj@4.1.0: {}

  is-plain-object@2.0.4:
    dependencies:
      isobject: 3.0.1

  is-regex@1.2.1:
    dependencies:
      call-bound: 1.0.4
      gopd: 1.2.0
      has-tostringtag: 1.0.2
      hasown: 2.0.2

  is-stream@2.0.1: {}

  is-wsl@2.2.0:
    dependencies:
      is-docker: 2.2.1

  isarray@1.0.0: {}

  isexe@2.0.0: {}

  isobject@3.0.1: {}

  jest-worker@27.5.1:
    dependencies:
      '@types/node': 24.0.0
      merge-stream: 2.0.0
      supports-color: 8.1.1

  js-tokens@4.0.0: {}

  jsesc@3.0.2: {}

  jsesc@3.1.0: {}

  json-parse-even-better-errors@2.3.1: {}

  json-schema-traverse@0.4.1: {}

  json-schema-traverse@1.0.0: {}

  json5@1.0.2:
    dependencies:
      minimist: 1.2.8

  json5@2.2.3: {}

  jsonc-parser@2.3.1: {}

  jsonc-parser@3.3.1: {}

  jsonfile@6.1.0:
    dependencies:
      universalify: 2.0.1
    optionalDependencies:
      graceful-fs: 4.2.11

  junk@3.1.0: {}

  katex@0.16.22:
    dependencies:
      commander: 8.3.0

  kind-of@6.0.3: {}

  klona@2.0.6: {}

  laravel-mix@6.0.49(@babel/core@7.27.4)(@babel/plugin-proposal-object-rest-spread@7.20.7(@babel/core@7.27.4))(@babel/plugin-syntax-dynamic-import@7.8.3(@babel/core@7.27.4))(@babel/plugin-transform-runtime@7.27.4(@babel/core@7.27.4))(@babel/preset-env@7.27.2(@babel/core@7.27.4))(postcss@8.5.4)(webpack-cli@4.10.0)(webpack@5.99.9):
    dependencies:
      '@babel/core': 7.27.4
      '@babel/plugin-proposal-object-rest-spread': 7.20.7(@babel/core@7.27.4)
      '@babel/plugin-syntax-dynamic-import': 7.8.3(@babel/core@7.27.4)
      '@babel/plugin-transform-runtime': 7.27.4(@babel/core@7.27.4)
      '@babel/preset-env': 7.27.2(@babel/core@7.27.4)
      '@babel/runtime': 7.27.6
      '@types/babel__core': 7.20.5
      '@types/clean-css': 4.2.11
      '@types/imagemin-gifsicle': 7.0.4
      '@types/imagemin-mozjpeg': 8.0.4
      '@types/imagemin-optipng': 5.2.4
      '@types/imagemin-svgo': 8.0.1
      autoprefixer: 10.4.21(postcss@8.5.4)
      babel-loader: 8.4.1(@babel/core@7.27.4)(webpack@5.99.9)
      chalk: 4.1.2
      chokidar: 3.6.0
      clean-css: 5.3.3
      cli-table3: 0.6.5
      collect.js: 4.36.1
      commander: 7.2.0
      concat: 1.0.3
      css-loader: 5.2.7(webpack@5.99.9)
      cssnano: 5.1.15(postcss@8.5.4)
      dotenv: 10.0.0
      dotenv-expand: 5.1.0
      file-loader: 6.2.0(webpack@5.99.9)
      fs-extra: 10.1.0
      glob: 7.2.3
      html-loader: 1.3.2(webpack@5.99.9)
      imagemin: 7.0.1
      img-loader: 4.0.0(imagemin@7.0.1)
      lodash: 4.17.21
      md5: 2.3.0
      mini-css-extract-plugin: 1.6.2(webpack@5.99.9)
      node-libs-browser: 2.2.1
      postcss: 8.5.4
      postcss-load-config: 3.1.4(postcss@8.5.4)
      postcss-loader: 6.2.1(postcss@8.5.4)(webpack@5.99.9)
      semver: 7.7.2
      strip-ansi: 6.0.1
      style-loader: 2.0.0(webpack@5.99.9)
      terser: 5.42.0
      terser-webpack-plugin: 5.3.14(webpack@5.99.9)
      vue-style-loader: 4.1.3
      webpack: 5.99.9(webpack-cli@4.10.0)
      webpack-cli: 4.10.0(webpack@5.99.9)
      webpack-dev-server: 4.15.2(webpack-cli@4.10.0)(webpack@5.99.9)
      webpack-merge: 5.10.0
      webpack-notifier: 1.15.0
      webpackbar: 5.0.2(webpack@5.99.9)
      yargs: 17.7.2
    transitivePeerDependencies:
      - '@swc/core'
      - '@types/webpack'
      - bufferutil
      - debug
      - esbuild
      - supports-color
      - ts-node
      - uglify-js
      - utf-8-validate

  launch-editor@2.10.0:
    dependencies:
      picocolors: 1.1.1
      shell-quote: 1.8.3

  lilconfig@2.1.0: {}

  lines-and-columns@1.2.4: {}

  loader-runner@4.3.0: {}

  loader-utils@1.4.2:
    dependencies:
      big.js: 5.2.2
      emojis-list: 3.0.0
      json5: 1.0.2

  loader-utils@2.0.4:
    dependencies:
      big.js: 5.2.2
      emojis-list: 3.0.0
      json5: 2.2.3

  locate-path@5.0.0:
    dependencies:
      p-locate: 4.1.0

  lodash-es@4.17.21: {}

  lodash.debounce@4.0.8: {}

  lodash.memoize@4.1.2: {}

  lodash.throttle@4.1.1: {}

  lodash.uniq@4.5.0: {}

  lodash@4.17.21: {}

  longest-streak@3.1.0: {}

  lower-case@2.0.2:
    dependencies:
      tslib: 2.8.1

  lru-cache@5.1.1:
    dependencies:
      yallist: 3.1.1

  magic-string@0.30.17:
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.0

  make-dir@3.1.0:
    dependencies:
      semver: 6.3.1

  markdown-table@3.0.4: {}

  math-intrinsics@1.1.0: {}

  md5.js@1.3.5:
    dependencies:
      hash-base: 3.0.5
      inherits: 2.0.4
      safe-buffer: 5.2.1

  md5@2.3.0:
    dependencies:
      charenc: 0.0.2
      crypt: 0.0.2
      is-buffer: 1.1.6

  mdast-util-definitions@6.0.0:
    dependencies:
      '@types/mdast': 4.0.4
      '@types/unist': 3.0.3
      unist-util-visit: 5.0.0

  mdast-util-find-and-replace@3.0.2:
    dependencies:
      '@types/mdast': 4.0.4
      escape-string-regexp: 5.0.0
      unist-util-is: 6.0.0
      unist-util-visit-parents: 6.0.1

  mdast-util-from-markdown@2.0.2:
    dependencies:
      '@types/mdast': 4.0.4
      '@types/unist': 3.0.3
      decode-named-character-reference: 1.1.0
      devlop: 1.1.0
      mdast-util-to-string: 4.0.0
      micromark: 4.0.2
      micromark-util-decode-numeric-character-reference: 2.0.2
      micromark-util-decode-string: 2.0.1
      micromark-util-normalize-identifier: 2.0.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2
      unist-util-stringify-position: 4.0.0
    transitivePeerDependencies:
      - supports-color

  mdast-util-gfm-autolink-literal@2.0.1:
    dependencies:
      '@types/mdast': 4.0.4
      ccount: 2.0.1
      devlop: 1.1.0
      mdast-util-find-and-replace: 3.0.2
      micromark-util-character: 2.1.1

  mdast-util-gfm-footnote@2.1.0:
    dependencies:
      '@types/mdast': 4.0.4
      devlop: 1.1.0
      mdast-util-from-markdown: 2.0.2
      mdast-util-to-markdown: 2.1.2
      micromark-util-normalize-identifier: 2.0.1
    transitivePeerDependencies:
      - supports-color

  mdast-util-gfm-strikethrough@2.0.0:
    dependencies:
      '@types/mdast': 4.0.4
      mdast-util-from-markdown: 2.0.2
      mdast-util-to-markdown: 2.1.2
    transitivePeerDependencies:
      - supports-color

  mdast-util-gfm-table@2.0.0:
    dependencies:
      '@types/mdast': 4.0.4
      devlop: 1.1.0
      markdown-table: 3.0.4
      mdast-util-from-markdown: 2.0.2
      mdast-util-to-markdown: 2.1.2
    transitivePeerDependencies:
      - supports-color

  mdast-util-gfm-task-list-item@2.0.0:
    dependencies:
      '@types/mdast': 4.0.4
      devlop: 1.1.0
      mdast-util-from-markdown: 2.0.2
      mdast-util-to-markdown: 2.1.2
    transitivePeerDependencies:
      - supports-color

  mdast-util-gfm@3.1.0:
    dependencies:
      mdast-util-from-markdown: 2.0.2
      mdast-util-gfm-autolink-literal: 2.0.1
      mdast-util-gfm-footnote: 2.1.0
      mdast-util-gfm-strikethrough: 2.0.0
      mdast-util-gfm-table: 2.0.0
      mdast-util-gfm-task-list-item: 2.0.0
      mdast-util-to-markdown: 2.1.2
    transitivePeerDependencies:
      - supports-color

  mdast-util-math@3.0.0:
    dependencies:
      '@types/hast': 3.0.4
      '@types/mdast': 4.0.4
      devlop: 1.1.0
      longest-streak: 3.1.0
      mdast-util-from-markdown: 2.0.2
      mdast-util-to-markdown: 2.1.2
      unist-util-remove-position: 5.0.0
    transitivePeerDependencies:
      - supports-color

  mdast-util-phrasing@4.1.0:
    dependencies:
      '@types/mdast': 4.0.4
      unist-util-is: 6.0.0

  mdast-util-to-markdown@2.1.2:
    dependencies:
      '@types/mdast': 4.0.4
      '@types/unist': 3.0.3
      longest-streak: 3.1.0
      mdast-util-phrasing: 4.1.0
      mdast-util-to-string: 4.0.0
      micromark-util-classify-character: 2.0.1
      micromark-util-decode-string: 2.0.1
      unist-util-visit: 5.0.0
      zwitch: 2.0.4

  mdast-util-to-string@4.0.0:
    dependencies:
      '@types/mdast': 4.0.4

  mdn-data@2.0.14: {}

  media-typer@0.3.0: {}

  memfs@3.5.3:
    dependencies:
      fs-monkey: 1.0.6

  merge-descriptors@1.0.3: {}

  merge-stream@2.0.0: {}

  merge2@1.4.1: {}

  methods@1.1.2: {}

  micromark-core-commonmark@2.0.3:
    dependencies:
      decode-named-character-reference: 1.1.0
      devlop: 1.1.0
      micromark-factory-destination: 2.0.1
      micromark-factory-label: 2.0.1
      micromark-factory-space: 2.0.1
      micromark-factory-title: 2.0.1
      micromark-factory-whitespace: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-chunked: 2.0.1
      micromark-util-classify-character: 2.0.1
      micromark-util-html-tag-name: 2.0.1
      micromark-util-normalize-identifier: 2.0.1
      micromark-util-resolve-all: 2.0.1
      micromark-util-subtokenize: 2.1.0
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-extension-gfm-autolink-literal@2.1.0:
    dependencies:
      micromark-util-character: 2.1.1
      micromark-util-sanitize-uri: 2.0.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-extension-gfm-footnote@2.1.0:
    dependencies:
      devlop: 1.1.0
      micromark-core-commonmark: 2.0.3
      micromark-factory-space: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-normalize-identifier: 2.0.1
      micromark-util-sanitize-uri: 2.0.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-extension-gfm-strikethrough@2.1.0:
    dependencies:
      devlop: 1.1.0
      micromark-util-chunked: 2.0.1
      micromark-util-classify-character: 2.0.1
      micromark-util-resolve-all: 2.0.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-extension-gfm-table@2.1.1:
    dependencies:
      devlop: 1.1.0
      micromark-factory-space: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-extension-gfm-tagfilter@2.0.0:
    dependencies:
      micromark-util-types: 2.0.2

  micromark-extension-gfm-task-list-item@2.1.0:
    dependencies:
      devlop: 1.1.0
      micromark-factory-space: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-extension-gfm@3.0.0:
    dependencies:
      micromark-extension-gfm-autolink-literal: 2.1.0
      micromark-extension-gfm-footnote: 2.1.0
      micromark-extension-gfm-strikethrough: 2.1.0
      micromark-extension-gfm-table: 2.1.1
      micromark-extension-gfm-tagfilter: 2.0.0
      micromark-extension-gfm-task-list-item: 2.1.0
      micromark-util-combine-extensions: 2.0.1
      micromark-util-types: 2.0.2

  micromark-extension-math@3.1.0:
    dependencies:
      '@types/katex': 0.16.7
      devlop: 1.1.0
      katex: 0.16.22
      micromark-factory-space: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-factory-destination@2.0.1:
    dependencies:
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-factory-label@2.0.1:
    dependencies:
      devlop: 1.1.0
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-factory-space@2.0.1:
    dependencies:
      micromark-util-character: 2.1.1
      micromark-util-types: 2.0.2

  micromark-factory-title@2.0.1:
    dependencies:
      micromark-factory-space: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-factory-whitespace@2.0.1:
    dependencies:
      micromark-factory-space: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-util-character@2.1.1:
    dependencies:
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-util-chunked@2.0.1:
    dependencies:
      micromark-util-symbol: 2.0.1

  micromark-util-classify-character@2.0.1:
    dependencies:
      micromark-util-character: 2.1.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-util-combine-extensions@2.0.1:
    dependencies:
      micromark-util-chunked: 2.0.1
      micromark-util-types: 2.0.2

  micromark-util-decode-numeric-character-reference@2.0.2:
    dependencies:
      micromark-util-symbol: 2.0.1

  micromark-util-decode-string@2.0.1:
    dependencies:
      decode-named-character-reference: 1.1.0
      micromark-util-character: 2.1.1
      micromark-util-decode-numeric-character-reference: 2.0.2
      micromark-util-symbol: 2.0.1

  micromark-util-encode@2.0.1: {}

  micromark-util-html-tag-name@2.0.1: {}

  micromark-util-normalize-identifier@2.0.1:
    dependencies:
      micromark-util-symbol: 2.0.1

  micromark-util-resolve-all@2.0.1:
    dependencies:
      micromark-util-types: 2.0.2

  micromark-util-sanitize-uri@2.0.1:
    dependencies:
      micromark-util-character: 2.1.1
      micromark-util-encode: 2.0.1
      micromark-util-symbol: 2.0.1

  micromark-util-subtokenize@2.1.0:
    dependencies:
      devlop: 1.1.0
      micromark-util-chunked: 2.0.1
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2

  micromark-util-symbol@2.0.1: {}

  micromark-util-types@2.0.2: {}

  micromark@4.0.2:
    dependencies:
      '@types/debug': 4.1.12
      debug: 4.4.1
      decode-named-character-reference: 1.1.0
      devlop: 1.1.0
      micromark-core-commonmark: 2.0.3
      micromark-factory-space: 2.0.1
      micromark-util-character: 2.1.1
      micromark-util-chunked: 2.0.1
      micromark-util-combine-extensions: 2.0.1
      micromark-util-decode-numeric-character-reference: 2.0.2
      micromark-util-encode: 2.0.1
      micromark-util-normalize-identifier: 2.0.1
      micromark-util-resolve-all: 2.0.1
      micromark-util-sanitize-uri: 2.0.1
      micromark-util-subtokenize: 2.1.0
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.2
    transitivePeerDependencies:
      - supports-color

  micromatch@4.0.8:
    dependencies:
      braces: 3.0.3
      picomatch: 2.3.1

  miller-rabin@4.0.1:
    dependencies:
      bn.js: 4.12.2
      brorand: 1.1.0

  mime-db@1.52.0: {}

  mime-db@1.54.0: {}

  mime-types@2.1.35:
    dependencies:
      mime-db: 1.52.0

  mime@1.6.0: {}

  mimic-fn@2.1.0: {}

  mini-css-extract-plugin@1.6.2(webpack@5.99.9):
    dependencies:
      loader-utils: 2.0.4
      schema-utils: 3.3.0
      webpack: 5.99.9(webpack-cli@4.10.0)
      webpack-sources: 1.4.3

  minimalistic-assert@1.0.1: {}

  minimalistic-crypto-utils@1.0.1: {}

  minimatch@3.1.2:
    dependencies:
      brace-expansion: 1.1.11

  minimatch@9.0.5:
    dependencies:
      brace-expansion: 2.0.1

  minimist@1.2.8: {}

  mitt@3.0.1: {}

  ms@2.0.0: {}

  ms@2.1.3: {}

  muggle-string@0.4.1: {}

  multicast-dns@7.2.5:
    dependencies:
      dns-packet: 5.6.1
      thunky: 1.1.0

  nanoid@3.3.11: {}

  nanoid@5.1.5: {}

  negotiator@0.6.3: {}

  negotiator@0.6.4: {}

  neo-async@2.6.2: {}

  no-case@3.0.4:
    dependencies:
      lower-case: 2.0.2
      tslib: 2.8.1

  node-addon-api@7.1.1:
    optional: true

  node-forge@1.3.1: {}

  node-libs-browser@2.2.1:
    dependencies:
      assert: 1.5.1
      browserify-zlib: 0.2.0
      buffer: 4.9.2
      console-browserify: 1.2.0
      constants-browserify: 1.0.0
      crypto-browserify: 3.12.1
      domain-browser: 1.2.0
      events: 3.3.0
      https-browserify: 1.0.0
      os-browserify: 0.3.0
      path-browserify: 0.0.1
      process: 0.11.10
      punycode: 1.4.1
      querystring-es3: 0.2.1
      readable-stream: 2.3.8
      stream-browserify: 2.0.2
      stream-http: 2.8.3
      string_decoder: 1.3.0
      timers-browserify: 2.0.12
      tty-browserify: 0.0.0
      url: 0.11.4
      util: 0.11.1
      vm-browserify: 1.1.2

  node-notifier@9.0.1:
    dependencies:
      growly: 1.3.0
      is-wsl: 2.2.0
      semver: 7.7.2
      shellwords: 0.1.1
      uuid: 8.3.2
      which: 2.0.2

  node-releases@2.0.19: {}

  normalize-path@3.0.0: {}

  normalize-range@0.1.2: {}

  normalize-url@6.1.0: {}

  npm-run-path@4.0.1:
    dependencies:
      path-key: 3.1.1

  nth-check@2.1.1:
    dependencies:
      boolbase: 1.0.0

  object-assign@4.1.1: {}

  object-inspect@1.13.4: {}

  object-is@1.1.6:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1

  object-keys@1.1.1: {}

  object.assign@4.1.7:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1
      has-symbols: 1.1.0
      object-keys: 1.1.1

  obuf@1.1.2: {}

  on-finished@2.4.1:
    dependencies:
      ee-first: 1.1.1

  on-headers@1.0.2: {}

  once@1.4.0:
    dependencies:
      wrappy: 1.0.2

  onetime@5.1.2:
    dependencies:
      mimic-fn: 2.1.0

  open@8.4.2:
    dependencies:
      define-lazy-prop: 2.0.0
      is-docker: 2.2.1
      is-wsl: 2.2.0

  orderedmap@2.1.1: {}

  os-browserify@0.3.0: {}

  p-limit@2.3.0:
    dependencies:
      p-try: 2.2.0

  p-locate@4.1.0:
    dependencies:
      p-limit: 2.3.0

  p-pipe@3.1.0: {}

  p-retry@4.6.2:
    dependencies:
      '@types/retry': 0.12.0
      retry: 0.13.1

  p-try@2.2.0: {}

  pako@1.0.11: {}

  param-case@3.0.4:
    dependencies:
      dot-case: 3.0.4
      tslib: 2.8.1

  parchment@1.1.4: {}

  parent-module@1.0.1:
    dependencies:
      callsites: 3.1.0

  parse-asn1@5.1.7:
    dependencies:
      asn1.js: 4.10.1
      browserify-aes: 1.2.0
      evp_bytestokey: 1.0.3
      hash-base: 3.0.5
      pbkdf2: 3.1.2
      safe-buffer: 5.2.1

  parse-entities@4.0.2:
    dependencies:
      '@types/unist': 2.0.11
      character-entities-legacy: 3.0.0
      character-reference-invalid: 2.0.1
      decode-named-character-reference: 1.1.0
      is-alphanumerical: 2.0.1
      is-decimal: 2.0.1
      is-hexadecimal: 2.0.1

  parse-json@5.2.0:
    dependencies:
      '@babel/code-frame': 7.27.1
      error-ex: 1.3.2
      json-parse-even-better-errors: 2.3.1
      lines-and-columns: 1.2.4

  parseurl@1.3.3: {}

  pascal-case@3.1.2:
    dependencies:
      no-case: 3.0.4
      tslib: 2.8.1

  path-browserify@0.0.1: {}

  path-browserify@1.0.1: {}

  path-exists@4.0.0: {}

  path-is-absolute@1.0.1: {}

  path-key@3.1.1: {}

  path-parse@1.0.7: {}

  path-to-regexp@0.1.12: {}

  path-type@4.0.0: {}

  pbkdf2@3.1.2:
    dependencies:
      create-hash: 1.2.0
      create-hmac: 1.1.7
      ripemd160: 2.0.2
      safe-buffer: 5.2.1
      sha.js: 2.4.11

  picocolors@1.1.1: {}

  picomatch@2.3.1: {}

  pkg-dir@4.2.0:
    dependencies:
      find-up: 4.1.0

  postcss-calc@8.2.4(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4
      postcss-selector-parser: 6.1.2
      postcss-value-parser: 4.2.0

  postcss-colormin@5.3.1(postcss@8.5.4):
    dependencies:
      browserslist: 4.25.0
      caniuse-api: 3.0.0
      colord: 2.9.3
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-convert-values@5.1.3(postcss@8.5.4):
    dependencies:
      browserslist: 4.25.0
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-discard-comments@5.1.2(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4

  postcss-discard-duplicates@5.1.0(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4

  postcss-discard-empty@5.1.1(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4

  postcss-discard-overridden@5.1.0(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4

  postcss-load-config@3.1.4(postcss@8.5.4):
    dependencies:
      lilconfig: 2.1.0
      yaml: 1.10.2
    optionalDependencies:
      postcss: 8.5.4

  postcss-loader@6.2.1(postcss@8.5.4)(webpack@5.99.9):
    dependencies:
      cosmiconfig: 7.1.0
      klona: 2.0.6
      postcss: 8.5.4
      semver: 7.7.2
      webpack: 5.99.9(webpack-cli@4.10.0)

  postcss-merge-longhand@5.1.7(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4
      postcss-value-parser: 4.2.0
      stylehacks: 5.1.1(postcss@8.5.4)

  postcss-merge-rules@5.1.4(postcss@8.5.4):
    dependencies:
      browserslist: 4.25.0
      caniuse-api: 3.0.0
      cssnano-utils: 3.1.0(postcss@8.5.4)
      postcss: 8.5.4
      postcss-selector-parser: 6.1.2

  postcss-minify-font-values@5.1.0(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-minify-gradients@5.1.1(postcss@8.5.4):
    dependencies:
      colord: 2.9.3
      cssnano-utils: 3.1.0(postcss@8.5.4)
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-minify-params@5.1.4(postcss@8.5.4):
    dependencies:
      browserslist: 4.25.0
      cssnano-utils: 3.1.0(postcss@8.5.4)
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-minify-selectors@5.2.1(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4
      postcss-selector-parser: 6.1.2

  postcss-modules-extract-imports@3.1.0(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4

  postcss-modules-local-by-default@4.2.0(postcss@8.5.4):
    dependencies:
      icss-utils: 5.1.0(postcss@8.5.4)
      postcss: 8.5.4
      postcss-selector-parser: 7.1.0
      postcss-value-parser: 4.2.0

  postcss-modules-scope@3.2.1(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4
      postcss-selector-parser: 7.1.0

  postcss-modules-values@4.0.0(postcss@8.5.4):
    dependencies:
      icss-utils: 5.1.0(postcss@8.5.4)
      postcss: 8.5.4

  postcss-normalize-charset@5.1.0(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4

  postcss-normalize-display-values@5.1.0(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-normalize-positions@5.1.1(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-normalize-repeat-style@5.1.1(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-normalize-string@5.1.0(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-normalize-timing-functions@5.1.0(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-normalize-unicode@5.1.1(postcss@8.5.4):
    dependencies:
      browserslist: 4.25.0
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-normalize-url@5.1.0(postcss@8.5.4):
    dependencies:
      normalize-url: 6.1.0
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-normalize-whitespace@5.1.1(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-ordered-values@5.1.3(postcss@8.5.4):
    dependencies:
      cssnano-utils: 3.1.0(postcss@8.5.4)
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-reduce-initial@5.1.2(postcss@8.5.4):
    dependencies:
      browserslist: 4.25.0
      caniuse-api: 3.0.0
      postcss: 8.5.4

  postcss-reduce-transforms@5.1.0(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4
      postcss-value-parser: 4.2.0

  postcss-selector-parser@6.1.2:
    dependencies:
      cssesc: 3.0.0
      util-deprecate: 1.0.2

  postcss-selector-parser@7.1.0:
    dependencies:
      cssesc: 3.0.0
      util-deprecate: 1.0.2

  postcss-svgo@5.1.0(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4
      postcss-value-parser: 4.2.0
      svgo: 2.8.0

  postcss-unique-selectors@5.1.1(postcss@8.5.4):
    dependencies:
      postcss: 8.5.4
      postcss-selector-parser: 6.1.2

  postcss-value-parser@4.2.0: {}

  postcss@8.5.4:
    dependencies:
      nanoid: 3.3.11
      picocolors: 1.1.1
      source-map-js: 1.2.1

  pretty-time@1.1.0: {}

  primeicons@5.0.0: {}

  primevue@3.53.1(vue@3.5.16(typescript@5.8.3)):
    dependencies:
      vue: 3.5.16(typescript@5.8.3)

  process-nextick-args@2.0.1: {}

  process@0.11.10: {}

  promise-polyfill@8.3.0: {}

  property-information@7.1.0: {}

  prosemirror-changeset@2.3.1:
    dependencies:
      prosemirror-transform: 1.10.4

  prosemirror-commands@1.7.1:
    dependencies:
      prosemirror-model: 1.25.1
      prosemirror-state: 1.4.3
      prosemirror-transform: 1.10.4

  prosemirror-dropcursor@1.8.2:
    dependencies:
      prosemirror-state: 1.4.3
      prosemirror-transform: 1.10.4
      prosemirror-view: 1.40.0

  prosemirror-gapcursor@1.3.2:
    dependencies:
      prosemirror-keymap: 1.2.3
      prosemirror-model: 1.25.1
      prosemirror-state: 1.4.3
      prosemirror-view: 1.40.0

  prosemirror-history@1.4.1:
    dependencies:
      prosemirror-state: 1.4.3
      prosemirror-transform: 1.10.4
      prosemirror-view: 1.40.0
      rope-sequence: 1.3.4

  prosemirror-inputrules@1.5.0:
    dependencies:
      prosemirror-state: 1.4.3
      prosemirror-transform: 1.10.4

  prosemirror-keymap@1.2.3:
    dependencies:
      prosemirror-state: 1.4.3
      w3c-keyname: 2.2.8

  prosemirror-model@1.25.1:
    dependencies:
      orderedmap: 2.1.1

  prosemirror-safari-ime-span@1.0.2:
    dependencies:
      prosemirror-state: 1.4.3
      prosemirror-view: 1.40.0

  prosemirror-schema-list@1.5.1:
    dependencies:
      prosemirror-model: 1.25.1
      prosemirror-state: 1.4.3
      prosemirror-transform: 1.10.4

  prosemirror-state@1.4.3:
    dependencies:
      prosemirror-model: 1.25.1
      prosemirror-transform: 1.10.4
      prosemirror-view: 1.40.0

  prosemirror-tables@1.7.1:
    dependencies:
      prosemirror-keymap: 1.2.3
      prosemirror-model: 1.25.1
      prosemirror-state: 1.4.3
      prosemirror-transform: 1.10.4
      prosemirror-view: 1.40.0

  prosemirror-transform@1.10.4:
    dependencies:
      prosemirror-model: 1.25.1

  prosemirror-view@1.40.0:
    dependencies:
      prosemirror-model: 1.25.1
      prosemirror-state: 1.4.3
      prosemirror-transform: 1.10.4

  prosemirror-virtual-cursor@0.4.2(prosemirror-model@1.25.1)(prosemirror-state@1.4.3)(prosemirror-view@1.40.0):
    optionalDependencies:
      prosemirror-model: 1.25.1
      prosemirror-state: 1.4.3
      prosemirror-view: 1.40.0

  proxy-addr@2.0.7:
    dependencies:
      forwarded: 0.2.0
      ipaddr.js: 1.9.1

  proxy-from-env@1.1.0: {}

  public-encrypt@4.0.3:
    dependencies:
      bn.js: 4.12.2
      browserify-rsa: 4.1.1
      create-hash: 1.2.0
      parse-asn1: 5.1.7
      randombytes: 2.1.0
      safe-buffer: 5.2.1

  pug-error@2.1.0: {}

  pug-lexer@5.0.1:
    dependencies:
      character-parser: 2.2.0
      is-expression: 4.0.0
      pug-error: 2.1.0

  pug-parser@6.0.0:
    dependencies:
      pug-error: 2.1.0
      token-stream: 1.0.0

  punycode@1.4.1: {}

  punycode@2.3.1: {}

  qs@6.13.0:
    dependencies:
      side-channel: 1.1.0

  qs@6.14.0:
    dependencies:
      side-channel: 1.1.0

  querystring-es3@0.2.1: {}

  queue-microtask@1.2.3: {}

  quill-delta@3.6.3:
    dependencies:
      deep-equal: 1.1.2
      extend: 3.0.2
      fast-diff: 1.1.2

  quill@1.3.7:
    dependencies:
      clone: 2.1.2
      deep-equal: 1.1.2
      eventemitter3: 2.0.3
      extend: 3.0.2
      parchment: 1.1.4
      quill-delta: 3.6.3

  randombytes@2.1.0:
    dependencies:
      safe-buffer: 5.2.1

  randomfill@1.0.4:
    dependencies:
      randombytes: 2.1.0
      safe-buffer: 5.2.1

  range-parser@1.2.1: {}

  raw-body@2.5.2:
    dependencies:
      bytes: 3.1.2
      http-errors: 2.0.0
      iconv-lite: 0.4.24
      unpipe: 1.0.0

  readable-stream@2.3.8:
    dependencies:
      core-util-is: 1.0.3
      inherits: 2.0.4
      isarray: 1.0.0
      process-nextick-args: 2.0.1
      safe-buffer: 5.1.2
      string_decoder: 1.1.1
      util-deprecate: 1.0.2

  readable-stream@3.6.2:
    dependencies:
      inherits: 2.0.4
      string_decoder: 1.3.0
      util-deprecate: 1.0.2

  readdirp@3.6.0:
    dependencies:
      picomatch: 2.3.1

  readdirp@4.1.2: {}

  rechoir@0.7.1:
    dependencies:
      resolve: 1.22.10

  refractor@5.0.0:
    dependencies:
      '@types/hast': 3.0.4
      '@types/prismjs': 1.26.5
      hastscript: 9.0.1
      parse-entities: 4.0.2

  regenerate-unicode-properties@10.2.0:
    dependencies:
      regenerate: 1.4.2

  regenerate@1.4.2: {}

  regex-parser@2.3.1: {}

  regexp.prototype.flags@1.5.4:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-errors: 1.3.0
      get-proto: 1.0.1
      gopd: 1.2.0
      set-function-name: 2.0.2

  regexpu-core@6.2.0:
    dependencies:
      regenerate: 1.4.2
      regenerate-unicode-properties: 10.2.0
      regjsgen: 0.8.0
      regjsparser: 0.12.0
      unicode-match-property-ecmascript: 2.0.0
      unicode-match-property-value-ecmascript: 2.2.0

  regjsgen@0.8.0: {}

  regjsparser@0.12.0:
    dependencies:
      jsesc: 3.0.2

  relateurl@0.2.7: {}

  remark-gfm@4.0.1:
    dependencies:
      '@types/mdast': 4.0.4
      mdast-util-gfm: 3.1.0
      micromark-extension-gfm: 3.0.0
      remark-parse: 11.0.0
      remark-stringify: 11.0.0
      unified: 11.0.5
    transitivePeerDependencies:
      - supports-color

  remark-inline-links@7.0.0:
    dependencies:
      '@types/mdast': 4.0.4
      mdast-util-definitions: 6.0.0
      unist-util-visit: 5.0.0

  remark-math@6.0.0:
    dependencies:
      '@types/mdast': 4.0.4
      mdast-util-math: 3.0.0
      micromark-extension-math: 3.1.0
      unified: 11.0.5
    transitivePeerDependencies:
      - supports-color

  remark-parse@11.0.0:
    dependencies:
      '@types/mdast': 4.0.4
      mdast-util-from-markdown: 2.0.2
      micromark-util-types: 2.0.2
      unified: 11.0.5
    transitivePeerDependencies:
      - supports-color

  remark-stringify@11.0.0:
    dependencies:
      '@types/mdast': 4.0.4
      mdast-util-to-markdown: 2.1.2
      unified: 11.0.5

  remark@15.0.1:
    dependencies:
      '@types/mdast': 4.0.4
      remark-parse: 11.0.0
      remark-stringify: 11.0.0
      unified: 11.0.5
    transitivePeerDependencies:
      - supports-color

  replace-ext@1.0.1: {}

  request-light@0.7.0: {}

  require-directory@2.1.1: {}

  require-from-string@2.0.2: {}

  requires-port@1.0.0: {}

  resolve-cwd@3.0.0:
    dependencies:
      resolve-from: 5.0.0

  resolve-from@4.0.0: {}

  resolve-from@5.0.0: {}

  resolve-url-loader@5.0.0:
    dependencies:
      adjust-sourcemap-loader: 4.0.0
      convert-source-map: 1.9.0
      loader-utils: 2.0.4
      postcss: 8.5.4
      source-map: 0.6.1

  resolve@1.22.10:
    dependencies:
      is-core-module: 2.16.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  retry@0.13.1: {}

  reusify@1.1.0: {}

  rimraf@3.0.2:
    dependencies:
      glob: 7.2.3

  ripemd160@2.0.2:
    dependencies:
      hash-base: 3.0.5
      inherits: 2.0.4

  rope-sequence@1.3.4: {}

  run-parallel@1.2.0:
    dependencies:
      queue-microtask: 1.2.3

  safe-buffer@5.1.2: {}

  safe-buffer@5.2.1: {}

  safer-buffer@2.1.2: {}

  sass-loader@16.0.5(sass@1.89.2)(webpack@5.99.9):
    dependencies:
      neo-async: 2.6.2
    optionalDependencies:
      sass: 1.89.2
      webpack: 5.99.9(webpack-cli@4.10.0)

  sass@1.89.2:
    dependencies:
      chokidar: 4.0.3
      immutable: 5.1.2
      source-map-js: 1.2.1
    optionalDependencies:
      '@parcel/watcher': 2.5.1

  schema-utils@2.7.1:
    dependencies:
      '@types/json-schema': 7.0.15
      ajv: 6.12.6
      ajv-keywords: 3.5.2(ajv@6.12.6)

  schema-utils@3.3.0:
    dependencies:
      '@types/json-schema': 7.0.15
      ajv: 6.12.6
      ajv-keywords: 3.5.2(ajv@6.12.6)

  schema-utils@4.3.2:
    dependencies:
      '@types/json-schema': 7.0.15
      ajv: 8.17.1
      ajv-formats: 2.1.1(ajv@8.17.1)
      ajv-keywords: 5.1.0(ajv@8.17.1)

  select-hose@2.0.0: {}

  selfsigned@2.4.1:
    dependencies:
      '@types/node-forge': 1.3.11
      node-forge: 1.3.1

  semver@6.3.1: {}

  semver@7.7.2: {}

  send@0.19.0:
    dependencies:
      debug: 2.6.9
      depd: 2.0.0
      destroy: 1.2.0
      encodeurl: 1.0.2
      escape-html: 1.0.3
      etag: 1.8.1
      fresh: 0.5.2
      http-errors: 2.0.0
      mime: 1.6.0
      ms: 2.1.3
      on-finished: 2.4.1
      range-parser: 1.2.1
      statuses: 2.0.1
    transitivePeerDependencies:
      - supports-color

  serialize-javascript@6.0.2:
    dependencies:
      randombytes: 2.1.0

  serve-index@1.9.1:
    dependencies:
      accepts: 1.3.8
      batch: 0.6.1
      debug: 2.6.9
      escape-html: 1.0.3
      http-errors: 1.6.3
      mime-types: 2.1.35
      parseurl: 1.3.3
    transitivePeerDependencies:
      - supports-color

  serve-static@1.16.2:
    dependencies:
      encodeurl: 2.0.0
      escape-html: 1.0.3
      parseurl: 1.3.3
      send: 0.19.0
    transitivePeerDependencies:
      - supports-color

  set-function-length@1.2.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      function-bind: 1.1.2
      get-intrinsic: 1.3.0
      gopd: 1.2.0
      has-property-descriptors: 1.0.2

  set-function-name@2.0.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      functions-have-names: 1.2.3
      has-property-descriptors: 1.0.2

  setimmediate@1.0.5: {}

  setprototypeof@1.1.0: {}

  setprototypeof@1.2.0: {}

  sha.js@2.4.11:
    dependencies:
      inherits: 2.0.4
      safe-buffer: 5.2.1

  shallow-clone@3.0.1:
    dependencies:
      kind-of: 6.0.3

  shebang-command@2.0.0:
    dependencies:
      shebang-regex: 3.0.0

  shebang-regex@3.0.0: {}

  shell-quote@1.8.3: {}

  shellwords@0.1.1: {}

  side-channel-list@1.0.0:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4

  side-channel-map@1.0.1:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4

  side-channel-weakmap@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4
      side-channel-map: 1.0.1

  side-channel@1.1.0:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4
      side-channel-list: 1.0.0
      side-channel-map: 1.0.1
      side-channel-weakmap: 1.0.2

  signal-exit@3.0.7: {}

  slash@3.0.0: {}

  sockjs@0.3.24:
    dependencies:
      faye-websocket: 0.11.4
      uuid: 8.3.2
      websocket-driver: 0.7.4

  sortablejs@1.14.0: {}

  source-list-map@2.0.1: {}

  source-map-js@1.2.1: {}

  source-map-support@0.5.21:
    dependencies:
      buffer-from: 1.1.2
      source-map: 0.6.1

  source-map@0.6.1: {}

  space-separated-tokens@2.0.2: {}

  spdy-transport@3.0.0:
    dependencies:
      debug: 4.4.1
      detect-node: 2.1.0
      hpack.js: 2.1.6
      obuf: 1.1.2
      readable-stream: 3.6.2
      wbuf: 1.7.3
    transitivePeerDependencies:
      - supports-color

  spdy@4.0.2:
    dependencies:
      debug: 4.4.1
      handle-thing: 2.0.1
      http-deceiver: 1.2.7
      select-hose: 2.0.0
      spdy-transport: 3.0.0
    transitivePeerDependencies:
      - supports-color

  stable@0.1.8: {}

  statuses@1.5.0: {}

  statuses@2.0.1: {}

  std-env@3.9.0: {}

  stream-browserify@2.0.2:
    dependencies:
      inherits: 2.0.4
      readable-stream: 2.3.8

  stream-http@2.8.3:
    dependencies:
      builtin-status-codes: 3.0.0
      inherits: 2.0.4
      readable-stream: 2.3.8
      to-arraybuffer: 1.0.1
      xtend: 4.0.2

  string-width@4.2.3:
    dependencies:
      emoji-regex: 8.0.0
      is-fullwidth-code-point: 3.0.0
      strip-ansi: 6.0.1

  string_decoder@1.1.1:
    dependencies:
      safe-buffer: 5.1.2

  string_decoder@1.3.0:
    dependencies:
      safe-buffer: 5.2.1

  strip-ansi@6.0.1:
    dependencies:
      ansi-regex: 5.0.1

  strip-final-newline@2.0.0: {}

  style-loader@2.0.0(webpack@5.99.9):
    dependencies:
      loader-utils: 2.0.4
      schema-utils: 3.3.0
      webpack: 5.99.9(webpack-cli@4.10.0)

  style-mod@4.1.2: {}

  stylehacks@5.1.1(postcss@8.5.4):
    dependencies:
      browserslist: 4.25.0
      postcss: 8.5.4
      postcss-selector-parser: 6.1.2

  supports-color@7.2.0:
    dependencies:
      has-flag: 4.0.0

  supports-color@8.1.1:
    dependencies:
      has-flag: 4.0.0

  supports-preserve-symlinks-flag@1.0.0: {}

  svgo@2.8.0:
    dependencies:
      '@trysound/sax': 0.2.0
      commander: 7.2.0
      css-select: 4.3.0
      css-tree: 1.1.3
      csso: 4.2.0
      picocolors: 1.1.1
      stable: 0.1.8

  tapable@2.2.2: {}

  terser-webpack-plugin@5.3.14(webpack@5.99.9):
    dependencies:
      '@jridgewell/trace-mapping': 0.3.25
      jest-worker: 27.5.1
      schema-utils: 4.3.2
      serialize-javascript: 6.0.2
      terser: 5.42.0
      webpack: 5.99.9(webpack-cli@4.10.0)

  terser@4.8.1:
    dependencies:
      acorn: 8.15.0
      commander: 2.20.3
      source-map: 0.6.1
      source-map-support: 0.5.21

  terser@5.42.0:
    dependencies:
      '@jridgewell/source-map': 0.3.6
      acorn: 8.15.0
      commander: 2.20.3
      source-map-support: 0.5.21

  thunky@1.1.0: {}

  timers-browserify@2.0.12:
    dependencies:
      setimmediate: 1.0.5

  to-arraybuffer@1.0.1: {}

  to-regex-range@5.0.1:
    dependencies:
      is-number: 7.0.0

  toidentifier@1.0.1: {}

  token-stream@1.0.0: {}

  trough@2.2.0: {}

  tslib@2.8.1: {}

  tty-browserify@0.0.0: {}

  type-is@1.6.18:
    dependencies:
      media-typer: 0.3.0
      mime-types: 2.1.35

  typescript-auto-import-cache@0.3.6:
    dependencies:
      semver: 7.7.2

  typescript@5.8.3: {}

  underscore@1.13.1: {}

  undici-types@7.8.0: {}

  unicode-canonical-property-names-ecmascript@2.0.1: {}

  unicode-match-property-ecmascript@2.0.0:
    dependencies:
      unicode-canonical-property-names-ecmascript: 2.0.1
      unicode-property-aliases-ecmascript: 2.1.0

  unicode-match-property-value-ecmascript@2.2.0: {}

  unicode-property-aliases-ecmascript@2.1.0: {}

  unified@11.0.5:
    dependencies:
      '@types/unist': 3.0.3
      bail: 2.0.2
      devlop: 1.1.0
      extend: 3.0.2
      is-plain-obj: 4.1.0
      trough: 2.2.0
      vfile: 6.0.3

  unist-util-is@6.0.0:
    dependencies:
      '@types/unist': 3.0.3

  unist-util-remove-position@5.0.0:
    dependencies:
      '@types/unist': 3.0.3
      unist-util-visit: 5.0.0

  unist-util-stringify-position@4.0.0:
    dependencies:
      '@types/unist': 3.0.3

  unist-util-visit-parents@6.0.1:
    dependencies:
      '@types/unist': 3.0.3
      unist-util-is: 6.0.0

  unist-util-visit@5.0.0:
    dependencies:
      '@types/unist': 3.0.3
      unist-util-is: 6.0.0
      unist-util-visit-parents: 6.0.1

  universalify@2.0.1: {}

  unpipe@1.0.0: {}

  update-browserslist-db@1.1.3(browserslist@4.25.0):
    dependencies:
      browserslist: 4.25.0
      escalade: 3.2.0
      picocolors: 1.1.1

  uri-js@4.4.1:
    dependencies:
      punycode: 2.3.1

  url@0.11.4:
    dependencies:
      punycode: 1.4.1
      qs: 6.14.0

  util-deprecate@1.0.2: {}

  util@0.10.4:
    dependencies:
      inherits: 2.0.3

  util@0.11.1:
    dependencies:
      inherits: 2.0.3

  utils-merge@1.0.1: {}

  uuid@8.3.2: {}

  vary@1.1.2: {}

  vfile-message@4.0.2:
    dependencies:
      '@types/unist': 3.0.3
      unist-util-stringify-position: 4.0.0

  vfile@6.0.3:
    dependencies:
      '@types/unist': 3.0.3
      vfile-message: 4.0.2

  vm-browserify@1.1.2: {}

  volar-service-css@0.0.62(@volar/language-service@2.4.14):
    dependencies:
      vscode-css-languageservice: 6.3.6
      vscode-languageserver-textdocument: 1.0.12
      vscode-uri: 3.1.0
    optionalDependencies:
      '@volar/language-service': 2.4.14

  volar-service-emmet@0.0.62(@volar/language-service@2.4.14):
    dependencies:
      '@emmetio/css-parser': 0.4.0
      '@emmetio/html-matcher': 1.3.0
      '@vscode/emmet-helper': 2.11.0
      vscode-uri: 3.1.0
    optionalDependencies:
      '@volar/language-service': 2.4.14

  volar-service-html@0.0.62(@volar/language-service@2.4.14):
    dependencies:
      vscode-html-languageservice: 5.5.0
      vscode-languageserver-textdocument: 1.0.12
      vscode-uri: 3.1.0
    optionalDependencies:
      '@volar/language-service': 2.4.14

  volar-service-json@0.0.62(@volar/language-service@2.4.14):
    dependencies:
      vscode-json-languageservice: 5.6.0
      vscode-uri: 3.1.0
    optionalDependencies:
      '@volar/language-service': 2.4.14

  volar-service-pug-beautify@0.0.62(@volar/language-service@2.4.14):
    dependencies:
      '@johnsoncodehk/pug-beautify': 0.2.2
    optionalDependencies:
      '@volar/language-service': 2.4.14

  volar-service-pug@0.0.62:
    dependencies:
      '@volar/language-service': 2.4.14
      muggle-string: 0.4.1
      pug-lexer: 5.0.1
      pug-parser: 6.0.0
      volar-service-html: 0.0.62(@volar/language-service@2.4.14)
      vscode-html-languageservice: 5.5.0
      vscode-languageserver-textdocument: 1.0.12

  volar-service-typescript-twoslash-queries@0.0.62(@volar/language-service@2.4.14):
    dependencies:
      vscode-uri: 3.1.0
    optionalDependencies:
      '@volar/language-service': 2.4.14

  volar-service-typescript@0.0.62(@volar/language-service@2.4.14):
    dependencies:
      path-browserify: 1.0.1
      semver: 7.7.2
      typescript-auto-import-cache: 0.3.6
      vscode-languageserver-textdocument: 1.0.12
      vscode-nls: 5.2.0
      vscode-uri: 3.1.0
    optionalDependencies:
      '@volar/language-service': 2.4.14

  vscode-css-languageservice@6.3.6:
    dependencies:
      '@vscode/l10n': 0.0.18
      vscode-languageserver-textdocument: 1.0.12
      vscode-languageserver-types: 3.17.5
      vscode-uri: 3.1.0

  vscode-html-languageservice@5.5.0:
    dependencies:
      '@vscode/l10n': 0.0.18
      vscode-languageserver-textdocument: 1.0.12
      vscode-languageserver-types: 3.17.5
      vscode-uri: 3.1.0

  vscode-json-languageservice@5.6.0:
    dependencies:
      '@vscode/l10n': 0.0.18
      jsonc-parser: 3.3.1
      vscode-languageserver-textdocument: 1.0.12
      vscode-languageserver-types: 3.17.5
      vscode-uri: 3.1.0

  vscode-jsonrpc@8.2.0: {}

  vscode-languageserver-protocol@3.17.5:
    dependencies:
      vscode-jsonrpc: 8.2.0
      vscode-languageserver-types: 3.17.5

  vscode-languageserver-textdocument@1.0.12: {}

  vscode-languageserver-types@3.17.5: {}

  vscode-languageserver@9.0.1:
    dependencies:
      vscode-languageserver-protocol: 3.17.5

  vscode-nls@5.2.0: {}

  vscode-uri@3.1.0: {}

  vue-click-outside-element@3.1.2: {}

  vue-contenteditable@4.1.0(vue@3.5.16(typescript@5.8.3)):
    dependencies:
      vue: 3.5.16(typescript@5.8.3)

  vue-draggable-plus@0.6.0(@types/sortablejs@1.15.8):
    dependencies:
      '@types/sortablejs': 1.15.8

  vue-loader@16.8.3(@vue/compiler-sfc@3.5.16)(vue@3.5.16(typescript@5.8.3))(webpack@5.99.9):
    dependencies:
      chalk: 4.1.2
      hash-sum: 2.0.0
      loader-utils: 2.0.4
      webpack: 5.99.9(webpack-cli@4.10.0)
    optionalDependencies:
      '@vue/compiler-sfc': 3.5.16
      vue: 3.5.16(typescript@5.8.3)

  vue-router@4.5.1(vue@3.5.16(typescript@5.8.3)):
    dependencies:
      '@vue/devtools-api': 6.6.4
      vue: 3.5.16(typescript@5.8.3)

  vue-select@4.0.0-beta.6(vue@3.5.16(typescript@5.8.3)):
    dependencies:
      vue: 3.5.16(typescript@5.8.3)

  vue-style-loader@4.1.3:
    dependencies:
      hash-sum: 1.0.2
      loader-utils: 1.4.2

  vue3-json-editor@1.1.5(typescript@5.8.3):
    dependencies:
      core-js: 3.43.0
      vue: 3.5.16(typescript@5.8.3)
    transitivePeerDependencies:
      - typescript

  vue@3.5.16(typescript@5.8.3):
    dependencies:
      '@vue/compiler-dom': 3.5.16
      '@vue/compiler-sfc': 3.5.16
      '@vue/runtime-dom': 3.5.16
      '@vue/server-renderer': 3.5.16(vue@3.5.16(typescript@5.8.3))
      '@vue/shared': 3.5.16
    optionalDependencies:
      typescript: 5.8.3

  vuedraggable@4.1.0(vue@3.5.16(typescript@5.8.3)):
    dependencies:
      sortablejs: 1.14.0
      vue: 3.5.16(typescript@5.8.3)

  w3c-keyname@2.2.8: {}

  watchpack@2.4.4:
    dependencies:
      glob-to-regexp: 0.4.1
      graceful-fs: 4.2.11

  wbuf@1.7.3:
    dependencies:
      minimalistic-assert: 1.0.1

  webpack-cli@4.10.0(webpack@5.99.9):
    dependencies:
      '@discoveryjs/json-ext': 0.5.7
      '@webpack-cli/configtest': 1.2.0(webpack-cli@4.10.0)(webpack@5.99.9)
      '@webpack-cli/info': 1.5.0(webpack-cli@4.10.0)
      '@webpack-cli/serve': 1.7.0(webpack-cli@4.10.0)
      colorette: 2.0.20
      commander: 7.2.0
      cross-spawn: 7.0.6
      fastest-levenshtein: 1.0.16
      import-local: 3.2.0
      interpret: 2.2.0
      rechoir: 0.7.1
      webpack: 5.99.9(webpack-cli@4.10.0)
      webpack-merge: 5.10.0

  webpack-dev-middleware@5.3.4(webpack@5.99.9):
    dependencies:
      colorette: 2.0.20
      memfs: 3.5.3
      mime-types: 2.1.35
      range-parser: 1.2.1
      schema-utils: 4.3.2
      webpack: 5.99.9(webpack-cli@4.10.0)

  webpack-dev-server@4.15.2(webpack-cli@4.10.0)(webpack@5.99.9):
    dependencies:
      '@types/bonjour': 3.5.13
      '@types/connect-history-api-fallback': 1.5.4
      '@types/express': 4.17.23
      '@types/serve-index': 1.9.4
      '@types/serve-static': 1.15.8
      '@types/sockjs': 0.3.36
      '@types/ws': 8.18.1
      ansi-html-community: 0.0.8
      bonjour-service: 1.3.0
      chokidar: 3.6.0
      colorette: 2.0.20
      compression: 1.8.0
      connect-history-api-fallback: 2.0.0
      default-gateway: 6.0.3
      express: 4.21.2
      graceful-fs: 4.2.11
      html-entities: 2.6.0
      http-proxy-middleware: 2.0.9(@types/express@4.17.23)
      ipaddr.js: 2.2.0
      launch-editor: 2.10.0
      open: 8.4.2
      p-retry: 4.6.2
      rimraf: 3.0.2
      schema-utils: 4.3.2
      selfsigned: 2.4.1
      serve-index: 1.9.1
      sockjs: 0.3.24
      spdy: 4.0.2
      webpack-dev-middleware: 5.3.4(webpack@5.99.9)
      ws: 8.18.2
    optionalDependencies:
      webpack: 5.99.9(webpack-cli@4.10.0)
      webpack-cli: 4.10.0(webpack@5.99.9)
    transitivePeerDependencies:
      - bufferutil
      - debug
      - supports-color
      - utf-8-validate

  webpack-merge@5.10.0:
    dependencies:
      clone-deep: 4.0.1
      flat: 5.0.2
      wildcard: 2.0.1

  webpack-notifier@1.15.0:
    dependencies:
      node-notifier: 9.0.1
      strip-ansi: 6.0.1

  webpack-sources@1.4.3:
    dependencies:
      source-list-map: 2.0.1
      source-map: 0.6.1

  webpack-sources@3.3.2: {}

  webpack@5.99.9(webpack-cli@4.10.0):
    dependencies:
      '@types/eslint-scope': 3.7.7
      '@types/estree': 1.0.8
      '@types/json-schema': 7.0.15
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/wasm-edit': 1.14.1
      '@webassemblyjs/wasm-parser': 1.14.1
      acorn: 8.15.0
      browserslist: 4.25.0
      chrome-trace-event: 1.0.4
      enhanced-resolve: 5.18.1
      es-module-lexer: 1.7.0
      eslint-scope: 5.1.1
      events: 3.3.0
      glob-to-regexp: 0.4.1
      graceful-fs: 4.2.11
      json-parse-even-better-errors: 2.3.1
      loader-runner: 4.3.0
      mime-types: 2.1.35
      neo-async: 2.6.2
      schema-utils: 4.3.2
      tapable: 2.2.2
      terser-webpack-plugin: 5.3.14(webpack@5.99.9)
      watchpack: 2.4.4
      webpack-sources: 3.3.2
    optionalDependencies:
      webpack-cli: 4.10.0(webpack@5.99.9)
    transitivePeerDependencies:
      - '@swc/core'
      - esbuild
      - uglify-js

  webpackbar@5.0.2(webpack@5.99.9):
    dependencies:
      chalk: 4.1.2
      consola: 2.15.3
      pretty-time: 1.1.0
      std-env: 3.9.0
      webpack: 5.99.9(webpack-cli@4.10.0)

  websocket-driver@0.7.4:
    dependencies:
      http-parser-js: 0.5.10
      safe-buffer: 5.2.1
      websocket-extensions: 0.1.4

  websocket-extensions@0.1.4: {}

  which@2.0.2:
    dependencies:
      isexe: 2.0.0

  wildcard@2.0.1: {}

  wrap-ansi@7.0.0:
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1

  wrappy@1.0.2: {}

  ws@8.18.2: {}

  xtend@4.0.2: {}

  y18n@5.0.8: {}

  yallist@3.1.1: {}

  yaml@1.10.2: {}

  yargs-parser@21.1.1: {}

  yargs@17.7.2:
    dependencies:
      cliui: 8.0.1
      escalade: 3.2.0
      get-caller-file: 2.0.5
      require-directory: 2.1.1
      string-width: 4.2.3
      y18n: 5.0.8
      yargs-parser: 21.1.1

  zwitch@2.0.4: {}

```
`plugins/zen/threes/resources/default_types/Threes.Document.json`
```{
    "class": "Zen.Threes.Classes.Types.Document",
    "files": [
        "plugins/zen/threes/classes/types/Document.php",
        "plugins/zen/threes/src/vue/components/types/Threes.Document.vue"
    ],
    "store": {
        "group": "Документы",
        "author": "Threes",
        "tags": ["text", "document"],
        "created_at": "2025-06-17 08:43"
    }
}

```
`plugins/zen/threes/resources/default_types/Threes.Elements.json`
```{
    "class": "Zen.Threes.Classes.Types.Elements",
    "files": [
        "plugins/zen/threes/classes/types/Elements.php",
        "plugins/zen/threes/src/vue/components/types/Threes.Elements.vue"
    ],
    "store": {
        "group": "Документы",
        "author": "Threes",
        "tags": ["text", "document"],
        "created_at": "2025-06-09 13:15"
    }
}

```
`plugins/zen/threes/resources/default_types/Threes.Method.json`
```{
    "class": "Zen.Threes.Classes.Types.Method",
    "files": [
        "plugins/zen/threes/classes/types/Method.php",
        "plugins/zen/threes/src/vue/components/types/Threes.Method.vue"
    ],
    "store": {
        "group": "Документы",
        "author": "Threes",
        "tags": ["text", "document"],
        "created_at": "2025-06-17 08:43"
    }
}

```
`plugins/zen/threes/resources/default_types/Threes.NodeBuilder.json`
```{
    "class": "Zen.Threes.Classes.Types.NodeBuilder",
    "files": [
        "plugins/zen/threes/classes/types/NodeBuilder.php",
        "plugins/zen/threes/src/vue/components/types/Threes.NodeBuilder.vue"
    ],
    "store": {
        "group": "Документы",
        "author": "Threes",
        "tags": ["text", "document"],
        "created_at": "2025-06-09 13:15"
    }
}

```
`plugins/zen/threes/resources/default_types/Threes.NodeText.json`
```{
    "class": "Zen.Threes.Classes.Types.NodeText",
    "files": [
        "plugins/zen/threes/classes/types/NodeText.php",
        "plugins/zen/threes/src/vue/components/types/Threes.NodeText.vue"
    ],
    "store": {
        "group": "Документы",
        "author": "Threes",
        "tags": ["text", "document"],
        "created_at": "2025-06-09 13:15"
    }
}

```
`plugins/zen/threes/routes.php`
```<?php

use Symfony\Component\HttpFoundation\BinaryFileResponse;

function handleResponse(array | string | \Symfony\Component\HttpFoundation\Response | null $response = null)
{
    if ($response instanceof BinaryFileResponse) {
        return $response;
    }

    if (is_null($response)) {
        return '';
    }

    if (is_array($response)) {
        if (!isset($response['success'])) {
            $response['success'] = true;
        }
        if (!isset($response['messages'])) {
            $response['messages'] = [];
        }
    }

    $has_messages = $response
        && isset($response['messages'])
        && is_array($response['messages']);

    if ($has_messages) {
        $response['messages'] = ths()->messages()->pushMessages($response['messages']);
    }

    if (!is_string($response)) {
        return Response::make(
            json_encode($response, 128 | 256),
            200,
            ['Content-Type' => 'application/json']
        );
    } else {
        return $response;
    }
}


Route::match(
    ['get', 'post'],
    'threes.api/{path}:{method}',
    function (string $path, string $method) {
        $response = ths()->api($path, $method);
        return handleResponse($response);
    }
);

Route::view('/app/node/{nid?}', 'zen.threes::threes');

```
`plugins/zen/threes/src/js/auto-register-mixin.js`
```export default {
    mounted() {
        if (this.$options.name) {
            ths.data.components[this.$options.name] = this
        }
    },
    unmounted() {
        if (this.$options.name && ths.data.components[this.$options.name] === this) {
            delete ths.data.components[this.$options.name]
        }
    }
}
```
`plugins/zen/threes/src/js/components-map.js`
```import FormInputText from '../vue/components/FormInputText.vue';
import FormInputNumber from "../vue/components/FormInputNumber.vue";
import FormInputSwitcher from "../vue/components/FormInputSwitcher.vue";
import FormInputSelect from "../vue/components/FormInputSelect.vue";
import FormInputRepeater from "../vue/components/FormInputRepeater.vue";
import FormInputTextArea from "../vue/components/FormInputTextArea.vue";
import FormSettingsSwitcher from "../vue/components/FormSettingsSwitcher.vue";

export default {
    string: FormInputText,
    password: FormInputText,
    number: FormInputNumber,
    switcher: FormInputSwitcher,
    select: FormInputSelect,
    dropdown: FormInputSelect,
    repeater: FormInputRepeater,
    textarea: FormInputTextArea,
    settings_switcher: FormSettingsSwitcher,
}

```
`plugins/zen/threes/src/js/methods/api.js`
```import axios from 'axios';
import md5 from 'md5';

export function createApi() {
    const requests_register = {}

    return function api(opts) {
        const data = opts.data || null;
        const ths = window.ths

        // const axios_options = authToken() ? {
        //         withCredentials: true,
        //         headers: {
        //             ThreesAuth: authToken()
        //         },
        //     } : null

        const axios_options = null

        const api_url = opts.api ? `/threes.api/${opts.api}` : opts.url
        const request_key = md5(api_url + JSON.stringify(data))

        if (requests_register[request_key]) {
            return;
        }

        console.log(`Threes query [${request_key}]: ${api_url}`, data)

        requests_register[request_key] = setTimeout(() => {
            if (requests_register[request_key]) {
                ths.data.process = true
            }
        }, 2000);

        const handleResponse = (response) => {
            delete requests_register[request_key];
            ths.data.process = true

            console.log(`Threes response [${request_key}]: ${api_url}`, response)

            if (response.messages) {
                ths.exe('Alerts', 'push', response.messages)
            }

            // Система подтверждения
            if (response.confirm) {
                ths.exe('Submit', 'push', response, opts)
                // Передаёт управление запросом
                return
            }

            if (opts.then) {
                opts.then(response);
            }
        }

        const handleError = (error) => {
            delete requests_register[request_key];
            ths.data.process = false
            console.error(error);
        }

        if (!data) {
            axios.get(api_url, axios_options)
                .then(res => handleResponse(res.data)).catch(handleError)
        } else {
            axios.post(api_url, data, axios_options)
                .then(res => handleResponse(res.data)).catch(handleError)
        }
    }
}

```
`plugins/zen/threes/src/js/routes.js`
```import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/app/node/:nid?",
        name: "FrameShort",
        component: () => import("../vue/screens/Ui.vue"),
        props: true,
    },
    {
        path: "/:backend/zen/threes/nodecontroller/node/:nid?",
        name: "Frame",
        component: () => import("../vue/screens/Ui.vue"),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

```
`plugins/zen/threes/src/js/threes.js`
```import { createApp } from 'vue';
import { reactive } from 'vue';
import router from './routes';
import PrimeVue from 'primevue/config';
import Threes from '../vue/Threes.vue';

import mitt from 'mitt';
import _ from 'lodash';
window._ = _;

import vueClickOutsideElement from 'vue-click-outside-element';
import FormFitter from './../vue/components/FormFitter.vue';
import FormSection from "../vue/trash/v2/FormSection.vue";
import FormTabs from "../vue/components/FormTabs.vue";
import ClickOutside from '../vue/directives/ClickOutside';

import { createApi } from './methods/api';

window.ths = {
    auth_token: null, // Токен авторизации
    bus: mitt(), // Шина событий

    // Реактивные данные
    data: reactive({

        // Компоненты Threes
        components: {},

        // Глобальный флаг прелоадера
        process: false,

        // url-админпанели ocms
        backend: null,

        // Операции с нодами
        node_selected_nid: null,
        node_actions_nid: null,
        node_action: null,
    }),

    getNodeUrl(nid) {
        if (this.data.backend) {
            return `/${this.data.backend}/zen/threes/nodecontroller/node/${nid}`
        } else {
            return `/app/node/${nid}`
        }
    },

    clearNodeActions() {
        this.data.node_actions_nid = null;
        this.data.node_action = null;
    },

    // Монтирование компонента
    mountComponent(name, instance) {
        this.data.components[name] = instance
    },

    // Размонтирование компонента
    unmountComponent(name) {
        this.data.components[name] = null
    },

    // Выполнение метода компонента
    exe(name, method, ...args) {
        this.data.components[name][method](...args)
    }
}

// Сервис отправки запросов
window.ths.api = createApi();

const app = createApp(Threes);
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(vueClickOutsideElement);

app.component('FormFitter', FormFitter);
app.component('FormSection', FormSection);
app.component('FormTabs', FormTabs);

app.directive('click-outside', ClickOutside);
app.mount("#threes");

```
`plugins/zen/threes/src/vue/directives/ClickOutside.js`
```export default {
    beforeMount(el, binding) {
        if (typeof binding.value !== 'function') {
            console.warn(`[v-click-outside] Expected a function, got ${typeof binding.value}`);
            return;
        }

        const bubble = binding.modifiers?.bubble;

        el.__vueClickOutside__ = (e) => {
            if (bubble || (!el.contains(e.target) && el !== e.target)) {
                binding.value(e);
            }
        };

        document.addEventListener('click', el.__vueClickOutside__);
    },

    unmounted(el) {
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
}

```
`plugins/zen/threes/traits/DebugLogTrait.php`
```<?php

namespace Zen\Threes\Traits;

use Throwable;

trait DebugLogTrait
{
    /**
     * Красиво выводит Throwable как страницу с кнопкой копирования
     */
    protected function logError(Throwable $e): void
    {
        // Составляем trace строкой
        $traceLines = [];
        foreach ($e->getTrace() as $i => $frame) {
            if (isset($frame['file'])) {
                $traceLines[] = sprintf(
                    "#%d %s:%d %s%s()",
                    $i,
                    $frame['file'],
                    $frame['line'],
                    $frame['class'] ?? '',
                    $frame['function']
                );
            }
        }

        $traceString = implode("\n", $traceLines);

        // Отправляем данные в Blade
        echo view('zen.threes::threes_ai_error', [
            'errorClass'   => get_class($e),
            'errorMessage' => $e->getMessage(),
            'errorFile'    => $e->getFile(),
            'errorLine'    => $e->getLine(),
            'errorTrace'   => $traceString,
        ])->render();

        exit; // чтобы Laravel не добавлял лишние ошибки поверх
    }
}

```
`plugins/zen/threes/traits/QueryLogTrait.php`
```<?php

namespace Zen\Threes\Traits;

use ReflectionClass;

use Zen\Threes\Models\Query as QueryModel;

/**
 * Логирование запросов
 * Использование: Добавить трейт в класс и все protected методы будут вызваны через эту прослойку
 * Например чтобы повторить последний запрос, достаточно к эндпоинту api добавить &debug
 */
trait QueryLogTrait
{

    public function __call($method, $arguments)
    {
        $class_name = str_replace('\\', '.', (new ReflectionClass($this))->getName());
        $call = "$class_name.$method";

        if (request()->has('debug')) {
            $last_query = QueryModel::where('call', $call)
                ->orderBy('id', 'desc')
                ->first();
            if ($last_query) {
                $data = ths()->fromJson($last_query->data);
                unset($data['debug']);
                request()->merge($data);
            }
        } else {
            QueryModel::create([
                'call'=> $call,
                'data' => request()->all()
            ]);
        }

        if (method_exists($this, $method)) {
            return call_user_func_array([$this, $method], $arguments);
        } else {
            throw new \BadMethodCallException("Method $method does not exist");
        }
    }
}

```
`plugins/zen/threes/traits/SingletonTrait.php`
```<?php

namespace Zen\Threes\Traits;

trait SingletonTrait
{
    private static ?self $instance = null;

    public static function getInstance(mixed $var = null): self {
        if (!self::$instance) {
            self::$instance = new self($var);
        }

        return self::$instance;
    }

    /* zenc0dr: Раскомментировать при явной необходимости
    private function __construct() {}
    private function __clone() {}
    public function __wakeup() {}
    */
}

```
`plugins/zen/threes/updates/m001_features.php`
```<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M001Features extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_features', function($table)
        {
            $table->increments('id');
            $table->text('name')->nullable()->comment('Название феномена');
            $table->text('description')->nullable()->comment('Описание феномена');

            $table->text('category')->nullable()->comment('Категория феномена');
            $table->text('priority')->nullable()->comment('Приоритет феномена');
            $table->text('status')->nullable()->comment('Статус феномена');
            $table->text('module')->nullable()->comment('Модуль?');


            $table->text('data')->nullable();
            $table->integer('release')->nullable()->comment('Релиз');
            $table->text('acceptance_criteria')->nullable()->comment('Критерии приёмки');
            $table->integer('parent_id')->unsigned()->nullable();
            $table->integer('sort_order')->unsigned()->default(0);
            $table->integer('nest_left')->unsigned();
            $table->integer('nest_right')->unsigned();
            $table->integer('nest_depth')->unsigned();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_features');
    }
}
```
`plugins/zen/threes/updates/m002_queries.php`
```<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M002Queries extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_queries', function($table)
        {
            $table->id();
            $table->string('call');
            $table->text('data')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_queries');
    }
}
```
`plugins/zen/threes/updates/version.yaml`
```v1.0.1:
    - 'Initialize plugin'
v1.0.2:
    - 'Created Features'
    - m001_features.php
v1.0.3:
    - 'Create Queries'
    - m002_queries.php

```
`plugins/zen/threes/views/blueprints/frames/frame.htm`
```<?php

namespace Zen\Threes\Classes\Frames;

class Frame_{{ frame_id }}
{
    public function flow()
    {
#%code_writer%#
    }
}

```
`plugins/zen/threes/views/threes.blade.php`
```<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Threes</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" type="image/svg+xml" href="/plugins/zen/threes/assets/images/icons/threes.svg">
    <link href="/modules/backend/assets/vendor/bootstrap/bootstrap.css" rel="stylesheet">
    <link href="/modules/backend/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="/modules/backend/assets/css/october.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('css/threes.css', 'plugins/zen/threes/assets') }}">
</head>
<body>
<main id="threes">
    Загрузка...
</main>
<script src="/modules/system/assets/js/vendor/jquery.min.js"></script>
<script src="/modules/system/assets/js/vue.bundle-min.js"></script>
<script src="/modules/system/assets/js/framework-bundle.min.js"></script>
<script src="/modules/backend/assets/vendor/bootstrap/bootstrap.min.js"></script>
<script src="/modules/backend/assets/js/vendor-min.js"></script>
<script src="/modules/backend/assets/js/october-min.js"></script>
<script src="/modules/system/assets/js/lang/lang.ru.js"></script>
<script src="{{ mix('js/threes.js', 'plugins/zen/threes/assets') }}" defer></script>
</body>
</html>

```
`plugins/zen/threes/views/threes_ai_error.blade.php`
```<!DOCTYPE html>
<html lang="en" class="bg-gray-100">
<head>
    <meta charset="UTF-8">
    <title>Threes Debug Error</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex items-center justify-center min-h-screen p-6">
<div class="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
    <h1 class="text-2xl font-bold text-red-600 mb-4">🚨 Ошибка Threes</h1>
    <p class="text-gray-800 mb-2"><strong>{{ $errorClass }}</strong>: {{ $errorMessage }}</p>
    <p class="text-gray-600 mb-4">В файле: <code class="bg-gray-200 p-1 rounded">{{ $errorFile }}:{{ $errorLine }}</code></p>

    <h2 class="text-lg font-semibold mb-2">Trace:</h2>
    <pre class="bg-gray-900 text-green-400 p-4 rounded mb-4 overflow-x-auto text-sm">{{ $errorTrace }}</pre>

    <button id="copyBtn" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        📋 Скопировать в буфер
    </button>
</div>

<script>
    document.getElementById('copyBtn').addEventListener('click', function () {
        const text = `{{ $errorClass }}: {{ $errorMessage }}\nIn: {{ $errorFile }}:{{ $errorLine }}\nTrace:\n{{ $errorTrace }}`;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () {
                alert('✅ Скопировано в буфер обмена!');
            }).catch(function (err) {
                fallbackCopyTextToClipboard(text);
            });
        } else {
            fallbackCopyTextToClipboard(text);
        }
    });

    function fallbackCopyTextToClipboard(text) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                alert('✅ Скопировано в буфер обмена!');
            } else {
                alert('❌ Не удалось скопировать!');
            }
        } catch (err) {
            alert('❌ Ошибка копирования: ' + err);
        }

        document.body.removeChild(textarea);
    }
</script>

</body>
</html>

```
`plugins/zen/threes/webpack.mix.js`
```const mix = require('laravel-mix');
const path = require('path');
const webpack = require('webpack');

mix.sass('src/scss/threes.scss', 'css')
    .options({
        processCssUrls: false // Отключает автоматическую обработку относительных URL в CSS
    })
    .webpackConfig({
        output: {
            filename: '[name].js',
            chunkFilename: 'js/[name].app.js',
            publicPath: '/plugins/zen/threes/assets/', // Указывает базовый путь для публичных файлов
        },
        // stats: {
        //     children: true // Раскомментировать только если будут ошибки сборки
        // },
        devtool: mix.inProduction() ? false : 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|eot|ttf|svg)$/, // Обработка шрифтов и SVG
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/vendor/primeicons/[name].[ext]', // Название файлов
                        publicPath: '/plugins/zen/threes/assets/', // Путь для использования в браузере
                        outputPath: 'fonts/vendor/primeicons/', // Путь для сохранения файлов
                    },
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: JSON.stringify(true),
                __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
            }),
        ],
        resolve: {
            alias: {
                '@nodes': path.resolve(__dirname, 'plugins/zen/threes/nodes'),
            }
        }
    });

mix.js('src/js/threes.js', 'js').vue();
mix.setPublicPath('assets');

if (mix.inProduction()) {
    mix.version();
}

// Настройка alias для удобства работы с путями
mix.alias({ '@': path.join(__dirname, 'src/js') });

// Копирование дополнительных ресурсов
mix.copyDirectory(path.join(__dirname, 'src/images'), 'assets/images');
mix.copyDirectory('node_modules/primeicons/fonts', 'assets/fonts/vendor/primeicons');
mix.copyDirectory('node_modules/@fontsource/exo-2/files', 'assets/css/files');

```