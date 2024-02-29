import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Antd from "ant-design-vue";
import i18n from "./locales";

createApp(App).use(store).use(router).use(Antd).use(i18n).mount("#app");
