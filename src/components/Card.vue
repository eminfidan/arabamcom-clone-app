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
  >
    <img class="card-img-top" :src="regexPhoto[index]" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ vehicle.title }}</h5>
      <h5 class="card-title">{{ vehicle.priceFormatted }}</h5>
      <a
        class="btn btn-primary"
        @click="
          $router.push({
            name: 'VehicleDetail',
            params: {
              id: vehicle.id,
            },
          })
        "
      >
        Go detail
      </a>
    </div>
  </div>
</template>

<style scoped></style>
