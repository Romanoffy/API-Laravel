<?php

use Illuminate\Support\Facades\Route;

Route::get('/{patchMatch}', function () {
    return view('app');
})->where("patchMatch", '.*');
