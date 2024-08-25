<script>
import {mapStores} from "pinia";
import {useBasketStore} from "@/stores/basket.js";

export default {
  name: "Basket",
  computed: {
    ...mapStores(useBasketStore),
  },
  mounted() {
    // 5. Створіть дії для виклику мутацій та обробки асинхронних операцій.
    this.basketStore.uploadProducts();
  }
}
</script>

<template>
  <!--3. Виведіть дані зі свого store у компоненті Vue.-->
  <section class="basket-products">
    <template v-if="basketStore.isLoading">
      <v-card
          class="basket-product"
          v-for="product in basketStore.getBasket"
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
        <template v-slot:actions>
          <v-btn class="basket-product-button-delete" @click="basketStore.deleteProduct(product.id)">
            Delete
          </v-btn>
        </template>
      </v-card>
    </template>
  </section>
</template>