import { createApp } from 'vue';
import App from './App.vue';
import Toolbar from './components/Toolbar.vue';
import ToolbarIcon from './components/ToolbarIcon.vue';
import Window from './components/Window.vue';
import Tabs from './components/Tabs.vue';

const app = createApp(App)

app.component('toolbar', Toolbar);
app.component('toolbar-icon', ToolbarIcon);
app.component('window', Window);
app.component('tabs', Tabs);

app.mount('#app');