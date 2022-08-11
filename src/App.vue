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
    import {UniqueIdMessageComposer} from "./websockets/messages/outgoing/handshake/UniqueIdMessageComposer";
    import {store} from "./store";
    import {WalkMessageComposer} from "./websockets/messages/outgoing/room/action/WalkMessageComposer";

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
            this.$store.commit('Room/Renderer/setRenderer', new Scuti({
                canvas: document.getElementById("Habbo-Renderer"),
                width: window.innerWidth,
                height: window.innerHeight,
                resources: "http://localhost:8081/",
                background: 0x000000
            }));
            this.$store.getters['Room/Renderer/getRenderer'].onEvent = (event: Event) => {
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
            await this.$store.getters['Room/Renderer/getRenderer'].initialise();
            let room = new Room(store.getters['Room/Renderer/getRenderer'], {
                tilemap: "00", floorMaterial: 111, wallMaterial: 201
            });
            this.$store.commit('Room/Renderer/setRoom', room);
            this.$store.commit('setWebsocket', new Client(false, '127.0.0.1', 30001));
            this.$store.getters.getWebsocket.onConnect = () => {
                this.$store.commit('setLoadState', LoadState.NETWORK_ESTABLISHED);
                this.$store.commit('setLoadState', LoadState.LOADED);
                this.$store.getters.getWebsocket.sendMessageComposer(new SSOTicketMessageComposer("auth38383838"));
                this.$store.getters.getWebsocket.sendMessageComposer(new UniqueIdMessageComposer());
                this.$store.getters['Room/Renderer/getRoom'].tileClick = (x, y, z) => {
                    this.$store.getters.getWebsocket.sendMessageComposer(new WalkMessageComposer(x, y));
                }
            }
            this.$store.getters.getWebsocket.connect();
        },
    });
</script>

<style scoped>

</style>