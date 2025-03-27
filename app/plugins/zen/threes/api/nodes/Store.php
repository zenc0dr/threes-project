<?php

namespace Zen\Threes\Api\nodes;

class Store
{
    # http://threes.dc/threes.api/nodes.node:get-store-nodes
    public function getStoreNodes(): array
    {
        return [
            'store_nodes' => ths()->store()->getStoreNodes()
        ];
    }
}
