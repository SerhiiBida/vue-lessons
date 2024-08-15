<script>
import Click from '@/components/Click.vue';
import Products from '@/components/Products.vue';
import Counter from '@/components/Counter.vue';
import Locomotive from '@/components/Locomotive.vue';
import ChangeTheme from '@/components/ChangeTheme.vue';
import CreateTable from '@/components/CreateTable.vue';
import Users from '@/components/Users.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'App',
  components: {
    Pagination,
    Users,
    CreateTable,
    ChangeTheme,
    Locomotive,
    Counter,
    Products,
    Click
  },
}
</script>

<template>
  <main>
    <!--Task 6-->
    <ChangeTheme/>
    <!--Task 1-->
    <Click/>
    <!--Tasks 2, 4-->
    <Products/>
    <!--Task 3-->
    <Counter/>
    <!--Task 7-->
    <CreateTable/>
    <!--Task 8, 10-->
    <Users/>
    <!--Task 9-->
    <Pagination/>
  </main>
  <footer>
    <!--Task 5-->
    <Locomotive/>
  </footer>
</template>