<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateZenThreesFeatures extends Migration
{
    public function up()
    {
        Schema::table('zen_threes_features', function($table)
        {
            $table->text('comment')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('zen_threes_features', function($table)
        {
            $table->dropColumn('comment');
        });
    }
}