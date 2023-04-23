import { createStore } from "vuex";
import ToolBar from "@/store/modules/tool-bar";
import Room from "@/store/modules/room";
import Socket from "@/store/modules/socket";
import User from "@/store/modules/user";
import Navigator from "@/store/modules/navigator";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ToolBar,
    Room,
    Socket,
    User,
    Navigator,
  },
});
