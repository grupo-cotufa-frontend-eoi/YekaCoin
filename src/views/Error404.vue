<template>
  <div class="error-section">
    <img src="../assets/lost.gif" alt="Jhon Travolta is Lost, 404 error" />
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>

<style lang="postcss">
.error-section img {
  @apply w-full h-full shadow-2xl rounded-2xl opacity-80;
}
</style>
