<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);
Route::post('/register/intervenant', [\App\Http\Controllers\AuthController::class, 'intervenantRegister']);
Route::post('/register/entreprise', [\App\Http\Controllers\AuthController::class, 'entrepriseRegister']);

Route::group(['controller' => 'IntervenantController', 'prefix' => 'intervenants'], function () {
    Route::get('/', 'index');
    Route::get('/{intervenant}', 'show');
    Route::post('/', 'store');
    Route::put('/{intervenant}', 'update');
    Route::delete('/{intervenant}', 'destroy');
});

Route::group(['controller' => 'CompetenceController', 'prefix' => 'Competence'], function () {
    Route::get('/', 'index');
    Route::get('/{competence}', 'show');
    Route::post('/create', 'store');
    Route::post('/update/{competence}', 'update');
    Route::post('/delete/{competence}', 'destroy');
});
