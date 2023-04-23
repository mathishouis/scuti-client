import { createStore } from "vuex";
import LoadingView from "@/store/modules/loading-view";
import ToolBar from "@/store/modules/tool-bar";
import Room from "@/store/modules/room";
import Socket from "@/store/modules/socket";
import User from "@/store/modules/user";
import Navigator from "@/store/modules/navigator";
import Messenger from "@/store/modules/messenger";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    LoadingView,
    ToolBar,
    Room,
    Socket,
    User,
    Navigator,
    Messenger,
  },
});
