<script>
export default {
  data() {
    return {
      vehicleDetail: [],
      detailPhotos: [],
      userInfo: {},
      location: {},
    };
  },
  created() {
    this.getVehicleDetail(this.$route.params.id);
  },
  methods: {
    getVehicleDetail() {
      const regex = /{([^}]+)}/g;
      this.$axios.getDetail({ id: this.$route.params.id }).then((response) => {
        this.vehicleDetail = response.data;
        this.userInfo = response.data.userInfo;
        this.location = response.data.location;
        this.detailPhotos = response.data.photos.map((p) => {
          const imgSize = p.replace(regex, "800x600");
          return imgSize;
        });
      });
    },
    // translateProperties() {
    //   switch (this.vehicleDetail.properties.name) {
    //     case "km":
    //       return "Kilometre";
    //     case "color":
    //       return "Renk";
    //     case "year":
    //       return "Yıl";
    //     case "gear":
    //       return "Vites";
    //     case "fuel":
    //       return "Yakıt";
    //   }
    // },
  },
};
</script>

<template>
  <div class="showcase-detail row">
    <div class="showcase-detail-visual col-lg-8">
      <div
        class="showcase-detail-visual-img-wrapper"
        v-for="photo in detailPhotos"
        :key="photo"
      >
        <img :src="photo" :alt="vehicleDetail.modelName" />
      </div>
      <div
        class="showcase-detail-visual-description"
        v-html="vehicleDetail.text"
      ></div>
    </div>
    <div class="showcase-detail-info col-lg-4">
      <div class="showcase-detail-info-model">
        <div class="showcase-detail-info-model-name">
          {{ vehicleDetail.modelName }}
        </div>
        <div class="showcase-detail-info-model-properties">
          <div
            class="showcase-detail-info-model-properties-keys"
            v-for="prop in vehicleDetail.properties"
            :key="prop"
          >
            {{ prop.value }}
            <span
              class="showcase-detail-info-model-properties-keys-circle"
            ></span>
          </div>
        </div>
      </div>
      <div class="showcase-detail-info-location">
        {{ location.townName }} /
        {{ location.cityName }}
      </div>
      <div class="showcase-detail-info-price">
        {{ vehicleDetail.priceFormatted }}
      </div>
      <div class="showcase-detail-info-card">
        <div v-for="prop in vehicleDetail.properties" :key="prop">
          {{ prop.name }}: {{ prop.value }}
        </div>
      </div>
      <div class="showcase-detail-info-seller">
        <div class="showcase-detail-info-seller-info">
          <div class="showcase-detail-info-seller-info-text">
            <div class="showcase-detail-info-seller-info-contact">Satıcı:</div>
            <div class="showcase-detail-info-seller-info-name">
              {{ userInfo.nameSurname }}
            </div>
          </div>

          <button class="showcase-detail-info-seller-info-button">
            {{ userInfo.phoneFormatted }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/pages/detail.scss";
</style>
