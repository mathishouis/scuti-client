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
        }
    },

    getters: {
        getFloorItems: (state): {}[] => {
            return state.floorItems;
        },
        getFloorItem: (state) => (id): {} => {
            return state.floorItems.find(avatar => avatar.id === id);
        },
        getWallItems: (state): {}[] => {
            return state.wallItems;
        },
        getWallItem: (state) => (id): {} => {
            return state.wallItems.find(avatar => avatar.id === id);
        }
    },

    actions: {}
}