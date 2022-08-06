import {store} from "../store";

export const navigator = {
    state: {
        selectedTab: 'hotel_view',
        tabs: [],
        loading: false,
        savedSearches: [],
    },
    mutations: {
        addRoom(state: {}, payload: {
            id: string,
            name: string,
            ownerId: number,
            ownerName: string,
            skipAuth: number,
            userCount: number,
            maxUsers: number,
            description: string,
            trade: number,
            score: number,
            categoryId: number,
            tags: object,
            tabName: string,
            categoryTabId: number
        }): void {
            state.tabs.find((tab) => tab.name === payload.tabName).categories.find((category) => category.id === payload.categoryTabId).rooms.push({
                "id": payload.id,
                "name": payload.name,
                "ownerId": payload.ownerId,
                "ownerName": payload.ownerName,
                "skipAuth": payload.skipAuth,
                "userCount": payload.userCount,
                "maxUsers": payload.maxUsers,
                "description": payload.description,
                "trade": payload.trade,
                "score": payload.score,
                "categoryId": payload.categoryId,
                "tags": payload.tags,
            })
        },
        addCategory(state: {}, payload: {
            id: number,
            name: string,
            rank: number,
            minimised: boolean,
            view: number,
            tabName: string
        }): void {
            state.tabs.find((tab) => tab.name === payload.tabName).categories.push({
                "id": payload.id,
                "name": payload.name,
                "rank": payload.rank,
                "minimised": payload.minimised,
                "view": payload.view,
                "rooms": [],
            });
        },
        clearCategories(state: {}, name: string): void {
            let tab = state.tabs.find((tab) => tab.name === name);
            if(tab) {
                state.tabs.find((tab) => tab.name === name).name = name;
                state.tabs.find((tab) => tab.name === name).header = tab.header;
                state.tabs.find((tab) => tab.name === name).categories = [];
            } else {
                state.tabs.push({
                    name: name,
                    header: false,
                    categories: []
                });
            }
        },
        addTab(state: {}, props: { name: string, header: boolean }): void {
            state.tabs.push({
                name: props.name,
                header: props.header,
                categories: []
            });
        },
        clearSavedSearched(state: {}): void {
            state.savedSearches = [];
        },
        setLoading(state: {}, loading: boolean): void {
            if(loading) {
                store.commit('setTitle', { name: 'navigator', title: 'Navigateur - Chargement...' });
            } else {
                store.commit('setTitle', { name: 'navigator', title: 'Navigateur' });
            }
            state.loading = loading;
        },
        setSelectedTab(state: {}, tab: string): void {
            state.selectedTab = tab;
        },
        addSavedSearch(state: {}, payload: {
            id: number,
            view: string,
            searchQuery: string,
        }): void {
            state.savedSearches.push({
                'id': payload.id,
                'view': payload.view,
                'searchQuery': payload.searchQuery
            })
        },
        setCategoryViewMode: (state: {}, props: {tab: string, category: string, view: number}) => {
            state.tabs.find((filterTab) => filterTab.name === props.tab).categories.find((filterCategory) => filterCategory.id === props.category).view = props.view;
        }
    },
    getters: {
        getTabs: (state: {}): [] => {
            return state.tabs;
        },
        getSelectedTab: (state: {}): [] => {
            return state.selectedTab;
        },
        getLoading: (state: {}): [] => {
            return state.loading;
        },
        getSavedSearches: (state: {}): [] => {
            return state.savedSearches;
        },
        getCategoryViewMode: (state: {})  =>  (props: {tab: string, category: string}): number => {
            let filterCategory = state.tabs.find((filterTab) => filterTab.name === props.tab).categories.find((filterCategory) => filterCategory.id === props.category);
            return filterCategory ? filterCategory.view : 0;
        }
    }
}