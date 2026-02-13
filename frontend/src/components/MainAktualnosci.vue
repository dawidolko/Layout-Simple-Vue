<template>
  <section id="aktualnosci" class="news-section">
    <div class="news-section-header">
      <img src="@/assets/reload-icon.webp" alt="Reload Icon" class="icon4" />
      <h1>AKTUALNOŚCI</h1>
    </div>
    <hr class="news-section-line" />
    <div class="news-section-slider">
      <button class="news-arrow left-arrow" @click="prevNewsSlide">
        <img src="@/assets/left-side.webp" alt="Left Arrow" />
      </button>
      <div class="news-slider-container">
        <div
          ref="wrapper"
          class="news-slides-wrapper"
          :style="wrapperStyle"
          @transitionend="handleTransitionEnd">
          <div
            v-for="(news, index) in newsLoop"
            :key="index"
            class="news-section-item">
            <div class="news-section-image">
              <img :src="news.image" :alt="news.title" />
            </div>
            <div class="news-section-content">
              <p class="news-section-date">{{ news.date }}</p>
              <p class="news-section-title">{{ news.title }}</p>
              <p class="news-section-description">{{ news.description }}</p>
              <hr class="news-section-hr" v-if="!isMobile" />
              <p class="news-section-more" v-if="!isMobile">więcej</p>
            </div>
          </div>
        </div>
      </div>
      <button class="news-arrow right-arrow" @click="nextNewsSlide">
        <img src="@/assets/right-side.webp" alt="Right Arrow" />
      </button>
    </div>
  </section>
</template>

<script src="@/data/AktualnosciScript.js"></script>
<style src="@/styles/AktualnosciStyle.css"></style>
