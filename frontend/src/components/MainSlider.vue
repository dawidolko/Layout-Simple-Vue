<template>
  <section class="slider">
    <div class="slider-container">
      <AppCarousel
        class="slider-carousel"
        name="hero"
        label="Galeria zdjęć"
        dots
        :arrows="false"
        :interval="5000">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="slide"
          role="group"
          aria-roledescription="slajd"
          :aria-label="`${index + 1} z ${images.length}`">
          <img
            :src="image"
            :alt="`Zdjęcie ${index + 1} z galerii`"
            width="1600"
            height="862"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :fetchpriority="index === 0 ? 'high' : 'auto'"
            draggable="false" />
        </div>
      </AppCarousel>
      <div class="slider-text">
        <h1 class="text1">SIMPLE</h1>
        <p class="text2">- z nami biznes jest prostszy!</p>
        <p class="text3"><a href="#branze">Dowiedz się więcej</a></p>
      </div>
      <form class="newsletter-form" @submit.prevent="subscribe">
        <div class="newsletter-section">
          <img
            src="@/assets/newsletter-icon.webp"
            alt=""
            class="newsletter-icon"
            width="50"
            height="43" />
          <label class="newsletter-text" for="newsletter-email">
            <span class="desktop">Chcesz otrzymywać od nas Newsletter?</span>
            <span class="mobile">Newsletter?</span>
          </label>
          <input
            id="newsletter-email"
            v-model="email"
            type="email"
            required
            autocomplete="email"
            placeholder="Adres e-mail" />
        </div>
        <button type="submit">Zapisz się</button>
        <p v-if="notice" class="newsletter-notice" role="status">{{ notice }}</p>
      </form>
    </div>
  </section>
</template>

<script src="@/data/SliderScript.js"></script>
<style src="@/styles/SliderStyle.css"></style>
