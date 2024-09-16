import './bootstrap';
import 'atropos/css';

// import Atropos library
import Atropos from 'atropos';

// Initialize
const myAtropos = Atropos({
    el: '.my-atropos',

    // rest of parameters
});


// Alternar Idioma
document.addEventListener('DOMContentLoaded', function () {
    const storedLocale = window.localStorage.getItem('locale');

    // Si hay un idioma almacenado en localStorage, envía la solicitud para cambiarlo en el servidor
    if (storedLocale) {
        axios.get(`/lang/${storedLocale}`).then(() => {
            // Recarga la página solo si el idioma actual no coincide con el almacenado
            if (storedLocale !== document.documentElement.lang) {
                location.reload();
            }
        });
    }

    // Función para cambiar el idioma cuando el usuario selecciona uno en el menú
    window.changeLocale = function (locale) {
        // Guardar el idioma seleccionado en localStorage
        window.localStorage.setItem('locale', locale);
        // Redirigir a la ruta para cambiar el idioma en el servidor
        axios.get(`/lang/${locale}`).then(() => {
            location.reload();
        });
    }
});

// -----------------------------------  //
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

