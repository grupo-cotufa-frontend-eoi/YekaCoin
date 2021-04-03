<template>
  <section class="content-section">
    <router-view v-if="coins.length > 0"/>
    <h1 v-else>vida</h1>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {

  async beforeMount () {
    await this.fetchCoinsData();
    this.saveFavorite();
  },

  methods: {
    ...mapActions(["fetchCoinsData", "saveFavorite"]),
  },
  computed: {
    ...mapState(["coins", "favorite"]),
  },
};
</script>
<style lang="postcss">
.content-section {
  @apply flex p-6 tablet:mr-10 w-full mx-4 mt-8 ml-0
         border-2 border-darkBlue shadow-lg rounded-xl;
}
</style>
