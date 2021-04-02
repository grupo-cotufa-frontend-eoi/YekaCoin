import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coins: [],
    id: "",
    favorite: [],

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
    addFavorite(state, idcoin) {
      state.favorite.push(idcoin);
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
    async agregarFavorito(state) {
      if (localStorage.getItem("favorite")) {
        state.favorite = await JSON.parse(localStorage.getItem("favorite"));
      }
    },
    removeFavorite(state, idcoin) {
      const newArray = state.favorite.filter((coin) => coin !== idcoin);
      state.favorite = [...newArray];
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
  },
  actions: {
    fetchCoinsData(context) {
      context.commit("getCoins");
    },
    filterCoinID(context, id) {
      context.commit("setID", id);
    },
    addFavorite(context, idcoin) {
      context.commit("addFavorite", idcoin);
    },
    saveFavorite(context) {
      context.commit("agregarFavorito");
    },
    deleteFavorite(context, idCoins) {
      context.commit("removeFavorite", idCoins);
    },
  },
  modules: {

  },
});
