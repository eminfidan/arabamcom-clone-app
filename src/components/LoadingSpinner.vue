<template>
  <div class="h-100 w-100 d-flex align-items-center justify-content-center">
    <pulse-loader
      :loading="loading"
      :color="'#e4022f'"
      :size="size"
    ></pulse-loader>
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
