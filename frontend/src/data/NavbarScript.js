export default {
  name: "Navbar",
  data() {
    return {
      showSearch: false,
    };
  },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
  },
};
