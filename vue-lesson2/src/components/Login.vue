<script>
export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    clearErrors() {
      this.$refs.loginError.textContent = '';
      this.$refs.passwordError.textContent = '';
    },
    errorOutput(element, text) {
      element.textContent = text;
    },
    loginValidation() {
      // Только буквы и цифры(обязательна буква и цифра), длина от 8 до 16 символов
      const reg = /^(?!.*\W)(?=.*\d)(?=.*[a-z]).{8,16}$/;

      if (!reg.test(this.login)) {
        this.errorOutput(
            this.$refs.loginError,
            'Допустимі букви і цифри, довжина від 8 до 16 символів'
        );

        return false;
      }

      return true;
    },
    passwordValidation() {
      // Требует: цифру, z, Z, спец. символ, длина 8 до 16 с.
      const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}$/;

      if (!reg.test(this.password)) {
        this.errorOutput(
            this.$refs.passwordError,
            'Потрібна: цифра, z, Z, спец. символ, довжина від 8 до 16 символів'
        );

        return false;
      }

      return true;
    },
    // 6. Створіть метод, який буде перевіряти введені дані у формі на відповідність деяким правилам.
    formValidation(event) {
      this.clearErrors();

      const checkLogin = this.loginValidation();
      const checkPassword = this.passwordValidation();

      if (!checkLogin || !checkPassword){
        // Запрет отправки
        event.preventDefault();
      }
    }
  }
}
</script>

<template>
  <form action="#" class="login" @submit="formValidation">
    <div class="input-login">
      <label for="login">
        Login
      </label>
      <input v-model="login" type="text" name="login" id="login" minlength="8" maxlength="16">
      <p ref="loginError" class="login-error"></p>
    </div>
    <div class="input-password">
      <label for="password">
        Password
      </label>
      <input v-model="password" type="password" name="password" id="password" minlength="8" maxlength="16">
      <p ref="passwordError" class="password-error"></p>
    </div>
    <button type="submit">
      Login
    </button>
  </form>
</template>