import AppCarousel from "@/components/AppCarousel.vue";

export default {
  name: "MainFooter",
  components: { AppCarousel },
  data() {
    return {
      notice: "",
      offices: [
        {
          name: "SIMPLE S.A.",
          lines: [
            { text: "ul. Bronisława Czecha 49/51", gap: true },
            { text: "04-555 Warszawa" },
            { text: "tel.: (22) 812-58-98", gap: true },
            { text: "fax.: (22) 815-49-83" },
            { text: "simple@simple.com.pl", gap: true },
          ],
        },
        {
          name: "SIMPLE S.A. - Ośrodek Badawczo-Rozwojowy Lublin",
          lines: [
            { text: "ul. Wolska 11A/4", gap: true },
            { text: "20-411 Lublin" },
            { text: "tel. kom: +48 696 001 286", gap: true },
            { text: "lublin@simple.com.pl", gap: true },
          ],
        },
        {
          name: "SIMPLE S.A. - Oddział Rzeszów",
          lines: [
            { text: "ul. Rejtana 53A", gap: true },
            { text: "35-326 Rzeszów" },
            { text: "tel. kom.: +48 696 001 235", gap: true },
            { text: "fax.: (17) 865 42 41" },
            { text: "rzeszow@simple.com.pl", gap: true },
          ],
        },
      ],
    };
  },
  methods: {
    /*
      This is a demonstration layout with no mail service behind it, so the form says
      so rather than reloading the page and losing what was typed.
    */
    sendQuestion() {
      this.notice = "To wersja demonstracyjna: wiadomość nie została wysłana.";
    },
  },
};
