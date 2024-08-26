<script>
import {formInputTextMixin} from "@/mixins/form.js";

export default {
  name: "AddText",
  mixins: [formInputTextMixin],
  props: {
    modelValue: String,
  }
}
</script>

<template>
  <section>
    <form action="#" @submit.prevent="updateText">
      <div>
        <input
            v-model="inputText.text"
            type="text"
            name="text"
            id="text"
            :placeholder="inputText.placeholder"
            :maxlength="inputText.maxLength"
        >
        <button type="submit">
          Add
        </button>
      </div>
      <p :style="inputText.errorStyles">
        {{ inputText.error }}
      </p>
    </form>
  </section>
</template>