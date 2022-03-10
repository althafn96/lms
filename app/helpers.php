<?php

use Illuminate\Support\HtmlString;
use Illuminate\Support\Facades\Http;

function vite(string $asset): string
{
    $path = glob(public_path('build/assets/' . str_replace('.', '.*.', $asset)))[0];

    return str_replace(public_path(), '', $path);
}
