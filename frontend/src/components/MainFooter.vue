<template>
  <section id="kontakt" class="footer" aria-labelledby="kontakt-heading">
    <div class="footer-header">
      <img src="@/assets/footer-icon.webp" alt="" class="icon5" />
      <h2 id="kontakt-heading">KONTAKT</h2>
    </div>
    <hr style="margin-top: 50px" class="header-line-footer" />
    <div class="contact-info static">
      <div v-for="office in offices" :key="office.name" class="contact-box">
        <p>{{ office.name }}</p>
        <p
          v-for="(line, index) in office.lines"
          :key="index"
          :class="{ margin: line.gap }">
          {{ line.text }}
        </p>
      </div>
    </div>
    <AppCarousel
      class="contact-info contact-carousel"
      name="contact"
      label="Adresy biur"
      previous-label="Poprzednie biuro"
      next-label="Następne biuro"
      :options="{ align: 'center' }">
      <div v-for="office in offices" :key="office.name" class="contact-box">
        <p>{{ office.name }}</p>
        <p
          v-for="(line, index) in office.lines"
          :key="index"
          :class="{ margin: line.gap }">
          {{ line.text }}
        </p>
      </div>
    </AppCarousel>

    <hr class="header-line-footer" />
    <div class="contact-sections">
      <div class="contact-form">
        <p class="pytanie" style="margin-bottom: 20px">ZADAJ PYTANIE</p>
        <p class="mobile">simple@simple.com.pl</p>
        <form @submit.prevent="sendQuestion">
          <input type="text" placeholder="Imię i nazwisko" aria-label="Imię i nazwisko" autocomplete="name" required />
          <input type="email" placeholder="Email" aria-label="Adres e-mail" autocomplete="email" required />
          <input type="tel" placeholder="Telefon" aria-label="Numer telefonu" autocomplete="tel" />
          <input type="text" placeholder="Temat" aria-label="Temat wiadomości" />
          <textarea placeholder="Treść pytania" aria-label="Treść pytania" required></textarea>
          <p>Wybierz rodzaj prezentacji</p>
          <div class="checkboxes-button">
            <div class="checkboxes">
              <label>
                <input style="width: 30px" type="checkbox" /> W siedzibie
              </label>
              <label>
                <input
                  style="width: 30px; margin-left: 10px"
                  type="checkbox" />Multimedialna
              </label>
            </div>
            <button class="send" type="submit">Wyślij</button>
          </div>
          <p v-if="notice" class="form-notice" role="status">{{ notice }}</p>
        </form>
      </div>
      <div class="social-media">
        <p style="text-align: center; margin-bottom: 20px">SOCIAL MEDIA</p>
        <img class="facebook" src="@/assets/fb2-icon.webp" alt="Facebook" />
        <img src="@/assets/twitter-icon.webp" alt="Twitter" />
        <img src="@/assets/google-icon.webp" alt="Google" />
        <img src="@/assets/linkedin2-icon.webp" alt="LinkedIn" />
      </div>
      <div class="jobs">
        <p style="text-align: left; margin-bottom: 20px">PRACA</p>
        <p class="paragraph">
          Zainteresowane osoby prosimy o przesłanie CV wraz z listem
          motywacyjnym na adres:
        </p>
        <p class="paragraph"><a href="mailto:praca@simple.com.pl">praca@simple.com.pl</a></p>
        <p class="hover">
          <a href="mailto:praca@simple.com.pl">Zobacz nasze oferty...</a>
        </p>
      </div>
    </div>
    <hr class="header-line-footer" />
    <p class="back-to-top hover"><a href="#main-content">Powrót na górę strony</a></p>
  </section>
</template>

<script src="@/data/FooterScript.js"></script>
<style src="@/styles/FooterStyle.css"></style>
