<template>
    <div :class="'Habbo-Card__Card--' + id">
        <slot/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
       props: {
           id: Number
       }
    })
</script>

<style scoped>

    .Habbo-Card__Card--5 {
        border-image: url(../../assets/images/common/border_5.png) 8 8 8 8 fill;
        border-top: 8px solid transparent;
        border-left: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid transparent;
        position: relative;
    }

    .Habbo-Card__Card--5:before {
        content: "";
        position: absolute;
        width: 11px;
        height: 18px;
        background-image: url(../../assets/images/common/border_5_arrow.png);
        left: -16px;
        transform: translateY(-50%);
        top: 50%;
    }

    .Habbo-Card__Card--6 {
        border-image: url(../../assets/images/common/border_6.png) 6 6 6 6 fill;
        border-top: 6px solid transparent;
        border-left: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 6px solid transparent;
        position: relative;
    }

</style>
