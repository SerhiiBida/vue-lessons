import "./assets/main.css";

import {createApp} from "vue";
import {createPinia} from "pinia";

import App from "./App.vue";
import router from "./router";
import {componentLoggingMixin} from "@/mixins/global.js";
import {dragAndDrop} from "@/directives/directives.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 8. Створіть глобальний міксін і додайте його глобально
// в вашому основному файлі main.js або main.ts.
app.mixin(componentLoggingMixin);

// 14. Реєструйте вашу власну директиву глобально, щоб вона була доступна в усьому додатку.
app.directive("drag", dragAndDrop);

app.mount("#app");
