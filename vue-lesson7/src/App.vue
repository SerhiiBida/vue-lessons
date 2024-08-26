<script>
export default {
  name: "App",
}
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{name: 'home'}">
        Home
      </RouterLink>
      <RouterLink :to="{name: 'test-directives'}">
        Test Directives
      </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView/>
  </main>

  <footer>
  </footer>
</template>