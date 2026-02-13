<template>
  <section id="branze" class="industries">
    <div class="industries-header">
      <img
        src="@/assets/settings-icon.webp"
        alt="Settings Icon"
        class="icon1" />
      <h1>BRANŻE</h1>
    </div>
    <hr class="header-line" />
    <div class="industries-grid">
      <div
        v-for="(industry, index) in industries"
        :key="index"
        class="industry-box">
        <img
          :src="industry.image"
          :alt="industry.name"
          class="industry-image" />
        <div class="overlay">
          <span>{{ industry.name }}</span>
        </div>
      </div>
    </div>
    <div class="industries-text">
      <div v-for="(text, index) in textBoxes" :key="index" class="text-box">
        {{ text }}
      </div>
    </div>
  </section>
</template>

<script src="@/data/BranzeScript.js"></script>

<style src="@/styles/BranzeStyle.css"></style>
