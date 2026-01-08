import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";

import { lazyImagPlugin } from "@/directive/index";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(lazyImagPlugin);

app.mount("#app");
