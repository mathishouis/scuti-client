import { isProxy, toRaw } from 'vue';

export default {
    namespaced: true,

    state: {
        floorItems: [],
        wallItems: []
    },

    mutations: {
        addFloorItem: (state, payload): void => {
            state.floorItems.push(payload);
        },
        addWallItem: (state, payload): void => {
            state.wallItems.push(payload);
        },
        removeFloorItem: (state, id): void => {
            state.floorItems = state.floorItems.filter(floorItem => floorItem.id !== id);
        },
        removeWallItem: (state, id): void => {
            state.wallItems = state.wallItems.filter(wallItem => wallItem.id !== id);
        }
    },

    getters: {
        getFloorItems: (state): {}[] => {
            return toRaw(state.floorItems);
        },
        getFloorItem: (state) => (id): {} => {
            return toRaw(state.floorItems.find(floorItem => floorItem.id === id));
        },
        getWallItems: (state): {}[] => {
            return toRaw(state.wallItems);
        },
        getWallItem: (state) => (id): {} => {
            return toRaw(state.wallItems.find(wallItem => wallItem.id === id));
        }
    },

    actions: {}
}