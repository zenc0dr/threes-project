<?php

namespace Zen\Threes\Api;

class Store extends ThreesApi
{
    # http://threes.dc/threes.api/store:get
    public function get(): array
    {
        return $this->requireAuth(function () {
            return [
                'nodes' => ths()->store()->getStoreNodes()
            ];
        });
    }
}
