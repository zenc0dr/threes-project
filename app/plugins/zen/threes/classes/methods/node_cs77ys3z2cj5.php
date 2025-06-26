<?php


namespace Zen\Threes\Classes\Methods;
class node_cs77ys3z2cj5
{
    public function getText()
    {
        #sleep(5);  # Сон три секунда для проверки
    
        ///$text = ths()->nodes()->node('hq45skan7gp7')->data; # <-- Берём данные из этого нода
    
         $text = ths()->nodes()->node('hq45skan7gp7')->data; # <-- Берём данные из этого нода
         $text = $text . ' - вагон';
    
        $target = ths()->nodes()->node('hq45skan7gp7');  # <-- Вставляем сюда
        $target->data = $text;
        $target->save();
    }
}
