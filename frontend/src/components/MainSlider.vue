<template>
  <section class="slider">
    <div class="slider-container">
      <div class="slides">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="slide"
          :class="{ active: index === activeIndex }">
          <img :src="image" alt="Slider Image" />
          <div class="slider-text">
            <h1 class="text1">SIMPLE</h1>
            <h1 class="text2">- z nami biznes jest prostszy!</h1>
            <p style="text-align: right">Dowiedz się więcej</p>
          </div>
        </div>
      </div>
      <div class="newsletter-form">
        <div class="newsletter-section">
          <img
            src="@/assets/newsletter-icon.png"
            alt="Newsletter Icon"
            class="newsletter-icon" />
          <p class="newsletter-text desktop">
            Chcesz otrzymywać od nas Newsletter?
          </p>
          <p class="newsletter-text mobile">Newsletter?</p>
          <input class="hide2" type="email" />
          <input class="hide" type="email" placeholder="Newsletter?" />
        </div>
        <div class="newsletter-controls">
          <div class="slider-indicators">
            <span
              v-for="(image, index) in images"
              :key="index"
              class="square"
              :class="{ active: index === activeIndex }"
              @click="setSlide(index)"></span>
          </div>
          <button>Zapisz się</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="@/data/SliderScript.js"></script>
<style src="@/styles/SliderStyle.css"></style>
