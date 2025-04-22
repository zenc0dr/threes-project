<?php

namespace Zen\Threes\Api\debug;

use Http;

use MongoDB\Client;
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
        $node = new Node([
            'nid' => 'test.node.001',
            'name' => 'Test Node',
            'type' => 'test_type',
            'props' => ['foo' => 'bar'],
            'children' => [],
            'meta' => ['created_by' => 'phpstorm'],
        ]);
        $node->save();

        $loaded = Node::find((string) $node->_id);

        dd($node->_id, $loaded);

        $byNid = Node::findByNid('test.node.001');



//        $client = new Client("mongodb://root:secret@threes-mongo:27017/admin");
//
//        $dbs = $client->listDatabases();
//        $result = response()->json($dbs);
//
//        dd($result);

//        dd(
//            ths()->nodes()->getDslScheme('threes.default.node7')
//        );


        $nodes = [
            [],
            [
                [
                    'nid' => 'node1',
                    'name' => 'Node 1',
                ],
                [
                    'nid' => 'node2',
                    'name' => 'Node 2',
                ],
            ],
            [],
            [
                [
                    'nid' => 'node3',
                    'name' => 'Node 3',
                ],
            ]
        ];


        //ths()->nodes()->setDslScheme('');
    }

    # http://threes.dc/threes.api/debug.Tests:test
    public function test()
    {
        dd('Threes api works!');
    }
}
