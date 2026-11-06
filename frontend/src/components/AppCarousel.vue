<template>
  <section
    class="carousel"
    :class="`carousel--${name}`"
    :data-carousel="name"
    aria-roledescription="karuzela"
    :aria-label="label"
    @keydown.left.prevent="previous"
    @keydown.right.prevent="next"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @focusin="focused = true"
    @focusout="focused = false">
    <button
      v-if="arrows"
      type="button"
      class="carousel-arrow left-arrow"
      data-prev
      :aria-label="previousLabel"
      @click="previous">
      <img src="@/assets/left-side.webp" alt="" width="17" height="30" />
    </button>
    <div ref="viewport" class="carousel-viewport">
      <div class="carousel-track">
        <slot />
      </div>
    </div>
    <button
      v-if="arrows"
      type="button"
      class="carousel-arrow right-arrow"
      data-next
      :aria-label="nextLabel"
      @click="next">
      <img src="@/assets/right-side.webp" alt="" width="17" height="30" />
    </button>
    <div v-if="dots || interval" class="carousel-controls">
      <button
        v-if="interval"
        type="button"
        class="carousel-pause"
        data-pause
        :aria-label="stopped ? 'Wznów przewijanie' : 'Zatrzymaj przewijanie'"
        :aria-pressed="stopped ? 'true' : 'false'"
        @click="stopped = !stopped">
        <span aria-hidden="true">{{ stopped ? "▶" : "❚❚" }}</span>
      </button>
      <template v-if="dots">
        <button
          v-for="index in count"
          :key="index"
          type="button"
          class="carousel-dot"
          :class="{ active: index - 1 === selected }"
          :aria-label="`Pokaż slajd ${index}`"
          :aria-current="index - 1 === selected ? 'true' : undefined"
          @click="go(index - 1)"></button>
      </template>
    </div>
  </section>
</template>

<script>
import EmblaCarousel from "embla-carousel";

/*
  Embla moves the slides, so looping, dragging and touch come from one tested code
  path. It repositions slides instead of cloning them, which is why a loop has no
  frame where a duplicate is swapped for the original.

  Autoplay stays here rather than in the Embla plugin because it has more reasons to
  wait than the plugin knows about: a pointer over the carousel, keyboard focus inside
  it, a hidden tab, the pause button and the reduced motion setting.
*/
export default {
  name: "AppCarousel",
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    arrows: { type: Boolean, default: true },
    dots: { type: Boolean, default: false },
    interval: { type: Number, default: 0 },
    options: { type: Object, default: () => ({}) },
    previousLabel: { type: String, default: "Poprzedni slajd" },
    nextLabel: { type: String, default: "Następny slajd" },
  },
  data() {
    return {
      count: 0,
      selected: 0,
      hovered: false,
      focused: false,
      stopped: false,
      hiddenTab: false,
      reducedMotion: false,
    };
  },
  computed: {
    running() {
      return (
        this.interval > 0 &&
        !this.stopped &&
        !this.hovered &&
        !this.focused &&
        !this.hiddenTab
      );
    },
  },
  watch: {
    running() {
      this.schedule();
    },
  },
  mounted() {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.reducedMotion = motion.matches;
    this.stopped = motion.matches;

    this.embla = EmblaCarousel(this.$refs.viewport, {
      loop: true,
      align: "start",
      containScroll: false,
      duration: 24,
      ...this.options,
    });
    this.count = this.embla.scrollSnapList().length;
    this.embla.on("select", this.sync);
    this.embla.on("reInit", this.sync);
    this.embla.on("pointerDown", this.schedule);
    this.embla.on("slidesInView", this.markVisible);
    this.markVisible();

    this.onVisibility = () => {
      this.hiddenTab = document.hidden;
    };
    document.addEventListener("visibilitychange", this.onVisibility);
    this.schedule();
  },
  beforeUnmount() {
    clearTimeout(this.timer);
    document.removeEventListener("visibilitychange", this.onVisibility);
    this.embla.destroy();
  },
  methods: {
    sync() {
      this.count = this.embla.scrollSnapList().length;
      this.selected = this.embla.selectedScrollSnap();
      this.schedule();
    },
    /*
      Slides outside the viewport stay in the DOM for the loop, so they are hidden from
      assistive technology while off screen.
    */
    markVisible() {
      const inView = this.embla.slidesInView();
      this.embla.slideNodes().forEach((slide, index) => {
        if (slide.hasAttribute("data-copy")) return;
        slide.setAttribute("aria-hidden", inView.includes(index) ? "false" : "true");
      });
    },
    schedule() {
      clearTimeout(this.timer);
      if (this.running) this.timer = setTimeout(this.next, this.interval);
    },
    next() {
      this.embla.scrollNext(this.reducedMotion);
    },
    previous() {
      this.embla.scrollPrev(this.reducedMotion);
    },
    go(index) {
      this.embla.scrollTo(index, this.reducedMotion);
    },
  },
};
</script>

<style src="@/styles/CarouselStyle.css"></style>
