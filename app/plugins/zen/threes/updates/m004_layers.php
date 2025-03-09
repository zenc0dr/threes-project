<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M004Layers extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_layers', function($table)
        {
            $table->string('nid')->comment('Токен нода');
            $table->string('lid')->comment('Токен слоя');
            $table->string('name')
                ->nullable()->default('Без названия')->comment('Название слоя');
            $table->string('description')->nullable()->comment('Описание аспекта');
            $table->string('exe')->nullable()->comment('Атрибут выполнения аспекта');
            $table->timestamp('updated_at')->nullable()->comment('Время последнего обновления');

            # уникальный составной ключ на nid и lid
            $table->primary(['nid', 'lid']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_layers');
    }
}