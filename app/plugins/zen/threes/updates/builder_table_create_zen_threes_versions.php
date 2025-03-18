<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateZenThreesVersions extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_versions', function($table)
        {
            $table->increments('id')->unsigned();
            $table->text('fid')->nullable();
            $table->text('nid')->nullable();
            $table->text('lid')->nullable();
            $table->text('data')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('zen_threes_versions');
    }
}