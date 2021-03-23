<template>
  <header class="px-4 py-2 flex justify-between items-center md:px-6 md:py-6">
    <div class="px-3 py-1">
      <img class="w-28" src="../assets/logo.png" alt="YekaCoin Logo">
    </div>
    <div>
      <LogoLetters></LogoLetters>
    </div>
    <div>
      <NavButton>Login</NavButton>
      <NavButton>Register</NavButton>
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
