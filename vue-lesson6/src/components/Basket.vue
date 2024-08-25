<script>
import {mapStores} from "pinia";
import {useBasketStore} from "@/stores/basket.js";

export default {
  name: "Basket",
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapStores(useBasketStore),
    paginationProducts() {
      const productsOnPage = this.basketStore.getProductsOnPage;

      const end = this.currentPage * productsOnPage;

      const start = end - productsOnPage;

      return this.basketStore.getBasket.slice(start, end);
    }
  },
  mounted() {
    // 5. Створіть дії для виклику мутацій та обробки асинхронних операцій.
    this.basketStore.uploadProducts();
  }
}
</script>

<template>
  <section>
    <template v-if="basketStore.isLoading">
      <!--3. Виведіть дані зі свого store у компоненті Vue.-->
      <div class="basket-products">
        <v-card
            class="basket-product"
            v-for="product in paginationProducts"
            :key="product.id"
            :data-basket-product-id="product.id"
        >
          <template v-slot:title>
            {{ product.title }}
          </template>
          <template v-slot:subtitle>
            {{ product.price }} $
          </template>
          <template v-slot:text>
            {{ product.description }}
          </template>
          <!--
            5. Створіть дії для виклику мутацій та обробки асинхронних операцій.
          -->
          <template v-slot:actions>
            <v-btn
                class="basket-product-button-delete"
                @click="basketStore.deleteProduct(product.id)"
            >
              Delete
            </v-btn>
          </template>
        </v-card>
      </div>
      <!--
        10. Реалізуйте пагінацію зі стороннього API,
        використовуючи Pinia store.
      -->
      <div v-if="basketStore.amountPages > 1" class="pagination-wrapper">
        <v-pagination
            v-model="currentPage"
            :length="basketStore.amountPages"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            @click="basketStore.getProductsPage(currentPage)"
        >
        </v-pagination>
      </div>
    </template>
  </section>
</template>