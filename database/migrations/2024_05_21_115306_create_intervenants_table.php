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
        Schema::create('intervenants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('etablissement_id')->nullable()->constrained('etablissements');
            $table->foreignId('user_id')->nullable()->constrained('users');
            $table->string('matricule', 45)->nullable();
            $table->string('nom', 45)->nullable();
            $table->string('datenaissance', 45)->nullable();
            $table->string('intitule_diplome', 45)->nullable();
            $table->string('type_diplome', 45)->nullable();
            $table->string('specialite_diplome', 45)->nullable();
            $table->integer('type_intervenant')->nullable();
            $table->integer('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('intervenants');
    }
};
