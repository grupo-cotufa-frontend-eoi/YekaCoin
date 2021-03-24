<template>
  <h1 class="logo-letters">
    <span class="text-orange ">Yeka</span>
    <span class="text-marine ">Coin</span>
  </h1>
</template>

<script>
export default {
  name: "LogoLetters",
};
</script>
<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
.logo-letters {
  @apply m-2 text-2xl  font-extrabold;
}
span {
  font-family: 'Press Start 2P', cursive;
}
</style>
