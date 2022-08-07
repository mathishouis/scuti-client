export default {
    namespaced: true,

    state: {
        views: [],
        currentView: 'hotel_view'
    },

    mutations: {
        removeView: (state, view): void => {
            state.views = state.views.filter(fview => fview !== view);
        },
        addView: (state, payload): void => {
            state.views.push(payload);
        },
        clearViews: (state): void => {
            state.views = [];
        },
        setCurrentView: (state, view): void => {
            state.view = view
        }
    },

    getters: {
        getViews: (state): [] => {
            return state.views;
        },
        getCurrentView: (state): void => {
            return state.currentView;
        }
    },

    actions: {}
}