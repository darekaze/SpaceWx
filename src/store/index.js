import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    conditions: null,
  },
  mutations: {
    SET_CONDITIONS(state, data) {
      state.conditions = data;
    },
  },
  actions: {
    loadConditions({ commit }) {
      axios.get('https://services.swpc.noaa.gov/products/noaa-scales.json')
        .then(({ data }) => {
          commit('SET_CONDITIONS', data);
        })
        .catch(() => {
          // eslint-disable-next-line no-console
          console.log('Failed to obtain NOAA Scales..Try to retry');
        });
    },
  },
});
