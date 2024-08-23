<script>
export default {
  name: "Product",
}
</script>

<template>
  <p>
    Product: {{ $route.params.id }}
  </p>
</template>