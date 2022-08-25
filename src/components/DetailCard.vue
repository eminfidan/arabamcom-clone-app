<script>
import SimilarAds from "./SimilarAds.vue";
export default {
  components: { SimilarAds },
  data() {
    return {
      vehicleDetail: [],
      detailPhotos: [],
      userInfo: {},
      location: {},
      brand: "",
      engWord: {
        km: "Kilometre",
        color: "Renk",
        year: "Yıl",
        gear: "Vites",
        fuel: "Yakıt",
      },
      categoryId: "",
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
        this.categoryId = response.data.category.id;
        this.userInfo = response.data.userInfo;
        this.location = response.data.location;
        this.detailPhotos = response.data.photos.map((p) => {
          const imgSize = p.replace(regex, "800x600");
          return imgSize;
        });
        this.brand = this.vehicleDetail.category.name.split(/[/-]/)[1];
      });
    },
  },
};
</script>

<template>
  <div class="showcase-detail row">
    <div class="showcase-detail-visual col-lg-8">
      <div class="showcase-detail-visual-title">
        <div class="showcase-detail-visual-title-header">
          {{ vehicleDetail.title }}
        </div>
      </div>

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

      <SimilarAds :categoryId="categoryId.toString()" />
    </div>
    <div class="showcase-detail-info col-lg-4">
      <div class="showcase-detail-info-model">
        <a href="#" class="showcase-detail-info-model-brand">{{ brand }}</a>
        <div class="showcase-detail-info-model-name">
          {{ vehicleDetail.modelName }}
        </div>
        <div class="showcase-detail-info-model-properties">
          <div
            class="showcase-detail-info-model-properties-keys"
            v-for="prop in vehicleDetail.properties"
            :key="prop"
          >
            <div
              class="showcase-detail-info-model-properties-item-year"
              v-if="prop.name === 'year'"
            >
              {{ prop.value }}
            </div>
          </div>
          <div class="showcase-detail-info-model-properties-item-location">
            {{ location.cityName }} / {{ location.townName }}
          </div>
        </div>
      </div>

      <div class="showcase-detail-info-price">
        {{ vehicleDetail.priceFormatted }}
      </div>

      <div class="showcase-detail-info-card">
        <ul class="list-group">
          <li
            v-for="prop in vehicleDetail.properties"
            :key="prop"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            {{ engWord[prop.name] }}
            <span class="badge rounded-pill">{{ prop.value }}</span>
          </li>
        </ul>
      </div>

      <div class="showcase-detail-info-seller">
        <div class="showcase-detail-info-seller-info">
          <button class="showcase-detail-info-seller-info-button">
            {{ userInfo.phoneFormatted }}
          </button>
          <div class="showcase-detail-info-seller-info-text">
            <div class="showcase-detail-info-seller-info-contact">Satıcı:</div>
            <div class="showcase-detail-info-seller-info-name">
              {{ userInfo.nameSurname }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/pages/detail.scss";
</style>
