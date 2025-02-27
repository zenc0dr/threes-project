<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class ThreesSets extends Migration
{
    public function up()
    {
        Schema::create('zen_threes_sets', function($table)
        {
            $table->string('uuid');
            $table->string('scope')->nullable();
            $table->text('tags')->nullable();
            $table->text('data')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->primary(['uuid']);
            $table->unique('uuid', 'uuid_unique');
            $table->index('scope');
            $table->index('tags');
        });
    }

    public function down()
    {
        Schema::dropIfExists('zen_threes_sets');
    }
}
