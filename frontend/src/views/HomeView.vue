<template>
  <div class="home">
    <!--
      First focusable element: lets a keyboard user skip the navigation and
      land on the page content.
    -->
    <a class="skip-link" href="#main-content">Przejdź do treści</a>
    <header>
      <MainNavbar />
      <MainSidebar />
    </header>
    <main id="main-content" tabindex="-1">
      <MainSlider />
      <MainBranze />
      <MainProdukty />
      <MainUslugi />
      <MainAktualnosci />
    </main>
    <footer>
      <MainFooter />
      <MainLogaFirm />
    </footer>
  </div>
</template>

<script>
import MainNavbar from "@/components/MainNavbar.vue";
import MainSidebar from "@/components/MainSidebar.vue";
import MainSlider from "@/components/MainSlider.vue";
import MainBranze from "@/components/MainBranze.vue";
import MainProdukty from "@/components/MainProdukty.vue";
import MainUslugi from "@/components/MainUslugi.vue";
import MainAktualnosci from "@/components/MainAktualnosci.vue";
import MainFooter from "@/components/MainFooter.vue";
import MainLogaFirm from "@/components/MainLogaFirm.vue";

export default {
  name: "Home",
  components: {
    MainNavbar,
    MainSidebar,
    MainSlider,
    MainBranze,
    MainProdukty,
    MainUslugi,
    MainAktualnosci,
    MainFooter,
    MainLogaFirm,
  },
};
</script>

<style scoped></style>
