<template>
  <section class="content-section">
    <router-view v-if="coins.length >0" />
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  async beforeMount() {
    await this.fetchCoinsData();
    this.saveFavorite();
  },

  methods: {
    ...mapActions(["fetchCoinsData", "saveFavorite"]),
  },
  computed: {
    ...mapState(["coins"]),
  },
};
</script>
<style lang="postcss">
.content-section {
  @apply p-6 tablet:mr-10 flex mx-4 my-8
         border-2 border-darkBlue shadow-lg rounded-xl;
}

</style>
