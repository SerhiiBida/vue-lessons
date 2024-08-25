import "./assets/css/main.css";

import {createApp} from "vue";
import {createPinia} from "pinia";
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";

import App from "./App.vue";
import index from "@/router/index.js";
import env from "../env.js";
import AuthFirebase from "@/servises/auth.js";
import vuetify from "@/plugins/vuetify.js";


// Initialize Pinia
export const pinia = createPinia();

const app = createApp(App);

app.use(vuetify)
    .use(pinia)
    .use(index)
    .mount("#app");

// Firebase
const firebaseConfig = {
    apiKey: env.FB_API_KEY,
    authDomain: env.FB_AUTH_DOMAIN,
    projectId: env.FB_PROJECT_ID,
    storageBucket: env.FB_STORAGE_BUCKET,
    messagingSenderId: env.FB_MESSAGING_SENDER_ID,
    appId: env.FB_APP_ID,
    databaseURL: env.FB_DATABASE_URL,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

// Кастомный класс
const authFirebase = new AuthFirebase();

// Наблюдатель за аутентификацией и ролью пользователя
authFirebase.watcherAuthorizationAndRole();