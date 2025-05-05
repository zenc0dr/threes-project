<?php

namespace Zen\Threes\Api\debug;

use Http;
use Zen\Threes\Classes\Services\OpenAiService;
use Symfony\Component\Yaml\Yaml;
use Symfony\Component\Yaml\Dumper;
use Zen\Threes\Classes\Gen;
use Zen\Threes\Models\Node;

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
            ths()->nodes()->getNodesTree()
        );


        #Node::truncate();
        #$node = ths()->nodes()->createNode();
        //$node = ths()->nodes()->model('n7abeanmj9yh');
        //dd($node->getSchemaNode());
        ths()->nodes()->getUiData('n7abeanmj9yh');
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



    public function prepareYamlForParsing(string $yaml_content): string
    {
        // Регулярка для ключей вида: Ключ: значение с двоеточием внутри
        return preg_replace_callback('/^(\s*\w[\w\-]*\s*:\s*)(.*)$/mu', function($matches) {
            $key = $matches[1];
            $value = trim($matches[2]);

            // Если значение уже в кавычках — оставляем
            if (str_starts_with($value, '"') || str_starts_with($value, "'")) {
                return $matches[0];
            }

            // Если значение содержит двоеточие и не начинается на [ или { (то есть не массив или объект)
            if (strpos($value, ':') !== false && !in_array($value[0], ['[', '{'])) {
                $value = '"' . str_replace('"', '\"', $value) . '"';
            }

            return $key . $value;
        }, $yaml_content);
    }


}
