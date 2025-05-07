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
        foreach ($root_nodes as $root_node) {
            if ($root_node->props['store']) {
                $store[] = $root_node->getStoreNode();
            }
            foreach ($root_node->resolveChildren() as $node) {
                if ($node->props['store']) {
                    $store[] = $node->getStoreNode();
                }
            }
        }
        return $store;
    }
}
