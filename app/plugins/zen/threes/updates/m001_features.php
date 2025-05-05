<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M001Features extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_features', function($table)
        {
            $table->increments('id');
            $table->text('name')->nullable()->comment('Название феномена');
            $table->text('description')->nullable()->comment('Описание феномена');

            $table->text('category')->nullable()->comment('Категория феномена');
            $table->text('priority')->nullable()->comment('Приоритет феномена');
            $table->text('status')->nullable()->comment('Статус феномена');
            $table->text('module')->nullable()->comment('Модуль?');


            $table->text('data')->nullable();
            $table->integer('release')->nullable()->comment('Релиз');
            $table->text('acceptance_criteria')->nullable()->comment('Критерии приёмки');
            $table->integer('parent_id')->unsigned()->nullable();
            $table->integer('sort_order')->unsigned()->default(0);
            $table->integer('nest_left')->unsigned();
            $table->integer('nest_right')->unsigned();
            $table->integer('nest_depth')->unsigned();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_features');
    }
}