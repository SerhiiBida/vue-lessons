import {defineStore} from "pinia";


// 8. Розбийте ваш store на модулі для кращої організації коду.
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
