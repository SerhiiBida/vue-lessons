<script>
export default {
  name: "DirectivesView",
  directives: {
    color(el, binding) {
      el.style.color = binding.value;
    },
    font(el, binding) {
      if (binding.value?.fontSize) {
        el.style.fontSize = binding.value.fontSize;
      }

      if (binding.value?.fontWeight) {
        el.style.fontWeight = binding.value.fontWeight;
      }
    },
    tooltip(el, binding) {
      el.classList.add("tooltip");

      const tooltip = document.createElement("span");

      tooltip.classList.add("tooltip-text");

      tooltip.textContent = binding.value;

      el.append(tooltip);
    }
  },
}
</script>

<template>
  <section>
    <!--
      10. Створіть базову власну директиву, яка змінює колір тексту елемента,
      на якому вона використовується.
    -->
    <h2 v-color="'red'">
      Color Directive
    </h2>
    <!--
      11. Розробіть власну директиву, яка приймає параметр і виконує різні дії
      в залежності від його значення.
    -->
    <p v-font="{fontSize: '34px'}">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus necessitatibus nobis quidem temporibus.
    </p>
    <p v-font="{fontWeight: 'bold'}">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus necessitatibus nobis quidem temporibus.
    </p>
    <!--
      12. Створіть власну директиву для відображення тултипа при наведенні миші.
    -->
    <button v-tooltip="'Question'">
      Add
    </button>
    <!--13. Розробіть директиву, яка дозволяє зробити елемент перетягуваним.-->
    <!--
      14. Реєструйте вашу власну директиву глобально, щоб вона була доступна
      в усьому додатку.
    -->
    <button v-drag>
      Drag
    </button>
  </section>
</template>