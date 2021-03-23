<template>
  <header class="flex justify-between h-24 items-center px-1 py-1 md:px-2 md:py-2 border-b-2 border-darkBlue shadow-xl">
    <!-- Contenedor de la imagen -->
    <div class="flex items-center px-1 py-1 h-28 w-28 m-2">
       <!-- Que la imagen se adapte al tamaño del contenedor -->
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
