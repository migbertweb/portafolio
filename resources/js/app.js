import './bootstrap';
// Alternar Idioma
document.addEventListener('DOMContentLoaded', function () {
    window.changeLocale = function (locale) {
        // Guardar el idioma seleccionado en localStorage
        window.localStorage.setItem('locale', locale);

        // Redirigir a la ruta para cambiar el idioma
        window.location.href = `/lang/${locale}`;
    }

    // Establecer el idioma desde localStorage si existe
    const storedLocale = window.localStorage.getItem('locale');
    if (storedLocale) {
        axios.get(`/lang/${storedLocale}`).then(() => {
            location.reload();
        });
    }
});
// -------------------
// Alternar tema
document.addEventListener('DOMContentLoaded', function () {
    const darkThemeBtn = document.getElementById('dark-theme-toggle');
    const lightThemeBtn = document.getElementById('light-theme-toggle');

    // Detectar el tema del sistema al cargar la página
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme)) {
        document.documentElement.classList.add('dark');
        darkThemeBtn.classList.remove('hidden');
        lightThemeBtn.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        darkThemeBtn.classList.add('hidden');
        lightThemeBtn.classList.remove('hidden');
    }

    // Alternar tema al hacer clic en los botones
    darkThemeBtn.addEventListener('click', function () {
        document.documentElement.classList.remove('dark');
        darkThemeBtn.classList.add('hidden');
        lightThemeBtn.classList.remove('hidden');
        localStorage.setItem('theme', 'light');
    });

    lightThemeBtn.addEventListener('click', function () {
        document.documentElement.classList.add('dark');
        darkThemeBtn.classList.remove('hidden');
        lightThemeBtn.classList.add('hidden');
        localStorage.setItem('theme', 'dark');
    });
});

