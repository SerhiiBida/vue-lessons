<script>
export default {
  name: 'GlobalMessage',
  data() {
    return {
      isSuccess: true
    }
  }
}
</script>

<template>
  <section>
    <p v-if="isSuccess" class="ms-success">
      Авторизація успішна!
    </p>
    <p v-else class="ms-error">
      Упс... Виникла помилка
    </p>
    <button @click="isSuccess=!isSuccess">
      Змінити
    </button>
  </section>
</template>