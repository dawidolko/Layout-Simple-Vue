export default {
  name: "MainFooter",
  data() {
    return {
      contactIndex: 0,
    };
  },
  methods: {
    nextContactSlide() {
      this.contactIndex = (this.contactIndex + 1) % 3;
    },
    prevContactSlide() {
      this.contactIndex = (this.contactIndex - 1 + 3) % 3;
    },
  },
};
