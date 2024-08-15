<script>
export default {
  name: 'Users',
  data() {
    return {
      users: [
        {id: 1, name: 'User 1', favorites: ['apple', 'banana', 'skirt']},
        {id: 2, name: 'User 2', favorites: ['apple', 'banana']},
        {id: 3, name: 'User 3', favorites: ['apple']},
        {id: 4, name: 'User 4', favorites: ['apple', 'banana', 'skirt']},
        {id: 5, name: 'User 5', favorites: ['banana', 'skirt']},
        {id: 6, name: 'User 6', favorites: ['skirt']}
      ]
    }
  }
}
</script>

<template>
  <!--
    8. Реалізуйте компонент, що виводить список об'єктів, де кожен об'єкт має
    вкладений список. Використовуйте вкладені v-for для виведення елементів вкладеного списку.
  -->
  <section>
    <div class="users">
      <article v-for="user in users" :key="user.id" :data-user-id="user.id">
        <p>
          Ім'я: {{ user.name }}
          Улюблене:
          <!--
            10. Виведіть список елементів, використовуючи v-for,
            і додайте умову v-if для фільтрації елементів.
          -->
          <template v-for="favorite in user.favorites">
            <span v-if="favorite.length < 6">
              {{ favorite }}&nbsp;
            </span>
          </template>
        </p>
      </article>
    </div>
  </section>
</template>