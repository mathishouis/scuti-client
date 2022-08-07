export default {
    namespaced: true,

    state: {
        categories: []
    },

    mutations: {
        removeCategory: (state, id): void => {
            state.categories = state.categories.filter(category => category.id !== id);
        },
        addCategory: (state, payload): void => {
            state.categories.push(payload);
        },
        clearCategories: (state): void => {
            state.categories = [];
        },
        setCategory: (state, payload): void => {
            const index: number = state.categories.findIndex(category => category.id === payload.id);
            state.categories[index] = payload.category;
        }
    },

    getters: {
        getCategories: (state): [] => {
            return state.categories;
        },
        getCategory: (state) => (id): {} => {
            return state.categories.find(category => category.id === id);
        }
},

    actions: {}
}