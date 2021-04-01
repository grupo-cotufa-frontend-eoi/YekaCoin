<template>
  <div id="app">
    <Header />
    <main class="flex">
      <!-- Dentro del side menu están todas las rutas -->
      <SideMenu />
      <!-- Dentro de content section es donde está todo el contenido dinámico -->
      <ContentSection></ContentSection>
    </main>
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

@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

#app {
  font-family: "Press Start 2P", cursive;
  font-size: 1rem;
}
</style>
