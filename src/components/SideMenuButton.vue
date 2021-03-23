<template>
  <button
    class="h-8 w-8 p-1 my-2 mx-2 bg-primary text-darkBlue font-semibold rounded-full transition-colors ease-in duration-150 hover:text-orange hover:bg-darkBlue hover:border-marine shadow-md"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "SideMenuButton",
};
</script>
