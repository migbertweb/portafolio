<div x-data="{ open: false, darkMode: localStorage.getItem('darkMode') === 'true', dropdownOpen: false }" x-init="$watch('darkMode', value => localStorage.setItem('darkMode', value))" :class="{ 'dark': darkMode }"
    class="w-full fixed top-0 left-0 z-10 bg-transparent px-6 py-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="font-bold text-gray-900 dark:text-white">
            <button
                class="focus:outline-none rounded-full shadow-lg bg-white hover:bg-gray-300 p-2 dark:bg-gray-800 dark:hover:bg-gray-900 shadow-gray-500 dark:shadow-gray-900">
                <img src="{{ asset('images/logos/logo-prog.svg') }}" alt="logo" height="30" width="30">
            </button>
        </div>

        {{-- Botones derechos --}}
        <div class="flex items-center space-x-2">
            {{-- Menu para cambio de idioma --}}
            <div x-data="{ open: false, tooltip: false }" class="relative">
                <!-- Botón para abrir el menú -->
                <button @click="open = !open" @mouseover="tooltip = true" @mouseleave="tooltip = false"
                    class="flex items-center p-2 rounded-lg bg-white dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white text-gray-800 hover:bg-gray-300 shadow-xl shadow-gray-500 dark:shadow-gray-900 focus:outline-none">
                    <span class="mr-2">
                        <img :src="`/images/flags/${window.localStorage.getItem('locale') || 'es'}.svg`"
                            alt="Idioma actual" class="w-5 h-5">
                    </span>
                    <span
                        x-text="window.localStorage.getItem('locale') ? window.localStorage.getItem('locale').toUpperCase() : 'ES'"></span>
                </button>
                <!-- Tooltip -->
                <div x-show="tooltip" class="absolute top-full mt-1 mr-1 bg-black text-white text-xs rounded py-1 px-2">
                    Cambiar el Idioma
                </div>
                <!-- Menú desplegable -->
                <div x-show="open" @click.away="open = false"
                    class="absolute mt-2 w-30 rounded-md  bg-white dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white text-gray-800 hover:bg-gray-200 shadow-lg shadow-gray-500 dark:shadow-gray-900 focus:outline-none">
                    <ul>
                        <li>
                            <a href="#" @click="changeLocale('es')"
                                class="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                                <img src="/images/flags/es.svg" alt="España" class="w-5 h-5 mr-2">
                                <span>ES</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="changeLocale('en')"
                                class="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                                <img src="/images/flags/en.svg" alt="Inglaterra" class="w-5 h-5 mr-2">
                                <span>EN</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="changeLocale('pt')"
                                class="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                                <img src="/images/flags/pt.svg" alt="Brasil" class="w-5 h-5 mr-2">
                                <span>PT</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {{-- -- Boton para cambio de tema -- --}}
            <div class="relative">
                <!-- Botón para modo oscuro -->
                <button id="dark-theme-toggle"
                    class="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg dark:shadow-gray-900 focus:outline-none hidden">
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
