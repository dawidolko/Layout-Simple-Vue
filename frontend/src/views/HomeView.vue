<template>
  <div class="home">
    <MainNavbar />
    <MainSidebar />
    <MainSlider />
    <MainBranze />
    <MainProdukty />
    <MainUslugi />
    <MainAktualnosci />
    <MainFooter />
    <MainLogaFirm />
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
