<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class ThreesVersions extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_versions', function($table)
        {
            $table->string('sid');
            $table->integer('version')->unsigned()->default(1);
            $table->text('data')->nullable();
            $table->string('hash')->nullable();
            $table->dateTime('time')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_versions');
    }
}
