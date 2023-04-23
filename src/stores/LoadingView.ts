import { defineStore } from "pinia";

interface State {
  visible: boolean;
  percentage: number;
}

export const useLoadingViewStore = defineStore("loadingView", {
  state: (): State => ({
    visible: false,
    percentage: 0,
  }),
});
