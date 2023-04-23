export interface LoadingState {
  visible: boolean;
  percentage: number;
}

export default {
  namespaced: true,
  state: {
    visible: true,
    percentage: 0,
  },
  getters: {
    isVisible: (state: LoadingState): boolean => {
      return state.visible;
    },
    percentage: (state: LoadingState): number => {
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
