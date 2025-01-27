import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      selectLanguage: "Select Language",
    },
  },
  es: {
    translation: {
      welcome: "¡Bienvenido a nuestro sitio web!",
      selectLanguage: "Seleccionar idioma",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue sur notre site web!",
      selectLanguage: "Choisir la langue",
    },
  },
  nl: {
    translation: {
      welcome: "Welkom op onze website!",
      selectLanguage: "Taal selecteren",
    },
  },
  pt: {
    translation: {
      welcome: "Bem-vindo ao nosso site!",
      selectLanguage: "Selecionar idioma",
    },
  },
  de: {
    translation: {
      welcome: "Willkommen auf unserer Website!",
      selectLanguage: "Sprache auswählen",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
