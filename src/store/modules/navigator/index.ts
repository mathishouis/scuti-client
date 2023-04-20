import Categories from "./categories";
import Tabs from "./tabs";

export interface NavigatorState {
  loading: boolean;
  visible: boolean;
  savedSearchesToggled: boolean;
  maxFavouritesRooms: number;
  favouritesRooms: number[];
  currentTab: string;
}

export default {
  namespaced: true,
  state: {
    loading: false,
    visible: true,
    savedSearchesToggled: false,
    maxFavouritesRooms: -1,
    favouritesRooms: [],
    currentTab: null,
  },
  getters: {
    isVisible: (state: NavigatorState): boolean => {
      return state.visible;
    },
    isLoading: (state: NavigatorState): boolean => {
      return state.loading;
    },
    savedSearchesToggleState: (state: NavigatorState): boolean => {
      return state.savedSearchesToggled;
    },
  },
  mutations: {
    setVisible: (state: NavigatorState, visible: boolean): void => {
      state.visible = visible;
    },
    setLoading: (state: NavigatorState, loading: boolean): void => {
      state.loading = loading;
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
  },
  actions: {},
  modules: {
    Categories,
    Tabs,
  },
};
