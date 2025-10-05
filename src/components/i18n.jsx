import i18n from "i18next";
import { initReactI18next } from "react-i18next"; // Import the plugin

import ko from "../assets/ko/translation.json";
import en from "../assets/en/translation.json";
import uz from "../assets/uz/translation.json";

const resources = {
  ko: {
    translation: ko,
  },
  en: {
    translation: en,
  },
  uz: {
    translation: uz,
  },
};

i18n.use(initReactI18next).init({
  // Add plugin here
  resources,
  lng: "ko",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
