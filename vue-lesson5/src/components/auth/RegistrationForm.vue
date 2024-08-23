<script>
import AuthFirebase from '@/servises/auth.js';

export default {
  name: "RegistrationForm",
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
      this.form.error = error;
    },
    register() {
      const auth = new AuthFirebase();

      auth.register(
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
  <form action="#" method="post" class="registration-form" @submit.prevent="register">
    <h3 class="registration-title">
      Registration
    </h3>
    <p class="registration-email">
      <label>
        Email:
      </label>
      <input type="email" name="email" id="email" v-model="form.email">
    </p>
    <p class="registration-password">
      <label>
        Password:
      </label>
      <input type="password" name="password" id="password" v-model="form.password">
    </p>
    <p class="registration-errors">
      {{ form.error }}
    </p>
    <p class="registration-submit">
      <button type="submit">
        Register
      </button>
    </p>
  </form>
</template>