<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

use Zen\Threes\Models\Node;

class Store
{
    use SingletonTrait;

    public function getStoreNodes(): array
    {

        dd(
            Node::find('bd6d7vqeca6f')->getSchemaNode()
        );


        $store = [];
        $root_nodes = Node::getRootNodes();
        foreach ($root_nodes as $nodes) {
            foreach ($nodes->resolveChildren(['description']) as $node) {

                dd($node);
//                $props_store = $node->props['store'] ?? null;
//                if (!$props_store) {
//                    continue;
//                }
            }
        }
    }
}
