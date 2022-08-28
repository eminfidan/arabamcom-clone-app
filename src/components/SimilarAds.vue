<script>
import Card from "./Card.vue";
export default {
  name: "Similar Ads",
  components: { Card },
  data() {
    return {
      filteredSimilarAds: [],
      photo: [],
      loading: true,
      take: 20,
    };
  },
  props: {
    categoryId: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  updated() {
    this.getSimilarAds();
  },
  computed: {
    loadingState() {
      return this.categoryId;
    },
  },
  methods: {
    getSimilarAds() {
      if (this.loading) {
        const regex = /{([^}]+)}/g;
        const id = this.loadingState.toString();
        this.$axios
          .getVehicles({ params: { take: this.take, categoryId: id } })
          .then((response) => {
            const similarAds = response.data;

            this.filteredSimilarAds = similarAds.map((element) => {
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

            for (let i = 0; i < this.filteredSimilarAds.length; i++) {
              if (this.filteredSimilarAds[i].id == this.$route.params.id) {
                this.filteredSimilarAds.splice(i, 1);
                this.photo.splice(i, 1);
              }
            }

            this.loading = false;
          });
      }
    },
  },
};
</script>

<template>
  <div class="similar-ads" v-if="filteredSimilarAds.length > 0">
    <div class="similar-ads-component">
      <h3>Benzer İlanlar</h3>
      <div>
        <Card :vehicleData="filteredSimilarAds" :regexPhoto="photo" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/components/card.scss";
</style>
