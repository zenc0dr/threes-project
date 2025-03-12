<?php

namespace Zen\Threes\Frames;

class Frame_23
{
    public function flow(): void
    {
        $value = 1;
        $value++;
        ths()->toJsonFile(storage_path('increment_test'), ['value' => $value]);
        #Добавил комментарий#
        #%code_writer%#
    }
}
