<template>
  <button class="side-menu-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "SideMenuButton",
  props: {
    label: {
      view: String,
    },
  },
};
</script>
<style lang="postcss">
.side-menu-button {
  @apply h-9 w-9 p-1 my-2 mx-2 border-2 rounded-full shadow-md
       border-primary hover:bg-darkBlue hover:border-marine bg-primary
       text-darkBlue hover:text-orange
         transition-colors ease-in duration-150;
}
</style>
