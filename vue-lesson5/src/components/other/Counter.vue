<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 0
    }
  }
}
</script>

<template>
  <!--
    13. Реалізуйте компонент лічильника, який використовує v-model для управління
    його значенням. Компонент повинен мати кнопки для збільшення та зменшення
    значення лічильника.
    -->
  <section>
    <input
        v-model="counter"
        type="number"
        name="counter"
        id="counter"
    >
    <button @click="counter--">
      -
    </button>
    <button @click="counter++">
      +
    </button>
  </section>
</template>