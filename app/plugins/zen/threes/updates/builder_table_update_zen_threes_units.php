<?php namespace Zen\Threes\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateZenThreesUnits extends Migration
{
    public function up()
    {
        Schema::table('zen_threes_units', function($table)
        {
            $table->string('icon_name')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('zen_threes_units', function($table)
        {
            #$table->dropColumn('icon_name');
        });
    }
}