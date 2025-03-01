<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class M00Frames extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_frames', function($table)
        {
            $table->string('fid')->primary();
            $table->string('parent_fid')->nullable();
            $table->string('name');
            $table->text('description')->nullable();
            $table->text('data')->nullable();
            $table->smallInteger('active')->unsigned()->default(1);
            $table->timestamps();

            $table->unique('fid', 'fid_unique');
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_sprites');
    }
}
