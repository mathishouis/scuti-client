import { createApp } from 'vue';
import App from './App.vue';
import Toolbar from './components/Toolbar.vue';
import ToolbarIcon from './components/ToolbarIcon.vue';
import Window from './components/Window.vue';
import Tabs from './components/Tabs.vue';
import Navigator from './components/Navigator.vue';
import Tooltip from './components/Tooltip.vue';
import Textfield from './components/Textfield.vue';
import drag from 'v-drag';

const app = createApp(App)

app.use(drag);
app.component('toolbar', Toolbar);
app.component('toolbar-icon', ToolbarIcon);
app.component('window', Window);
app.component('tabs', Tabs);
app.component('navigator', Navigator);
app.component('tooltip', Tooltip);
app.component('textfield', Textfield);

app.mount('#app');