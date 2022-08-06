<template>
    <div class="Habbo-Scrollbox" :style="{ width: width, height: height }">
        <div class="Habbo-Scrollbox__Up-Button" :class="[disabled ? 'Habbo-Scrollbox__Up-Button--disabled' : '']" @click="up">
        </div>
        <div class="Habbo-Scrollbox__Rail" :class="[disabled ? 'Habbo-Scrollbox__Rail--disabled' : '']" @click="toggle($event)">
        </div>
        <div class="Habbo-Scrollbox__Down-Button" :class="[disabled ? 'Habbo-Scrollbox__Down-Button--disabled' : '']" @click="down">
        </div>
        <scrollbar :style="{ width: width, height: height }" ref="scrollbox">
            <div ref="content">
                <slot/>
            </div>
        </scrollbar>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        props: {
            width: String,
            height: String
        },
        data() {
            return {
                disabled: false,
                observer: null,
            }
        },
        mounted(): void {
            this.observer = new MutationObserver(function(mutations) {
                if(this.$refs.content.offsetHeight < Number(this.height.replaceAll('px', '').replaceAll('%', ''))) {
                    this.disabled = true;
                } else {
                    this.disabled = false;
                }
            }.bind(this));
            this.observer.observe(this.$refs.content, { attributes: true, childList: true, characterData: true, subtree: true });
        },
        methods: {
            up(): void {
                this.$refs.scrollbox.scrollEl.scrollTo({ top: this.$refs.scrollbox.scrollEl.scrollTop - 54 });
            },
            down(): void {
                this.$refs.scrollbox.scrollEl.scrollTo({ top: this.$refs.scrollbox.scrollEl.scrollTop + 54 });
            },
            toggle(event): void {
                if(event.target.offsetHeight - event.layerY > event.target.offsetHeight / 2) {
                    this.$refs.scrollbox.scrollEl.scrollTo({ top: 0 });
                } else {
                    this.$refs.scrollbox.scrollEl.scrollTo({ top: 10000 });
                }
            },
        }
    });
</script>

<style scoped>
    .Habbo-Scrollbox {
        position: relative;
    }
    .Habbo-Scrollbox__Up-Button {
        width: 17px;
        height: 16px;
        background-image: url(../../assets/images/scrollbar_button_up.png);
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }
    .Habbo-Scrollbox__Up-Button--disabled {
        background-position: 0 -16px;
        cursor: default !important;
    }
    .Habbo-Scrollbox__Up-Button--disabled:hover {
        background-position: 0 -16px !important;
    }
    .Habbo-Scrollbox__Up-Button--disabled:active {
        background-position: 0 -16px !important;
    }
    .Habbo-Scrollbox__Up-Button:hover {
        background-position: 0 -32px;
    }
    .Habbo-Scrollbox__Up-Button:active {
        background-position: 0 -48px;
    }
    .Habbo-Scrollbox__Down-Button {
        width: 17px;
        height: 16px;
        background-image: url(../../assets/images/scrollbar_button_down.png);
        position: absolute;
        bottom: 0;
        right: 0;
        cursor: pointer;
    }
    .Habbo-Scrollbox__Down-Button--disabled {
        background-position: 0 -16px;
        cursor: default !important;
    }
    .Habbo-Scrollbox__Down-Button--disabled:hover {
        background-position: 0 -16px !important;
    }
    .Habbo-Scrollbox__Down-Button--disabled:active {
        background-position: 0 -16px !important;
    }
    .Habbo-Scrollbox__Down-Button:hover {
        background-position: 0 -32px;
    }
    .Habbo-Scrollbox__Down-Button:active {
        background-position: 0 -48px;
    }
    .Habbo-Scrollbox__Rail {
        width: 17px;
        height: calc(100% - 32px);
        top: 16px;
        background-image: url(../../assets/images/scrollbar_rail.png);
        background-position: -17px 0;
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .Habbo-Scrollbox__Rail--disabled {
        width: 17px;
        height: calc(100% - 32px);
        top: 16px;
        background-image: url(../../assets/images/scrollbar_rail.png);
        background-position: 0 0;
        position: absolute;
        bottom: 0;
        right: 0;
    }

</style>