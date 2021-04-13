<template>
  <div class="container">
    <h1 class="comparison-title">Compare the cryptocurrencies values</h1>
    <DoubleChart></DoubleChart>
  </div>
</template>

<script>
import DoubleChart from "../components/doubleChart/DoubleChart";
export default {
  name: "ComparisonChart",
  components: {
    DoubleChart,
  },
};
</script>

<style lang="postcss">
.comparison-title {
  @apply text-white text-2xl font-semibold text-center my-6;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px blue;
  font-family: "Press Start 2P";
}
</style>
