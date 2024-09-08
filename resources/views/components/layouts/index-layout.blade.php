<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">

    <!--=== fontaswesome ===-->
    <link rel="stylesheet" href="./assets/fontaswesome/css/all.min.css" />
    <link rel="stylesheet" href="./assets/fontaswesome/css/fontawesome.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Roboto+Slab:wght@300;400;500;600;700&display=swap"
        rel="stylesheet" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="min-h-screen font-encode antialiased bg-ocean-lighter dark:bg-ocean-main">

    <!-- Navbar -->
    @livewire('navbar')

    <!-- Contenedor con Sidebar y Contenido -->
    <div class="flex flex-1 flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 pt-28 md:px-4 px-1 p-2">
        <!-- Sidebar -->
        <div
            class="relative w-full lg:w-1/3 bg-white dark:bg-gray-800  shadow-lg shadow-ocean-lightest rounded-lg p-4 mb-2 lg:sticky top-4 self-start">
            <!-- Imagen flotante centrada en pantallas pequeñas -->
            <div
                class="absolute w-36 h-36 rounded-full overflow-hidden -top-16 left-1/2 transform -translate-x-1/2 shadow-lg shadow-ocean-main lg:hidden">
                <img src="{{ asset('images/profile/perfil1.jpg') }}" alt="Imagen de perfil"
                    class="w-full h-full object-cover">
            </div>

            <!-- Imagen integrada en pantallas grandes -->
            <div
                class="hidden lg:block absolute w-48 h-48 rounded-xl overflow-hidden -top-20 left-1/2 transform -translate-x-1/2 shadow-lg shadow-ocean-main">
                <img src="{{ asset('images/profile/perfil1.jpg') }}" alt="Imagen de perfil"
                    class="w-full h-full object-cover">
            </div>
            <p class="mt-12 lg:mt-16">@yield('sidebar')</p>
        </div>

        <!-- Contenido principal -->
        <div class="w-full p-2 pt-4 lg:w-2/3 bg-white dark:bg-gray-800 shadow-lg shadow-ocean-lightest rounded-lg">
            <p class="pt-2">@yield('content')</p>
        </div>
    </div>

</body>

</html>
