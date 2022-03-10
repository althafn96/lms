<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />

        <title>Learning Management System</title>

        @devserver
        @else
        <link rel="stylesheet" href="{{ vite('app.css') }}">
        @enddevserver
    </head>
    <body id="kt_body" class="page-loading">
        <div class="loading-body" data-kt-indicator="on">
            <span  class="indicator-progress">
                <span class="spinner-border spinner-border-lg align-middle ms-2"></span>
            </span>
        </div>
        <div class="d-flex flex-column flex-root" id="app">

        </div>
    </body>

    @devserver
    <script type="module" src="http://localhost:4000/@vite/client"></script>
    <script type="module" src="http://localhost:4000/resources/js/app.js"></script>
    <script type="module" src="http://localhost:4000/resources/scss/app.scss"></script>
    @else
    <script type="module" src="{{ vite('app.js') }}"></script>
    @enddevserver
</html>
