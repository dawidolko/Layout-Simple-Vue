import AppCarousel from "@/components/AppCarousel.vue";

const LOGOS = [
  { src: require("@/assets/logo1.webp"), name: "Vision Express", width: 211, height: 39 },
  { src: require("@/assets/logo2.webp"), name: "Bell", width: 98, height: 80 },
  { src: require("@/assets/logo3.webp"), name: "Ernst & Young", width: 200, height: 53 },
  { src: require("@/assets/logo4.webp"), name: "Ministerstwo Zdrowia", width: 116, height: 82 },
  { src: require("@/assets/logo5.webp"), name: "TNT", width: 102, height: 70 },
];

export default {
  name: "MainLogaFirm",
  components: { AppCarousel },
  computed: {
    /*
      A loop needs more slides than fit on screen. The second set is hidden from
      assistive technology, so the logos are announced once.
    */
    slides() {
      return [...LOGOS, ...LOGOS.map((logo) => ({ ...logo, copy: true }))];
    },
  },
};
