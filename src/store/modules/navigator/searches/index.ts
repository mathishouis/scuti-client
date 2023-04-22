import { SavedSearch } from "@/interfaces/Navigator.interface";

export interface NavigatorSearchesState {
  searches: SavedSearch[];
}

export default {
  namespaced: true,
  state: {
    searches: [],
  },
  getters: {
    searches: (state: NavigatorSearchesState): SavedSearch[] => {
      return state.searches;
    },
  },
  mutations: {
    add: (state: NavigatorSearchesState, search: SavedSearch): void => {
      state.searches.push(search);
    },
    clear: (state: NavigatorSearchesState): void => {
      state.searches = [];
    },
  },
  actions: {},
  modules: {},
};
