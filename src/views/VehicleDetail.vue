<script>
import Navbar from "../components/TheNavbar.vue";
import Footer from "../components/TheFooter.vue";
import DetailCard from "../components/DetailCard.vue";

export default {
  name: "VehicleDetail",
  components: {
    Navbar,
    Footer,
    DetailCard,
  },
};
</script>

<template>
  <Navbar />
  <div class="container">
    <DetailCard />
  </div>
  <Footer />
</template>

<style></style>
