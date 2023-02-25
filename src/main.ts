import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import LoadingView from "@/views/LoadingView.vue";
import GameView from "@/views/GameView.vue";
import ToolBar from "@/components/toolbar/ToolBar.vue";
import ToolTip from "@/components/common/ToolTip.vue";
import ToolBarIcon from "@/components/toolbar/ToolBarIcon.vue";
import BorderCard from "@/components/common/BorderCard.vue";
import LandingView from "@/components/landingview/LandingView.vue";

createApp(App)
  .use(store)
  .component("tool-tip", ToolTip)
  .component("tool-bar", ToolBar)
  .component("tool-bar-icon", ToolBarIcon)
  .component("border-card", BorderCard)
  .component("landing-view", LandingView)
  .mount("#app");
