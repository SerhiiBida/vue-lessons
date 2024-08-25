<script>
import CustomSelect from "@/components/other/CustomSelect.vue";

export default {
  name: "CustomCreateForm",
  components: {
    CustomSelect,
  },
  data() {
    return {
      options: [],
      inputItem: "",
      selectedOption: ""
    }
  },
  methods: {
    addItems() {
      if (this.inputItem && !this.options.includes(this.inputItem)) {
        this.options.push(this.inputItem);
      }
    }
  }
}
</script>

<template>
  <section class="custom-create-form">
    <!--
      21. Оголосіть prop, наприклад options, для передачі масиву опцій у компонент.
    -->
    <CustomSelect :options="options" v-model="selectedOption"/>
    <div class="custom-create-form-field">
      <input
          v-model="inputItem"
          type="text"
          name="input"
          id="input"
      >
    </div>
    <button class="custom-create-form-button" @click="addItems">
      Add
    </button>
    <p class="custom-create-form-selected">
      Selected: {{ selectedOption }}
    </p>
  </section>
</template>