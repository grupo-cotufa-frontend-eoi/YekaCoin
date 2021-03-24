<template>
  <div>
    <Header/>
    <main class="flex">
        <!-- Dentro del side menu están todas las rutas -->
        <SideMenu/>
        <!-- Dentro de content section es donde está todo el contenido dinámico -->
        <ContentSection>
          <router-view/>
        </ContentSection>
    </main>
    <!-- Aqui si quisieramos podriamos meter un footer -->
  </div>
</template>
<script>
import Header from "../src/components/Header";
import SideMenu from "../src/components/SideMenu";
import ContentSection from "../src/components/ContentSection";
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
@import url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;200;300;400;500;600;700&family=Press+Start+2P&display=swap');
html {
  font-family: 'Advent Pro', sans-serif;
  font-size: 1.2rem;
}
body {
  font-size: 1.5rem;
}
</style>
