<template>
  <section id="produkty" class="products">
    <div class="products-header">
      <img src="@/assets/folder-icon.png" alt="Folder Icon" class="icon" />
      <h1>PRODUKTY</h1>
    </div>
    <hr class="header-line1" />
    <div class="products-text">
      <p>{{ productTexts[0] }}</p>
      <p>{{ productTexts[1] }}</p>
    </div>
    <div class="products-grid">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-circle">
        <span>{{ product.name }}</span>
      </div>
    </div>
    <div class="products-grid2">
      <div v-for="(product, index) in products" :key="index">
        <span>{{ product.name }}</span>
      </div>
    </div>
  </section>
</template>

<script src="@/data/ProduktyScript.js"></script>
<style src="@/styles/ProduktyStyle.css"></style>
