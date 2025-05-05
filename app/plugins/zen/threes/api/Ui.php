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

    # http://threes.dc/threes.api/ui:get-schema-nodes?nid=n7abeanmj9yh
    public function getSchemaNodes(): array
    {
        $nid = request('nid');

        $node = ths()->nodes()->model($nid);

        return [
            'node' => [
                'nid' => $nid,
                'icon' => $node->icon,
                'name' => $node->name,
                'description' => $node->description,
            ],
            'tree' => ths()->nodes()->getNodesSchema($nid)
        ];
    }
}
