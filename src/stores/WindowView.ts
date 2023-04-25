import { defineStore } from "pinia";

interface Window {
  name: string;
  visible: boolean;
  zIndex: number;
  x: number;
  y: number;
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
        x: 100,
        y: 100,
      },
      {
        name: "roomCreator",
        visible: false,
        zIndex: 0,
        x: 100,
        y: 100,
      },
    ],
  }),
  actions: {
    setToTop(name: string) {
      this.windows.forEach((window: Window) => (window.zIndex = 1));
      this.getWindow(name)!.zIndex = 100;
    },
    setPosition(name: string, x: number, y: number) {
      this.getWindow(name)!.x = x;
      this.getWindow(name)!.y = y;
    },
  },
  getters: {
    getWindow: (state: State) => (name: string) =>
      state.windows.find((window: Window) => window.name === name),
  },
});
