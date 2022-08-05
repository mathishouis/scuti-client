<template>
    <game></game>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import {Client} from "./websockets/Client";
    import {SSOTicketMessageComposer} from "./websockets/messages/outgoing/handshake/SSOTicketMessageComposer";

    export default defineComponent({
        data() {
            return {
                client: undefined
            }
        },
        mounted(): void {
            this.client = new Client(false, '127.0.0.1', 30001);
            this.client.onConnect = () => {
                console.log("connected");
                let packet = new SSOTicketMessageComposer(this.client.connection);
                packet.writeString("authticket696969");
                packet.compose();
            }
            this.client.connect();
        }
    });
</script>

<style scoped>

</style>