<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBatchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('batches', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('course_id')->constrained();
            $table->foreignId('location_id')->nullable()->constrained();
            $table->timestamp('commences_on')->nullable();
            $table->timestamp('completes_on')->nullable();
            $table->integer('alloted_count')->nullable();
            $table->timestamp('enrollments_closes_on')->nullable();
            $table->string('slug')->unique();
            $table->timestamps();

            $table->fulltext('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('batches');
    }
}
