<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateZenThreesSprites extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_sprites', function($table)
        {
            $table->string('sid')->primary();
            $table->string('parent_sid')->nullable();
            $table->string('name');
            $table->text('description')->nullable();
            $table->text('data')->nullable();
            $table->smallInteger('active')->unsigned()->default(1);
            $table->timestamps();

            $table->unique('sid', 'sid_unique');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('zen_threes_sprites');
    }
}