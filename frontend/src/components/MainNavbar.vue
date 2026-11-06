<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <div class="center-section">
        <div class="logo-container">
          <img src="@/assets/logo-icon.webp" alt="Logo" class="logo1" />
        </div>
        <ul class="nav-links">
          <li><a href="#branze">Branże</a></li>
          <li><a href="#produkty">Produkty</a></li>
          <li><a href="#uslugi">Usługi</a></li>
          <li><a href="#aktualnosci">Aktualności</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
          <li><a href="#referencje">Referencje</a></li>
        </ul>
      </div>
      <div class="search-container">
        <button
          type="button"
          class="search-button"
          aria-label="Szukaj"
          :aria-expanded="showSearch ? 'true' : 'false'"
          @click="toggleSearch">
          <img src="@/assets/search-icon.webp" alt="" class="search-icon" />
        </button>
        <input
          ref="search"
          type="search"
          class="search-input"
          :class="{ expanded: showSearch }"
          placeholder="Szukaj..." aria-label="Szukaj w serwisie" />
      </div>
    </div>
  </nav>
</template>

<script src="@/data/NavbarScript.js"></script>
<style src="@/styles/NavbarStyle.css"></style>
