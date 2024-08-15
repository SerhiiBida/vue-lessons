<script>
export default {
  name: 'FormNewProduct',
  data() {
    return {
      name: '',
      price: ''
    }
  },
  methods: {
    clearErrors() {
      this.$refs.nameErrors.textContent = '';
      this.$refs.priceErrors.textContent = '';
    },
    errorOutput(element, text) {
      element.textContent = text;
    },
    nameValidation() {
      this.name = this.name.trim();

      if (!this.name) {
        this.errorOutput(
            this.$refs.nameErrors,
            'Поле не може бути пустим'
        );

        return false;
      }

      return true;
    },
    priceValidation() {
      if (!this.price) {
        this.errorOutput(
            this.$refs.priceErrors,
            'Поле не може бути пустим'
        );

        return false;
      }

      if (this.price <= 0) {
        this.errorOutput(
            this.$refs.priceErrors,
            'Ціна повинна бути більше 0'
        );

        return false;
      }

      return true;
    },
    addProduct() {
      this.clearErrors();

      const checkName = this.nameValidation();
      const checkPrice = this.priceValidation();

      if (checkName && checkPrice){
        this.$emit('addProduct', this.name, this.price);
        this.$emit('closeModal');

        this.name = '';
        this.price = '';
      }
    }
  }
}
</script>

<template>
  <!--
    2. Реалізуйте форму, де при submit ви використовуєте модіфікатор .prevent,
    і дані форми обробляються методом Vue інстанса,
    який також валідує їх на правильність введення перед відправкою.
  -->
  <section class="modal-background">
    <div class="modal-new-product">
      <div class="modal-new-product-header">
        <p>
          Додати товар
        </p>
        <button class="modal-new-product-close" @click="$emit('closeModal')">
          Close
        </button>
      </div>
      <div class="modal-new-product-body">
        <form action="#" @submit.prevent="addProduct">
          <div class="modal-new-product-fields">
            <div>
              <label for="name">
                Назва
              </label>
              <input v-model="name" type="text" name="name" id="name">
              <p ref="nameErrors" class="errors"></p>
            </div>
            <div>
              <label for="price">
                Ціна
              </label>
              <input v-model="price" type="number" name="price" id="price">
              <p ref="priceErrors" class="errors"></p>
            </div>
          </div>
          <div>
            <button type="submit" @submit.prevent="addProduct">
              Додати
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>