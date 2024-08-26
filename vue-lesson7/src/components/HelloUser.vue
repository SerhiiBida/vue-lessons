<script>
export default {
  name: "HelloUser"
}
</script>

<template>
  <section>
    <h1>
      <slot>
        Hello, user!
      </slot>
    </h1>
  </section>
</template>