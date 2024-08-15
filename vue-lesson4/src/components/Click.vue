<script>
export default {
  name: 'Click',
  data() {
    return {
      clicks: []
    }
  },
  methods: {
    addClick() {
      this.clicks.push(new Date());
    }
  }
}
</script>

<template>
  <!--1. Створіть компонент, де кожен клік на кнопку зберігає поточний час кліка в масив і виводить цей масив на екран.-->
  <section>
    <template v-if="clicks.length > 0">
      <p v-for="(click, index) in clicks" :key="index">
        {{ click }}
      </p>
    </template>
    <p v-else>
      Кліку ще не було...
    </p>
    <button @click="addClick">
      Додати
    </button>
  </section>
</template>