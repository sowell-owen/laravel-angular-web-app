<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',
], function ($router) {
    // Auth routes (login, register, etc.)
    Route::post('register', [\App\Http\Controllers\AuthController::class, 'register']);
    Route::post('login', [\App\Http\Controllers\AuthController::class, 'login']);
    Route::post('logout', [\App\Http\Controllers\AuthController::class, 'logout']);
    Route::post('refresh', [\App\Http\Controllers\AuthController::class, 'refresh']);
    Route::get('me', [\App\Http\Controllers\AuthController::class, 'me']);
});

// Books routes without auth middleware
Route::get('books', [\App\Http\Controllers\BooksController::class, 'index']);
Route::post('books', [\App\Http\Controllers\BooksController::class, 'store']);
Route::get('books/{book}', [\App\Http\Controllers\BooksController::class, 'show']);
Route::put('books/{book}', [\App\Http\Controllers\BooksController::class, 'update']);
Route::delete('books/{book}', [\App\Http\Controllers\BooksController::class, 'destroy']);

// Additional routes, if any
