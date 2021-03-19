<template>
  <div class="home flex flex-col items-center ">
    <img alt="Vue logo" class="h-32 w-32" src="../assets/logo.png">
    <CoinChart/>
  </div>
</template>

<script>
// @ is an alias to /src
import CoinChart from "@/components/CoinChart.vue";

export default {
  name: "Home",
  components: {
    CoinChart,
  },
};
</script>
