import { Socket } from "@/sockets/Socket";

export interface SocketState {
  socket: Socket;
  authenticated: boolean;
}

export default {
  namespaced: true,
  state: {
    socket: undefined,
    authenticated: false,
  },
  getters: {
    socket: (state: SocketState): Socket => {
      return state.socket;
    },
    authenticated: (state: SocketState): boolean => {
      return state.authenticated;
    },
  },
  mutations: {
    updateSocket: (state: SocketState, socket: Socket): void => {
      state.socket = socket;
    },
    updateAuthenticated: (state: SocketState, authenticated: boolean): void => {
      state.authenticated = authenticated;
    },
  },
  actions: {},
  modules: {},
};
