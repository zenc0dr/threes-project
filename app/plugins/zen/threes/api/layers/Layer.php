<?php

namespace Zen\Threes\Api\Layers;

class Layer
{
    # http://threes.dc/threes.api/layers.Layer:getStore
    public function getStore(): array
    {
        return [
            'store' => ths()->layers()->getStore()
        ];
    }
}
