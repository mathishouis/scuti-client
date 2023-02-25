export interface LoadingState {
  visible: boolean;
  percentage: number;
}

export default {
  namespaced: true,
  state: {
    visible: false,
    percentage: 0,
  },
  getters: {
    isVisible: (state: LoadingState): boolean => {
      return state.visible;
    },
    getPercentage: (state: LoadingState): number => {
      return state.percentage;
    },
  },
  mutations: {
    setVisible: (state: LoadingState, visible: boolean): void => {
      state.visible = visible;
    },
    setPercentage: (state: LoadingState, percentage: number): void => {
      state.percentage = percentage;
    },
  },
  actions: {},
  modules: {},
};
