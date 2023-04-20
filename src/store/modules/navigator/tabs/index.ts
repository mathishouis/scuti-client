export interface NavigatorTabsState {
  tabs: string[];
  currentTab: string;
}

export default {
  namespaced: true,
  state: {
    tabs: [],
    currentTab: null,
  },
  getters: {
    tabs: (state: NavigatorTabsState): string[] => {
      return state.tabs;
    },
    currentTab: (state: NavigatorTabsState): string => {
      return state.currentTab;
    },
  },
  mutations: {
    updateCurrentTab: (state: NavigatorTabsState, tab: string): void => {
      state.currentTab = tab;
    },
    addTab: (state: NavigatorTabsState, tab: string): void => {
      state.tabs.push(tab);
    },
  },
  actions: {},
  modules: {},
};
