<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M001Frames extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_frames', function($table)
        {
            $table->increments('id')->comment('Идентификатор фрейма'); # нигде не должен играть роль кроме дерева
            $table->integer('parent_id')->unsigned()->nullable()->comment('Родительский фрейм');
            $table->string('nid')->comment('Идентификатор нода');
            $table->integer('sort_order')->unsigned()->default(0)->comment('Порядок сортировки');
            $table->integer('nest_left')->unsigned()->comment('Левая граница узла');
            $table->integer('nest_right')->unsigned()->comment('Правая граница узла');
            $table->integer('nest_depth')->unsigned()->comment('Уровень вложенности');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_frames');
    }
}
