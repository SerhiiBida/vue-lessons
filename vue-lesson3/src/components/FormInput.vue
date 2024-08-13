<script>
export default {
  name: "FormInput",
  data() {
    return {
      gender: '',
      isDisabledMale: true,
      isDisabledFemale: true,
      clothes: []
    }
  },
  methods: {
    getChoices() {
      if (this.gender === 'male') {
        this.isDisabledMale = false;
        this.isDisabledFemale = true;
      } else {
        this.isDisabledFemale = false;
        this.isDisabledMale = true;
      }

      this.clothes = [];
    }
  }
}
</script>

<template>
  <section>
    <div>
      <h3>
        Ваша стать
      </h3>
      <label for="male">
        Чоловік
      </label>
      <input v-model="gender" type="radio" name="gender" id="male" value="male" @click="getChoices">
      <label for="female">
        Жінка
      </label>
      <input v-model="gender" type="radio" name="gender" id="female" value="female" @click="getChoices">
    </div>
    <div>
      <label for="skirt">
        Спідниця
      </label>
      <input type="checkbox" name="skirt" id="skirt" value="Спідниця" v-model="clothes"
             v-bind="{disabled: isDisabledFemale}">
      <label for="dress">
        Сукня
      </label>
      <input type="checkbox" name="dress" id="dress" value="Сукня" v-model="clothes"
             v-bind="{disabled: isDisabledFemale}">
      <label for="trousers">
        Штани
      </label>
      <input type="checkbox" name="trousers" id="trousers" value="Штани" v-model="clothes"
             v-bind="{disabled: isDisabledMale}">
      <label for="shirt">
        Сорочка
      </label>
      <input type="checkbox" name="shirt" id="shirt" value="Сорочка" v-model="clothes"
             v-bind="{disabled: isDisabledMale}">
    </div>
  </section>
</template>