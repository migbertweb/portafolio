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
            },
            colors: {
                // paleta color tierra
                'cust-tierra': '#908B92',
                'cust-arena': '#BFB7B5',
                'cust-cima': '#E8E5E5',
                'cust-neblina': '#E3F5F9',
                'cust-nube': '#CBE2E7',
                'cust-cielo': '#0791B1',
                // paletaoceano oscuro
                'ocean-negro': '#05161A',
                'ocean-oscuro': '#072E33',
                'ocean-med': '#0C7075',
                'ocean-bajo': '#0F969C',
                'ocean-claro': '#6DA5C0',
                'ocean-fondo': '#294D61',
            },
        },
    },

    plugins: [forms],
};
