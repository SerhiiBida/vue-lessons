<script>
import {formMixin} from "@/mixins/form.js";

export default {
  name: "AddText",
  mixins: [formMixin],
  props: {
    modelValue: String,
  }
}
</script>

<template>
  <section>
    <form action="#">
      <input
          type="text"
          name="text"
          id="text"
          :placeholder="inputText.placeholder"
          :maxlength="inputText.maxLength"
      >
      <button type="submit">
        Add
      </button>
    </form>
  </section>
</template>