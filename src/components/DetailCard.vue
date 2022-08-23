<script>
export default {
  data() {
    return {
      vehicleDetail: [],
    };
  },
  created() {
    this.getVehicleDetail(this.$route.params.id);
  },
  methods: {
    getVehicleDetail() {
      this.$axios.getDetail({ id: this.$route.params.id }).then((response) => {
        this.vehicleDetail = response.data;
      });
    },
  },
};
</script>

<template>
  {{ vehicleDetail }}
</template>

<style></style>
