<script>
import SimilarAds from "./SimilarAds.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import LoadingSpinner from "./LoadingSpinner.vue";
SwiperCore.use([Navigation]);

export default {
  components: { SimilarAds, Swiper, SwiperSlide, LoadingSpinner },
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
      showPhone: false,
      loadingDetail: true,
    };
  },
  created() {
    this.getVehicleDetail(this.$route.params.id);
  },
  methods: {
    getVehicleDetail() {
      const regex = /{([^}]+)}/g;
      this.$axios
        .getVehicleDetail({ id: this.$route.params.id })
        .then((response) => {
          this.vehicleDetail = response.data;
          this.categoryId = response.data.category.id;
          this.userInfo = response.data.userInfo;
          this.location = response.data.location;
          this.detailPhotos = response.data.photos.map((p) => {
            const imgSize = p.replace(regex, "800x600");
            return imgSize;
          });
          this.brand = this.vehicleDetail.category.name.split(/[/-]/)[1];
          this.loadingDetail = false;
        });
    },
  },
};
</script>

<template>
  <LoadingSpinner v-if="loadingDetail" />
  <div class="showcase-detail row" v-else>
    <div class="showcase-detail-visual col-lg-8">
      <div class="showcase-detail-visual-title">
        <div class="showcase-detail-visual-title-header">
          {{ vehicleDetail.title }}
        </div>
      </div>

      <swiper
        :loop="true"
        :spaceBetween="10"
        :slidesPerView="1"
        :navigation="true"
        class="showcase-swiper"
      >
        <swiper-slide v-for="photo in detailPhotos" :key="photo">
          <div class="swiper-image">
            <div class="swiper-image-container">
              <div class="swiper-image-wrapper">
                <img :src="photo" :alt="vehicleDetail.modelName" />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <div class="showcase-detail-visual-description-title">
        İlan Açıklaması
      </div>

      <div
        class="showcase-detail-visual-description"
        v-html="vehicleDetail.text"
      ></div>
    </div>
    <div class="showcase-detail-info col-lg-4">
      <div class="showcase-detail-info-model">
        <div class="showcase-detail-info-model-brand">{{ brand }}</div>
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
        {{ $filters.formatPrice(vehicleDetail.price) }}
      </div>

      <div class="showcase-detail-info-card">
        <ul class="list-group">
          <li
            v-for="prop in vehicleDetail.properties"
            :key="prop"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            {{ engWord[prop.name] }}
            <span class="badge rounded-pill">{{
              prop.value ? prop.value : "Belirtilmemiş"
            }}</span>
          </li>
        </ul>
      </div>

      <div class="showcase-detail-info-seller">
        <div
          class="showcase-detail-info-seller-info"
          v-if="userInfo.phoneFormatted"
        >
          <button class="showcase-detail-info-seller-info-button">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <div v-if="showPhone">{{ userInfo.phoneFormatted }}</div>
            <div v-else @click="showPhone = true">Telefonu Göster</div>
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
  <div class="row showcase-detail-visual-similar-ads">
    <div class="showcase-detail-visual-similar-ads-component col-lg-12">
      <SimilarAds :categoryId="categoryId.toString()" />
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/pages/detail.scss";
</style>
