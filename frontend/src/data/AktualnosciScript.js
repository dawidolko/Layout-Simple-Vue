export default {
  name: "MainAktualnosci",
  data() {
    return {
      // Główna tablica elementów
      newsItems: [
        {
          image: require("@/assets/aktualnosci1.png"),
          date: "1.06.2013",
          title: "LOREM IPSUM",
          description:
            "lorem ipsum, lorem ipsum lorem ipsum lorem lorem ipsum ipsum.",
        },
        {
          image: require("@/assets/aktualnosci2.png"),
          date: "1.06.2013",
          title: "LOREM IPSUM",
          description:
            "lorem ipsum, lorem ipsum lorem ipsum lorem lorem ipsum ipsum.",
        },
        {
          image: require("@/assets/aktualnosci3.png"),
          date: "1.06.2013",
          title: "LOREM IPSUM",
          description:
            "lorem ipsum, lorem ipsum lorem ipsum lorem lorem ipsum ipsum.",
        },
        {
          image: require("@/assets/aktualnosci4.png"),
          date: "1.06.2013",
          title: "LOREM IPSUM",
          description:
            "lorem ipsum, lorem ipsum lorem ipsum lorem lorem ipsum ipsum.",
        },
      ],
      currentSlide: 0,
      transitionEnabled: true,
      isAnimating: false,
      slideDirection: null,
      isMobile: false,
    };
  },
  computed: {
    // Podstawowe wyświetlanie elementów
    newsLoop() {
      return this.newsItems;
    },
    // Styl przesunięcia slajdera w zależności od urządzenia
    wrapperStyle() {
      if (this.isMobile) {
        return {
          width: `${this.newsLoop.length * 100}%`,
          transform: `translateX(calc(-${this.currentSlide * 100}% + 250px))`,
          transition: this.transitionEnabled
            ? "transform 0.5s ease-in-out"
            : "none",
        };
      } else {
        return {
          width: `${this.newsLoop.length * 25}%`,
          transform: `translateX(-${this.currentSlide * 25}%)`,
          transition: this.transitionEnabled
            ? "transform 0.5s ease-in-out"
            : "none",
        };
      }
    },
  },
  methods: {
    // Przesunięcie w prawo
    nextNewsSlide() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.slideDirection = "next";
      this.transitionEnabled = true;
      this.currentSlide++;
    },

    // Przesunięcie w lewo
    prevNewsSlide() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.slideDirection = "prev";
      this.transitionEnabled = true;
      this.currentSlide--;
    },

    // Obsługa końca animacji
    handleTransitionEnd() {
      // Ruch w prawo
      if (this.slideDirection === "next" && this.currentSlide === 1) {
        this.transitionEnabled = false;
        const firstItem = this.newsItems.shift();
        this.newsItems.push(firstItem);
        this.currentSlide = 0;
        this.$nextTick(() => {
          // Wymuszenie reflow, aby przeglądarka "zauważyła" brak animacji
          void this.$refs.wrapper.offsetWidth;
          this.transitionEnabled = true;
          this.isAnimating = false;
          this.slideDirection = null;
        });
      }
      // Ruch w lewo
      else if (this.slideDirection === "prev" && this.currentSlide === -1) {
        this.transitionEnabled = false;
        const lastItem = this.newsItems.pop();
        this.newsItems.unshift(lastItem);
        this.currentSlide = 0;
        this.$nextTick(() => {
          void this.$refs.wrapper.offsetWidth;
          this.transitionEnabled = true;
          this.isAnimating = false;
          this.slideDirection = null;
        });
      }
      // Gdy nic nie pasuje (lub zaistnieje inny stan)
      else {
        this.isAnimating = false;
        this.slideDirection = null;
      }
    },

    // Sprawdzenie szerokości ekranu
    checkIsMobile() {
      this.isMobile = window.innerWidth < 635;
    },
  },
  mounted() {
    this.checkIsMobile();
    window.addEventListener("resize", this.checkIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkIsMobile);
  },
};
