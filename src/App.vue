<template>
  <div class="h-screen">
    <Header></Header>
    <main class="flex justify-center h-full w-full">
      <SideMenu></SideMenu>
      <ContentSection />
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
<style
    ContentSectionlang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
