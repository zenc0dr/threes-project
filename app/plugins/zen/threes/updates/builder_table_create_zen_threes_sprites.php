<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateZenThreesSprites extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_sprites', function($table)
        {
            $table->bigIncrements('id')->unsigned();
            
            $table->string('sid');
            $table->string('name');
            $table->text('description')->nullable();
            $table->text('data')->nullable();
            $table->smallInteger('active')->unsigned()->default(0);
            
            $table->string('parent_id')->nullable();
            $table->integer('nest_left')->nullable();
            $table->integer('nest_right')->nullable();
            $table->integer('nest_depth')->nullable();
            $table->bigInteger('sort_order')->unsigned()->default(0);
 
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('zen_threes_sprites');
    }
}