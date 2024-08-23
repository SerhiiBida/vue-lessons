<script>
import {mapStores} from "pinia";

import {useUserStore} from "@/store/auth.js";
import AuthFirebase from "@/servises/auth.js"

export default {
  name: "App",
  data() {
    return {}
  },
  computed: {
    // Загружаем глобальное хранилище
    ...mapStores(useUserStore),
  },
  methods: {
    signOut() {
      const auth = new AuthFirebase();

      auth.signOut(this.$router);
    }
  }
}
</script>

<template>
  <!--1. Налаштуйте базові маршрути для декількох компонентів у вашому додатку.-->
  <header class="header">
    <nav class="header-navigation">
      <RouterLink :to="{name: 'home'}">
        Home
      </RouterLink>
      <RouterLink :to="{name: 'about'}">
        About
      </RouterLink>
      <template v-if="userStore.isLoggedIn">
        <RouterLink :to="{name: 'shop'}">
          Shop
        </RouterLink>
        <template v-if="userStore.isAdmin">
          <RouterLink :to="{name: 'admin-home'}">
            Admin
          </RouterLink>
        </template>
        <a href="#" @click.prevent="signOut">
          Sign out
        </a>
        <a href="#">
          {{ userStore.user.email }}
        </a>
      </template>
      <template v-else>
        <RouterLink :to="{name: 'registration'}">
          Register
        </RouterLink>
        <RouterLink :to="{name: 'login'}">
          Login
        </RouterLink>
      </template>
    </nav>
  </header>

  <main>
    <RouterView/>
  </main>

  <footer>
    Footer
  </footer>
</template>