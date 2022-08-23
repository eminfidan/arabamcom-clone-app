<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      vehicleData: [],
      photo: [],
    };
  },
  created() {
    this.getVehiclesList();
  },
  methods: {
    getVehiclesList() {
      const regex = /{([^}]+)}/g;
      this.$axios.get().then((response, i) => {
        this.vehicleData = response.data;
        this.photo = response.data.map((p) => {
          const imgSize = p.photo.replace(regex, "240x180");
          return imgSize;
        });
      });
    },
  },
};
</script>

<template>
  <Card :vehicleData="vehicleData" :regexPhoto="photo" />
</template>

<style></style>
