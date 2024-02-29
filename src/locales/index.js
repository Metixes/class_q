import { createI18n } from "vue-i18n";
import en from "./en/en.json";
import zhHk from "./zh-hk/zh-hk.json";
import ja from "./ja/ja.json";

const locales = { zhHk, ja, en };

const i18n = createI18n({
  locale: "zh-hk",
  fallbackLocale: "zh-hk",
  messages: locales,
  legacy: false,
});

export default i18n;
