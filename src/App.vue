<template>
  <div class=" w-auto h-auto bg-lightBlue ">
    <Header></Header>
    <main  class="inline-flex">
        <SideMenu></SideMenu>
        <!-- <ContentSection></ContentSection> -->
    </main>
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
    // ContentSection,
  },
};
</script>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
