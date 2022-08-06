import { createApp } from 'vue';
import App from './App.vue';
import Toolbar from './components/toolbar/Toolbar.vue';
import ToolbarIcon from './components/toolbar/ToolbarIcon.vue';
import Window from './components/common/Window.vue';
import Tabs from './components/common/Tabs.vue';
import Navigator from './components/navigator/Navigator.vue';
import Tooltip from './components/common/Tooltip.vue';
import Textfield from './components/common/Textfield.vue';
import SelectionList from './components/common/SelectionList.vue';
import Scrollbox from './components/common/Scrollbox.vue';
import vClickOutside from 'click-outside-vue3';
import CustomScrollbar from 'custom-vue-scrollbar';
import Renderer from './components/Renderer.vue';
import Game from './views/Game.vue';
import Loading from './views/Loading.vue';
import LandingView from './components/landing-view/LandingView.vue';
import Config from './mixins/Config';
import 'custom-vue-scrollbar/dist/style.css';
import './style.css';
import drag from 'v-drag';
import { store } from "./store/store";

const app = createApp(App)

app.use(drag);
app.use(vClickOutside);
app.use(store);
app.mixin(Config);

app.component('window', Window);
app.component('tabs', Tabs);
app.component('tooltip', Tooltip);
app.component('textfield', Textfield);
app.component('selection-list', SelectionList);
app.component('scrollbox', Scrollbox);

app.component('toolbar', Toolbar);
app.component('toolbar-icon', ToolbarIcon);
app.component('navigator', Navigator);
app.component('scrollbar', CustomScrollbar);
app.component('game', Game);
app.component('renderer', Renderer);
app.component('loading', Loading);
app.component('landing-view', LandingView);

app.mount('#app');