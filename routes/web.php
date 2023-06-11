<?php

use App\Http\Controllers\PusherController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/definition', function () {
    return view('welcome');
});
Route::get('/types', function () {
    return view('welcome');
});
Route::get('/cipher', function () {
    return view('welcome');
});
Route::get('/examples', function () {
    return view('welcome');
});

Route::get('/ws', function () {
    return view('welcome');
});
Route::get('/join', function () {
    return view('welcome');
});

Route::post('/pusher/auth', [PusherController::class, 'pusherAuth'])
->middleware('auth:sanctum');