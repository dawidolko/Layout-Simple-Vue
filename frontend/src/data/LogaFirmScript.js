export default {
  name: "MainLogaFirm",
  data() {
    return {
      logos: [
        require("@/assets/logo1.png"),
        require("@/assets/logo2.png"),
        require("@/assets/logo3.png"),
        require("@/assets/logo4.png"),
        require("@/assets/logo5.png"),
      ],
      currentSlide: 0,
      transitionEnabled: true,
      isAnimating: false,
      slideDirection: null,
    };
  },
  methods: {
    nextSlide() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.slideDirection = "next";
      this.transitionEnabled = true;
      this.currentSlide = 1;
    },
    prevSlide() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.slideDirection = "prev";
      this.transitionEnabled = false;
      this.currentSlide = -1;
      const lastLogo = this.logos.pop();
      this.logos.unshift(lastLogo);
      this.$nextTick(() => {
        void this.$refs.wrapper.offsetWidth;
        this.transitionEnabled = true;
        this.currentSlide = 0;
      });
    },
    handleTransitionEnd() {
      if (this.slideDirection === "next" && this.currentSlide === 1) {
        this.transitionEnabled = false;
        const firstLogo = this.logos.shift();
        this.logos.push(firstLogo);
        this.currentSlide = 0;
        this.$nextTick(() => {
          void this.$refs.wrapper.offsetWidth;
          this.transitionEnabled = true;
          this.isAnimating = false;
          this.slideDirection = null;
        });
      } else if (this.slideDirection === "prev" && this.currentSlide === 0) {
        this.isAnimating = false;
        this.slideDirection = null;
      } else {
        this.isAnimating = false;
        this.slideDirection = null;
      }
    },
  },
};
