<template>
  <section id="referencje" class="logos-slider">
    <AppCarousel
      name="logos"
      label="Logotypy firm"
      previous-label="Poprzednie logo"
      next-label="Następne logo">
      <div
        v-for="(logo, index) in slides"
        :key="index"
        class="logo"
        :data-copy="logo.copy ? '' : null"
        :aria-hidden="logo.copy ? 'true' : null">
        <img
          :src="logo.src"
          :alt="logo.copy ? '' : logo.name"
          :width="logo.width"
          :height="logo.height"
          loading="lazy"
          draggable="false" />
      </div>
    </AppCarousel>
  </section>
</template>

<script src="@/data/LogaFirmScript.js"></script>
<style src="@/styles/LogaFirmStyle.css"></style>
