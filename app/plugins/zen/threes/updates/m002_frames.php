<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M002Frames extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_frames', function($table)
        {
            $table->increments('id'); # Стандартный id, нигде не должен играть роль кроме дерева
            $table->string('fid');
            $table->string('name');
            $table->text('description')->nullable();
            $table->smallInteger('active')->unsigned()->default(1);
            $table->integer('parent_id')->unsigned()->nullable();
            $table->integer('sort_order')->unsigned()->default(0);
            $table->integer('geo_type_id')->unsigned();
            $table->integer('nest_left')->unsigned();
            $table->integer('nest_right')->unsigned();
            $table->integer('nest_depth')->unsigned();
            $table->timestamps();
            $table->text('data')->nullable();

            $table->unique('fid', 'fid_unique');
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_frames');
    }
}