import Categories from "./categories";
import Tabs from "./tabs";
import Searches from "./searches";

export interface NavigatorState {
  loading: boolean;
  visible: boolean;
  savedSearchesToggled: boolean;
  maxFavouritesRooms: number;
  favouritesRooms: number[];
  currentTab: string;
  searchCategory: string;
  searchQuery: string;
  searching: boolean;
}

export default {
  namespaced: true,
  state: {
    loading: false,
    visible: true,
    savedSearchesToggled: false,
    maxFavouritesRooms: -1,
    favouritesRooms: [],
    currentTab: 0,
    searchCategory: "all",
    searchQuery: "",
    searching: false,
  },
  getters: {
    isVisible: (state: NavigatorState): boolean => {
      return state.visible;
    },
    isLoading: (state: NavigatorState): boolean => {
      return state.loading;
    },
    isSearching: (state: NavigatorState): boolean => {
      return state.searching;
    },
    savedSearchesToggleState: (state: NavigatorState): boolean => {
      return state.savedSearchesToggled;
    },
    searchCategory: (state: NavigatorState): string => {
      return state.searchCategory;
    },
    searchQuery: (state: NavigatorState): string => {
      return state.searchQuery;
    },
  },
  mutations: {
    setVisible: (state: NavigatorState, visible: boolean): void => {
      state.visible = visible;
    },
    setLoading: (state: NavigatorState, loading: boolean): void => {
      state.loading = loading;
    },
    setSearching: (state: NavigatorState, searching: boolean): void => {
      state.searching = searching;
    },
    updateMaxFavouriteRooms: (
      state: NavigatorState,
      maxFavouriteRooms: number
    ): void => {
      state.maxFavouritesRooms = maxFavouriteRooms;
    },
    addFavouriteRoom: (state: NavigatorState, roomId: number): void => {
      state.favouritesRooms.push(roomId);
    },
    clearFavouritesRooms: (state: NavigatorState): void => {
      state.favouritesRooms = [];
    },
    toggleSavedSearches: (state: NavigatorState): void => {
      state.savedSearchesToggled = !state.savedSearchesToggled;
    },
    setSavedSearchesState: (state: NavigatorState, visible: boolean): void => {
      state.savedSearchesToggled = visible;
    },
    setSearchCategory: (state: NavigatorState, category: string): void => {
      state.searchCategory = category;
    },
    setSearchQuery: (state: NavigatorState, query: string): void => {
      state.searchQuery = query;
    },
  },
  actions: {},
  modules: {
    Categories,
    Tabs,
    Searches,
  },
};
