import AppCarousel from "@/components/AppCarousel.vue";

const TEXT = {
  date: "1.06.2013",
  title: "LOREM IPSUM",
  description: "lorem ipsum, lorem ipsum lorem ipsum lorem lorem ipsum ipsum.",
};

const NEWS = [
  { ...TEXT, image: require("@/assets/aktualnosci1.webp"), alt: "Wspinaczka skałkowa" },
  { ...TEXT, image: require("@/assets/aktualnosci2.webp"), alt: "Pracownik w kasku" },
  { ...TEXT, image: require("@/assets/aktualnosci3.webp"), alt: "Dokumenty z wykresami" },
  { ...TEXT, image: require("@/assets/aktualnosci4.webp"), alt: "Inżynier w kasku" },
];

export default {
  name: "MainAktualnosci",
  components: { AppCarousel },
  computed: {
    /*
      Four items fit on a wide screen, so a second, hidden set gives the loop room.
    */
    slides() {
      return [...NEWS, ...NEWS.map((item) => ({ ...item, copy: true }))];
    },
  },
};
