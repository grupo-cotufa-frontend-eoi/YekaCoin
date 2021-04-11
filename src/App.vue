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
import Header from "../src/components/header/Header";
import SideMenu from "../src/components/sideMenu/SideMenu";
import ContentSection from "../src/components/contentSection/ContentSection";
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

@font-face {
  font-family: "Advent Pro";
  font-weight: normal;
  font-style: normal;
  src: url(./assets/fonts/advent-pro.woff2) format("woff2");
}

@font-face {
  font-family: "Press Start 2P";
  font-style: normal;
  font-weight: normal;
  src: url(./assets/fonts/press-start-2p.woff2) format("woff2");
}
html {
  font-family: "Advent Pro", sans-serif;
  font-size: 1.2rem;
}
body {
  font-size: 1.5rem;
}
</style>
