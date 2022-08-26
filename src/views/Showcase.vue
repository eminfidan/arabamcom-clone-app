<script>
import CardList from "../components/CardList.vue";
import Navbar from "../components/TheNavbar.vue";

export default {
  name: "Showcase",
  components: {
    Navbar,
    CardList,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <Navbar />
  <div class="container">
    <CardList />
  </div>
</template>

<style lang="scss">
@import "../assets/styles/pages/showcase.scss";
</style>
