<template>
  <div class="container">
    <h1 class="comparison-title">Compare the cryptocurrencies values</h1>
    <DoubleChart></DoubleChart>
  </div>
</template>

<script>
import DoubleChart from "../components/DoubleChart";
export default {
  name: "ComparisonChart",
  components: {
    DoubleChart,
  },
};
</script>

<style lang="postcss">
.comparison-title {
  @apply text-4xl font-semibold text-center my-5;
}
</style>
