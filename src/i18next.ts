// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {getLangFromStorage} from "./utils/common";
const lang = getLangFromStorage() || 'English';

const resources = {
    English: {
        translation: require('./locales/english/translation.json'),
    },
    Hebrew: {
        translation: require('./locales/hebrew/translation.json'),
    },
};
i18n.use(initReactI18next).init({
    resources,
    debug: true,
    lng: lang,
    fallbackLng: lang,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;