import { createApp } from 'vue';
import App from './App.vue';
import Toolbar from './components/Toolbar.vue';
import ToolbarIcon from './components/ToolbarIcon.vue';
import Window from './components/Window.vue';
import Tabs from './components/Tabs.vue';
import Navigator from './components/Navigator.vue';
import Tooltip from './components/Tooltip.vue';
import Textfield from './components/Textfield.vue';
import SelectionList from './components/SelectionList.vue';
import Scrollbox from './components/Scrollbox.vue';
import vClickOutside from 'click-outside-vue3';
import CustomScrollbar from 'custom-vue-scrollbar';
import 'custom-vue-scrollbar/dist/style.css';
import './style.css';
import drag from 'v-drag';

const app = createApp(App)

app.use(drag);
app.use(vClickOutside);
app.component('toolbar', Toolbar);
app.component('toolbar-icon', ToolbarIcon);
app.component('window', Window);
app.component('tabs', Tabs);
app.component('navigator', Navigator);
app.component('tooltip', Tooltip);
app.component('textfield', Textfield);
app.component('selection-list', SelectionList);
app.component('scrollbar', CustomScrollbar);
app.component('scrollbox', Scrollbox);

app.mount('#app');