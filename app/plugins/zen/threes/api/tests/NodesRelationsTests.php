<?php

namespace Zen\Threes\Api\Tests;

use Zen\Threes\Traits\DebugLogTrait;

class NodesRelationsTests
{
    use DebugLogTrait;

    # http://threes.dc/threes.api/tests.NodesRelationsTests:testNodeRelations
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
