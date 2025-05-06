<?php

namespace Zen\Threes\Api;

class Store
{
    # http://threes.dc/threes.api/store:get
    public function get()
    {
        return [
            'nodes' => ths()->store()->getStoreNodes()
        ];
    }
}
