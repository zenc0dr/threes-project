<?php

namespace Zen\Threes\Api\Layers;

use Zen\Threes\Traits\QueryLogTrait;

class Layer
{
    use QueryLogTrait;

    # http://threes.dc/threes.api/layers.Layer:getStore
    protected function getStore(): array
    {
        $store = ths()->layers()->getStore(
            request('filter_text')
        );

        return [
            'unit_layers' => $store['unit_layers'],
            'layers' => $store['layers'],
            'nodes' => $store['nodes']
        ];
    }
}
