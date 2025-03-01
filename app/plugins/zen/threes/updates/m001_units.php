<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M001Units extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_units', function($table)
        {
            $table->string('uid')->primary();
            $table->string('name');
            $table->text('icon')->nullable();
            $table->string('icon_name')->nullable();
            $table->text('description')->nullable();
            $table->text('data')->nullable();
            $table->smallInteger('active')->unsigned()->default(1);
            $table->timestamps();

            $table->unique('uid', 'uid_unique');
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_units');
    }
}
