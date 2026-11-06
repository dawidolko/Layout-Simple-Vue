<template>
  <section id="aktualnosci" class="news-section">
    <div class="news-section-header">
      <img src="@/assets/reload-icon.webp" alt="" class="icon4" width="65" height="60" />
      <h2>AKTUALNOŚCI</h2>
    </div>
    <hr class="news-section-line" />
    <AppCarousel
      class="news-section-slider"
      name="news"
      label="Aktualności"
      previous-label="Poprzednia aktualność"
      next-label="Następna aktualność">
      <article
        v-for="(news, index) in slides"
        :key="index"
        class="news-section-item"
        :data-copy="news.copy ? '' : null"
        :aria-hidden="news.copy ? 'true' : null">
        <div class="news-section-image">
          <img
            :src="news.image"
            :alt="news.copy ? '' : news.alt"
            width="191"
            height="190"
            loading="lazy"
            draggable="false" />
        </div>
        <div class="news-section-content">
          <p class="news-section-date">{{ news.date }}</p>
          <p class="news-section-title">{{ news.title }}</p>
          <p class="news-section-description">{{ news.description }}</p>
        </div>
      </article>
    </AppCarousel>
  </section>
</template>

<script src="@/data/AktualnosciScript.js"></script>
<style src="@/styles/AktualnosciStyle.css"></style>
