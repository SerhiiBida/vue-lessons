import {defineStore} from "pinia";


export const useUserStore = defineStore("user", {
    state: () => {
        return {
            user: {
                isLoggedIn: false,
                accessToken: "",
                id: "",
                email: ""
            }
        }
    },
    getters: {
        isLoggedIn() {
            return this.user.isLoggedIn;
        }
    }
});
