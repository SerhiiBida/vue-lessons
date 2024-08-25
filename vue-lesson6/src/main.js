import "./assets/main.css";

import {createApp} from "vue";
import {createPinia} from "pinia";

import App from "./App.vue";
import router from "./router";
import vuetify from "@/plugins/vuetify.js";


export const pinia = createPinia();

const app = createApp(App);

// 1. Налаштуйте Pinia як стор.
app.use(vuetify)
    .use(pinia)
    .use(router)
    .mount("#app");
