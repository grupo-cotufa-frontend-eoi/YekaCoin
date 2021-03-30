<template>
  <div class="container">
    <div class="welcome-msg">
      <h1 class="welcome-msg__title">Welcome to our Home Page!</h1>
      <p class="welcome-msg__text">YekaCoin is a place where you can easily see the real price of most cryptocurrencies, as well as including graphs showing their evolution over time.</p>
    </div>
    <Comparer></Comparer>
  </div>
</template>

<script>
import Comparer from "../components/Comparer";
export default {
  name: "Home",
  components: {
    Comparer,
  },

};
</script>
<style lang="postcss">
.logo {
  @apply h-6 w-6;
}
.container {
  @apply flex flex-col h-full w-full;

  & .welcome-msg {
    @apply text-center w-full;

    & .welcome-msg__title {
      @apply text-4xl mb-4 font-extrabold;
    }

    & .welcome-msg__text {
      @apply text-xl mb-4 font-medium;
    }
  }

  & .compare-tool {
    @apply mt-10 w-full rounded-xl;

    & .compare-tool__header {
      @apply text-center mb-4;
    }

    & .compare-tool__body {
      @apply grid bg-darkBlue border-2 border-marine h-80 w-auto rounded-xl shadow-md;

      & .table-body {
        @apply bg-primary border-2 border-orange;

        & select {
          @apply bg-lightBlue;
        }
      }
    }
  }
}
</style>
