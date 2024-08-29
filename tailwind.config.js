import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                encode: ['EncodeSans', 'sans-serif'], // Fuente local
                burtons: ['Burtons'], // Fuente local
                burtonsscript: ['BurtonsScript'], // Fuente local
                brotherline: ['Brotherline'], // Fuente local
                ochitylla: ['Ochitylla'], // Fuente local
            },
            colors: {
                ocean: {
                    lightest: '#294D61',
                    lighter: '#6DA5C0',
                    light: '#0F969C',
                    main: '#0C7075', // Este será el color por defecto (sin sufijo)
                    dark: '#072E33',
                    darker: '#05161A',
                },
                everest: {
                    lightest: '#0791B1',
                    lighter: '#CBE2E7',
                    light: '#E3F5F9',
                    main: '#E8E5E5', // Este será el color por defecto (sin sufijo)
                    dark: '#BFB7B5',
                    darker: '#908B92',
                },
            },
        },
    },

    plugins: [forms],
};
