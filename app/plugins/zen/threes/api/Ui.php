<?php

namespace Zen\Threes\Api;



class Ui
{
    # http://threes.dc/threes.api/ui:get-tree-nodes
    public function getTreeNodes(): array
    {
        return [
            'tree' => ths()->nodes()->getNodesTree()
        ];
    }

    # http://threes.dc/threes.api/ui:get-schema-nodes
    public function getSchemaNodes(): array
    {
        return [
            'tree' => ths()->nodes()->getNodesTree()
        ];
    }
}
