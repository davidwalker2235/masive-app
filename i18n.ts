// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './translations/es.json';
import en from './translations/en.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  fallbackLng: 'es',
  lng: 'es',
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;