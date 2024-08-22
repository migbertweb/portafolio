<div x-data="{ open: false, darkMode: localStorage.getItem('darkMode') === 'true', dropdownOpen: false }" x-init="$watch('darkMode', value => localStorage.setItem('darkMode', value))" :class="{ 'dark': darkMode }"
    class="w-full fixed top-0 left-0 z-10 bg-transparent px-6 py-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="font-bold text-gray-900 dark:text-white">
            <button
                class="focus:outline-none rounded-full shadow-lg bg-white hover:bg-gray-300 p-2 dark:bg-gray-800 dark:hover:bg-gray-900 shadow-gray-500 dark:shadow-gray-900">
                <img src="{{ asset('svg/logo-prog.svg') }}" alt="logo" height="30" width="30">
            </button>
        </div>

        <div class="flex items-center space-x-4">
            <div class="relative">
                <!-- Botón para modo oscuro -->
                <button id="dark-theme-toggle"
                    class="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg focus:outline-none hidden">
                    <!-- Icono de media luna -->
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.752 15.002A9.718 9.718 0 0112.752 22 9.719 9.719 0 013.002 12c0-4.988 3.672-9.127 8.502-9.7a0.75 0.75 0 01.944 0.766A7.253 7.253 0 0012 12a7.253 7.253 0 007.252 7.25a0.75 0.75 0 01.5 1.314z">
                        </path>
                    </svg>
                </button>

                <!-- Botón para modo claro -->
                <button id="light-theme-toggle"
                    class="bg-white text-gray-800 hover:bg-gray-300 p-3 rounded-full shadow-xl shadow-gray-500 focus:outline-none">
                    <!-- Icono de foco encendido -->
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 2a7 7 0 00-7 7 7 7 0 003.29 5.852v2.066a1 1 0 001 1h5.42a1 1 0 001-1v-2.066A7 7 0 0019 9a7 7 0 00-7-7zm0 18h1v2a1 1 0 01-1 1h-1a1 1 0 01-1-1v-2h1z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>
