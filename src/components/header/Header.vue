<template>
  <header class="header-container">
    <!-- Contenedor de la imagen -->
    <div class="header-subcontainer">
      <div class="logo-container">
        <img
          class="object-contain"
          src="../../assets/logo.png"
          alt="YekaCoin Logo"
        />
      </div>
      <!-- Contenedor de las letras del logo -->
      <div class="header-letters">
        <LogoLetters></LogoLetters>
      </div>
    </div>
  </header>
</template>

<script>
import LogoLetters from "../logoLetters/LogoLetters.vue";
export default {
  name: "Header",
  components: {
    LogoLetters,
  },
};
</script>
<style lang="postcss">
.header-container {
  @apply flex justify-between items-center mb-4
         h-24 px-1 py-1 md:px-2 md:py-2
         border-b-2 border-darkBlue shadow-lg;

  & .header-subcontainer {
    @apply flex w-full items-center;

    & .logo-container {
      @apply flex w-1/4 items-center justify-start px-1 py-1  m-2;
    }

    & .header-letters {
      @apply flex w-1/2 justify-center;
      transition: transform 0.2s;
    }

    & .header-letters:hover {
      transform: scale(1.2);
    }
  }
}
img {
  @apply h-28 w-28;
}
</style>
