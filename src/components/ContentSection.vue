<template>
  <section class="content-section">
    <router-view/>
  </section>
</template>

<script>

export default {

};
</script>
<style lang="postcss">
.content-section {
  @apply flex p-6 m-9 ml-2 w-10/12 md:w-9/12 lg:w-10/12
         border-2 border-darkBlue shadow-lg rounded-xl;
}
</style>
