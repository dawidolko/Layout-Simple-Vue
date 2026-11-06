import { createApp } from "vue";
import App from "./App.vue";
import "../public/styles/global.css";
const app = createApp(App);
/*
  Waiting one frame lets the HTML in the first response paint before the application
  replaces it. A tab opened in the background has no frames, so it mounts at once.
*/
const mount = () => app.mount("#app");

if (document.hidden) mount();
else requestAnimationFrame(() => setTimeout(mount));
