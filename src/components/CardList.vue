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
      filters: {
        sort: 0,
        sortDirection: "",
        take: 50,
      },
    };
  },
  created() {
    this.getVehiclesList();
  },
  methods: {
    getVehiclesList() {
      const regex = /{([^}]+)}/g;
      this.$axios.get({ params: { ...this.filters } }).then((response) => {
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
  <div class="showcase">
    <div class="showcase-title">
      <h3>Vitrin</h3>
      <select
        v-model="filters.sortDirection"
        class="form-select ms-auto bg-white shadow-none"
        @change="getVehiclesList()"
      >
        <option value="" selected>Sırala</option>
        <option value="0">Fiyat(artan)</option>
        <option value="1">Fiyat(azalan)</option>
      </select>
    </div>
    <Card :vehicleData="filteredVehicleData" :regexPhoto="photo" />
    <div class="showcase-per-page">
      <select
        v-model="filters.take"
        class="form-select ms-auto bg-white shadow-none"
        @change="getVehiclesList()"
      >
        <option value="20">20</option>
        <option value="50" selected>50</option>
        <option value="100" selected>100</option>
      </select>
    </div>
  </div>
</template>

<style></style>
