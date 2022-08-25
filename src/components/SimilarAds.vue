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
        const test = this.loadingState.toString();
        this.$axios.get({ categoryId: test }).then((response) => {
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
          this.loading = false;
        });
      }
    },
  },
};
</script>

<template>
  <div>
    <h3>Benzer İlanlar</h3>
    <div>
      <Card :vehicleData="filteredSimilarAds" :regexPhoto="photo" />
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/components/card.scss";
</style>
