import Home from '@/views/Home.vue';

function load(component) {
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`);
}

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/phenomena',
    name: 'phenomena',
    component: load('Phenomena'),
  },
  {
    path: '/impacts',
    name: 'impacts',
    component: load('Impacts'),
  },
  {
    path: '/historical-events',
    name: 'historical-events',
    component: load('HistoricalEvents'),
  },
  {
    // Redirect user for 404
    path: '*',
    redirect: '/',
  },
];
