import './assets/css/style.css';

import { createApp } from 'vue';
import App from './App.vue';
import GlobalMessage from "@/components/GlobalMessage.vue";


const app = createApp(App);

// 3. Створіть нові компоненти та зареєструйте іх локально і глобально (хоча б один компонент).
app.component('GlobalMessage', GlobalMessage);

app.mount('#app');
