<template>
    <game v-show="$store.getters.getLoadState === LoadState.LOADED"></game>
    <loading v-if="$store.getters.getLoadState !== LoadState.LOADED"></loading>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import {Client} from "./websockets/Client";
    import {SSOTicketMessageComposer} from "./websockets/messages/outgoing/handshake/SSOTicketMessageComposer";
    import {Scuti, Room, Event} from 'scuti-renderer';
    import {LoadState} from "./enums/LoadState";

    export default defineComponent({
        data() {
            return {
                client: undefined,
                LoadState: LoadState
            }
        },
        async mounted(): void {
            console.log(this.$store);
            console.log(this.$store.getters);
            this.$store.commit('setClient', new Scuti({
                canvas: document.getElementById("Habbo-Renderer"),
                width: window.innerWidth,
                height: window.innerHeight,
                resources: "https://scuti-resources.netlify.app/",
                background: 0x000000
            }));
            this.$store.getters.getClient.onEvent = (event: Event) => {
                switch (event) {
                    case Event.RESOURCE_MANAGER_LOADED:
                        this.$store.commit('setLoadState', LoadState.RESOURCE_MANAGER);
                        break;
                    case Event.MATERIAL_MANAGER_LOADED:
                        this.$store.commit('setLoadState', LoadState.MATERIAL_MANAGER);
                        break;
                    case Event.EVENT_MANAGER_LOADED:
                        this.$store.commit('setLoadState', LoadState.EVENT_MANAGER);
                        break;
                    case Event.FURNITURE_MANAGER_LOADED:
                        this.$store.commit('setLoadState', LoadState.FURNITURE_MANAGER);
                        break;
                    case Event.AVATAR_MANAGER_LOADED:
                        this.$store.commit('setLoadState', LoadState.AVATAR_MANAGER);
                        break;
                    case Event.RENDERER_MANAGER_LOADED:
                        this.$store.commit('setLoadState', LoadState.RENDERER_FINISHED);
                        break;
                }
            }
            await this.$store.getters.getClient.initialise();
            this.$store.commit('setWebsocket', new Client(false, '127.0.0.1', 30001));
            this.$store.getters.getWebsocket.onConnect = () => {
                this.$store.commit('setLoadState', LoadState.NETWORK_ESTABLISHED);
                this.$store.commit('setLoadState', LoadState.LOADED);
                let packet = new SSOTicketMessageComposer(this.$store.getters.getWebsocket.connection);
                packet.writeString("auth38383838");
                packet.compose();
            }
            this.$store.getters.getWebsocket.connect();
        },
    });
</script>

<style scoped>

</style>