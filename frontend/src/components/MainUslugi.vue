<template>
  <section id="uslugi" class="services">
    <div class="services-header">
      <img src="@/assets/key-icon.png" alt="Key Icon" class="icon3" />
      <h1>USŁUGI</h1>
    </div>
    <hr class="header-line" />

    <div class="services-grid">
      <div class="service-item">
        <img src="@/assets/1-icon.png" alt="Wdrożenia" class="service-icon1" />
        <p>WDROŻENIA ERP, CRM, BI</p>
      </div>
      <div class="service-item center">
        <img src="@/assets/2-icon.png" alt="Szkolenia" class="service-icon2" />
        <p>SZKOLENIA</p>
      </div>
      <div class="service-item">
        <img src="@/assets/5-icon.png" alt="Konsulting" class="service-icon3" />
        <p>KONSULTING ERP, CRM, BI</p>
      </div>
      <div class="service-item">
        <img src="@/assets/4-icon.png" alt="Doradztwo" class="service-icon4" />
        <p>DORADZTWO W ZAKRESIE INFRASTRUKTURY INFORMATYCZNEJ</p>
      </div>
      <div class="service-item">
        <img
          src="@/assets/3-icon.png"
          alt="Dofinansowanie"
          class="service-icon5" />
        <p>DOFINANSOWANIE I LEASING</p>
      </div>
    </div>

    <div
      v-for="(group, groupIndex) in serviceTextGroups"
      :key="groupIndex"
      class="services-text">
      <div v-for="(text, textIndex) in group" :key="textIndex" class="text-box">
        {{ text }}
      </div>
    </div>
  </section>
</template>

<script src="@/data/UslugiScript.js"></script>
<style src="@/styles/UslugiStyle.css"></style>
