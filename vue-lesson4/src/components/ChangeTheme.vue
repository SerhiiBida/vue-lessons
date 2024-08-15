<script>
export default {
  name: 'ChangeTheme',
  data() {
    return {
      isLight: true
    }
  },
  methods: {
    changeTheme(event) {
      const button = event.target;

      if (this.isLight) {
        this.isLight = false;
        document.body.setAttribute('data-theme', 'dark');

        button.textContent = '🌞';
        return;
      }

      this.isLight = true;
      document.body.removeAttribute('data-theme');

      button.textContent = '🌙';
    }
  }
}
</script>

<template>
  <!--
    6. Створіть переключатель тем, який динамічно змінює стилі всього додатку
    між темною та світлою темами.
  -->
  <section>
    <button @click="changeTheme">
      🌙
    </button>
  </section>
</template>