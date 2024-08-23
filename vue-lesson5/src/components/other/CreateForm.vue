<script>
import SelectComponent from "@/components/other/SelectComponent.vue";

export default {
  name: "CreateForm",
  components: {
    SelectComponent
  },
  data() {
    return {
      items: [],
      inputItem: "",
      selectedItem: ""
    }
  },
  methods: {
    addItems() {
      if (this.inputItem && !this.items.includes(this.inputItem)) {
        this.items.push(this.inputItem);
      }
    }
  }
}
</script>

<template>
  <section>
    <!--
      17. Компонент повинен приймати масив опцій як prop, щоб користувач міг
      динамічно визначати доступні опції.
    -->
    <SelectComponent :items="items" v-model="selectedItem"/>
    <v-text-field v-model="inputItem" label="Input"></v-text-field>
    <v-btn @click="addItems">
      Add
    </v-btn>
    <v-banner-text>
      Selected: {{ selectedItem }}
    </v-banner-text>
  </section>
</template>