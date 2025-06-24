<?php


namespace Zen\Threes\Classes\Methods;
class node_cs77ys3z2cj5
{
    public function addRest()
    {
         $vagon_text = ths()->nodes()->node('sqtyyesgac7n')->data;
         $text = ths()->nodes()->node('hq45skan7gp7')->data;
         $text = $text . $vagon_text;
        $target = ths()->nodes()->node('hq45skan7gp7'); 
        $target->data = $text;
        $target->save();
    }
}
