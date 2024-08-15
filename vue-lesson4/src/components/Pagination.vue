<script>
export default {
  name: 'Pagination',
  data() {
    return {
      products: [
        {id: 1, name: 'Laptop', price: 230},
        {id: 2, name: 'Smartphone', price: 180},
        {id: 3, name: 'Tablet', price: 150},
        {id: 4, name: 'Monitor', price: 120},
        {id: 5, name: 'Keyboard', price: 30},
        {id: 6, name: 'Mouse', price: 25},
        {id: 7, name: 'Headphones', price: 80},
        {id: 8, name: 'Smartwatch', price: 200},
        {id: 9, name: 'Camera', price: 300},
        {id: 10, name: 'Printer', price: 150},
        {id: 11, name: 'Speaker', price: 70},
        {id: 12, name: 'Router', price: 50},
        {id: 13, name: 'Charger', price: 20},
        {id: 14, name: 'Power Bank', price: 40},
        {id: 15, name: 'Drone', price: 350},
        {id: 16, name: 'Projector', price: 280},
        {id: 17, name: 'TV', price: 450},
        {id: 18, name: 'Game Console', price: 400},
        {id: 19, name: 'VR Headset', price: 220},
        {id: 20, name: 'Fitness Tracker', price: 90},
        {id: 21, name: 'External Hard Drive', price: 110},
        {id: 22, name: 'SSD', price: 100},
        {id: 23, name: 'Flash Drive', price: 15},
        {id: 24, name: 'Memory Card', price: 25},
        {id: 25, name: 'Graphics Card', price: 500},
        {id: 26, name: 'CPU', price: 320},
        {id: 27, name: 'Motherboard', price: 180},
        {id: 28, name: 'Power Supply', price: 80},
        {id: 29, name: 'Cooling Fan', price: 35},
      ],
      pageNumber: 1,
      productsOnPage: 6
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage(){
      this.pageNumber--;
    }
  },
  computed: {
    amountProducts() {
      return this.products.length;
    },
    maxPages() {
      // Округление вверх
      return Math.ceil(this.amountProducts / this.productsOnPage);
    },
    paginationProducts(){
      const end = this.pageNumber * this.productsOnPage;

      const start = end - this.productsOnPage;

      return this.products.slice(start, end);
    }
  },
}
</script>

<template>
  <!--
    9. Виведіть довгий список елементів з пагінацією, використовуючи v-for,
    і динамічно змінюйте відображені елементи при кліку на кнопки пагінації.
  -->
  <section>
    <div class="products-wrapper">
      <h3>
        Усього товарів {{ amountProducts }}
      </h3>
      <div class="products">
        <article
            v-for="product in paginationProducts"
            :key="product.id"
            :data-pag-product-id="product.id"
            class="product"
        >
          <p>
            {{ product.id }}
          </p>
          <p>
            Назва: {{ product.name }}
          </p>
          <p>
            Ціна {{ product.price }}
          </p>
        </article>
      </div>
      <h4>
        Сторінка {{ pageNumber }}
      </h4>
      <div class="pagination-buttons">
        <button @click="prevPage" :disabled="pageNumber === 1">
          <
        </button>
        <button @click="nextPage" :disabled="pageNumber === maxPages">
          >
        </button>
      </div>
    </div>
  </section>
</template>