<?php

namespace Zen\Threes\Classes;

use Zen\Threes\Traits\SingletonTrait;

use Zen\Threes\Models\Node;

class Store
{
    use SingletonTrait;

    public function getStoreNodes(string $filter_text = null): array
    {
        $nodes = Node::where(function ($query) use ($filter_text) {
            if ($filter_text) {
                $query->orWhere('nid', 'like', "%$filter_text%");
                $query->orWhere('name', 'like', "%$filter_text%");
                $query->orWhere('description', 'like', "%$filter_text%");
            }
        })->get();

        $output = [];
        foreach ($nodes as $node) {
            $output[] = $node->store_item;
        }
        return $output;
    }
}
