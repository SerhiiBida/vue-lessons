import {defineStore} from "pinia";

// 2. Створіть свій перший store з базовим станом і декількома діями або мутаціями.
export const useBasketStore = defineStore("basket", {
    state: () => {
        return {
            basket: []
        }
    },
    getters: {
        isBasket() {
            return this.basket.length > 0;
        },
        getBasket() {
            return this.basket;
        }
    },
    action: {
        addProduct(id, name, price) {
            this.basket.push({
                id,
                name,
                price
            });
        }
    }
});