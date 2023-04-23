import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { createPinia, Pinia } from "pinia";
import store from "./store";
import ToolTip from "@/components/common/ToolTip.vue";
import BorderCard from "@/components/common/BorderCard.vue";
import PrimaryButton from "@/components/common/PrimaryButton.vue";
import WindowFrame from "@/components/common/WindowFrame.vue";
import Tabs from "@/components/common/Tabs.vue";
import SelectionList from "@/components/common/SelectionList.vue";
import TextField from "@/components/common/TextField.vue";
import ScrollBox from "@/components/common/ScrollBox.vue";
import Config from "@/mixins/Config";
import Locale from "@/mixins/Locale";

const pinia: Pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(store)
  .mixin(Config)
  .mixin(Locale)
  .component("tool-tip", ToolTip)
  .component("border-card", BorderCard)
  .component("primary-button", PrimaryButton)
  .component("window-frame", WindowFrame)
  .component("tabs", Tabs)
  .component("selection-list", SelectionList)
  .component("text-field", TextField)
  .component("scroll-box", ScrollBox)
  .mount("#app");
