<script>
import FormNewProduct from '@/components/FormNewProduct.vue';

export default {
  name: 'Products',
  components: {
    FormNewProduct
  },
  data() {
    return {
      products: [
        {id: new Date('2024-01-01'), name: 'Product 1', price: 400},
        {id: new Date('2024-01-02'), name: 'Product 2', price: 500},
        {id: new Date('2024-01-03'), name: 'Product 3', price: 200}
      ],
      backgroundColors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
      fontSizes: ['14px', '16px', '18px', '20px'],
      isAddProduct: false,
    }
  },
  methods: {
    getRandomIndex(min=0, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomStyles() {
      const randomIndexBackgroundColor = this.getRandomIndex(undefined, this.backgroundColors.length - 1);
      const randomIndexFontSize = this.getRandomIndex(undefined, this.fontSizes.length - 1);

      const backgroundColor = this.backgroundColors[randomIndexBackgroundColor];
      const fontSize = this.fontSizes[randomIndexFontSize];

      return {'background-color': backgroundColor, 'font-size': fontSize};
    },
    addDynamicStyles(){
      if (this.products.length > 0) {
        this.products.forEach((item, index, products) => {
          products[index].styles = this.randomStyles();
        })
      }
    },
    addProduct(name, price) {
      this.products.push({
        id: new Date(),
        name: name,
        price: price,
        styles: {
          ...this.randomStyles()
        }
      });
    },
  },
  created() {
    this.addDynamicStyles();
  }
}
</script>

<template>
  <section>
    <!--
      4. Створіть динамічний список елементів, де кожен елемент має випадковий колір фону
      та розмір шрифту, згенеровані методом при створенні компоненту.
    -->
    <template v-if="products.length > 0">
      <p
          v-for="product in products"
          :key="product.id"
          :data-product-id="product.id"
          :style="product.styles"
      >
        {{ product.name }}: {{ product.price }}
      </p>
    </template>
    <p v-else>
      Товарів ще не має...
    </p>
    <!--Task 2-->
    <FormNewProduct v-show="isAddProduct" @close-modal="isAddProduct = false;" @add-product="addProduct"/>
    <button @click="isAddProduct = !isAddProduct">
      Додати товар
    </button>
  </section>
</template>