import {defineStore} from "pinia"


export const useUserStore = defineStore("user", {
    state: () => {
        return {
            user: {
                isLoggedIn: false,
                accessToken: "",
                id: "",
                email: "",
                isAdmin: false
            }
        }
    },
    getters: {
        isLoggedIn() {
            return this.user.isLoggedIn;
        },
        isAdmin() {
            return this.user.isAdmin;
        },
    },
    actions: {
        addUser(user) {
            this.user.isLoggedIn = true;
            this.user.accessToken = user.accessToken;
            this.user.id = user.uid;
            this.user.email = user.email;
        },
        updateIsAdmin(access) {
            this.user.isAdmin = access;
        },
        reset() {
            for (let key in this.user) {
                this.user[key] = typeof this.user[key] === "boolean" ? false : "";
            }
        }
    }
});