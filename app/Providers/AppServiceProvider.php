<?php

namespace App\Providers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Client\ConnectionException;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Blade::if('devserver', function () {
            if (app()->environment('production')) {
                return false;
            }

            try {
                Http::get("http://localhost:4000");
                return true;
            } catch (ConnectionException $e) {
                return false;
            }
        });
    }
}
