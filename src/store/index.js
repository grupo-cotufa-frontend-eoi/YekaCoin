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
      const url = require("../../public/coins.json");
      const vista = url.data.coins;
      state.coins = vista;
    },
    setID(state, id) {
      state.id = id;
    },
    addFavorite(state, idcoin) {
      state.favorite.push(idcoin);
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
    agregarFavorito(state) {
      if (localStorage.getItem("favorite")) {
        state.favorite = JSON.parse(localStorage.getItem("favorite"));
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
