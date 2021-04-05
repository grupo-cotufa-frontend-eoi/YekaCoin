<template>
  <section class="content-section">
    <router-view />
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  async beforeMount() {
    await this.fetchCoinsData();
    await this.saveFavorite();
  },

  methods: {
    ...mapActions(["fetchCoinsData", "saveFavorite"]),
  },
};
</script>
<style lang="postcss">
.content-section {
  @apply flex p-6 tablet:mr-10 w-full mx-4 mt-8 ml-0
         border-2 border-darkBlue shadow-lg rounded-xl;
}
</style>
