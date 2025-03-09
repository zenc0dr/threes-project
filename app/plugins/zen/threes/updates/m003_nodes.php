<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M003Nodes extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_nodes', function($table)
        {
            $table->string('nid')->primary()->comment('Токен нода');
            $table->string('name')->nullable()->comment('Имя нода');
            $table->string('description')->nullable()->comment('Описание нода');

            $table->unique('nid', 'nid_unique');
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_nodes');
    }
}