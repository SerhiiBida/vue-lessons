<script>
export default {
  name: "AddProductForm",
  data() {
    return {
      name: "",
      price: "",
      isSell: false,
      nameError: "",
      priceError: ""
    }
  },
  methods: {
    clearErrors() {
      this.nameError = "";
      this.priceError = "";
    },
    nameValidation() {
      this.name = this.name.trim();

      if (!this.name) {
        this.nameError = "Поле не може бути пустим";

        return false;
      }

      return true;
    },
    priceValidation() {
      if (!this.price) {
        this.priceError = "Поле не може бути пустим";

        return false;
      }

      if (this.price <= 0) {
        this.priceError = "Ціна повинна бути більше 0";

        return false;
      }

      return true;
    },
    // 11. Реалізуйте розширену валідацію форми, використовуючи v-model
    // для управління станом форми і виведенням повідомлень про помилки.
    addProduct() {
      this.clearErrors();

      const checkName = this.nameValidation();
      const checkPrice = this.priceValidation();

      if (checkName && checkPrice) {
        this.$emit("addProduct", this.name, this.price, this.isSell);

        this.name = "";
        this.price = "";
        this.isSell = false;
      }
    }
  }
}
</script>

<template>
  <!--
    10. Реалізуйте компонент, який використовує v-model для налаштування
    власного введення даних.
  -->
  <!--
    12. Створіть форму з різними типами полів вводу (текст, число, чекбокс)
    і використайте v-model для двонаправленого зв'язування даних.
    Змініть значення моделі в коді і перевірте, чи змінилось значення в полі вводу,
    і навпаки.
  -->
  <section class="new-product">
    <form action="#" class="new-product-form" @submit.prevent="addProduct">
      <div class="new-product-fields">
        <div>
          <label for="name">
            Назва
          </label>
          <input v-model="name" type="text" name="name" id="name">
          <p class="errors">
            {{ nameError }}
          </p>
        </div>
        <div>
          <label for="price">
            Ціна
          </label>
          <input v-model="price" type="number" name="price" id="price">
          <p class="errors">
            {{ priceError }}
          </p>
        </div>
        <div>
          <label for="is-sell">
            Продається?
          </label>
          <input v-model="isSell" type="checkbox" name="is-sell" id="is-sell">
        </div>
      </div>
      <div>
        <button type="submit" @submit.prevent="addProduct">
          Додати
        </button>
      </div>
    </form>
  </section>
</template>