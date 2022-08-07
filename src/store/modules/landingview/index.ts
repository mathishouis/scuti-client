export default {
    namespaced: true,

    modules: {},

    state: {
        visible: true
    },

    mutations: {
        setVisible: (state, visible): void => {
            state.visible = visible;
        }
    },

    getters: {
        isVisible: (state): boolean => {
            return state.visible;
        }
    },

    actions: {

    }
}