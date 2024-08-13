<script>
import {getWeatherNow} from "../../api/weather.js";

export default {
  name: 'WeatherNow',
  data() {
    return {
      data: null,
      isWeatherNow: false
    }
  },
  methods: {
    getWeatherNow,
    changeDisplay() {
      this.isWeatherNow = !this.isWeatherNow;
    }
  },
  computed: {
    weatherData() {
      let result = '...';

      if (this.data) {
        const city = this.data.location.name;
        const temp = this.data.current.temp_c;
        const lastUpdated = this.data.current.last_updated;

        result = `${city} ${temp} C ${lastUpdated}`;
      }

      return result;
    }
  },
  watch: {
    async isWeatherNow(newValue){
      if (newValue) {
        this.data = await this.getWeatherNow();
      }
    }
  }
}
</script>

<template>
  <section>
    <!--5. Створіть два елементи, один з v-show, інший з v-if, з однаковими умовами. Змініть умову і спостерігайте за відмінностями у DOM. Дослідіть, в яких ситуаціях краще використовувати кожну директиву.-->
    <p v-show="isWeatherNow">
      {{ weatherData }}
    </p>
    <p v-if="isWeatherNow">
      {{ weatherData }}
    </p>
    <button @click="changeDisplay">
      Пошук
    </button>
  </section>
</template>