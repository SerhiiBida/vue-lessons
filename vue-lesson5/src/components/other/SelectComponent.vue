<script>
export default {
  name: "SelectComponent",
  props: {
    items: Array,
    selectedItem: String
  },
  methods: {
    updateSelectedItem(event) {
      this.$emit("update:selectedItem", event.target.value);
    }
  }
}
</script>

<template>
  <!--16. Розробіть новий компонент, який буде представляти собою випадаючий список (select box).-->
  <!--
    18. Інтегруйте v-model, щоб забезпечити зв'язування значення компоненту
    з зовнішньою змінною, так щоб при зміні вибраної опції, змінювалося значення
    зовнішньої змінної, і навпаки.
  -->
  <!--
    19. Стилізуйте компонент так, щоб він був візуально привабливим та відповідав
    стандартам верстки.
  -->
  <v-select
      label="Select"
      :items="items"
      @change="updateSelectedItem"
  >
  </v-select>
</template>