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
            return state.floorItems;
        },
        getFloorItem: (state) => (id): {} => {
            return state.floorItems.find(floorItem => floorItem.id === id);
        },
        getWallItems: (state): {}[] => {
            return state.wallItems;
        },
        getWallItem: (state) => (id): {} => {
            return state.wallItems.find(wallItem => wallItem.id === id);
        }
    },

    actions: {}
}