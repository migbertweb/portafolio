<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'welcome');

Route::view('admin', 'admin')
    ->middleware(['auth', 'verified'])
    ->name('admin');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

require __DIR__.'/auth.php';
