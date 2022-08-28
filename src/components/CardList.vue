<script>
import Card from "./Card.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
export default {
  components: {
    Card,
    LoadingSpinner,
  },
  data() {
    return {
      filteredVehicleData: [],
      photo: [],
      filter: false,
      filters: {
        sort: 0,
        sortDirection: "",
        take: 50,
        minYear: "",
        maxYear: "",
      },
      loading: true,
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
        this.loading = false;
      });
    },
  },
};
</script>

<template>
  <div class="showcase">
    <div class="showcase-filters" v-if="filter">
      <input
        type="text"
        placeholder="Minimum Yıl"
        maxlength="4"
        v-model="filters.minYear"
        @keyup.enter="getVehiclesList()"
      />
      <input
        type="text"
        placeholder="Maksimum Yıl"
        maxlength="4"
        v-model="filters.maxYear"
        @keyup.enter="getVehiclesList()"
      />
      <button @click="getVehiclesList()">Ara</button>
    </div>
    <div class="showcase-title">
      <h3>Vitrin</h3>
      <div class="ms-auto filter-sort">
        <button @click="filter = !filter">
          Filtre <font-awesome-icon icon="fa-solid fa-sort" />
        </button>
        <select
          v-model="filters.sortDirection"
          class="form-select bg-white shadow-none"
          @change="getVehiclesList()"
        >
          <option value="" selected>Sırala</option>
          <option value="0">Fiyat(artan)</option>
          <option value="1">Fiyat(azalan)</option>
        </select>
      </div>
    </div>
    <LoadingSpinner v-if="loading" />
    <Card :vehicleData="filteredVehicleData" :regexPhoto="photo" v-else />
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
