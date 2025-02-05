<?php

namespace Zen\Threes\Api\Sprites;

class Version
{
    /**
     * http://threes.dc/threes.api/Sprites.Version:getVersion?sid=test
     * @return array
     */
    public function getVersion()
    {
        $sid = request('sid');
        return ths()->sprites()->getVersion($sid);
    }
}
