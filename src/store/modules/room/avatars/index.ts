export default {
    namespaced: true,

    state: {
        avatars: []
    },

    mutations: {
        addAvatar: (state, payload): void => {
            state.avatars.push(payload);
        }
    },

    getters: {
        getAvatars: (state): {}[] => {
            return state.avatars;
        },
        getAvatar: (state) => (id): {} => {
            return state.avatars.find(avatar => avatar.id === id);
        }
    },

    actions: {}
}