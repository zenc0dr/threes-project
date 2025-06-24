<?php

namespace Zen\Threes\Api\Nodes;

use Zen\Threes\Traits\QueryLogTrait;
use Zen\Threes\Traits\DebugLogTrait;

class Node
{
    use QueryLogTrait;

    # http://threes.dc/threes.api/nodes.node:setNodeIcon?debug
    protected function setNodeIcon(): array
    {
        ths()->nodes()->setNodeIcon(
            request('nid'),
            request('svg')
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:set-node-settings?debug
    protected function setNodeSettings(): array
    {
        ths()->nodes()->setNodeSettings(
            request('nid'),
            request('settings')
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:set-node-name?debug
    protected function setNodeName(): array
    {
        ths()->nodes()->setNodeName(
            request('nid'),
            request('name')
        );
        //ths()->messages()->addMessage('Имя нода обновлено');
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:set-node-description?debug
    protected function setNodeDescription(): array
    {
        ths()->nodes()->setNodeDescription(
            request('nid'),
            request('description')
        );
        //ths()->messages()->addMessage('Описание нода обновлено');
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:update-data?debug
    protected function updateData(): array
    {
        ths()->nodes()->updateNodeData(
            request('nid'),
            request('data'),
            request('scope', 'self_content')
        );
        //ths()->messages()->addMessage('Данные нод обновлены');
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:add-node?debug
    protected function addNode(): array
    {
        ths()->nodes()->addNode(
            source_nid: request('nid'),
            type: request('type'),
            target_nid: request('target_nid'),
            data: request('data'),
            direction: request('direction'),
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:move-node?debug
    protected function moveNode(): array
    {
        ths()->nodes()->moveNode(
            request('nid'),
            request('target_nid'),
            request('direction')
        );
        return [];
    }

    # http://threes.dc/threes.api/nodes.node:delete-node?debug
    protected function deleteNode(): array
    {
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
    }

    # http://threes.dc/threes.api/nodes.node:run-method?call=Zen.Threes.Classes.Methods.node_cs77ys3z2cj5.getText
    protected function runMethod(): mixed
    {
        $call = request('call');
        return ths()->exe($call);
    }
}
