import { createStore } from "vuex";
import Loading from "@/store/modules/loading";
import ToolBar from "@/store/modules/tool-bar";
import LandingView from "@/store/modules/landing-view";
import Room from "@/store/modules/room";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Loading,
    ToolBar,
    LandingView,
    Room,
  },
});
