<template>
  <section class="mt-8 px-4 py-4 w-10/12 md:w-9/12 lg:w-10/12 shadow-lg">
    <Cardcoins />
  </section>
</template>

<script>
import Cardcoins from "./Cardcoins";
export default {
  name: "ContentSection",
  components: {
    Cardcoins,
  },
};
</script>
