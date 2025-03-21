<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M002Nodes extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_nodes', function($table)
        {
            $table->string('nid')->primary()->comment('Токен нода');
            $table->text('svg')->nullable()->comment('Код SVG иконки');
            $table->string('svg_name')->nullable()->comment('Имя файла svg');
            $table->string('name')->nullable()->comment('Имя нода');
            $table->string('description')->nullable()->comment('Описание нода');
            $table->text('data')->nullable()->comment('Данные схемы');
            $table->text('scheme')->nullable()->comment('Схема интерфейса (yaml)');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->unique('nid', 'nid_unique');
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_nodes');
    }
}