<script>
export default {
  name: 'Product',
  data() {
    return {
      product: {
        id: 1,
        name: 'Ноутбук 1',
        price: 400,
        location: {
          city: 'Kyiv',
          street: 'Fery, 28'
        }
      },
      isRequest: false,
      weather: null,
      views: [45, 34, 78]
    }
  },
  computed: {
    currentWeather(){
      let result = 'Зробіть запит';

      if (this.weather) {
        const city = this.weather.location.name;
        const temp = this.weather.current.temp_c;
        const lastUpdated = this.weather.current.last_updated;

        result = `${city} ${temp} C ${lastUpdated}`;
      }

      return result;
    },
    // 14. Створіть watcher, який реагує на зміни в computed property.
    sumViews(){
      return this.views.reduce((sum, value) => sum + value, 0);
    }
  },
  watch: {
    // 11. Використовуйте watcher для відстеження змін у реактивному об’єкті та виведення повідомлення про це.
    // 15. Використовуйте deep опцію для відстеження властивостей внутрішніх об’єктів.
    product: {
      handler(newProduct){
        alert(`New: ${JSON.stringify(newProduct)}`);
      },
      deep: true
    },
    // 12. Використовуйте watcher для відстеження змін однієї властивості у реактивному об’єкті та виведення повідомлення про це.
    'product.name': {
      handler(newName, oldName){
        alert(`New: ${newName}\nOld: ${oldName}`);
      }
    },
    // 13. Використовуйте watcher для відправлення API запитів при зміні реактивних даних.
    async isRequest(newValue){
      if(newValue){
        const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'e42deb1a7amsh39fe1a63df9f61cp192bfbjsn4378f1d52d1e',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
          }
        };

        try {
          const response = await fetch(url, options);
          this.weather = await response.json();
        } catch (error) {
          console.error(error);
        }
      } else {
        this.weather = null;
      }
    },
    // 14. Створіть watcher, який реагує на зміни в computed property.
    sumViews(newValue, oldValue){
      alert(`New: ${newValue}\nOld: ${oldValue}`);
    },
    // 16. Використовуйте опцію immediate для виклику watcher при ініціалізації компонента.
    'views.0': {
      handler(newValue){
        console.log(newValue);
      },
      immediate: true
    }
  }
}
</script>

<template>
  <section>
    <!--11. Використовуйте watcher для відстеження змін у реактивному об’єкті та виведення повідомлення про це.-->
    <p>
      <label>
        ID:
      </label>
      <input v-model="product.id" type="number" name="id" id="id">
    </p>
    <!--12. Використовуйте watcher для відстеження змін однієї властивості у реактивному об’єкті та виведення повідомлення про це.-->
    <p>
      <label>
        Name:
      </label>
      <input v-model="product.name" type="text" name="product-name" id="product-name">
    </p>
    <!--13. Використовуйте watcher для відправлення API запитів при зміні реактивних даних.-->
    <p>
      <input v-model="isRequest" type="checkbox" name="is-request" id="is-request">
      <p>
        {{ currentWeather }}
      </p>
    </p>
    <!--14. Створіть watcher, який реагує на зміни в computed property.-->
    <p>
      Цифра {{ sumViews }}
      <button @click="views.push(34)">
        +
      </button>
    </p>
    <!--15. Використовуйте deep опцію для відстеження властивостей внутрішніх об’єктів.-->
    <p>
      <label>
        Product city:
      </label>
      <input v-model="product.location.city" type="text" name="product-city" id="product-city">
    </p>
  </section>
</template>