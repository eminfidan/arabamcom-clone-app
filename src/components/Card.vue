<script>
export default {
  props: {
    vehicleData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    regexPhoto: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<template>
  <div
    class="card col-lg-2 col-md-3 col-xs-6"
    v-for="(vehicle, index) in vehicleData"
    :key="vehicle.id"
    @click="
      $router.push({
        name: 'VehicleDetail',
        params: {
          id: vehicle.id,
        },
      })
    "
  >
    <img class="card-img-top" :src="regexPhoto[index]" alt="Card image cap" />
    <div class="card-body">
      <h3 class="card-title" :title="vehicle.title">{{ vehicle.title }}</h3>
      <h5 class="card-price">{{ vehicle.priceFormatted }}</h5>
      <h6 class="card-city">{{ vehicle.location.cityName }}</h6>
    </div>
  </div>
</template>

<style scoped></style>
