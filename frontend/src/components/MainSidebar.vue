<template>
  <aside class="sidebar" :class="{ collapsed: isCollapsed }">
    <div class="sidebar-content">
      <div class="section">
        <h2>Menu</h2>
      </div>
      <hr style="max-width: 75%; margin-bottom: 20px" />
      <div class="section">
        <ul>
          <li><a href="#branze">Branże</a></li>
          <li><a href="#produkty">Produkty</a></li>
          <li><a href="#uslugi">Usługi</a></li>
          <li><a href="#aktualnosci">Aktualności</a></li>
          <li><a href="#referencje">Referencje</a></li>
          <li style="margin-bottom: 0px"><a href="#kontakt">Kontakt</a></li>
        </ul>
      </div>
      <hr style="max-width: 75%; margin-bottom: 20px" />
      <div class="section">
        <ul>
          <li><a href="#ofirmie">O firmie</a></li>
          <li><a href="#nagrody">Nagrody</a></li>
          <li><a href="#relacje">Relacje inwestorskie</a></li>
          <li><a href="#partnerzy">Partnerzy</a></li>
          <li><a href="#kariera">Kariera</a></li>
          <li><a href="#stefaklienta">Strefa klienta</a></li>
        </ul>
      </div>
      <hr style="max-width: 75%; margin-bottom: 30px" />
      <div class="section social">
        <img
          src="@/assets/fb-icon.png"
          alt="Facebook"
          class="social-icon"
          style="width: 14px" />
        <img
          src="@/assets/linkedin-icon.png"
          alt="LinkedIn"
          class="social-icon" />
      </div>
    </div>
    <button class="toggle-button" @click="toggleSidebar">
      <span v-if="!isCollapsed">&#9664;</span>
      <span v-else>&#9654;</span>
    </button>
  </aside>
</template>

<script src="@/data/SidebarScript.js"></script>
<style src="@/styles/SidebarStyle.css"></style>
