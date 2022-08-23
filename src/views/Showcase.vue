<script>
import CardList from "../components/CardList.vue";
export default {
  name: "Showcase",
  components: {
    CardList,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="row">
    <CardList />
  </div>
</template>

<style lang="scss">
@import "../assets/styles/pages/showcase.scss";
</style>
