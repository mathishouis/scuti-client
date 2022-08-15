import { isProxy, toRaw } from 'vue';

export default {
    namespaced: true,

    state: {
        selectedItem: undefined
    },

    mutations: {
        setSelectedItem: (state, payload): void => {
            state.selectedItem = payload;
        }
    },

    getters: {
        getSelectedItem: (state): {} => {
            return state.selectedItem;
        }
    },

    actions: {}
}