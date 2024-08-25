import {defineStore} from "pinia";


// 8. Розбийте ваш store на модулі для кращої організації коду.
export const useUserStore = defineStore("user", {
    state: () => {
        return {
            user: {
                isLoggedIn: true,
                accessToken: "",
                id: "",
                email: ""
            }
        }
    },
    getters: {
        isLoggedIn: (state) => {
            return state.user.isLoggedIn;
        }
    }
});
