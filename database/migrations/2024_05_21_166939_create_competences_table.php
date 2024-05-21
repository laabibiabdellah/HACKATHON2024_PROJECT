<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('competences', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('intervenant_id');
            $table->string('nom_competence');
            $table->enum('niveau_competence', ['débutant', 'intermédiaire', 'expert']);
            $table->text('description')->nullable();
            $table->timestamps();
            $table->foreign('intervenant_id')->references('id')->on('intervenants');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competences');
    }
};
