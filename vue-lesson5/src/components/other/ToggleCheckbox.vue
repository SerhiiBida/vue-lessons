<script>
export default {
  name: "ToggleCheckbox",
  data() {
    return {
      isToggle: false
    }
  }
}
</script>

<template>
  <!--
    14. Створіть компонент перемикача (toggle), який використовує v-model.
    Компонент повинен міняти свій стан та виводити різні значення в залежності
    від свого стану.
  -->
  <section>
    <p>
      <input v-model="isToggle" type="checkbox" name="toggle-checkbox" id="toggle-checkbox">
      {{ isToggle }}
    </p>
  </section>
</template>