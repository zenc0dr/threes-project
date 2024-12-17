<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateZenThreesUnits extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_units', function($table)
        {
            $table->bigIncrements('id')->unsigned();
            $table->string('uuid');
            $table->string('name');
            $table->text('description')->nullable();
            $table->text('data')->nullable();
            $table->smallInteger('active')->unsigned()->default(1);
            $table->bigInteger('sort_order')->unsigned()->default(0);
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('zen_threes_units');
    }
}