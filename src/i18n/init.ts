import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const initI18n = (path: string) => i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    backend: { loadPath: path },
    load: 'currentOnly',
    lowerCaseLng: true,
    ns: ['home'],
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: (code: string) => {
      return 'en-gb';
    },
  });

export {
  initI18n,
};
