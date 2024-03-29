import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { i18n, Trans } from './plugins/i18n';
import './plugins/vuetify';
import './stylus/main.styl';
import './registerServiceWorker';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
