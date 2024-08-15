<script>
export default {
  name: 'CreateTable',
  data() {
    return {
      rows: 0,
      columns: 0,
      isTable: false
    }
  },
  methods: {
    clearTable() {
      this.isTable = false;
    },
    clearErrors(){
      this.$refs.tableErrors.textContent = '';
    },
    errorOutput(element, error){
      const li = document.createElement('li');

      li.textContent = error;

      element.append(li);
    },
    validationInputs(name, value){
      if (isNaN(value)) {
        this.errorOutput(
            this.$refs.tableErrors,
            `<< ${name} >> повинні бути числом;`
        );

        return false;
      }

      if (!Number.isInteger(value)) {
        this.errorOutput(
            this.$refs.tableErrors,
            `<< ${name} >> повинні бути цілим числом;`
        );

        return false;
      }

      if (value <= 0) {
        this.errorOutput(
            this.$refs.tableErrors,
            `<< ${name} >> не можуть дорівнювати і бути меншим за 0;`
        );

        return false;
      }

      return true;
    },
    createTable() {
      this.isTable = false;

      this.clearErrors();

      const checkRows = this.validationInputs('Рядки', this.rows);
      const checkColumns = this.validationInputs('Стовпці', this.columns);

      if (checkRows && checkColumns){
        this.isTable = true;
      }
    },
  }
}
</script>

<template>
  <!--
    7. За допомогою v-for, створіть таблицю, де кількість рядків і стовпців
    задається динамічно через інпут або інший елемент керування.
  -->
  <section>
    <div>
      <h3>
        Створення таблиці
      </h3>
      <form action="#" @submit.prevent="createTable">
        <label for="rows">
        Рядків:
       </label>
        <input v-model="rows" type="number" name="rows" id="rows" min="0" step="1" @input="clearTable">
        <label for="columns">
          Стовпців:
        </label>
        <input v-model="columns" type="number" name="" id="columns" min="0" step="1" @input="clearTable">
        <button type="submit">
          Створити
        </button>
        <ul ref="tableErrors" class="errors"></ul>
      </form>
      <table v-if="isTable" class="new-table">
        <tr>
          <th v-for="header in columns">
            Header {{ header }}
          </th>
        </tr>
        <tr v-for="row in rows">
          <td v-for="column in columns">
            {{ row }}{{ column }}
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>