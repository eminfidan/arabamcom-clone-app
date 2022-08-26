<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="../assets/arabamcom.gif" alt="Arabam.com Logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Anasayfa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/showcase">Vitrin</a>
          </li>
        </ul>
        <span class="navbar-text">
          2. El ve 0 Km Satılık Araç İlanları Platformu
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/styles/components/navbar.scss";
</style>
