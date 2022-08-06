<template>
    <div class="Habbo-Tabs__Container">
        <div class="Habbo-Tabs">
            <div class="Habbo-Tabs__Tab-Container" :class="[selectedTabIndex === index ? 'Habbo-Tabs__Tab-Container--active' : '', large ? 'Habbo-Tabs__Large' : '']" v-for="(tab, index) in tabs" :key="tab.id" @click="setSelected(index)">
                <div v-if="tab.tooltip">
                    <tooltip :tooltip="tab.tooltip">
                        <span>{{ tab.title }}</span>
                    </tooltip>
                </div>
                <div v-else>
                    <span>{{ tab.title }}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="Habbo-Tabs__Content">
        <div class="Habbo-Tabs__Slot" v-for="(tab, index) in tabs" :key="tab.id" v-show="selectedTabIndex === index">
            <slot :name="tab.slot"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({
        emits: ['change'],
        props: {
            tabs: Object,
            selectedTab: Number,
            large: Boolean,
        },
        data() {
            return {
                selectedTabIndex: this.selectedTab,
            }
        },
        methods: {
            setSelected(selectedTabIndex) {
                this.selectedTabIndex = selectedTabIndex;
                this.$emit('change', this.tabs[selectedTabIndex].id);
                this.$emit('update:selectedTab', selectedTabIndex)
            }
        },
        watch: {
            selectedTab: {
                handler(newVal, oldVal) {
                    this.selectedTabIndex = newVal;
                },
                deep: true
            }
        }
    })
</script>

<style scoped>
    .Habbo-Tabs__Container {
        width: 100%;
        padding-left: 8px;
        padding-right: 8px;
        height: 30px;
        border-bottom: 1px solid #000000;
        position: relative;
    }
    .Habbo-Tabs__Container:before {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        bottom: -2px;
        background-color: #FFFFFF;
        left: 0;
    }

    .Habbo-Tabs__Container .Habbo-Tabs {
        display: flex;
        flex-direction: row;
        position: relative;
    }
    .Habbo-Tabs .Habbo-Tabs__Tab-Container.Habbo-Tabs__Large {
        width: 100%;
        text-wrap: none;
        padding: 13px 11px 9px;
        white-space: nowrap;
    }
    .Habbo-Tabs .Habbo-Tabs__Tab-Container {
        font-weight: 300;
        color: #050505;
        position: relative;
        cursor: pointer;
        border-image: url(./../assets/images/tab.png);
        border-image-slice: 7 7 7 7 fill;
        border-image-width: 7px 7px 7px 7px;
        border-image-outset: 0 0 0 0;
        border-image-repeat: repeat repeat;
        margin-bottom: -2px;
        font-family: Ubuntu;
        font-size: 9.5pt;
        padding: 11px 13px 12px;
        line-height: 9px;
        text-align: center;
    }
    .Habbo-Tabs .Habbo-Tabs__Tab-Container.Habbo-Tabs__Tab-Container--active {
        border-image: url(./../assets/images/tab_active.png);
        border-image-slice: 7 7 7 7 fill;
        border-image-width: 7px 7px 7px 7px;
        border-image-outset: 0 0 0 0;
        border-image-repeat: repeat repeat;
    }
    .Habbo-Tabs .Habbo-Tabs__Tab-Container.Habbo-Tabs__Tab-Container--active:hover {
        border-image: url(./../assets/images/tab_active.png);
        border-image-slice: 7 7 7 7 fill;
        border-image-width: 7px 7px 7px 7px;
        border-image-outset: 0 0 0 0;
        border-image-repeat: repeat repeat;
    }
    .Habbo-Tabs .Habbo-Tabs__Tab-Container:hover {
        border-image: url(./../assets/images/tab_hover.png);
        border-image-slice: 7 7 7 7 fill;
        border-image-width: 7px 7px 7px 7px;
        border-image-outset: 0 0 0 0;
        border-image-repeat: repeat repeat;
    }
    .Habbo-Tabs__Content {
        width: 100%;
    }
    .Habbo-Tabs__Content .Habbo-Tabs__Slot {
        width: 100%;
    }
</style>
