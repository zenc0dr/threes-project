<?php

namespace Zen\Threes\Api;

class Ui extends ThreesApi
{
    # http://threes.dc/threes.api/ui:get-tree-nodes
    public function getTreeNodes(): array
    {
        return $this->requireAuth(function () {
            return [
                'tree' => ths()->nodes()->getNodesTree(
                    search: request('search'),
                )
            ];
        });
    }

    # http://threes.dc/threes.api/ui:get-schema-nodes?nid=node1
    public function getSchemaNodes(): array
    {
        return $this->requireAuth(function () {
            return [
                'schema' => ths()->nodes()->getNodesSchema(request('nid'))
            ];
        });
    }
}
