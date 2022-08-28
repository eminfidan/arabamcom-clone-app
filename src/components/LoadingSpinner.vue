<template>
  <div
    class="h-100 w-100 d-flex align-items-center justify-content-center pt-5"
  >
    <pulse-loader :color="'#e4022f'"></pulse-loader>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    PulseLoader,
  },
};
</script>

<style></style>
