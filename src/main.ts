import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import LoadingView from "@/views/LoadingView.vue";

createApp(App).use(store).component("loading-view", LoadingView).mount("#app");
