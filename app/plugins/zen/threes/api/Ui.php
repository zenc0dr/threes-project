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

    # http://threes.dc/threes.api/ui:get-schema-nodes?nid=node1
    public function getSchemaNodes(): array
    {
        return [
            'schema' => ths()->nodes()->getNodesSchema(request('nid'))
        ];
    }
}
