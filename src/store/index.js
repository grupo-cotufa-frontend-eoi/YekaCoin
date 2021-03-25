import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coins: [],
    favorite: [],
  },
  // Funciones
  mutations: {
    async getCoins (state) {
      const url = await fetch("https://api.coinranking.com/v2/coins?limit=10");
      const vista = await url.json();
      state.coins = vista.data.coins;
    },
    addFavorite (state, idcoin) {
      state.favorite.push(idcoin);
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
    agregarFavorito (state) {
      if (localStorage.getItem("favorite") !== null) {
        state.favorite = JSON.parse(localStorage.getItem("favorite"));
      }
    },
  },
  actions: {
    fetchCoinsData (context) {
      context.commit("getCoins");
    },
    favorito (context, idcoin) {
      context.commit("addFavorite", idcoin);
    },
    saveFavorite (context) {
      context.commit("agregarFavorito");
    },
  },
  modules: {
  },
});
