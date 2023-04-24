import { defineStore } from "pinia";

interface Window {
  name: string;
  visible: boolean;
  zIndex: number;
}

interface State {
  windows: Window[];
}

export const useWindowStore = defineStore("window", {
  state: (): State => ({
    windows: [
      {
        name: "navigator",
        visible: false,
        zIndex: 0,
      },
      {
        name: "roomCreator",
        visible: false,
        zIndex: 0,
      },
    ],
  }),
  actions: {
    setToTop(name: string) {
      this.windows.forEach((window: Window) => (window.zIndex = 0));
      this.getWindow(name)!.zIndex = 100;
    },
  },
  getters: {
    getWindow: (state: State) => (name: string) =>
      state.windows.find((window: Window) => window.name === name),
  },
});
