import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coins: [],
    id: "",
  },
  mutations: {
    async getCoins(state) {
      const url = await fetch("https://api.coinranking.com/v2/coins?limit=10");
      const vista = await url.json();
      state.coins = vista.data.coins;
    },
    setID(state, id) {
      state.id = id;
    },
  },
  actions: {
    fetchCoinsData(context) {
      context.commit("getCoins");
    },
    filterCoinID(context, id) {
      context.commit("setID", id);
    },
  },
  modules: {

  },
});
