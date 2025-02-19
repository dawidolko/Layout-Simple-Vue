<template>
  <footer id="kontakt" class="footer">
    <div class="footer-header">
      <img src="@/assets/footer-icon.png" alt="Footer Icon" class="icon5" />
      <h1>KONTAKT</h1>
    </div>
    <hr style="margin-top: 50px" class="header-line-footer" />
    <div class="contact-info static">
      <div class="contact-box">
        <p>SIMPLE S.A.</p>
        <p class="margin">ul. Bronisława Czecha 49/51</p>
        <p>04-555 Warszawa</p>
        <p class="margin">tel.: (22) 812-58-98</p>
        <p>fax.: (22) 815-49-83</p>
        <p class="margin">simple@simple.com.pl</p>
      </div>
      <div class="contact-box">
        <p>SIMPLE S.A. - Ośrodek Badawczo-Rozwojowy Lublin</p>
        <p class="margin">ul. Wolska 11A/4</p>
        <p>20-411 Lublin</p>
        <p class="margin">tel. kom: +48 696 001 286</p>
        <p class="margin">lublin@simple.com.pl</p>
      </div>
      <div class="contact-box">
        <p>SIMPLE S.A. - Oddział Rzeszów</p>
        <p class="margin">ul. Rejtana 53A</p>
        <p>35-326 Rzeszów</p>
        <p class="margin">tel. kom.: +48 696 001 235</p>
        <p>fax.: (17) 865 42 41</p>
        <p class="margin">rzeszow@simple.com.pl</p>
      </div>
    </div>
    <div class="contact-info slider">
      <button class="contact-arrow left-arrow" @click="prevContactSlide">
        <img src="@/assets/left-side.png" alt="Left Arrow" />
      </button>
      <div class="contact-slider-container">
        <div
          class="contact-slides-wrapper"
          :style="{ transform: 'translateX(-' + contactIndex * 100 + '%)' }">
          <div class="contact-box">
            <p>SIMPLE S.A.</p>
            <p class="margin">ul. Bronisława Czecha 49/51</p>
            <p>04-555 Warszawa</p>
            <p class="margin">tel.: (22) 812-58-98</p>
            <p>fax.: (22) 815-49-83</p>
            <p class="margin">simple@simple.com.pl</p>
          </div>
          <div class="contact-box">
            <p>SIMPLE S.A. - Ośrodek Badawczo-Rozwojowy Lublin</p>
            <p class="margin">ul. Wolska 11A/4</p>
            <p>20-411 Lublin</p>
            <p class="margin">tel. kom: +48 696 001 286</p>
            <p class="margin">lublin@simple.com.pl</p>
          </div>
          <div class="contact-box">
            <p>SIMPLE S.A. - Oddział Rzeszów</p>
            <p class="margin">ul. Rejtana 53A</p>
            <p>35-326 Rzeszów</p>
            <p class="margin">tel. kom.: +48 696 001 235</p>
            <p>fax.: (17) 865 42 41</p>
            <p class="margin">rzeszow@simple.com.pl</p>
          </div>
        </div>
      </div>
      <button class="contact-arrow right-arrow" @click="nextContactSlide">
        <img src="@/assets/right-side.png" alt="Right Arrow" />
      </button>
    </div>

    <hr class="header-line-footer" />
    <div class="contact-sections">
      <div class="contact-form">
        <p class="pytanie" style="margin-bottom: 20px">ZADAJ PYTANIE</p>
        <p class="mobile">simple@simple.com.pl</p>
        <form>
          <input type="text" placeholder="Imię i nazwisko" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Telefon" />
          <input type="text" placeholder="Temat" />
          <textarea placeholder="Treść pytania"></textarea>
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
        </form>
      </div>
      <div class="social-media">
        <p style="text-align: center; margin-bottom: 20px">SOCIAL MEDIA</p>
        <img class="facebook" src="@/assets/fb2-icon.png" alt="Facebook" />
        <img src="@/assets/twitter-icon.png" alt="Twitter" />
        <img src="@/assets/google-icon.png" alt="Google" />
        <img src="@/assets/linkedin2-icon.png" alt="LinkedIn" />
      </div>
      <div class="jobs">
        <p style="text-align: left; margin-bottom: 20px">PRACA</p>
        <p class="paragraph">
          Zainteresowane osoby prosimy o przesłanie CV wraz z listem
          motywacyjnym na adres:
        </p>
        <p class="paragraph">praca@simple.com.pl</p>
        <p class="hover">
          <a href="#">Zobacz nasze oferty...</a>
        </p>
      </div>
    </div>
    <hr class="header-line-footer" />
    <p class="back-to-top hover"><a href="#">Powrót na górę strony</a></p>
  </footer>
</template>

<script src="@/data/FooterScript.js"></script>
<style src="@/styles/FooterStyle.css"></style>
