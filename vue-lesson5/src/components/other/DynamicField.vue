<script>
export default {
  name: "DynamicField",
  data() {
    return {
      className: ""
    }
  }
}
</script>

<template>
  <!--
    15. Використовуйте v-model для динамічної зміни класів елемента на основі даних,
    введених користувачем
  -->
  <section class="dynamic-field">
    <input
        v-model="className"
        :class="className"
        type="text"
        name="className"
        id="className"
    >
  </section>
</template>