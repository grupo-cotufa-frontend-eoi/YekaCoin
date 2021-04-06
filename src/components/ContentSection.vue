<template>
  <section class="content-section">
    <Loading v-if="isLoad" class="loader" id="loader"></Loading>
    <router-view v-else />

  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Loading from "./Loading";
export default {
  components: {
    Loading,

  },
  data() {
    return {
      isLoad: true,
      animacion: false,
    };
  },

  async beforeMount () {
    await this.fetchCoinsData();
    this.saveFavorite();
  },

  methods: {
    ...mapActions(["fetchCoinsData", "saveFavorite"]),
  },
  computed: {
    ...mapState(["coins", "favorite"]),
    isAnimacion () {
      return {
        loader: !this.animacion,
        loader2: this.animacion,
      };
    },
  },
  watch: {
    coins() {
      setTimeout(() => {
        document.getElementById("loader").classList.replace("loader", "loader2");
        this.isLoad = false;
      }, 2000);
    },
  },
};
</script>
<style lang="postcss">
.content-section {
  @apply flex p-6 tablet:mr-10 w-full mx-4 mt-8 ml-0
         border-2 border-darkBlue shadow-lg rounded-xl relative;
}
.loader{
  clip-path: circle(141.0% at 100% 0);
  transition: clip-path 2s ease-in-out ;
}
.loader2{
  clip-path: circle(0.1% at 100% 0);
}
</style>
