<script>
import WeatherNow from "@/components/WeatherNow.vue";
import FormInput from "@/components/FormInput.vue";

export default {
  name: 'App',
  components: {
    WeatherNow,
    FormInput
  },
  data() {
    return {
      componentName: 'GlobalMessage'
    }
  }
}
</script>

<template>
  <!--6. Створіть декілька компонентів і динамічно переключайте між ними за допомогою v-if, в залежності від вибору користувача (наприклад, використовуючи радіокнопки або випадаючий список).-->
  <main>
    <h2>
      Компонент: {{ componentName }}
    </h2>
    <select v-model="componentName" name="Component">
      <option value="GlobalMessage">
        GlobalMessage
      </option>
      <option value="WeatherNow">
        WeatherNow
      </option>
      <option value="FormInput">
        FormInput
      </option>
    </select>
    <!--3. Створіть нові компоненти та зареєструйте іх локально і глобально (хоча б один компонент).-->
    <!--4. Створіть компонент, який відображає два різних повідомлення на основі булевої змінної. Переключайте змінну для перевірки умовного виведення обох повідомлень.-->
    <GlobalMessage v-if="componentName === 'GlobalMessage'"/>
    <!--2. Додайте за допомогою пакетного менеджеру бібліотеку Axios до проєкту. Сформуйте в окремому файлі инстанс Axios, сконфігуруйте його та імпортуйте за потребою.-->
    <!--5. Створіть два елементи, один з v-show, інший з v-if, з однаковими умовами. Змініть умову і спостерігайте за відмінностями у DOM. Дослідіть, в яких ситуаціях краще використовувати кожну директиву.-->
    <WeatherNow v-if="componentName === 'WeatherNow'"/>
    <!--7. Використовуючи v-bind, динамічно додавайте або видаляйте атрибути елемента (наприклад, disabled, readonly) в залежності від умови.-->
    <FormInput v-if="componentName === 'FormInput'"/>
  </main>
</template>
