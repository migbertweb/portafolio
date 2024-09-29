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

<body x-data="mainData()" x-init="initialize()" :class="{ 'dark': darkMode }"
    class="min-h-screen font-encode antialiased bg-gradient-to-r from-kansai-meditation to-kansai-sapphiremagic bg-400% animate-gradient-bg">

    <!-- Navbar -->
    @livewire('navbar')

    <!-- Contenedor con Sidebar y Contenido -->
    <div class="flex flex-1 flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 pt-28 md:px-4 px-1 p-2">
        <!-- Sidebar -->
        <div
            class="relative w-full lg:w-1/3 bg-everest-main dark:bg-gray-800 shadow-lg shadow-ocean-lightest rounded-lg p-4 mb-2 lg:sticky top-4 self-start">
            <!-- Imagen flotante centrada en pantallas pequeñas -->
            <div id="profile-container"
                class="absolute w-36 h-36 rounded-full overflow-hidden -top-16 left-1/2 transform -translate-x-1/2 shadow-lg shadow-ocean-main lg:hidden">
                <img id="profile-image" src="{{ asset('images/profile/perfil1.png') }}" alt="Imagen de perfil"
                    class="w-full h-full object-cover">
            </div>

            <!-- Imagen integrada en pantallas grandes -->
            <div id="profile-container"
                class="hidden lg:block absolute w-42 h-42 rounded-xl overflow-hidden -top-24 left-1/2 transform -translate-x-1/2 shadow-lg shadow-ocean-main">
                <div class="atropos my-atropos">
                    <!-- scale container (required) -->
                    <div class="atropos-scale">
                        <!-- rotate container (required) -->
                        <div class="atropos-rotate">
                            <!-- inner container (required) -->
                            <div class="atropos-inner">
                                <!-- put your custom content here -->
                                <img id="profile-image" src="{{ asset('images/profile/perfil1.png') }}"
                                    alt="Imagen de perfil" class="w-full h-full object-cover">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="mt-12 lg:mt-16">@yield('sidebar')</p>
        </div>

        <!-- Contenido principal -->
        <div
            class="relative w-full p-4 pt-4 lg:w-2/3 bg-everest-main dark:bg-gray-800 shadow-lg shadow-ocean-lightest rounded-lg">

            <!-- tabs con AlpineJS -->
            <div class="max-w-4xl mx-auto">
                <!-- Tabs as Buttons -->
                <div class="hidden lg:flex lg:justify-end space-x-4">
                    <button @click="activeTab = 1"
                        :class="activeTab === 1 ? 'bg-ocean-main text-white shadow-ocean-main' : 'bg-gray-200 text-gray-700'"
                        class="py-2 px-6 transition-colors duration-300 rounded-full focus:outline-none">
                        {{ __('inicio') }}
                    </button>
                    <button @click="activeTab = 2"
                        :class="activeTab === 2 ? 'bg-ocean-main text-white shadow-ocean-main' : 'bg-gray-200 text-gray-700'"
                        class="py-2 px-6 transition-colors duration-300 rounded-full focus:outline-none">
                        {{ __('portafolio') }}
                    </button>
                    <button @click="activeTab = 3"
                        :class="activeTab === 3 ? 'bg-ocean-main text-white shadow-ocean-main' : 'bg-gray-200 text-gray-700'"
                        class="py-2 px-6 transition-colors duration-300 rounded-full focus:outline-none">
                        {{ __('blog') }}
                    </button>
                </div>

                <!-- Tab Content -->
                <div>
                    <div x-show="activeTab === 1">
                        <p>@yield('content')</p>
                    </div>
                    <div x-show="activeTab === 2">
                        <p>@yield('content2')</p>

                    </div>
                    <div x-show="activeTab === 3">
                        <p>@yield('content3')</p>

                    </div>
                </div>
            </div>
            <!-- fin de Tabs -->
        </div>
    </div>
    <!-- footer start -->
    <footer class="overflow-hidden rounded-b-2xl text-sm md:text-md" style="background: transparent">
        <p class="text-center py-6 text-gray-700 dark:text-gray-200"> © 2024 {{ __('derechos_r') }} <a
                class="hover:text-everest-lightest duration-300 transition" href="migbertweb.site" target="_blank"
                rel="noopener noreferrer"> Migbertweb</a>. </p>
    </footer>
    <!-- footer section end -->

    {{-- <script> --}}
    {{--    function mainData() { --}}
    {{--        return { --}}
    {{--            activeTab: 1, --}}
    {{--            isOpen: false, --}}
    {{--            open: false, --}}
    {{--            darkMode: localStorage.getItem('darkMode') === 'true', --}}
    {{--            dropdownOpen: false, --}}
    {{--            posts: [], --}}
    {{--            currentPost: null, --}}
    {{-- --}}
    {{--            async initialize() { --}}
    {{--                this.$watch('darkMode', value => localStorage.setItem('darkMode', value)); --}}
    {{--                this.fetchPosts(); --}}
    {{--            }, --}}
    {{-- --}}
    {{--            async fetchPosts() { --}}
    {{--                try { --}}
    {{--                    const response = await fetch('./posts.json'); --}}
    {{--                    const data = await response.json(); --}}
    {{--                    this.posts = data.map(post => ({ --}}
    {{--                        ...post, --}}
    {{--                        expanded: false --}}
    {{--                    })); --}}
    {{--                } catch (error) { --}}
    {{--                    console.error('Error fetching posts:', error); --}}
    {{--                } --}}
    {{--            }, --}}
    {{-- --}}
    {{--            toggleExpand(post) { --}}
    {{--                if (this.currentPost && this.currentPost.id !== post.id) { --}}
    {{--                    this.currentPost.expanded = false; // Collapse the currently expanded post --}}
    {{--                } --}}
    {{--                post.expanded = !post.expanded; --}}
    {{--                this.currentPost = post.expanded ? post : null; --}}
    {{--            }, --}}
    {{-- --}}
    {{--            nextPost() { --}}
    {{--                const index = this.posts.findIndex(post => post.id === this.currentPost.id); --}}
    {{--                this.currentPost = this.posts[(index + 1) % this.posts.length]; --}}
    {{--            }, --}}
    {{-- --}}
    {{--            prevPost() { --}}
    {{--                const index = this.posts.findIndex(post => post.id === this.currentPost.id); --}}
    {{--                this.currentPost = this.posts[(index - 1 + this.posts.length) % this.posts.length]; --}}
    {{--            } --}}
    {{--        } --}}
    {{--    } --}}
    {{-- </script> --}}
</body>

</html>
