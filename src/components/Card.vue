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
  <div class="row">
    <div
      class="col-lg-3 col-sm-6"
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
      <div class="showcase-item">
        <div class="showcase-item-thumbnail">
          <div class="showcase-item-image">
            <img
              :src="regexPhoto[index]"
              :alt="vehicle.modelName"
              class="img-fluid"
            />
          </div>
          <div class="showcase-item-info">
            <div class="showcase-item-title" :title="vehicle.modelName">
              {{ vehicle.modelName }}
            </div>
            <div class="showcase-item-price">
              {{ $filters.formatPrice(vehicle.price) }}
            </div>
          </div>
          <div class="showcase-item-city">
            <span class="badge badge-city">{{
              vehicle.location.cityName
            }}</span>
          </div>
        </div>
        <div class="showcase-item-body">
          <div class="showcase-item-badge">
            <span
              class="badge"
              v-for="prop in vehicle.properties"
              :key="prop"
              :class="prop.name === 'year' ? 'bg-danger' : 'badge-empty'"
            >
              {{ prop.value }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-if="vehicleData.length === 0" class="not-found">
      <h3>Aramanıza uygun sonuç bulamadık.</h3>
      <p>
        Dilerseniz filtrelerinizden birini kaldırıp tekrar deneyebilirsiniz.
      </p>
    </div> -->
  </div>
</template>

<style scoped></style>
