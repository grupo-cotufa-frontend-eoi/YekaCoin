<template>
  <h1 class="logo-letters">
    <span class="text-orange">Yeka</span>
    <span class="text-marine">Coin</span>
  </h1>
</template>

<script>
export default {
  name: "LogoLetters",
};
</script>
<style lang="postcss">
/* @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"); */
.logo-letters {
  @apply m-2 font-extrabold text-lg xl:text-xl 2xl:text-4xl tablet:text-4xl;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px blue;
  font-family: "Press Start 2P";
}
</style>
