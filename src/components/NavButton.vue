<template>
  <button class="nav-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "NavButton",
};
</script>
<style lang="postcss">
.nav-button {
  @apply px-3 py-1 m-2 rounded-2xl border-2 border-darkBlue bg-secondary shadow-lg
         text-base text-darkBlue font-semibold hover:text-marine hover:bg-primary hover:border-marine
         transition-colors ease-in duration-150;
}
</style>
