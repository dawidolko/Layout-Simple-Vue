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
          <li><a href="#aktualnosci">Aktywności</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
          <li><a href="#referencje">Referencje</a></li>
        </ul>
      </div>
      <div class="search-container">
        <img
          src="@/assets/search-icon.webp"
          alt="Search"
          class="search-icon"
          @click="toggleSearch" />
        <input
          type="text"
          class="search-input"
          :class="{ expanded: showSearch }"
          placeholder="Szukaj..." />
      </div>
    </div>
  </nav>
</template>

<script src="@/data/NavbarScript.js"></script>
<style src="@/styles/NavbarStyle.css"></style>
