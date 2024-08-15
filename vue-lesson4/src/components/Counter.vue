<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
      sign: '+',
      isIncrease: true,
    }
  },
  methods: {
    increase() {
      this.count += 1;
    },
    decrease() {
      this.count -= 1;
    },
    changeSign() {
      this.isIncrease = !this.isIncrease;

      this.sign = this.sign === '+' ? '-' : '+';
    }
  }
}
</script>

<template>
  <!--
    3. Створіть два методи і динамічно змінюйте обробник події кліка між цими методами
    на основі деякої умови (наприклад, значення змінної).
  -->
  <section>
    <h3>
      Лічильник
    </h3>
    <p>
      {{ count }}
    </p>
    <button @click="isIncrease ? increase() : decrease()">
      {{ sign }}
    </button>
    <button @click="changeSign">
      Інший
    </button>
  </section>
</template>