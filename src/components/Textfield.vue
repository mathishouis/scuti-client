<template>
    <div class="Habbo-Textfield" :style="{ width: width - 12 + 'px' }">
        <div class="Habbo-Textfield__Input-Focus-Button" @click="focus">
        </div>
        <input class="Habbo-Textfield__Input" :placeholder="placeholder" type="text" @input="input($event.target.value)" ref="input">
    </div>
</template>

<style scoped>
    .Habbo-Textfield {
        border-image: url(./../../static/images/border_2.png) 6 6 6 6 fill;
        border-top: 6px solid transparent;
        border-left: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 6px solid transparent;
        height: 12px;
        position: relative;
    }
    .Habbo-Textfield__Input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: #000000;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
        margin-top: -6px;
        margin-left: -6px;
        width: calc(100% - 22px);
        position: absolute;
        border: none;
        font-size: 9.4pt;
        background-color: transparent;
        padding-left: 9px;
        padding-right: 0px;
        font-family: "Ubuntu Light";
        padding-top: 4px;
        padding-bottom: 7px;
    }
    .Habbo-Textfield__Input::placeholder {
        color: #A5A5A5;
        opacity: 1;
        font-style: italic;
    }
    .Habbo-Textfield__Input:-ms-input-placeholder {
        color: #A5A5A5;
        font-style: italic;
    }
    .Habbo-Textfield__Input::-ms-input-placeholder {
        color: #A5A5A5;
        font-style: italic;
    }
    .Habbo-Textfield__Input:focus {
        outline: none;
    }
    .Habbo-Textfield__Input::selection {
        color: #000000;
        background-color: #B5D5FF;
    }
    .Habbo-Textfield__Input-Focus-Button {
        width: 17px;
        height: 18px;
        background-image: url(./../../static/images/textfield_focus_button.png);
        cursor: pointer;
        right: -4px;
        top: -1px;
        position: absolute;
    }

</style>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        props: {
            placeholder: String,
            width: Number
        },

        emits: ['update:value', 'change'],


        methods: {
            focus() {
                this.$refs.input.focus();
            },
            input(value) {
                this.$emit('update:value', value);
            }
        }
    })
</script>
