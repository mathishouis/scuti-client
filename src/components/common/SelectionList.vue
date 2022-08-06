<template>
    <div class="Habbo-Selection-List" :class="[visible ? 'Habbo-Selection-List--active' : '']" :style="{ width: width }" v-click-outside="close">
        <div class="Habbo-Selection-List__Arrow" v-if="!visible" @click="toggle">
        </div>
        <div class="Habbo-Selection-List__Selected-Item" v-if="!visible" @click="toggle">
            {{ getSelectedItem().name }}
        </div>
        <div class="Habbo-Selection-List__Item-List" v-if="visible">
            <div class="Habbo-Selection-List__Item" :class="[item.selected ? 'Habbo-Selection-List__Item--active' : '']" v-for="item in itemList" v-bind:key="item.value" @click="setSelectedItem(item)">
                {{ item.name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        props: {
            width: Number,
            items: Object,
        },

        emits: ['update:value', 'change'],

        data() {
            return {
                visible: false,
                itemList: this.items
            }
        },

        methods: {
            focus() {
                this.$refs.input.focus();
            },
            toggle() {
                this.visible = !this.visible;
            },
            close() {
                this.visible = false;
            },
            getSelectedItem() {
                return this.itemList.filter((item) => item.selected)[0];
            },
            setSelectedItem(selectedItem) {
                this.close();
                this.itemList.forEach((item) => {
                    if(item.value !== selectedItem.value) return item.selected = false;
                    this.$emit('update:value', item.value);
                    this.$emit('change');
                    return item.selected = true;
                });
            }
        }
    })
</script>

<style scoped>
    .Habbo-Selection-List {
        border-image: url(../../assets/images/select_menu.png) 2 2 2 2 fill;
        border-top: 2px solid transparent;
        border-left: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-right: 2px solid transparent;
        /*height: 20px;*/
        position: relative;
        cursor: pointer;
        z-index: 1;
    }
    .Habbo-Selection-List--active {
        height: auto;
    }
    .Habbo-Selection-List .Habbo-Selection-List__Arrow {
        width: 14px;
        height: 16px;
        background-image: url(../../assets/images/select_menu_arrow.png);
        top: 0px;
        right: 5px;
        position: absolute;
    }
    .Habbo-Selection-List .Habbo-Selection-List__Selected-Item {
        font-family: Goldfish;
        font-size: 9px;
        color: #000000;
        position: absolute;
        left: 4px;
        padding-left: 7px;
        padding-right: 7px;
        padding-top: 3px;
        padding-bottom: 2px;
        width: calc(100% - 22px);
        white-space: nowrap;
    }
    .Habbo-Selection-List .Habbo-Selection-List__Item-List {
        width: calc(100% + 4px);
        padding-left: 4px;
        padding-right: 4px;
        /*margin-top: 16px;*/
        display: flex;
        flex-direction: column;
        left: -2px;
        background-color: green;
        position: absolute;
        padding-top: 2px;
        padding-bottom: 2px;
        border-image: url(../../assets/images/select_menu.png) 2 2 3 2 fill;
        border-left: 2px solid transparent;
        border-bottom: 3px solid transparent;
        border-right: 2px solid transparent;
    }
    .Habbo-Selection-List .Habbo-Selection-List__Item-List .Habbo-Selection-List__Item {
        font-family: Goldfish;
        font-size: 9px;
        color: #000000;
        padding-left: 7px;
        padding-right: 7px;
        padding-top: 1px;
        padding-bottom: 2px;
        width: 100%;
    }
    .Habbo-Selection-List .Habbo-Selection-List__Item-List .Habbo-Selection-List__Item:hover {
        background-color: #D9D9D9;
    }
    .Habbo-Selection-List .Habbo-Selection-List__Item-List .Habbo-Selection-List__Item--active {
        background-color: #F2F2F2;
    }

</style>
