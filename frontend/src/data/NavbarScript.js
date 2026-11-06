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
      if (this.showSearch) this.$nextTick(() => this.$refs.search.focus());
    },
  },
};
