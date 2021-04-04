<template>
  <div class="w-full">
    <Header />
    <div class="flex w-full flex-col tablet:flex-row">
      <!-- Dentro del side menu están todas las rutas -->
      <SideMenu />
      <!-- Dentro de content section es donde está todo el contenido dinámico -->
      <ContentSection></ContentSection>
    </div>
    <!-- Aqui si quisieramos podriamos meter un footer -->
  </div>
</template>
<script>
import Header from "../src/components/Header";
import SideMenu from "../src/components/SideMenu";
import ContentSection from "./components/ContentSection.vue";
export default {
  name: "App",
  components: {
    Header,
    SideMenu,
    ContentSection,
  },
};
</script>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Advent+Pro");
html {
  font-family: "Advent Pro", sans-serif;
  font-size: 1.2rem;
}
body {
  font-size: 1.5rem;
}
</style>
