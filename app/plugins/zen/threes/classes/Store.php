<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

use Zen\Threes\Models\Node;

class Store
{
    use SingletonTrait;

    public function getStoreNodes(): array
    {
        $nodes = Node::get();
        $output = [];
        foreach ($nodes as $node) {
            $output[] = $node->store_item;
        }
        return $output;
    }
}
