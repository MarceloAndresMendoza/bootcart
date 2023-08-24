import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { i18nextPlugin } from 'translation-check'
// Translation files:
import esTranslation from "./locales/es.json";

i18n.use(i18nextPlugin).init({
  // <url>?showtranslations
})

const resources = {
  es: { translation: esTranslation },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;