<?php

namespace Zen\Threes\Api\nodes;

class Program
{
    # http://threes.dc/threes.api/nodes.Program:getNodeProgram?nid=node1
    public function getNodeProgram(): array
    {
        return [
            'program' => ths()->nodes()->getNodeProgram(request('nid'))
        ];
    }
}
