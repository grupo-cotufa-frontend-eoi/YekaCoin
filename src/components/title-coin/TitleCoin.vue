<template>
  <div class="coins-title">
    <div class="coins-info">
      <div class="text-center">
        <h2>Currency</h2>
      </div>
      <div class="flex flex-col content-center md:flex-row md:justify-evenly">
        <h2>Value</h2>
        <h2>Change</h2>
      </div>
    </div>
    <div>
      <h2>Favorite</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title-coin",
};
</script>

<style lang="postcss">
.coins-title {
  @apply grid grid-cols-18 mb-6 font-extrabold text-white text-sm lg:text-xl xl:text-2xl;
}

.coins-info {
  @apply grid grid-cols-2;
}
</style>
