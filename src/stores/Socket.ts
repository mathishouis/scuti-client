import { defineStore } from "pinia";
import { Socket } from "@/sockets/Socket";

interface State {
  socket: Socket | undefined;
  authenticated: boolean;
}

export const useSocketStore = defineStore("socket", {
  state: (): State => ({
    socket: undefined,
    authenticated: false,
  }),
});
