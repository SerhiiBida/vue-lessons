import {defineStore} from "pinia";
import {useUserStore} from "@/stores/auth.js";


// 2. Створіть свій перший store з базовим станом і декількома діями або мутаціями.
export const useBasketStore = defineStore("basket", {
    state: () => {
        return {
            basket: [],
            loading: false
        }
    },
    getters: {
        isBasket() {
            return this.basket.length > 0;
        },
        isLoading() {
            return this.loading;
        },
        getBasket() {
            return this.basket;
        },
    },
    actions: {
        // 4. Створіть мутації для зміни стану в вашому store.
        deleteProduct(id) {
            const index = this.basket.findIndex((product) => {
                return product.id === id;
            });

            this.basket.splice(index, 1);
        },
        // 9. Створіть асинхронні дії для взаємодії з API або іншими асинхронними джерелами даних.
        async uploadProducts() {
            try {
                const response = await fetch("https://fakestoreapi.com/products");

                const data = await response.json();

                this.basket.push(...data);

                this.loading = true;
            } catch (error) {
                console.log(error);
            }
        },
        // 6. Створіть кілька stores та спробуйте їх комбінувати, доступаючись до одного store з іншого.
        updateAccess() {
            const userStore = useUserStore();

            this.loading = userStore.isLoggedIn;
        }
    }
});