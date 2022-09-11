

export default {
    namespaced: true,

    modules: {

    },

    state: {
        visible: false
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