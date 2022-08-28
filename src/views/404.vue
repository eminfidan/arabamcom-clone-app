<template>
  <div class="page-404">
    <h1>404</h1>
    <p>Üzgünüz, erişmek istediğiniz sayfa sitemizde bulunmuyor.</p>
    <span>Sayfa başka bir adrese taşınmış ya da silinmiş olabilir.</span>
    <span>Tarayıcınıza yanlış adres yazmış olabilirsiniz.</span>
    <button @click="$router.push({ path: '/' })">Anasayfa</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/styles/pages/404.scss";
</style>
