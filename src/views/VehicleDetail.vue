<script>
import Navbar from "../components/TheNavbar.vue";
import DetailCard from "../components/DetailCard.vue";

export default {
  name: "VehicleDetail",
  components: {
    Navbar,
    DetailCard,
  },
};
</script>

<template>
  <Navbar />
  <div class="container">
    <DetailCard />
  </div>
</template>

<style></style>
