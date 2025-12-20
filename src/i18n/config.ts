import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es';
import en from './locales/en';
import pt from './locales/pt';

// Define the resources type
const resources = {
  es,
  en,
  pt,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // Default to Portuguese
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
