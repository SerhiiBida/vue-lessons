<script>
export default {
  name: "Posts",
  data(){
    return {
      title: 'JSON',
      data: null,
      posts: [
        {id: 1, name: 'Пост 1', views: 123},
        {id: 2, name: 'Пост 2', views: 56},
        {id: 3, name: 'Пост 3', views: 78},
        {id: 4, name: 'Пост 4', views: 81},
      ]
    }
  },
  methods: {
    async getData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

      this.data = await response.json();
    }
  },
  computed: {
    // 9. Створіть computed property, яке комбінує дані відповіді від HTTP запиту та з рекативною змінною.
    dataOutput() {
      const result = this.data ? JSON.stringify(this.data) : 'Чекаємо...';

      return `${this.title}: ${result}`;
    },
    // 10. Створіть кілька computed properties, які залежать одне від одного.
    sumViews(){
      return this.posts.reduce((sum, post) => sum + post.views, 0);
    },
    averageAmountViews(){
      return this.sumViews / this.posts.length;
    }
  },
  mounted() {
    // Компонент Post примонтирован на страницу
    this.getData();
  }
}
</script>

<template>
  <section>
    <p>
      {{ dataOutput }}
    </p>
    <div class="posts">
      <article v-for="post in posts" :key="post.id" :data-post-id="post.id">
        <p>
          {{ post.name }} - {{ post.views }}
        </p>
      </article>
    </div>
    <p>
      Всього переглядів: {{ sumViews }}
    </p>
    <p>
      Середнє значення переглядів: {{ averageAmountViews }}
    </p>
  </section>
</template>