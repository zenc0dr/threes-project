<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

use Zen\Threes\Models\Node;

class Store
{
    use SingletonTrait;

    public function getStoreNodes(): array
    {
        $store = [];
        $root_nodes = Node::getRootNodes();
        foreach ($root_nodes as $nodes) {
            foreach ($nodes->resolveChildren() as $node) {
                $store[] = $node->getStoreNode();
            }
        }
        return $store;
    }
}
