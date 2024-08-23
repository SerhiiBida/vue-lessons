<script>
import HelloWorld from "@/components/other/HelloWorld.vue";
import Counter from "@/components/other/Counter.vue";
import ToggleCheckbox from "@/components/other/ToggleCheckbox.vue";
import DynamicField from "@/components/other/DynamicField.vue";
import SelectComponent from "@/components/other/SelectComponent.vue";
import CreateForm from "@/components/other/CreateForm.vue";
import CustomCreateForm from "@/components/other/CustomCreateForm.vue";

export default {
  name: "HomeView",
  components: {
    CustomCreateForm,
    CreateForm,
    SelectComponent,
    DynamicField,
    ToggleCheckbox,
    Counter,
    HelloWorld
  },
}
</script>

<template>
  <section>
    <HelloWorld/>
    <Counter/>
    <ToggleCheckbox/>
    <DynamicField/>
    <CreateForm/>
    <CustomCreateForm/>
  </section>
</template>