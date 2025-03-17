<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M004Layers extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_layers', function($table)
        {
            $table->string('lid')->comment('Токен слоя');
            $table->string('name')->nullable()->default('Без названия')->comment('Название слоя');
            $table->string('description')->nullable()->comment('Описание аспекта');

            $table->string('aspect')->default('threes.units.oc@write')->comment('Аспект слоя');
            $table->string('exe')->nullable()->comment('Атрибут аспекта');
            $table->text('data')->nullable()->comment('данные слоя');
            $table->text('scheme')->nullable()->comment('Схема интерфейса (yaml)');

            $table->timestamp('updated_at')->nullable()->comment('Время последнего обновления');

            $table->unique('lid', 'lid_unique');
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_layers');
    }
}
