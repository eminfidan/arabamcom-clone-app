<script>
import Navbar from "../components/TheNavbar.vue";
import Footer from "../components/TheFooter.vue";
import CardList from "../components/CardList.vue";

export default {
  name: "Showcase",
  components: {
    Navbar,
    Footer,
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
  <Footer />
</template>

<style lang="scss">
@import "../assets/styles/pages/showcase.scss";
</style>
