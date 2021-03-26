<template>
  <!-- <h1>{{$route.params.id}}</h1> -->
  <canvas></canvas>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Coin",
  data() {
    return {
      coin: this.getCoin(),
    };
  },
  methods: {
    setCoin(id) {
      // This.coin = {{$route.params.id}};
    },
  },
  computed: {
    ...mapState(["id", "coins"]),
  },
  beforeMount () {
    // This.getCoin();
  },
};
</script>

<style>

</style>
