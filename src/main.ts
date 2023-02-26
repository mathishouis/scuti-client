import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import ToolTip from "@/components/common/ToolTip.vue";
import BorderCard from "@/components/common/BorderCard.vue";
import PrimaryButton from "@/components/common/PrimaryButton.vue";
import WindowFrame from "@/components/common/WindowFrame.vue";

createApp(App)
  .use(store)
  .component("tool-tip", ToolTip)
  .component("border-card", BorderCard)
  .component("primary-button", PrimaryButton)
  .component("window-frame", WindowFrame)
  .mount("#app");
