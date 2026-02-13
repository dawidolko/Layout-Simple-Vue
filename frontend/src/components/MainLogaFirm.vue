<template>
  <section id="loga-firm" class="logos-slider">
    <button class="arrow left-arrow" @click="prevSlide">
      <img src="@/assets/left-side.webp" alt="Left Arrow" />
    </button>
    <div class="logos-container">
      <div
        ref="wrapper"
        class="logos-wrapper"
        :style="{
          transform: `translateX(${currentSlide * -20}%)`,
          transition: transitionEnabled ? 'transform 0.5s ease' : 'none',
        }"
        @transitionend="handleTransitionEnd">
        <div class="logo" v-for="(logo, index) in logos" :key="index">
          <img :src="logo" alt="Company Logo" />
        </div>
      </div>
    </div>
    <button class="arrow right-arrow" @click="nextSlide">
      <img src="@/assets/right-side.webp" alt="Right Arrow" />
    </button>
  </section>
</template>

<script src="@/data/LogaFirmScript.js"></script>
<style src="@/styles/LogaFirmStyle.css"></style>
