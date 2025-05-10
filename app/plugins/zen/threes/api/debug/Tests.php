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

    # http://threes.dc/threes.api/debug.Tests:nodeTest?nid=3axhafwjdk5v
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

    # http://threes.dc/threes.api/debug.Tests:backlogToNodes
    public function backlogToNodes(): string
    {
        $features = Feature::all();

        // Очистим все ноды
        Node::truncate();

        $structure = [];
        $featureToNode = [];

        foreach ($features as $feature) {
            /** @var Feature $feature */
            //$node = app(Nodes::class)->createNode();

            $node = new Node('node' . $feature->id);
            $node->name = $feature->name ?? 'Без названия';
            $node->description = $feature->description ?? '';
            $node->data = $feature->description ?? '';
            $node->icon = base_path('plugins/zen/threes/src/images/icons/cog.svg');

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
            $structure[$node->nid] = []; // Подготовим пустой список детей (на случай если root)
        }

        foreach ($features as $feature) {
            if ($feature->parent_id && isset($featureToNode[$feature->parent_id])) {
                $parentNode = $featureToNode[$feature->parent_id];
                $childNode = $featureToNode[$feature->id];

                $structure[$parentNode->nid][] = $childNode->nid;
            }
        }

        // Удаляем пустые "дети" если их нет — для красоты
        $structure = array_filter($structure, fn($children) => count($children) > 0);

        // Сохраняем структуру как JSON
        $treePath = storage_path('threes/trees/backlog_structure.json');
        ths()->checkDir($treePath); // гарантируем директорию
        file_put_contents($treePath, json_encode($structure, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

        return 'Features успешно перенесены в файловые ноды, структура сохранена в backlog_structure.json';
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
