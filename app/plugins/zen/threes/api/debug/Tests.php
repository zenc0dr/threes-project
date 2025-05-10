<?php

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

    # http://threes.dc/threes.api/debug.Tests:testMongo
    public function testMongo()
    {

//        dd(
//            ths()->getSetting('author_token')
//        );

        //Node::truncate();

        $node = new Node();
        $node->name = 'Я нод';
        $node->save();
        $nid = $node->getNid();
        $node = Node::find($nid);
        dd(
            $node->nid,
            $node->name
        );
    }

    # http://threes.dc/threes.api/debug.Tests:addNodeToChildrenTest?nid=xxxxx&children_nid=yyyyyy
    public function addNodeToChildrenTest()
    {
        ths()->nodes()->model(request('nid'))
            ->addChild(request('children_nid'));
    }

    # http://threes.dc/threes.api/debug.Tests:handleYamlFile
    public function handleYamlFile()
    {
        $yaml_path = storage_path('backlog/VB_v1.yaml');
        $yaml_content = file_get_contents($yaml_path);

        // Подготовка: оборачиваем опасные строки
        $prepared_yaml = $this->prepareYamlForParsing($yaml_content);

        // Теперь безопасно парсим YAML
        $data = Yaml::parse($prepared_yaml);

        // Дальше делаешь что хочешь: цитируешь строки, сериализуешь обратно и т.д.
        $output = Yaml::dump($data, 10, 2);

        dd($output);
    }
}
