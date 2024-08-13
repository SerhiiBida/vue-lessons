<script>
import User from '@/components/User.vue';
import Products from "@/components/Products.vue";
import Login from "@/components/Login.vue";
import Posts from "@/components/Posts.vue";
import Product from "@/components/Product.vue";

export default {
  name: 'App',
  components: {
    Product,
    Posts,
    Login,
    User,
    Products
  },
  data() {
    return {
      title: 'App 1'
    }
  },
  methods: {
    // 5. Використайте метод для обробки події кліку, який змінює стан інших компонентів.
    changeTitle(title) {
      this.title = title;
    }
  }
}
</script>

<template>
  <main>
    {{ title }}
    <!--tasks 1-3-->
    <User/>
    <!--task 4-5, 7, 8-->
    <Products @change-title="changeTitle"/>
    <!--task 6-->
    <Login/>
    <!--task 9-10-->
    <Posts/>
    <!--task 11-16-->
    <Product/>
  </main>
</template>
