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
use Zen\Threes\Classes\Gen;
use Zen\Threes\Models\Node;
use Zen\Threes\Models\Feature;
use Zen\Threes\Classes\Nodes;

/**
 * Данный класс существует для отладки и экспериментов
 * в нем всегда должны быть два метода: debug (по возможности оставлять пустым) и test (для теста api)
 */
class Tests
{
    # http://threes.dc/threes.api/debug.Tests:debug
    public function debug()
    {
        dd(
            ths()->getSetting('author_token')
        );
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
            $node = ths()->nodes()->createNodeByClass();
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
}

```
`plugins/zen/threes/api/nodes/Node.php`
```<?php

namespace Zen\Threes\Api\Nodes;

use Zen\Threes\Traits\QueryLogTrait;

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
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:set-node-description?debug
    protected function setNodeDescription(): array
    {
        ths()->nodes()->setNodeDescription(
            request('nid'),
            request('description')
        );
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
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:add-node?debug
    protected function addNode(): array
    {
        ths()->nodes()->addNode(
            nid: request('nid'),
            class: request('class'),
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
        if ($submit = ths()->submit()) {
            return $submit;
        }

        ths()->nodes()->deleteNode(
            nid: request('nid')
        );
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
`plugins/zen/threes/classes/Gen.php`
```<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Models\Feature;

class Gen
{
    public static function run(int $feature_id)
    {
        $feature = Feature::find($feature_id);
        $self = new self();
        $self->generate($feature);
    }

    public function generate(Feature $feature)
    {

        dd($feature->data);


//        $vector = ths()->getSetting('vector');
//        $system_prompt = collect()
//            ->where('active', 1)
//            ->map(function ($prompt) {
//                return $prompt['text'];
//            })
//            ->join(PHP_EOL);
//
//        $yaml = ths()->ai(
//            $vector,
//            $system_prompt
//        );
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
    public function model(string $nid = null): ?Node
    {
        if ($nid) {
            return Node::find($nid);
        }
        return new Node();
    }

    /**
     * Создаёт новый нод по классу шаблона
     * @param string $template_method
     * @return Node
     * @throws \ReflectionException
     */
    public function createNodeByClass(string $class = 'Zen.Threes.Classes.Nodes.NodeText'): Node
    {
        $node = $this->model();
        $node->class = $class;
        $template = $node->exe('template');

        foreach ($template as $field => $value) {
            $node->$field = $value;
        }
        $node->save();
        return $node;
    }

    /**
     * Получить дерево нод для меню Tree
     * @param string $schema_code
     * @param string|null $search
     * @return array
     */
    public function getNodesTree(string $schema_code = 'default', string $search = null): array
    {
        $schema = ths()->getSchema($schema_code)['schema_nodes'];
        $search = trim(mb_strtolower($search ?? ''));

        $build_tree = function (array $item) use (&$build_tree, $search): ?array {
            $node = \Zen\Threes\Models\Node::find(
                $item['nid'],
                ['icon', 'name', 'description', 'class', 'props']
            );

            if (!$node) return null;

            $children = [];
            if (!empty($item['nodes'])) {
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
                'class' => $node->class,
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
        $node = Node::find($nid, ['name', 'icon', 'description', 'props', 'class', 'data']);

        if (!$node) {
            return null;
        }

        $props = $node->props ?? [];

        // Контент схемы: либо selfContent, либо getSchema
        $schema_node = [
            'nid' => $node->nid,
            'icon' => $node->icon,
            'name' => $node->name,
            'description' => $node->description,
            'props' => $props,
        ];

        if ($is_root && !empty($props['self_content'])) {
            $handler_data = $node->exe('getSelfContent', $node->data);
            $schema_node['component'] = $handler_data['component'];
            $schema_node['data'] = $handler_data['data'];
        } elseif (!$is_root) {
            $handler_data = $node->exe('getSchema', $node->data);
            $schema_node['component'] = $handler_data['component'];
            $schema_node['data'] = $handler_data['data'];
        }

        // Рекурсивно достроим дочерние элементы, если разрешено
        if (!empty($props['show_children']) && !empty($branch['nodes'])) {
            $children = [];

            foreach ($branch['nodes'] as $child_branch) {
                $child_schema = $this->buildSchemaFromBranch($child_branch, false);
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

        if (isset($settings['self_content'])) {
            $props['self_content'] = $settings['self_content'];
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
        ths()->messages()->addMessage('Данные нод обновлены');
    }

    /**
     * Добавить нод
     * @param string|null $nid
     * @param string|null $class
     * @return void
     * @throws \ReflectionException
     */
    public function addNode(string $nid = null, string $class = null): void
    {
        $schema = ths()->getSchema();
        if ($nid && !$class) {
            $node = Node::find($nid);
            if ($node) {
                $schema['schema_nodes'][] = ['nid' => $nid];
                ths()->setSchema($schema['schema_nodes']);
            }
        } elseif ($class) {
            $node = $this->createNodeByClass($class);
            if ($node) {
                $schema['schema_nodes'][] = ['nid' => $node->nid];
                ths()->setSchema($schema['schema_nodes']);
            }
        }
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
    public function deleteNode(string $nid): void
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

        // Физически удаляем каталоги всех затронутых нодов
        foreach (array_unique($removed_nids) as $del_nid) {
            if ($node = Node::find($del_nid)) {
                $node->delete();          // см. реализацию delete() в Node :contentReference[oaicite:1]{index=1}
            }
        }

        // Сообщение для UI
        if ($removed_nids) {
            ths()->messages()->addMessage(
                'Удалены ноды: ' . implode(', ', $removed_nids)
            );
        }
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

class Store
{
    use SingletonTrait;

    public function getStoreNodes(): array
    {
        $store = [];

        $nodes_templates_path = base_path('plugins/zen/threes/classes/nodes');
        $node_templates = ths()->filesList($nodes_templates_path);

        foreach ($node_templates as $node_template) {
            if ($node_template['extension'] !== 'php') {
                continue;
            }

            $class = 'Zen.Threes.Classes.Nodes.' . pathinfo($node_template['name'], PATHINFO_FILENAME);

            try {
                $node = ths()->nodes()->model();
                $node->class = $class;
                $template = $node->exe('template');
                $store[] = [
                    'nid' => null,
                    'name' => $template['name'] ?? 'Без названия',
                    'icon' => ths()->checkIcon($template['icon']),
                    'description' => $template['description'] ?? '',
                    'class' => $class,
                    'template' => true,
                    'group' => $template['props']['store_data']['group'] ?? 'Шаблоны'
                ];
            } catch (\Throwable) {
                continue;
            }
        }

        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $node_dirs = ths()->dirList($nodes_storage_path);

        foreach ($node_dirs as $nid) {
            $node = Node::find($nid, ['name', 'icon', 'description', 'props', 'class']);

            if (!$node || !($node->props['store'] ?? false)) {
                continue;
            }

            $store[] = [
                'nid' => $node->nid,
                'name' => $node->name,
                'icon' => $node->icon,
                'description' => $node->description,
                'class' => $node->class,
                'template' => false,
                'group' => $node->props['store_data']['group'] ?? 'Сохранённые'
            ];
        }

        return $store;
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
     * @param string $file_path
     * @param int $permissions
     * @return string
     */
    public function checkDir(string $file_path, int $permissions = 0777): string
    {
        $dirname = dirname($file_path);
        if (!is_dir($dirname)) {
            mkdir($dirname, $permissions, true);
        }
        return $file_path;
    }

    /**
     * Возвращает коллекцию со списком файлов в указанной папке
     * @param string $dir_path - Путь к папке
     * @param bool $recursive - Рекурсивное сканирование (отключено по умолчанию)
     * @return Collection
     */
    public function filesList(string $dir_path, bool $recursive = false): Collection
    {
        $files = $recursive ? File::allFiles($dir_path) : File::files($dir_path);
        $output = [];
        foreach ($files as $file) {
            $output[] = [
                'name' => $file->getFilename(),
                'extension' => $file->getExtension(),
                'path' => $file->getRealPath(),
                'size' => $file->getSize()
            ];
        }
        return collect($output);
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
`plugins/zen/threes/classes/nodes/NodeBuilder.php`
```<?php

namespace Zen\Threes\Classes\Nodes;

use Zen\Threes\Models\Node;

class NodeBuilder
{
    private Node $node;
    private mixed $data;

    public function __construct($data)
    {
        $this->node = $data['node'];
        $this->data = $data['data'];
    }

    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/code.svg'),
            'name' => "Новый интерфейс",
            'class' => 'Zen.Threes.Classes.Nodes.NodeBuilder',
            'data' => null,
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

    public function getSelfContent(): array
    {
        return $this->getSchema();
    }

    public function setSelfContent(): mixed
    {
        return $this->data;
    }

    public function getSchema(): array
    {
        return [
            'component' => 'NodeBuilder',
            'data' => $this->data,
        ];
    }
}

```
`plugins/zen/threes/classes/nodes/NodeText.php`
```<?php

namespace Zen\Threes\Classes\Nodes;

use Zen\Threes\Models\Node;

class NodeText
{
    private Node $node;
    private mixed $data;

    public function __construct($data)
    {
        $this->node = $data['node'];
        $this->data = $data['data'];
    }

    public function template(): array
    {
        return [
            'icon' => base_path('plugins/zen/threes/src/images/icons/document.svg'),
            'name' => "Новый документ",
            'class' => 'Zen.Threes.Classes.Nodes.NodeText',
            'data' => 'Привет мир!',
            'props' => [
                'self_content' => true,
                'show_children' => true,
                'tree' => true,
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

    public function getSelfContent(): array
    {
        return $this->getSchema();
    }

    public function setSelfContent()
    {
        return $this->data;
    }

    public function getSchema(): array
    {
        return [
            'component' => 'NodeText',
            'data' => $this->data,
        ];
    }

    public function setSchema()
    {
        return $this->data;
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

class Vector extends Command
{
    protected $signature = 'threes:vector';
    protected $description = 'Generate vector.md for ai';

    public function handle()
    {
        $exclude = [
            '/app/plugins/zen/threes/node_modules',
            '/app/plugins/zen/threes/package-lock.json',
            '/app/plugins/zen/threes/assets',
            '/app/plugins/zen/threes/controllers',
            '/app/plugins/zen/threes/src/vue/trash',
        ];

        // Файлы, которые нужно включить в любом случае
        $force_include = [
            '/app/plugins/zen/threes/README.md',
            '/app/plugins/zen/threes/plugin.yaml',
        ];

        $allow_extensions = [
            'php', 'yaml', 'json', 'js', 'css', 'html', 'htm', 'txt'
        ];

        $this->output->writeln("Scanning directory...");
        $files = ths()->filesList(
            base_path('plugins/zen/threes'),
            true
        );

        $output = [];
        foreach ($files as $file) {
            $path = $file['path'];
            $ext = $file['extension'];

            // Принудительное включение файлов из белого списка
            if (in_array($path, $force_include)) {
                $this->processFile($path, $output);
                continue;
            }

            // Проверка расширения файла
            if (!in_array($ext, $allow_extensions)) {
                continue;
            }

            // Проверка на исключенные пути
            $excluded = false;
            foreach ($exclude as $item) {
                if (str_starts_with($path, $item)) {
                    $excluded = true;
                    break;
                }
            }
            if ($excluded) {
                continue;
            }

            $this->processFile($path, $output);
        }

        $markdown = join(PHP_EOL, $output);
        $output_path = storage_path('threes_vector.md');
        file_put_contents($output_path, $markdown);
        $this->output->writeln("Output: $output_path");
    }

    protected function processFile(string $path, array &$output)
    {
        $this->output->writeln("Render file: $path");
        $code = file_get_contents($path);
        $cleanPath = preg_replace('/^\/app\//', '', $path);
        $output[] = "`$cleanPath`" . PHP_EOL . '```' . $code . PHP_EOL . '```';
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
    ### Threes entry point for Fluent API
    function ths(): \Zen\Threes\Threes
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


use Exception;

/**
 * @property string $nid - Уникальный идентификатор нода
 * @property string $icon - Иконка
 * @property string $name - Имя нода
 * @property string $description - Описание нода
 * @property string $class - Класс нода
 * @property array $data - Данные нода
 * @property array $props - Настройки нода
 */
class Node
{
    protected array $attributes = [];

    protected static array $fields = [
        'icon'=> 'string',
        'name' => 'string',
        'description' => 'string',
        'class' => 'string',
        'data' => 'array',
        'props' => 'array'
    ];

    protected static array $extensions = [
        'string' => 'txt',
        'array' => 'json',
        'object' => 'object',
    ];

    public ?string $scope = null;

    public function __construct(string $nid = null)
    {
        if ($nid) {
            $this->attributes['nid'] = $nid;
        }
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

    /**
     * Сеттер иконки
     * @param string $svg
     * @return void
     */
    public function setIconAttribute(string $svg): void
    {
        $this->attributes['icon'] = ths()->setIcon($svg);
    }

    /**
     * Геттер иконки
     * @param string $hash
     * @return string|null
     */
    public function getIconAttribute(string $hash): ?string
    {
        if (!$hash) {
            return null;
        }
        return ths()->getIcon($hash);
    }

    /**
     * Вызов метода класса нода
     * @param string $method
     * @param mixed|null $data
     * @return mixed
     * @throws \ReflectionException
     */
    public function exe(string $method, mixed $data = null): mixed
    {
        return ths()->exe("$this->class.$method", [
            'node' => $this,
            'data' => $data,
        ]);
    }

    /**
     * Получить атрибут используя dotted path
     * @param string $path
     * @param mixed|null $default
     * @return mixed
     */
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

    /**
     * Установить атрибут используя dotted path
     * @param string $path
     * @param mixed $value
     * @return void
     */
    public function setAttr(string $path, mixed $value): void
    {
        $segments = explode('.', $path);
        $ref = &$this->attributes;

        foreach ($segments as $segment) {
            if (!is_array($ref)) {
                $ref = [];
            }
            if (!array_key_exists($segment, $ref)) {
                $ref[$segment] = [];
            }
            $ref = &$ref[$segment];
        }

        $ref = $value;
    }

    /**
     * Получить экземпляр нода
     * @param string $nid
     * @param array|null $fields - Если указано, будут загружаться только эти поля
     * @return Node
     */
    public static function find(string $nid, ?array $fields = null): ?Node
    {
        $node = new self($nid);
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

    /**
     * Метод преобразования строк вида string_name в StringName
     * @param string $direction
     * @param string $method
     * @param string $postfix
     * @return string
     */
    private function studlyCaser(
        string $direction,
        string $method,
        string $postfix = 'Attribute'
    ): string {
        return $direction
            . str_replace(' ', '', ucwords(str_replace(['-', '_'], ' ', $method)))
            . $postfix;
    }

    /**
     * Сохранить данные экземпляра
     * @return void
     */
    public function save(): void
    {
        $this->beforeSave();

        if (empty($this->attributes['nid'])) {
            $this->attributes['nid'] = ths()->createShortId();
        }

        foreach ($this->attributes as $key => $value) {
            if ($key === 'nid') {
                continue;
            }
            $this->saveField($key, $value);
        }

        $this->afterSave();
    }

    /**
     * Сохранение значения указанного поля
     * @param string $field_name Название поля, значение которого необходимо сохранить
     * @param string|object|array|int|bool|null $value Значение для сохранения. В зависимости от формата поля может быть преобразовано
     * @return void
     */
    private function saveField(string $field_name, string | object | array | int | bool | null $value): void
    {
        $field_format = self::$fields[$field_name];
        $field_extension = self::$extensions[$field_format];
        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $field_path = ths()->checkDir(
            "$nodes_storage_path/$this->nid/$field_name.$field_extension"
        );

        if ($value === null) {
            unlink($field_path);
            return;
        }

        if ($field_format === 'object') {
            $value = serialize($value);
        }

        if ($field_format === 'array') {
            $value = ths()->toJson($value);
        }

        $value = (string) $value;
        $value = trim($value);

        file_put_contents(
            $field_path,
            $value,
            LOCK_EX
        );
    }

    /**
     * Загружает поле нода из хранилища и декодирует его в соответствующем формате.
     * @param string $field_name - Имя поля, которое необходимо загрузить.
     * @return void
     */
    private function loadField(string $field_name): void
    {
        $field_format = self::$fields[$field_name];
        $field_extension = self::$extensions[$field_format];
        $nodes_storage_path = ths()->env('NODES_STORAGE');

        $field_path = "$nodes_storage_path/$this->nid/$field_name.$field_extension";
        if (!file_exists($field_path)) {
            return;
        }

        $field_data = file_get_contents($field_path);
        if ($field_format === 'object') {
            $this->attributes[$field_name] = unserialize($field_data);
        }

        if ($field_format === 'array') {
            $this->attributes[$field_name] = ths()->fromJson($field_data);
        }

        if ($field_format === 'bool') {
            $this->attributes[$field_name] = (bool) $field_data;
        }

        if ($field_format === 'int') {
            $this->attributes[$field_name] = (int) $field_data;
        }

        if ($field_format === 'string') {
            $this->attributes[$field_name] = $field_data;
        }
    }

    /**
     * Удаляет нод, если он существует
     * @return void
     */
    public function delete(): void
    {
        if (empty($this->attributes['nid'])) {
            return;
        }

        $nodes_storage_path = ths()->env('NODES_STORAGE');
        $path = "$nodes_storage_path/{$this->attributes['nid']}";

        if (!is_dir($path)) {
            return;
        }

        $escaped_path = escapeshellarg($path);
        shell_exec("rm -rf $escaped_path");
    }

    /**
     * Удаляет все данные из хранилища нодов.
     * Позволяет безопасно очистить директорию, содержащую данные нодов.
     * Если директория хранилища отсутствует или не является директорией, метод завершает выполнение.
     */
    public static function truncate(): void
    {
        # Удалить все ноды
        $nodes_storage_path = ths()->env('NODES_STORAGE');
        if (!file_exists($nodes_storage_path) || !is_dir($nodes_storage_path)) {
            return;
        }
        $escaped_path = escapeshellarg($nodes_storage_path);
        shell_exec("rm -rf $escaped_path/*");

        # Удалить все схемы
        $schemes_storage_path = ths()->env('SCHEMES_STORAGE');
        if (!file_exists($schemes_storage_path) || !is_dir($schemes_storage_path)) {
            return;
        }
        $escaped_path = escapeshellarg($schemes_storage_path);
        shell_exec("rm -rf $escaped_path/*");
    }

    /**
     * Устанавливает значение атрибута 'data'.
     * @param array|string|null $data.
     * @return void
     */
    public function setDataAttribute(array|string|null $data = null): void
    {
        if ($this->scope) {
            $method = $this->studlyCaser('set', $this->scope, '');
            $data = $this->exe($method, $data);
        }
        $this->attributes['data'] = [$data];
    }

    /**
     * Получить значение атрибута data.
     * @return array|string|null
     */
    public function getDataAttribute(): array|string|null
    {
        return $this->attributes['data'][0] ?? null;
    }

    /**
     * Создает иконку из шаблона, если она не указана в атрибутах.
     * Если класс отсутствует или шаблон не найден, метод завершает выполнение.
     * @return void
     * @throws Exception
     */
    public function createIconFromTemplate(): void
    {
        if (!$this->class) {
            return;
        }

        if (isset($this->attributes['icon']) && !empty($this->attributes['icon'])) {
            return;
        }

        $template = $this->exe('template');
        if (!$template) {
            return;
        }
        $this->icon = $template['icon'];
    }

    public function getDescriptionAttribute(?string $description = null): string
    {
        if (!$description) {
            return '';
        }
        return $description;
    }


    /**
     * Выполняет действия перед сохранением.
     * Создаёт иконку на основе шаблона.
     *
     * @return void
     * @throws Exception
     */
    public function beforeSave(): void
    {
        $this->createIconFromTemplate();
    }

    public function afterSave(){}
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
        "test": "echo \"Error: no test specified\" && exit 1"
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
                url: zen/threes/nodecontroller
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

```
`plugins/zen/threes/src/js/components-map.js`
```import FormInputText from '../vue/components/FormInputText.vue';
import FormInputNumber from "../vue/components/FormInputNumber.vue";
import FormInputSwitcher from "../vue/components/FormInputSwitcher.vue";
import FormInputSelect from "../vue/components/FormInputSelect.vue";
import FormInputRepeater from "../vue/components/FormInputRepeater.vue";
import FormInputTextArea from "../vue/components/FormInputTextArea.vue";
// import FormButton from "../vue/components/FormButton.vue";
// import FormSeparator from "../vue/components/FormSeparator.vue";

export default {
    string: FormInputText,
    password: FormInputText,
    number: FormInputNumber,
    switcher: FormInputSwitcher,
    select: FormInputSelect,
    repeater: FormInputRepeater,
    textarea: FormInputTextArea,
    // button: FormButton,
    // separator: FormSeparator
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
        path: "/:backend/zen/threes/nodecontroller/:nid?",
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
        components: {
            Alerts: null, // Система сообщений
            Submit: null, // Система подтверждения
        },

        // Глобальный флаг прелоадера
        process: false,

        // Операции с нодами
        node_selected_nid: null,
        node_actions_nid: null,
        node_action: null,
    }),

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

```