<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->increments('id');
			$table->string('title',100);
			$table->longText('description');
			$table->integer('company_id');
			$table->integer('job_category_id',5)->default(1);
			$table->integer('job_type_id',5)->default(1);
			$table->integer('salary_id',5)->default(1);
			$table->integer('location_id',5)->default(1);
			$table->integer('job_class',2)->default(1); //Between Level 1 - 5 , level 5 being the best jobs
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('jobs');
    }
}
