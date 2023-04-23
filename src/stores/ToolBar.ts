import { defineStore } from "pinia";

interface State {
  leftVisible: boolean;
}

export const useToolBarStore = defineStore("toolBar", {
  state: (): State => ({
    leftVisible: false,
  }),
});
