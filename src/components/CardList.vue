<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      filteredVehicleData: [],
      photo: [],
    };
  },
  created() {
    this.getVehiclesList();
  },
  methods: {
    getVehiclesList() {
      const regex = /{([^}]+)}/g;
      this.$axios.get().then((response) => {
        const vehicleData = response.data;
        this.filteredVehicleData = vehicleData.map((element) => {
          return {
            ...element,
            properties: element.properties.filter(
              (subElement) => subElement.name !== "color"
            ),
          };
        });
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
  <Card :vehicleData="filteredVehicleData" :regexPhoto="photo" />
</template>

<style></style>
