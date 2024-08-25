<script>
import AddProductForm from "@/components/shop/AddProductForm.vue";

export default {
  name: "Products",
  components: {AddProductForm},
  data() {
    return {
      products: [
        {id: 1, name: "ПК 1", price: 234, isSell: "Так"},
        {id: 2, name: "ПК 2", price: 250, isSell: "Так"},
        {id: 3, name: "ПК 3", price: 300, isSell: "Так"},
        {id: 4, name: "ПК 4", price: 400, isSell: "Так"},
        {id: 5, name: "ПК 5", price: 500, isSell: "Так"},
        {id: 6, name: "ПК 6", price: 600, isSell: "Так"},
      ]
    }
  },
  methods: {
    // 4. Реалізуйте програмне перенаправлення між маршрутами за допомогою this.$index.push.
    goToProduct(event, id) {
      this.$router.push({
        name: "shop-product",
        params: {
          id
        }
      });
    },
    goToDetail(event, id) {
      this.$router.push({
        name: "shop-detail",
        params: {
          id
        }
      });
    },
    addProduct(name, price, isSell) {
      const lastId = this.products.at(-1).id;

      const newId = lastId + 1;

      const newIsSell = isSell ? "Так" : "Ні";

      this.products.push({
        id: newId,
        name,
        price,
        isSell: newIsSell
      });
    }
  }
}
</script>

<template>
  <section class="products">
    <p
        v-for="product in products"
        :key="product.id"
        :data-product-id="product.id"
    >
      {{ product.name }} - {{ product.price }}$ Продаж: {{ product.isSell }}
      <!--
        2. Створіть маршрут, який використовує динамічний параметр,
        і виводьте його в компоненті.
      -->
      <button @click="goToProduct($event, product.id)">
        View
      </button>
      <button @click="goToDetail($event, product.id)">
        Details
      </button>
    </p>
    <div>
      <AddProductForm @add-product="addProduct"/>
      <!--
        3. Налаштуйте вкладені маршрути і виведіть дочірній компонент
        в батьківському компоненті.
      -->
      <RouterView/>
    </div>
  </section>
</template>