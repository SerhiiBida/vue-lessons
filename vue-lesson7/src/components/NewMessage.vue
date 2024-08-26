<script>
export default {
  name: "NewMessage"
}
</script>

<template>
  <section>
    <slot name="title">
      Success
    </slot>
    <slot name="text" message="Error... Error.... Error...">
      200 OK
    </slot>
    <slot name="default" date-old="01.01.2000">
      01.01.2024
    </slot>
  </section>
</template>