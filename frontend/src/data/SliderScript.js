import AppCarousel from "@/components/AppCarousel.vue";

export default {
  name: "MainSlider",
  components: { AppCarousel },
  data() {
    return {
      images: [
        require("@/assets/slider1.webp"),
        require("@/assets/slider2.webp"),
        require("@/assets/slider3.webp"),
        require("@/assets/slider4.webp"),
      ],
      email: "",
      notice: "",
    };
  },
  methods: {
    /*
      This is a demonstration layout with no mail service behind it, so the form says
      so rather than pretending that the address was saved.
    */
    subscribe() {
      this.notice = "To wersja demonstracyjna: adres nie został zapisany.";
      this.email = "";
    },
  },
};
