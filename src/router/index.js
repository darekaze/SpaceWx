import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

window.history.scrollRestoration = 'manual';

export default new Router({
  routes,
  base: __dirname,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
