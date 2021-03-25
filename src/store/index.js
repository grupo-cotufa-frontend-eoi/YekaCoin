import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coins: [],
  },
  mutations: {
    async getCoins(state) {
      const url = await fetch("https://api.coinranking.com/v2/coins?limit=10");
      const vista = await url.json();
      state.coins = vista.data.coins;
    },
  },
  actions: {
    fetchCoinsData(context) {
      context.commit("getCoins");
    },
  },
  getters: {
    /*
     * Value: (state) => {
     *   return state.value;
     * },
     */
  },
  modules: {

  },
});
