<template>
  <section class="slider">
    <div class="slider-container">
      <div class="slides">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="slide"
          :class="{ active: index === activeIndex }">
          <img
            :src="image"
            :alt="`Zdjęcie ${index + 1} z galerii`"
            width="1920"
            height="870"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :fetchpriority="index === 0 ? 'high' : 'auto'" />
          <div class="slider-text">
            <component :is="index === activeIndex ? 'h1' : 'p'" class="text1">SIMPLE</component>
            <p class="text2">- z nami biznes jest prostszy!</p>
            <p style="text-align: right">Dowiedz się więcej</p>
          </div>
        </div>
      </div>
      <div class="newsletter-form">
        <div class="newsletter-section">
          <img
            src="@/assets/newsletter-icon.webp"
            alt="Newsletter Icon"
            class="newsletter-icon" />
          <p class="newsletter-text desktop">
            Chcesz otrzymywać od nas Newsletter?
          </p>
          <p class="newsletter-text mobile">Newsletter?</p>
          <input class="hide2" type="email" aria-label="Adres e-mail do newslettera" />
          <input class="hide" type="email" placeholder="Newsletter?" />
        </div>
        <div class="newsletter-controls">
          <div class="slider-indicators">
            <button
              v-for="(image, index) in images"
              :key="index"
              type="button"
              class="square"
              :class="{ active: index === activeIndex }"
              :aria-label="`Pokaż zdjęcie ${index + 1}`"
              :aria-current="index === activeIndex ? 'true' : undefined"
              @click="setSlide(index)"></button>
          </div>
          <button>Zapisz się</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="@/data/SliderScript.js"></script>
<style src="@/styles/SliderStyle.css"></style>
