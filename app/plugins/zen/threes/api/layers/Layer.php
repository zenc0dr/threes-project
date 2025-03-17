<?php

namespace Zen\Threes\Api\Layers;

class Layer
{
    # http://threes.dc/threes.api/layers.Layer:getStore
    public function getStore(): array
    {
        ths()->requestDebug('filter_text');
        $store = ths()->layers()->getStore(
            request('filter_text')
        );

        return [
            'layers' => $store['layers'],
            'nodes' => $store['nodes']
        ];
    }
}
