<template>
  <video class="error-404" autoplay loop>
    <source src="../assets/error404.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script>
export default {
  name: "Error404",
};
</script>

<style lang="postcss">
.error-404 {
  @apply w-full h-full shadow-2xl rounded-2xl opacity-80;
}
</style>
