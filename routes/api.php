<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\RoleController;
use \App\Http\Controllers\CompetenceController;
use \App\Http\Controllers\IntervenantController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);
Route::post('/register/intervenant', [\App\Http\Controllers\AuthController::class, 'intervenantRegister']);
Route::post('/register/entreprise', [\App\Http\Controllers\AuthController::class, 'entrepriseRegister']);

// Role CRUD
Route::group(['prefix' => 'roles'], function () {
    Route::get('/', [RoleController::class, 'index']);
    Route::get('/{role}', [RoleController::class, 'show']);
    Route::post('/', [RoleController::class, 'store']);
    Route::put('/{role}', [RoleController::class, 'update']);
    Route::delete('/{role}', [RoleController::class, 'destroy']);
});

// Intervenant CRUD
Route::group(['prefix' => 'intervenants'], function () {
    Route::get('/', [IntervenantController::class, 'index']);
    Route::get('/{intervenant}', [IntervenantController::class, 'show']);
    Route::post('/', [IntervenantController::class, 'store']);
    Route::put('/{intervenant}', [IntervenantController::class, 'update']);
    Route::delete('/{intervenant}', [IntervenantController::class, 'destroy']);
});

// Competence CRUD
Route::group(['prefix' => 'competences'], function () {
    Route::get('/', [CompetenceController::class, 'index']);
    Route::get('/{competence}', [CompetenceController::class, 'show']);
    Route::post('/', [CompetenceController::class, 'store']);
    Route::put('/{competence}', [CompetenceController::class, 'update']);
    Route::delete('/{competence}', [CompetenceController::class, 'destroy']);
});
