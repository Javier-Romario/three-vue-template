import Vuex from 'vuex';
// import Three from 'three';
import Vue from 'vue';
import ThreeModule from './modules/ThreeModule';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    ThreeModule,
  },
});
