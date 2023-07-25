import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import * as Pages from "./pages";
import App from "./App.vue";

createApp(App)
  .use(
    createRouter({
      history: createWebHashHistory(),
      routes: [{ path: "/", component: Pages.HomePage }],
    })
  )
  .mount("#app");
