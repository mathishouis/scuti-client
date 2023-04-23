import { createStore } from "vuex";
import ToolBar from "@/store/modules/tool-bar";
import Socket from "@/store/modules/socket";
import User from "@/store/modules/user";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ToolBar,
    Socket,
    User,
  },
});
