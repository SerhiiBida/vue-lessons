// 6. Створіть базовий міксін, який додає декілька методів або даних у компонент.
// 9. Розробіть міксін, який додає валідацію для форми в компоненті.
export const formInputTextMixin = {
    data() {
        return {
            inputText: {
                placeholder: "Enter text...",
                maxLength: 40,
                text: "",
                errorStyles: {
                    color: "red"
                },
                error: ""
            }
        }
    },
    methods: {
        clearErrors() {
            this.inputText.error = "";
        },
        textValidation() {
            this.inputText.text = this.inputText.text.trim();

            if (!this.inputText.text) {
                this.inputText.error = "Поле не може бути пустим";

                return false;
            }

            return true;
        },
        updateText() {
            this.clearErrors();

            if (this.textValidation()) {
                this.$emit("update:modelValue", this.inputText.text);

                this.inputText.text = "";
            }
        }
    }
}