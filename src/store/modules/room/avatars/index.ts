import { isProxy, toRaw } from 'vue';

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
            return toRaw(state.avatars);
        },
        getAvatar: (state) => (id): {} => {
            return toRaw(state.avatars.find(avatar => avatar.id === id));
        }
    },

    actions: {}
}