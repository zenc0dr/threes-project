<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M005Queries extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_queries', function($table)
        {
            $table->id();
            $table->string('call');
            $table->text('data')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_queries');
    }
}