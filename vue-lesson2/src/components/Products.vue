<script>
export default {
  name: 'Products',
  emits: ['changeTitle'],
  data() {
    return {
      products: [
        {id: 1, name: 'Ноутбук 1', price: 400},
        {id: 2, name: 'ПК 1', price: 500},
        {id: 3, name: 'Ноутбук 2', price: 200},
        {id: 4, name: 'ПК 2', price: 600},
        {id: 5, name: 'Ноутбук 3', price: 700},
        {id: 6, name: 'ПК 3', price: 125},
        {id: 7, name: 'Ноутбук 4', price: 350},
        {id: 8, name: 'ПК 4', price: 90},
      ],
      title: 'App 2'
    }
  },
  methods: {
    // 4. Створіть метод для фільтрації масиву об'єктів за деяким критерієм.
    productsFilterPrice() {
      return this.products.filter((product) => {
        return product.price > 100 && product.price < 600;
      });
    }
  },
  computed: {
    // 7. Створіть обчислювальну властивість для виведення даних, обчислених на основі інших реактивних даних.
    averagePrice() {
      const products = this.productsFilterPrice();

      const sum = products.reduce((sum, product) => sum + product.price, 0);

      return sum / products.length;
    },
    // 8. Створіть computed property для фільтрації списку об'єктів.
    productsFilterName(){
      return this.products.filter((product) => {
        return product.name.startsWith('ПК');
      });
    }
  }
}
</script>

<template>
  <section>
    <!--4. Створіть метод для фільтрації масиву об'єктів за деяким критерієм.-->
    <div class="products">
      <article v-for="product in productsFilterPrice()" :key="product.id" :data-product-id="product.id">
        <p>
          {{ product.name }} - {{ product.price }}$
        </p>
      </article>
    </div>
    <p>
      Середня ціна: {{ averagePrice }}$
    </p>
    <!--8. Створіть computed property для фільтрації списку об'єктів.-->
    <div class="products">
      <article v-for="product in productsFilterName" :key="product.id" :data-product-id="product.id">
        <p>
          {{ product.name }} - {{ product.price }}$
        </p>
      </article>
    </div>
    <!--5. Використайте метод для обробки події кліку, який змінює стан інших компонентів.-->
    <button @click="$emit('changeTitle', title)">
      Змінити заголовок
    </button>
  </section>
</template>