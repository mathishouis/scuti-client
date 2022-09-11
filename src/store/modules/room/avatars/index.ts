import { isProxy, toRaw } from 'vue';

export default {
    namespaced: true,

    state: {
        avatars: []
    },

    mutations: {
        addAvatar: (state, payload): void => {
            state.avatars.push(payload);
        },
        removeAvatar: (state, id): void => {
            state.avatars = state.avatars.filter(avatar => avatar.id !== id);
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