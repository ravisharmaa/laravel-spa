<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Vue App</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{mix('css/app.css')}}">
        <meta name="csrf-token" content="{{ csrf_token() }}">


        <!-- Styles -->

    </head>
    <body>
        <div id="app">
            <app></app>
        </div>
    </body>

<script src="{{mix('js/app.js')}}"></script>
</html>
