import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import LoadingView from "@/views/LoadingView.vue";
import GameView from "@/views/GameView.vue";
import ToolBar from "@/components/tool-bar/ToolBar.vue";
import ToolTip from "@/components/common/ToolTip.vue";
import ToolBarIcon from "@/components/tool-bar/ToolBarIcon.vue";
import BorderCard from "@/components/common/BorderCard.vue";
import LandingView from "@/components/landing-view/LandingView.vue";
import PrimaryButton from "@/components/common/PrimaryButton.vue";

createApp(App)
  .use(store)
  .component("tool-tip", ToolTip)
  .component("border-card", BorderCard)
  .component("primary-button", PrimaryButton)
  .mount("#app");
