<template>
    <div class="Habbo-User-Count" :class="[userCount === 0 ? '' : userCount > maxUser / 2 ? userCount > maxUser - 2 ? 'Habbo-User-Count--red' : 'Habbo-User-Count--orange' : 'Habbo-User-Count--green']">
        <div class="Habbo-User-Count__Icon" :style="{ left: userCount >= 10 ? '6px' : '' }">
        </div>
        <div class="Habbo-User-Count__Counter">
            {{ userCount }}
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        props: {
            userCount: Number,
            maxUser: Number
        }
    });
</script>

<style scoped>
    .Habbo-User-Count {
        width: 40px;
        height: 18px;
        border-radius: 4px;
        background-color: #CAC9C0;
        position: relative;
    }
    .Habbo-User-Count__Icon {
        width: 7px;
        height: 8px;
        top: 5px;
        left: 9px;
        position: absolute;
        background-image: url(../../../assets/images/navigator/icons/user_count.png);
    }
    .Habbo-User-Count__Counter {
        position: absolute;
        transform: translateX(50%);
        right: 15px;
        color: white;
        font-family: UbuntuBold;
        font-size: 9.2pt;
        text-align: center;
    }
    .Habbo-User-Count--green {
        background-color: #62B061;
    }
    .Habbo-User-Count--orange {
        background-color:  #FFB01A;
    }
    .Habbo-User-Count--red {
        background-color:  #AE232D;
    }
</style>