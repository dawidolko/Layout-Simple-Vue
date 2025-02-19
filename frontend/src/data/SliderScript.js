export default {
  name: "MainSlider",
  data() {
    return {
      images: [
        require("@/assets/slider1.png"),
        require("@/assets/slider2.webp"),
        require("@/assets/slider3.webp"),
        require("@/assets/slider4.webp"),
      ],
      activeIndex: 0,
    };
  },
  methods: {
    setSlide(index) {
      this.activeIndex = index;
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    },
  },
  mounted() {
    setInterval(this.nextSlide, 5000);
  },
};
