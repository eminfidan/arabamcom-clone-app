<template>
  <Navbar />
  <div class="homepage">
    <div class="hero">
      <h1>2. El ve 0 Km Satılık <span>Araç</span> İlanları Platformu</h1>
      <p>İhtiyaçlarınıza ve finansmanınıza en uygun aracı hemen bulun!</p>
      <button class="hero-button" @click="$router.push({ name: 'Showcase' })">
        Vitrine Git
      </button>
    </div>
    <div class="homepage-section">
      <h2>Neden biz?</h2>
      <div class="homepage-section-choose row">
        <div class="homepage-section-choose-card order-1">
          <font-awesome-icon icon="fa-solid fa-award" />
          <h4>Marka</h4>
          <p>
            Platformumuzda sunduğumuz geniş marka yelpazesi ile ihtiyaçlarınıza
            ve finansınıza en uygun aracı bulmanıza yardımcı oluyoruz.
          </p>
        </div>
        <div class="homepage-section-choose-card order-2">
          <font-awesome-icon icon="fa-solid fa-people-group" />
          <h4>Güven</h4>
          <p>
            Müşterilerimiz tarafından güvenle tercih ediliyoruz. 7/24 aktif
            çağrı merkezimiz ile müşterilerimize yüksek kalite hizmet sunuyoruz.
          </p>
        </div>
        <div class="homepage-section-choose-card order-3">
          <font-awesome-icon icon="fa-solid fa-money-bills" />
          <h4>Finansman</h4>
          <p>
            Finansman planınıza yardımcı olabiliriz, bazı ipuçları ve püf
            noktaları sunabiliriz. Kredi geçmişiniz ne olursa olsun, rüya
            arabanızla yola çıkın.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/TheNavbar.vue";
import Footer from "../components/TheFooter.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/pages/home.scss";
</style>
