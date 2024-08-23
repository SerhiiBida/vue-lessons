<script>
import AuthFirebase from '@/servises/auth.js';

export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        email: '',
        password: '',
        error: ''
      }
    }
  },
  methods: {
    outputError(error) {
      switch (error.code) {
        case 'auth/invalid-email':
          this.form.error = 'Invalid email'
          break
        case 'auth/user-not-found':
          this.form.error = 'No account with that email was found'
          break
        case 'auth/wrong-password':
          this.form.error = 'Incorrect password'
          break
        default:
          this.form.error = 'Email or password was incorrect'
          break
      }
    },
    login() {
      const auth = new AuthFirebase();

      auth.login(
          this.form.email,
          this.form.password,
          this.$router,
          this.outputError
      );
    }
  }
}
</script>

<template>
  <form action="#" method="post" class="login-form" @submit.prevent="login">
    <h3 class="login-title">
      Authorization
    </h3>
    <p class="login-email">
      <label>
        Email:
      </label>
      <input type="email" name="email" id="email" v-model="form.email">
    </p>
    <p class="login-password">
      <label>
        Password:
      </label>
      <input type="password" name="password" id="password" v-model="form.password">
    </p>
    <p class="login-errors">
      {{ form.error }}
    </p>
    <p class="login-submit">
      <button type="submit">
        Login
      </button>
    </p>
  </form>
</template>