import Categories from './categories';
import Searches from './searches';
import Views from './views';

export default {
    namespaced: true,

    modules: {
        Categories,
        Searches,
        Views
    },

    state: {
        visible: false,
        loading: false
    },

    mutations: {
        setVisible: (state, visible): void => {
            state.visible = visible;
        },
        setLoading: (state, loading): void => {
            state.loading = loading;
        }
    },

    getters: {
        isVisible: (state): boolean => {
            return state.visible;
        },
        isLoading: (state): boolean => {
            return state.loading;
        }
    },

    actions: {

    }
}