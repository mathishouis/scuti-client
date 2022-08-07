export default {
    namespaced: true,

    state: {
        searches: []
    },

    mutations: {
        addSearch: (state, payload): void => {
            state.searches.push(payload);
        },
        clearSearches: (state): void => {
            state.searches = [];
        }
    },

    getters: {
        getSearches: (state): {} => {
            return state.searches
        }
    },

    actions: {}
}