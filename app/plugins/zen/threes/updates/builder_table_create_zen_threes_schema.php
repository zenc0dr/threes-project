<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateZenThreesSchema extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_schema', function($table)
        {
            $table->bigIncrements('id')->unsigned();
            $table->string('unit_tid');
            $table->string('sprite_sid');
            $table->integer('sort_order')->default(0);
            $table->text('settings')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('zen_threes_schema');
    }
}