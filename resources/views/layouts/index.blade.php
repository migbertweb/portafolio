<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" x-data="{ darkMode: false }" :class="{ 'dark': darkMode }"
    class="antialiased">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ config('app.name', 'Laravel') }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="min-h-screen bg-gray-100 dark:bg-gray-900">

    <!-- Navbar -->
    <nav class="bg-transparent w-full p-4 flex justify-between items-center">
        <div class="flex space-x-4">
            <button class="hidden lg:inline-block bg-blue-500 text-white px-4 py-2 rounded">Botón 1</button>
            <button class="hidden lg:inline-block bg-blue-500 text-white px-4 py-2 rounded">Botón 2</button>
        </div>
        <div class="lg:hidden">
            <button @click="isOpen = !isOpen" class="bg-blue-500 text-white px-4 py-2 rounded">Menú</button>
        </div>
        <div>
            <button @click="darkMode = !darkMode" class="ml-4 bg-gray-500 text-white px-4 py-2 rounded">
                <span x-show="!darkMode">Modo Oscuro</span>
                <span x-show="darkMode">Modo Claro</span>
            </button>
        </div>
    </nav>

    <!-- Contenedor con Sidebar y Contenido -->
    <div class="flex flex-1 flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 p-4">
        <!-- Sidebar -->
        <div class="w-full lg:w-1/3 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Sidebar</h2>
            <p class="text-gray-700 dark:text-gray-300">
                @yield('sidebar')
            </p>
        </div>

        <!-- Contenido principal -->
        <div class="w-full lg:w-2/3 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Contenido Principal</h2>
            <p class="text-gray-700 dark:text-gray-300">
                @slot('content')
                </p>
            </div>
        </div>

    </body>

    </html>
