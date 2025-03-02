<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M002Frames extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_frames', function($table)
        {
            $table->increments('id')->comment('Не используется по назначению'); # Стандартный id, нигде не должен играть роль кроме дерева
            $table->integer('parent_id')->unsigned()->nullable()->comment('Родительский фрейм');
            $table->string('fid')->comment('Идентификатор фрейма');
            $table->string('name')->comment('Название фрейма');
            $table->text('description')->nullable()->comment('Описание фрейма');
            $table->smallInteger('active')->unsigned()->default(1)->comment('Активность фрейма');
            $table->integer('sort_order')->unsigned()->default(0)->comment('Порядок сортировки');
            $table->integer('nest_left')->unsigned()->comment('Левая граница узла');
            $table->integer('nest_right')->unsigned()->comment('Правая граница узла');
            $table->integer('nest_depth')->unsigned()->comment('Уровень вложенности');
            $table->timestamps();
            $table->text('data')->nullable()->comment('Данные фрейма');

            # Индексируем fid
            $table->unique('fid', 'fid_unique');
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_frames');
    }
}