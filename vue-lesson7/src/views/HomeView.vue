<script>
import HelloUser from "@/components/HelloUser.vue";
import Message from "@/components/Message.vue";
import NewMessage from "@/components/NewMessage.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import AddText from "@/components/AddText.vue";

export default {
  name: "HomeView",
  components: {
    AddText,
    ModalWindow,
    NewMessage,
    Message,
    HelloUser
  },
  data() {
    return {
      isShow: false,
      newText: ""
    }
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
      <p>
        26.08.2024
      </p>
    </Message>
    <!--
      3. Створіть компонент з слотами, які мають фолбек контент,
      що відображається, якщо немає переданого контенту.
    -->
    <Message/>
    <!--
      4. Реалізуйте компонент, який передає дані назад у батьківський компонент
      через scoped slot.
    -->
    <Message v-slot="slotProps">
      Old date: {{ slotProps.dateOld }}
    </Message>
    <NewMessage>
      <template #text="textProps">
        Old text: {{ textProps.message }}
      </template>

      <template #default="defaultProps">
        Old date: {{ defaultProps.dateOld }}
      </template>
    </NewMessage>
    <!--
      5. Стовріть слот для модального вікна за допомогою которого можно
      будет встановлювати контент для хедера, футера та тіла.
    -->
    <ModalWindow v-model="isShow">
      <template #title>
        Information
      </template>
      <template #body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cumque dolores facilis, ipsum maiores nostrum
        provident similique veritatis.
      </template>
      <template #footer>
        <button>
          OK
        </button>
      </template>
    </ModalWindow>
    <!--6. Створіть базовий міксін, який додає декілька методів або даних у компонент.-->
    <p>
      {{ newText }}
    </p>
    <AddText v-model="newText"/>
  </section>
</template>