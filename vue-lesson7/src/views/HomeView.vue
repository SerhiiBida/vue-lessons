<script>
import HelloUser from "@/components/HelloUser.vue";
import Message from "@/components/Message.vue";

export default {
  name: "HomeView",
  components: {
    Message,
    HelloUser
  }
}
</script>

<template>
  <section>
    <!--
      1. Створіть компонент з одним слотом та використайте його,
      передаючи різний контент у слот з різних компонентів.
    -->
    <HelloUser>
      Hello, Vova!
    </HelloUser>
    <HelloUser>
      Hello, Farmer!
    </HelloUser>
    <!--
      2. Розробіть компонент з декількома іменованими слотами та передайте
      у них різний контент.
    -->
    <Message>
      <template v-slot:title>
        <p>
          Error
        </p>
      </template>
      <template #text>
        <p>
          500 Internal Server Error
        </p>
      </template>
    </Message>
  </section>
</template>