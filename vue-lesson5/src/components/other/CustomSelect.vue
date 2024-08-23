<script>
export default {
  name: "CustomSelect",
  props: {
    options: Array,
    modelValue: String
  },
}
</script>

<template>
  <!--20. Створіть новий Vue компонент, наприклад, CustomSelect.vue.-->
  <!--
    22. Використайте v-for для виведення опцій у випадаючому списку на основі
    переданого масиву опцій.
  -->

  <!--
    23. Використайте v-model для того, щоб компонент міг взаємодіяти з зовнішніми даними.
    Ви можете використовувати v-model з computed properties для створення getter і setter
    методів.
  -->
  <!--
    24. Стилізуйте ваш компонент, використовуючи CSS або будь-який препроцесор на ваш вибір.
  -->
  <div class="custom-select">
    <label for="select">
      Обрати
    </label>
    <select name="select" id="select" @change="$emit('update:modelValue', $event.target.value)">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>