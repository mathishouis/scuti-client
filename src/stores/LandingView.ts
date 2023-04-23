import { defineStore } from "pinia";

interface State {
  visible: boolean;
}

export const useLandingViewStore = defineStore("landingView", {
  state: (): State => ({
    visible: false,
  }),
});
