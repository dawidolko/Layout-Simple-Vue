export default {
  name: "MainSidebar",
  data() {
    return {
      /*
        Null means the visitor has not chosen yet. The stylesheet then decides from the
        screen width, so the prerendered page is right before any script has run.
      */
      isCollapsed: null,
    };
  },
  methods: {
    toggleSidebar() {
      const shownNow =
        this.isCollapsed === null
          ? window.matchMedia("(min-width: 1251px)").matches
          : !this.isCollapsed;
      this.isCollapsed = shownNow;
    },
  },
};
