<template>
  <button class="side-menu-button" :aria-label="ariaLabel">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "SideMenuButton",
  props: {
    ariaLabel: String,
  },
};
</script>
<style lang="postcss">
a.router-link-exact-active .side-menu-button {
  @apply bg-darkBlue text-orange;
}
.side-menu-button {
  @apply h-6 w-6 m-2 sm:h-9 sm:w-9 tablet:m-1 border-2 rounded-full shadow-md
       border-primary hover:bg-darkBlue hover:border-marine bg-primary
       text-darkBlue hover:text-orange
         transition-colors ease-in duration-150;
}
</style>
