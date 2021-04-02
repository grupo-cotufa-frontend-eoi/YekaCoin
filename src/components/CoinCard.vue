<template>
  <div class="card-coin">
    <router-link
      class="w-full h-full"
      :to="{ name: 'Coin', params: { id: coin.uuid, nameCoin: coin.name } }"
    >
      <div class="infocard" @click="filterCoinID(coin.uuid)">
        <div class="card-content">
          <img
            class="card-content__img"
            :src="coin.iconUrl"
            :alt="`image de criptmoneda de ${coin.name}`"
          />
          <span class="card-content__text">{{ coin.name }}</span>
          <span class="card-content__text uppercase">{{ coin.symbol }}</span>
        </div>
        <div class="card-change">
          <span class="card-content__text uppercase"
            >${{ parseFloat(coin.price).toFixed(2) }}</span
          >
          <span
            class="card-content__text uppercase"
            :class="changeColor"
            >{{ coin.change.substring(0, 1) === "-" ? "" : "+"
            }}{{ parseFloat(coin.change).toFixed(2) }}%</span
          >
        </div>
      </div>
    </router-link>
    <div class="card-button">
      <button
        v-on:click="[updateFavorite(coin.uuid), $emit('onClick')]"
        class="card-content__btn"
      >
        <i v-if="favorite.includes(coin.uuid)" class="fas fa-star active"></i>
        <i v-else class="far fa-star"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "CoinCard",
  props: {
    coin: {
      uuid: String,
      name: String,
      symbol: String,
      iconUrl: String,
      price: String,
      change: String,
    },
    onClick: {
      type: Function,
      default: null,
    },
  },
  methods: {
    ...mapActions(["filterCoinID", "addFavorite", "deleteFavorite"]),
    updateFavorite(id) {
      if (this.favorite.includes(id)) {
        this.deleteFavorite(id);
        this.$emit("addFavorite");
      } else this.addFavorite(id);
    },
  },
  computed: {
    ...mapState(["id", "favorite"]),
    changeColor() {
      return {
        /* "text-red-500": change.substring(0, 1) === "-", */
        "text-red-500": this.coin.change.substring(0, 1) === "-",
        "text-green-500": this.coin.change.substring(0, 1) !== "-",

      };
    },
  },
};
</script>

<style lang="postcss">
.card-coin {

  @apply grid grid-cols-18 mb-2 h-20 w-11/12
       border-marine bg-white hover:bg-primary
         border-2 rounded-md shadow-lg;
  transition: transform 0.2s;
  & .infocard {
    @apply grid grid-cols-2 w-full h-full ;

    & .card-change  {
      @apply flex flex-col md:flex-row md:justify-around lg:justify-evenly md:items-center h-full lg:mx-5
    }

    & .card-content {
    @apply flex flex-col md:flex-row md:justify-between md:items-center h-full lg:mx-5 p-2;

    & .card-content__img {
      @apply hidden md:h-8 md:w-8 tablet:h-12 tablet:w-12 md:block;
    }

    & .card-content__text {
      @apply text-lg sm:text-xl;
    }
    }

  }
}

.card-button {
  @apply w-full h-full flex items-center justify-center;
}
.card-content__btn {
  @apply bg-transparent md:bg-secondary md:px-2 md:py-1 md:rounded-md md:shadow-lg
               md:border-2 md:border-marine hover:bg-lightBlue;
}
.fa-star {
  @apply text-marine;
}
.card-coin:hover {
  transform: scale(1.2);
}
</style>
