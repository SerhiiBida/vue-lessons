<script>
export default {
  name: 'Locomotive',
  data() {
    return {
      isMoveRight: true,
      locomotiveBlockStyles: {},
      locomotiveImgStyles: {}
    }
  },
  methods: {
    moveLocomotive(){
      this.$refs.buttonMove.disabled = true;

      if (this.isMoveRight) {
        this.locomotiveBlockStyles.animation='moveRight 3s ease-in-out forwards';

        this.isMoveRight = false;
        return;
      }

      this.locomotiveBlockStyles.animation='moveLeft 3s ease-in-out forwards';

      this.isMoveRight = true;
    },
    turnLocomotive() {
      this.$refs.buttonMove.disabled = false;

      if (!this.isMoveRight) {
        // Переворот поезда
        this.locomotiveImgStyles['-webkit-transform'] = 'scaleX(-1)';
        this.locomotiveImgStyles['transform'] = 'scaleX(-1)';
      } else {
        this.locomotiveImgStyles = {};
      }
    }
  }
}
</script>

<template>
  <!--
    5. Реалізуйте динамічне змінення стилів елемента (наприклад, зміна позиції, коліру, розміру)
     за допомогою CSS Transitions або Animations при натисканні кнопки.
   -->
  <section class="locomotive-wrapper">
    <div class="locomotive-button-active">
      <button ref="buttonMove" @click="moveLocomotive">
        Поїхали!
      </button>
    </div>
    <div class="locomotive" :style="locomotiveBlockStyles" @animationend="turnLocomotive">
      <img class="locomotive-img" src="../assets/images/locomotive.png" alt="locomotive" :style="locomotiveImgStyles">
    </div>
  </section>
</template>