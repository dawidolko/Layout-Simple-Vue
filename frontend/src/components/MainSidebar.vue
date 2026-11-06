<template>
  <aside class="sidebar" :class="{ collapsed: isCollapsed === true, expanded: isCollapsed === false }">
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
          <li><a href="#branze">O firmie</a></li>
          <li><a href="#referencje">Nagrody</a></li>
          <li><a href="#kontakt">Relacje inwestorskie</a></li>
          <li><a href="#referencje">Partnerzy</a></li>
          <li><a href="#kontakt">Kariera</a></li>
          <li><a href="#kontakt">Strefa klienta</a></li>
        </ul>
      </div>
      <hr style="max-width: 75%; margin-bottom: 30px" />
      <div class="section social">
        <img
          src="@/assets/fb-icon.webp"
          alt="Facebook"
          class="social-icon"
          style="width: 14px" />
        <img
          src="@/assets/linkedin-icon.webp"
          alt="LinkedIn"
          class="social-icon" />
      </div>
    </div>
    <button
      class="toggle-button"
      type="button"
      aria-label="Menu boczne"
      :aria-expanded="isCollapsed === false ? 'true' : isCollapsed === true ? 'false' : undefined"
      @click="toggleSidebar">
      <span class="toggle-close" aria-hidden="true">&#9664;</span>
      <span class="toggle-open" aria-hidden="true">&#9654;</span>
    </button>
  </aside>
</template>

<script src="@/data/SidebarScript.js"></script>
<style src="@/styles/SidebarStyle.css"></style>
