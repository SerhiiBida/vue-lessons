<script>
export default {
  name: "ModalWindow",
  props: {
    modelValue: Boolean
  }
}
</script>

<template>
  <section v-show="modelValue" class="modal-wrapper">
    <article class="modal">
      <div class="modal-header">
        <div class="modal-header-title">
          <slot name="title">
            Title
          </slot>
        </div>
        <button class="modal-header-cross" @click="$emit('update:modelValue', false)">
        </button>
      </div>
      <div class="modal-body">
        <slot name="body">
          Text
        </slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          Footer
        </slot>
      </div>
    </article>
  </section>
</template>