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
  @apply h-9 w-9 p-1 my-2 mx-2 border-2 rounded-full shadow-md
       border-primary hover:bg-darkBlue hover:border-marine bg-primary
       text-darkBlue hover:text-orange
         transition-colors ease-in duration-150;
}
</style>
