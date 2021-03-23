<template>
<button class="px-3 py-1 m-2 text-lg border-2 border-darkBlue bg-secondary text-darkBlue font-semibold rounded-2xl  transition-colors ease-in duration-150  hover:text-marine hover:bg-primary hover:border-marine shadow-lg">
<slot></slot>
</button>
</template>

<script>
export default {
  name: "NavButton",
};
</script>
