<!--1. Створіть реактивний об'єкт і виведіть його властивості в шаблон. Змініть властивість об'єкта і спостерігайте за змінами в DOM.-->
<script>
export default {
  name: 'User',
  data() {
    return {
      user: {
        name: 'Олексій',
        age: 17,
        city: 'Київ'
      }
    }
  },
  methods: {
    // 2. Створіть метод, який буде викликатися при кліку на кнопку і змінювати деякі дані в інстансі
    swap() {
      [this.user.name, this.user.age] = [this.user.age, this.user.name];
    },
    // 3. Створіть метод, який приймає подію і використовує ії для зміни даних інстанса.
    changeName(event) {
      this.user.name = event.target.value;
    }
  }
}
</script>

<template>
  <div class="user">
    <h4>
      Ім'я: {{ user.name }}
    </h4>
    <p>
      Вік: {{ user.age }}
    </p>
    <p>
      Місто: {{ user.city }}
    </p>
    <button @click="swap">
      Поміняти
    </button>
    <input @input="changeName" type="text" name="name" id="name" :value="user.name">
  </div>
</template>