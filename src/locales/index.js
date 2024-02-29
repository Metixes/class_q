import en from "./en/en.json";
import zh from "./zh-hk/zh-hk.json";
import ja from "./ja/ja.json";

import { createI18n } from "vue3-i18n";

const locales = { zh, ja, en };

const locale = () => {
  let savedLocale = localStorage.getItem("lang");

  if (savedLocale) {
    return savedLocale;
  } else {
    let browserLocale = navigator.language.split("-")[0];
    if (Object.keys(locales).includes(browserLocale)) {
      return browserLocale;
    } else {
      return "en";
    }
  }
};

const i18n = createI18n({
  locale: locale(),
  messages: locales,
});

export default i18n;
