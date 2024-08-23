import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, onAuthStateChanged
} from "firebase/auth";

import {useUserStore} from "@/store/auth.js";
import User from "@/servises/database.js";
import {pinia} from "@/main.js";

export default class AuthFirebase {
    #auth;
    #userStore;
    #dbUser;

    constructor() {
        this.#auth = getAuth();
        this.#userStore = useUserStore(pinia);
        this.#dbUser = new User();
    }

    register(email, password, router, outputError) {
        createUserWithEmailAndPassword(this.#auth, email, password)
            .then((userData) => {
                // Сохраняем роль user в БД
                this.#dbUser.addUserRole(userData.user);

                router.push({
                    name: "home"
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                outputError(`${errorCode}: ${errorMessage}`);
            });
    }

    login(email, password, router, outputError) {
        signInWithEmailAndPassword(this.#auth, email, password)
            .then((userData) => {
                router.push({
                    name: "home"
                });
            })
            .catch((error) => {
                outputError(error);
            });
    }

    signOut(router) {
        signOut(this.#auth)
            .then((result) => {
                router.push({
                    name: "login"
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(`${errorCode}: ${errorMessage}`);
            });
    }

    watcherAuthorizationAndRole() {
        let watcherUserRef = null;

        // Наблюдатель за аутентификацией
        onAuthStateChanged(this.#auth, (user) => {
            this.#dbUser.watcherOffAll(watcherUserRef);

            if (user) {
                this.#userStore.addUser(user);

                // Наблюдатель за правами пользователя
                watcherUserRef = this.#dbUser.watcherUserRole(user.uid, this.#userStore);
            } else {
                this.#userStore.reset();

                this.#dbUser.watcherOffAll(watcherUserRef);

                watcherUserRef = null;
            }
        });
    }
};