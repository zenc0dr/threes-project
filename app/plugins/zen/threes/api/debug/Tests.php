<?php

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
        // y6tppa2zu2eq
        dd(
            ths()->nodes()->node('y6tppa2zu2eq')->props['self_content']
        );


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
