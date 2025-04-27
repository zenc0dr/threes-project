<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M005Features extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_features', function($table)
        {
            $table->increments('id');
            $table->text('name')->nullable();
            $table->text('description')->nullable();
            $table->text('category')->nullable();
            $table->text('priority')->nullable();
            $table->text('status')->nullable();
            $table->text('module')->nullable();
            $table->integer('release')->nullable();
            $table->text('acceptance_criteria')->nullable();
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