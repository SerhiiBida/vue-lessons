<script>
export default {
  name: "ShopDetailView",
  props: {
    id: String
  }
}
</script>

<template>
  <section>
    <h3>
      Product details: {{ id }}
    </h3>
  </section>
</template>