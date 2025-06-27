<?php

namespace Zen\Threes\Api\Nodes;

use Zen\Threes\Api\ThreesApi;
use Zen\Threes\Traits\QueryLogTrait;
class Node extends ThreesApi
{
    use QueryLogTrait;

    # http://threes.dc/threes.api/nodes.node:setNodeIcon?debug
    protected function setNodeIcon(): array
    {
        return $this->requireAuth(function () {
            ths()->nodes()->setNodeIcon(
                request('nid'),
                request('svg')
            );
            return [];
        });
    }

    # http://threes.dc/threes.api/nodes.node:set-node-settings?debug
    protected function setNodeSettings(): array
    {
        return $this->requireAuth(function () {
            ths()->nodes()->setNodeSettings(
                request('nid'),
                request('settings')
            );
            return [];
        });
    }

    # http://threes.dc/threes.api/nodes.node:set-node-name?debug
    protected function setNodeName(): array
    {
        return $this->requireAuth(function () {
            ths()->nodes()->setNodeName(
                request('nid'),
                request('name')
            );
            return [];
        });
    }

    # http://threes.dc/threes.api/nodes.node:set-node-description?debug
    protected function setNodeDescription(): array
    {
        return $this->requireAuth(function () {
            ths()->nodes()->setNodeDescription(
                request('nid'),
                request('description')
            );
            return [];
        });
    }

    # http://threes.dc/threes.api/nodes.node:update-data?debug
    protected function updateData(): array
    {
        return $this->requireAuth(function () {
            ths()->nodes()->updateNodeData(
                request('nid'),
                request('data'),
                request('scope', 'self_content')
            );

            return [];
        });
    }

    # http://threes.dc/threes.api/nodes.node:add-node?debug
    protected function addNode(): array
    {
        return $this->requireAuth(function () {
            ths()->nodes()->addNode(
                source_nid: request('nid'),
                type: request('type'),
                target_nid: request('target_nid'),
                data: request('data'),
                direction: request('direction'),
            );
            return [];
        });
    }

    # http://threes.dc/threes.api/nodes.node:move-node?debug
    protected function moveNode(): array
    {
        return $this->requireAuth(function () {
            ths()->nodes()->moveNode(
                request('nid'),
                request('target_nid'),
                request('direction')
            );
            return [];
        });
    }

    # http://threes.dc/threes.api/nodes.node:delete-node?debug
    protected function deleteNode(): array
    {
        return $this->requireAuth(function () {
            if (!request()->has('without_submit')) {
                if ($submit = ths()->submit()) {
                    return $submit;
                }
            }
            $removed_nids = ths()->nodes()->deleteNode(
                nid: request('nid')
            );

            if (!request()->has('without_submit')) {
                ths()->messages()->addMessage('Удалены ноды: ' . join(', ', $removed_nids));
            }

            return [];
        });
    }

    # http://threes.dc/threes.api/nodes.node:run-method?call=Zen.Threes.Classes.Methods.node_cs77ys3z2cj5.getText
    protected function runMethod(): mixed
    {
        return $this->requireAuth(function () {
            $call = request('call');
            return ths()->exe($call);
        });
    }
}
