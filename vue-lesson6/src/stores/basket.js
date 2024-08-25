import {defineStore} from "pinia";
import {useUserStore} from "@/stores/auth.js";


// 2. Створіть свій перший store з базовим станом і декількома діями або мутаціями.
export const useBasketStore = defineStore("basket", {
    state: () => {
        return {
            basket: [],
            productsOnPage: 6,
            loading: false
        }
    },
    getters: {
        isBasket: (state) => {
            return state.basket.length > 0;
        },
        isLoading: (state) => {
            return state.loading;
        },
        getBasket: (state) => {
            return state.basket;
        },
        getProductsOnPage: (state) => {
            return state.productsOnPage;
        },
        // 7. Створіть селектори для вирахування похідних даних на основі стану.
        maxProducts: (state) => {
            return state.basket.length;
        },
        amountPages: (state) => {
            return this.maxProducts ? Math.ceil(state.basket.length / state.productsOnPage) : 1;
        }
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
        },
    }
});