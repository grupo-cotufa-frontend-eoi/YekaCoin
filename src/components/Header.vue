<template>
  <header class="header-container">
    <!-- Contenedor de la imagen -->
    <div class="logo-container">
      <img class="object-contain" src="../assets/logo.png" alt="YekaCoin Logo">
    </div>
    <!-- Contenedor de las letras del logo -->
    <div>
      <LogoLetters></LogoLetters>
    </div>
    <!-- Zona de botones -->
    <div>
      <NavButton>Login</NavButton>
      <NavButton>Register</NavButton>
      <!-- Aqui iria un componente con el icono del usuario, clickable, para desloguear -->
    </div>
  </header>
</template>

<script>
import LogoLetters from "../components/LogoLetters";
import NavButton from "../components/NavButton";
export default {
  name: "Header",
  components: {
    NavButton,
    LogoLetters,
  },
};
</script>
<style lang="postcss">
.header-container {
  @apply flex justify-between items-center
         h-24 px-1 py-1 md:px-2 md:py-2
         border-b-2 border-darkBlue shadow-lg;
}
.logo-container {
  @apply flex items-center
         px-1 py-1 h-28 w-28 m-2;
}
</style>
