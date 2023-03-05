import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import ToolTip from "@/components/common/ToolTip.vue";
import BorderCard from "@/components/common/BorderCard.vue";
import PrimaryButton from "@/components/common/PrimaryButton.vue";
import WindowFrame from "@/components/common/WindowFrame.vue";
import Tabs from "@/components/common/Tabs.vue";
import SelectionList from "@/components/common/SelectionList.vue";
import TextField from "@/components/common/TextField.vue";
import ScrollBox from "@/components/common/ScrollBox.vue";

createApp(App)
  .use(store)
  .component("tool-tip", ToolTip)
  .component("border-card", BorderCard)
  .component("primary-button", PrimaryButton)
  .component("window-frame", WindowFrame)
  .component("tabs", Tabs)
  .component("selection-list", SelectionList)
  .component("text-field", TextField)
  .component("scroll-box", ScrollBox)
  .mount("#app");
