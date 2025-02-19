export default {
  name: "MainBranze",
  data() {
    return {
      industries: [
        { name: "EDUKACJA", image: require("@/assets/branze1.png") },
        {
          name: "TRANSPORT & LOGISTYKA",
          image: require("@/assets/branze2.png"),
        },
        { name: "PRODUKCJA", image: require("@/assets/branze3.png") },
        { name: "BUDOWNICTWO", image: require("@/assets/branze4.png") },
        { name: "INSTYTUTY", image: require("@/assets/branze5.png") },
        { name: "MEDYCYNA", image: require("@/assets/branze6.png") },
        { name: "HANDEL", image: require("@/assets/branze7.webp") },
        { name: "MSP", image: require("@/assets/branze8.png") },
        {
          name: "ADMINISTRACJA PUBLICZNA",
          image: require("@/assets/branze9.jpeg"),
        },
      ],
      textBoxes: [
        "SIMPLE to znak rozpoznawczy szerokiej rodziny rozwiązań informatycznych wspomagających zarządzanie obszarami: finansów, obrotu towarowego, personelu, procesu budownictwa, produkcji, łańcucha dostaw czy relacji z klientami. Od ponad 24 lat dostarczamy wyspecjalizowane usługi integracji rozwiązań informatycznych i",
        "doradztwa biznesowego. Nasze produkty i usługi znalazły uznanie ponad 3500 klientów. Jesteśmy ludźmi, którzy doskonale znają Twój biznes. Opierając się na naszym doświadczeniu proponujemy rozwiązania, które powstały w oparciu o ",
        "wiedzę zatrudnianych przez nas ekspertów, a które generalnie podnoszą rangę prowadzonych procesów biznesowych i spełniają specyficzne wymagania przedsiębiorstw poszczególnych branż, zapewniając możliwość odniesienia sukcesu w coraz silniej konkurencyjnym otoczeniu.",
      ],
    };
  },
};
