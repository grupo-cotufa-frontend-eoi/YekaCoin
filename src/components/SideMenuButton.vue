<template>
  <button class="h-10 w-10 p-1 my-2  bg-primary text-darkBlue font-semibold rounded-full  transition-colors ease-in duration-150  hover:text-orange hover:bg-darkBlue hover:border-marine shadow-md">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "SideMenuButton",
};
</script>
